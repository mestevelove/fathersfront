import type { Metadata } from "next";
import Script from "next/script";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: "Speaking Inquiry",
  description: "Tell us about your audience and check Steve Love's speaking availability.",
};

const tallyEmbedUrl =
  "https://tally.so/embed/vGVjOd?alignLeft=1&hideTitle=0&transparentBackground=1&dynamicHeight=1";

export default function SpeakingInquiryPage() {
  return (
    <main>
      <Header />
      <section className="page-identifier cream-section">
        <div className="shell">
          <p className="section-kicker">Speaking Inquiry</p>
        </div>
      </section>
      <section className="speaking-inquiry cream-section">
        <div className="speaking-inquiry-inner">
          <iframe
            data-tally-src={tallyEmbedUrl}
            src={tallyEmbedUrl}
            loading="lazy"
            width="100%"
            height="1800"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Book Steve to Speak"
          />
        </div>
      </section>
      <Footer />
      <Script src="https://tally.so/widgets/embed.js" strategy="afterInteractive" />
    </main>
  );
}
