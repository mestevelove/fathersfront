import { ProductDetail } from "../components/ProductDetail";

export default function FamilyLawfarePage() {
  return (
    <ProductDetail
      type="Book · Field Guide"
      status="Coming soon"
      title={<>Family<br />Lawfare</>}
      deck="Protect your bloodline, your rights, and your future when the courts enter your family."
      description="A practical field guide for fathers navigating custody, child support, allegations, high-conflict litigation, and the systems surrounding family court."
      cta="Buy Family Lawfare"
      ctaHref="#"
      ctaModal={{
        eyebrow: "Release notification",
        title: "Know when",
        accent: "Family Lawfare drops.",
        description: "Be the first to know when Family Lawfare is available. Enter your name and email and I will tell you when the field manual is ready.",
        submitLabel: "Notify Me When It Drops",
        tag: "family-lawfare-waitlist",
        successMessage: "You're on the list",
      }}
      image="/assets/family-lawfare-cover.webp"
      imageAlt="Family Lawfare book cover"
      details={[
        {
          number: "01",
          title: "Fight smart",
          copy: "Understand the difference between emotional truth and admissible proof. Build a disciplined record, communicate strategically, and stop allowing the conflict to choose your behavior.",
        },
        {
          number: "02",
          title: "Protect the bloodline",
          copy: "The objective is larger than winning an argument. It is preserving your relationship with your children, your capacity to lead, and the assets and opportunities that make rebuilding possible.",
        },
      ]}
      nextHref="/stolen-sons"
      nextLabel="Read about Stolen Sons"
    />
  );
}
