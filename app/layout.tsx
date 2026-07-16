import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Fathers Front — Born in Blood. Forged in Fire.", template: "%s | Fathers Front" },
  description: "A front for fathers building families, businesses, and futures through the battles meant to break them.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-theme="dark"><body>{children}</body></html>;
}
