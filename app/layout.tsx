import type { Metadata } from "next";
import "./globals.css";
import { DispatchPopup } from "./components/EmailCaptureModal";

const sharedDescription = "A front for fathers building families, businesses, and futures through the battles meant to break them.";
const sharedTitle = "Fathers Front | Fight for Your Fatherhood";
const sharedImage = "/assets/social/fathers-front-social-share.jpg";

export const metadata: Metadata = {
  metadataBase: new URL("https://fathersfront.com"),
  title: { default: sharedTitle, template: "%s | Fathers Front" },
  description: sharedDescription,
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
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
    <body>{children}<DispatchPopup /></body>
  </html>;
}
