const pillars = [
  ["01", "Leadership", "Protect the business, income, team, and decision-making capacity that fund the fight and support the future you are building for your children."],
  ["02", "Lifestyle", "Build the strength, sleep, health, energy, and daily discipline required to carry sustained pressure without abandoning yourself."],
  ["03", "Law", "Understand the battlefield, build the record, prepare the case, and work intelligently with attorneys or pro se instead of reacting blindly to the court."],
  ["04", "Love", "Protect the bond with your children, communicate without feeding the conflict, and rebuild what separation, alienation, or litigation has damaged."],
];

export function FourFronts({ subtle = false, detailed = false }: { subtle?: boolean; detailed?: boolean }) {
  return <section className={subtle ? "pillars pillars-cross pillars-cross-subtle" : "pillars pillars-cross"}>
    <div className="shell pillars-cross-shell">
      <div className="pillars-cross-heading">
        <p className="section-kicker pillars-cross-kicker">The framework</p>
        {subtle ? <h2 className="pillars-cross-intro"><span>One Framework.</span></h2> : <h2 className="pillars-cross-intro">The court case is one front.<br /><em>The whole life enters it.</em></h2>}
      </div>
      <div className="pillars-cross-grid">
        {pillars.map(([number, title, copy]) => <article className="pillar" key={title}>
          <span className="pillar-number">{number}</span><h3>{title}</h3><p>{copy}{detailed && title === "Law" && <> Court cases are won by building leverage and forcing the opposing party to do what they don’t want to do.</>}{detailed && title === "Love" && <> Do the deep healing work to understand your part in why the relationship failed in the first place.</>}</p>
        </article>)}
        {!subtle && <h2 className="pillars-cross-center"><span>Four Fronts{detailed ? "." : ""}</span><span>One Father{detailed ? "." : ""}</span></h2>}
      </div>
    </div>
  </section>;
}
