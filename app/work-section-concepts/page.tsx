import Link from "next/link";

const offers = [
  { label: "Group program", title: "Bloodline Brotherhood", copy: "A private group coaching environment for men building across Leadership, Legacy, Law, and Love.", price: "$497", cadence: "/ month", cta: "Join the waitlist", note: "Founding cohort opening soon." },
  { label: "Private advisory", title: "Bloodline Advisory", copy: "For high-net-worth founders, seven-figure entrepreneurs, business owners, and senior leaders navigating consequential battles.", price: "$247", cadence: "45-minute call", cta: "Book a strategy call", note: "Private engagements begin at $15,000." },
];

function Offer({ offer }: { offer: typeof offers[number] }) {
  return <article className="wsc-card">
    <span className="wsc-label">{offer.label}</span><h3>{offer.title}</h3><p>{offer.copy}</p>
    <div className="wsc-price"><strong>{offer.price}</strong><span>{offer.cadence}</span></div>
    <button>{offer.cta}</button><small>{offer.note}</small>
  </article>;
}

const concepts = [
  { id:"01", cls:"wsc-command", name:"Command Table", copy:"Architectural framing and restrained oxblood accents. The offers feel like two divisions of one serious advisory practice." },
  { id:"02", cls:"wsc-dossier", name:"The Dossier", copy:"Editorial case-file structure with numbered records, fine rules, and high-contrast typographic hierarchy." },
  { id:"03", cls:"wsc-forge", name:"The Forge", copy:"A near-black field with warm cream type and ember light used sparingly as heat—not as the dominant color." },
  { id:"04", cls:"wsc-monument", name:"The Monument", copy:"Large-scale typography, disciplined whitespace, and a centered selection moment designed to feel premium and inevitable." },
];

export default function WorkSectionConcepts() {
  return <main className="wsc-page">
    <header className="wsc-intro"><span>Design review · Work With Steve</span><h1>Four dark directions.</h1><p>Same offers. Four treatments aligned with the authority, restraint, and antique editorial character of the homepage hero.</p></header>
    {concepts.map((concept) => <section className={`wsc-concept ${concept.cls}`} key={concept.id}>
      <div className="wsc-concept-head"><span>{concept.id}</span><div><h2>{concept.name}</h2><p>{concept.copy}</p></div></div>
      <div className="wsc-offers">{offers.map((offer) => <Offer offer={offer} key={offer.title}/>)}</div>
    </section>)}
    <Link className="wsc-back" href="/">← Return home</Link>
  </main>;
}
