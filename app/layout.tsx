import type { Metadata } from "next";
import "./globals.css";

const sharedDescription = "A front for fathers building families, businesses, and futures through the battles meant to break them.";
const sharedTitle = "Fathers Front - Born in Blood. Forged in Fire.";
const sharedImage = "/assets/social/fathers-front-social-share.jpg";

export const metadata: Metadata = {
  metadataBase: new URL("https://fathersfront.com"),
  title: { default: sharedTitle, template: "%s | Fathers Front" },
  description: sharedDescription,
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Fathers Front",
    title: sharedTitle,
    description: sharedDescription,
    images: [
      {
        url: sharedImage,
        width: 1200,
        height: 630,
        alt: sharedTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: sharedTitle,
    description: sharedDescription,
    images: [sharedImage],
  },
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
