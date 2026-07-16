import Link from "next/link";
import { Header } from "./Header";
import { Footer } from "./Footer";

type Detail = { number: string; title: string; copy: string };

type ProductDetailProps = {
  type: string;
  status: string;
  title: React.ReactNode;
  deck: string;
  description: string;
  cta: string;
  ctaHref: string;
  image?: string;
  imageAlt?: string;
  productMark?: { eyebrow: string; name: string; price: string };
  markTone?: "ink" | "oxblood";
  details: Detail[];
  nextHref: string;
  nextLabel: string;
};

export function ProductDetail(props: ProductDetailProps) {
  return <main>
    <Header />
    <section className="page-identifier cream-section"><div className="shell"><p className="section-kicker">{props.type}</p></div></section>
    <section className="product-detail cream-section">
      <div className="shell product-detail-hero">
        <div className="product-detail-visual">
          {props.image
            ? <img src={props.image} alt={props.imageAlt || ""} />
            : <div className={`product-service-mark product-service-mark-${props.markTone || "ink"}`}><span>{props.productMark?.eyebrow}</span><strong>{props.productMark?.name}</strong><b>{props.productMark?.price}</b></div>}
        </div>
        <div className="product-detail-copy">
          <span className="product-status">{props.status}</span>
          <h1>{props.title}</h1>
          <p className="product-detail-deck">{props.deck}</p>
          <p>{props.description}</p>
          <a className="button ember" href={props.ctaHref}>{props.cta}</a>
        </div>
      </div>
      <div className={`shell product-detail-sections product-detail-sections-${props.details.length}`}>
        {props.details.map((detail) => <article key={detail.number}><span>{detail.number}</span><h2>{detail.title}</h2><p>{detail.copy}</p></article>)}
      </div>
      <div className="shell product-next"><Link href={props.nextHref}>{props.nextLabel} →</Link></div>
    </section>
    <Footer />
  </main>;
}
