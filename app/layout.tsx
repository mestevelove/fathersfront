import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Fathers Front — Born in Blood. Forged in Fire.", template: "%s | Fathers Front" },
  description: "A front for fathers building families, businesses, and futures through the battles meant to break them.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-theme="dark">
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,500;0,600;0,700;0,800;1,600&family=Libre+Franklin:wght@400;500;600&family=Source+Serif+4:ital,wght@1,600&display=swap" rel="stylesheet" />
    </head>
    <body>{children}</body>
  </html>;
}
