const pillars = [
  ["01", "Love", "Lead your woman and family with strength, truth, devotion, and the capacity to remain present when pressure rises."],
  ["02", "Law", "Navigate custody, child support, family court, and the systems surrounding them with discipline instead of reaction."],
  ["03", "Leadership", "Grow your business, team, revenue, and capacity to lead when your private life and professional life collide."],
  ["04", "Legacy", "Protect what you build, preserve wealth, and create structures that keep your family out of systems designed to consume it."],
];

function Intro({ number, name, description }: { number: string; name: string; description: string }) {
  return <div className="pc-intro"><span>{number}</span><div><b>{name}</b><p>{description}</p></div></div>;
}

export default function PillarConcepts() {
  return <main className="pillar-concepts">
    <header className="pc-page-head"><span>Fathers Front / Design Study</span><h1>THE FOUR<br/>FRONTS.</h1><p>Four directions for the Law · Love · Leadership · Legacy framework.</p></header>

    <section className="pc-option pc-ledger">
      <Intro number="01" name="THE FIELD LEDGER" description="Rigid, documentary and institutional—like a case file crossed with a broadsheet." />
      <div className="pc-ledger-grid">
        {pillars.map(([n,title,copy]) => <article key={title}><span>{n} / IV</span><h2>{title}</h2><p>{copy}</p><b>THE {title.toUpperCase()} FRONT</b></article>)}
      </div>
    </section>

    <section className="pc-option pc-manifesto">
      <Intro number="02" name="THE MANIFESTO" description="One continuous declaration with oversized typography and strong editorial rhythm." />
      <div className="pc-manifesto-body">
        <p className="pc-vertical">THE FRAMEWORK</p>
        <div>{pillars.map(([n,title,copy]) => <article key={title}><span>{n}</span><h2>{title}<i>.</i></h2><p>{copy}</p></article>)}</div>
      </div>
    </section>

    <section className="pc-option pc-quadrants">
      <Intro number="03" name="THE FOUR QUADRANTS" description="A heraldic, architectural composition with each front holding equal weight." />
      <div className="pc-quadrant-grid">
        {pillars.map(([n,title,copy]) => <article key={title}><span>{n}</span><h2>{title}</h2><p>{copy}</p></article>)}
        <div className="pc-center-mark">IV</div>
      </div>
    </section>

    <section className="pc-option pc-staircase">
      <Intro number="04" name="THE ASCENT" description="A progressive sequence that frames the pillars as one path, not four separate products." />
      <div className="pc-stair-list">
        {pillars.map(([n,title,copy],i) => <article key={title} style={{"--step":i} as React.CSSProperties}><span>{n}</span><h2>{title}</h2><p>{copy}</p></article>)}
      </div>
    </section>
  </main>;
}
