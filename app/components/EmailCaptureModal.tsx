"use client";

import { FormEvent, useEffect, useId, useRef, useState } from "react";

type CaptureTag = "dispatch";
type CaptureStatus = "idle" | "submitting" | "success" | "error";

type CaptureCopy = {
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
  submitLabel: string;
  tag: CaptureTag;
  successMessage: string;
};

type EmailModalButtonProps = CaptureCopy & {
  className?: string;
  label: string;
};

function CaptureForm({
  copy,
  onSuccess,
}: {
  copy: CaptureCopy;
  onSuccess?: () => void;
}) {
  const [status, setStatus] = useState<CaptureStatus>("idle");
  const formId = useId();

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const endpoint = window.location.hostname === "localhost"
      ? "http://localhost:8787/api/dispatch"
      : "/api/dispatch";

    setStatus("submitting");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data.get("firstName"),
          email: data.get("email"),
          website: data.get("website"),
          tag: copy.tag,
        }),
      });

      if (!response.ok) throw new Error("Subscription failed");
      form.reset();
      setStatus("success");
      onSuccess?.();
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <p className="capture-modal-kicker">{copy.eyebrow}</p>
      <h2 id={`${formId}-title`}>
        {copy.title}<br />
        <em>{copy.accent}</em>
      </h2>
      <p className="capture-modal-description">{copy.description}</p>
      <form className="capture-modal-form" onSubmit={submit}>
        <label className="sr-only" htmlFor={`${formId}-first-name`}>First name</label>
        <input
          id={`${formId}-first-name`}
          name="firstName"
          type="text"
          autoComplete="given-name"
          placeholder="First name"
          disabled={status === "success"}
        />
        <label className="sr-only" htmlFor={`${formId}-email`}>Email address</label>
        <input
          id={`${formId}-email`}
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Email address"
          required
          disabled={status === "success"}
        />
        <div className="capture-modal-honeypot" aria-hidden="true">
          <label htmlFor={`${formId}-website`}>Website</label>
          <input id={`${formId}-website`} name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>
        <button type="submit" disabled={status === "submitting" || status === "success"}>
          {status === "submitting"
            ? "Sending..."
            : status === "success"
              ? copy.successMessage
              : copy.submitLabel}
        </button>
      </form>
      <p className={`capture-modal-status${status === "error" ? " is-error" : ""}`} role="status" aria-live="polite">
        {status === "error" ? "Something went wrong. Please try again." : ""}
      </p>
    </>
  );
}

function CaptureDialog({
  copy,
  open,
  onClose,
  onSuccess,
}: {
  copy: CaptureCopy;
  open: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const headingId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.documentElement.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const close = () => onClose();
    dialog.addEventListener("close", close);
    return () => dialog.removeEventListener("close", close);
  }, [onClose]);

  return (
    <dialog
      ref={dialogRef}
      className="capture-modal"
      aria-labelledby={headingId}
      onClick={(event) => {
        if (event.target === dialogRef.current) onClose();
      }}
    >
      <div className="capture-modal-panel">
        <button className="capture-modal-close" type="button" onClick={onClose} aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
        <div aria-labelledby={headingId}>
          <span className="sr-only" id={headingId}>{copy.title} {copy.accent}</span>
          <CaptureForm copy={copy} onSuccess={onSuccess} />
        </div>
      </div>
    </dialog>
  );
}

export function EmailModalButton({
  className,
  label,
  ...copy
}: EmailModalButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className={className} type="button" onClick={() => setOpen(true)}>{label}</button>
      <CaptureDialog copy={copy} open={open} onClose={() => setOpen(false)} />
    </>
  );
}

const dispatchCopy: CaptureCopy = {
  eyebrow: "Weekly field note",
  title: "The Fathers Front",
  accent: "Dispatch",
  description: "A weekly field note for fathers and builders under pressure. No noise. No empty motivation. Just something useful for the fight and the life that follows.",
  submitLabel: "Join the Dispatch",
  tag: "dispatch",
  successMessage: "Received — Welcome to the Front",
};

export function DispatchPopup() {
  const [open, setOpen] = useState(false);
  const [eligible, setEligible] = useState(false);

  useEffect(() => {
    const preview = new URLSearchParams(window.location.search).has("dispatch-preview");
    const dismissedAt = Number(window.localStorage.getItem("ff-dispatch-popup-dismissed") || 0);
    const cooldownExpired = Date.now() - dismissedAt > 14 * 24 * 60 * 60 * 1000;
    if (!preview && !cooldownExpired) return;

    setEligible(true);
    if (preview) {
      setOpen(true);
      return;
    }

    const timer = window.setTimeout(() => setOpen(true), 45000);
    const onScroll = () => {
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (pageHeight > 0 && window.scrollY / pageHeight >= 0.65) setOpen(true);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  if (!eligible) return null;

  function dismiss() {
    window.localStorage.setItem("ff-dispatch-popup-dismissed", String(Date.now()));
    setOpen(false);
    setEligible(false);
  }

  return <CaptureDialog copy={dispatchCopy} open={open} onClose={dismiss} onSuccess={dismiss} />;
}
