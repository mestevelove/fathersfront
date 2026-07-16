export type Article = {
  slug: string;
  pillar: "Law" | "Love" | "Leadership" | "Lifestyle";
  title: string;
  deck: string;
  readTime: string;
  lede: string;
  quote: string;
  pull?: string;
  sections: { heading: string; body: string }[];
};

export const articles: Article[] = [
  {
    slug: "discipline-before-reaction-family-court",
    pillar: "Law",
    title: "When Your Child Crosses a Border",
    deck: "A father’s field guide to the Hague Convention return process—and the discipline required when family conflict becomes international litigation.",
    readTime: "12 minute read",
    lede: "When a child is taken across an international border, a father’s first instinct is often to argue the entire history of the family. The Hague Convention asks a narrower question: where should the custody fight happen?",
    quote: "The return case is about jurisdiction and restoration—not a final custody award.",
    pull: "ACT EARLY.\nBUILD QUIETLY.\nDOCUMENT EVERYTHING.",
    sections: [
      { heading: "What the Convention actually decides", body: "A Hague return case is generally not a custody trial. The court is usually deciding whether a child was wrongfully removed from, or retained outside, the child’s country of habitual residence—and, if so, whether the child should be returned so custody can be decided there. That distinction changes everything. A parent can have powerful custody arguments and still lose focus if those arguments do not answer the return question before the court." },
      { heading: "The questions that shape the case", body: "The analysis commonly turns on the child’s habitual residence immediately before the alleged removal or retention, whether the left-behind parent held and was actually exercising custody rights, and whether the removal breached those rights. Dates, travel permissions, school records, messages, parenting routines, immigration documents, and prior agreements may all become part of the factual record." },
      { heading: "Why speed and discipline matter", body: "The Convention is built around prompt proceedings. Delay can change the practical and legal landscape, especially after a child has been in the new country for a year. Early action is not the same as frantic action. Preserve evidence, build a reliable chronology, understand the forum, and speak with qualified counsel before sending emotional messages that may later be read in court." },
      { heading: "Defenses are narrow—not casual escape hatches", body: "The Convention recognizes limited exceptions, including consent or acquiescence, grave risk of harm, a mature child’s objection, and—in some cases—settlement after more than one year. Courts often construe these exceptions carefully because the proceeding is designed to determine forum, not to reward unilateral relocation. Their availability depends on specific facts and governing law." },
      { heading: "Build the record before you build the argument", body: "Start with a dated timeline that separates what you know from what you assume. Preserve original messages and metadata. Identify neutral witnesses. Gather documents showing where the child lived, went to school, received medical care, and participated in community life. Record the parenting arrangement and any travel consent precisely. Credibility is an asset; exaggeration spends it." },
      { heading: "The father’s task", body: "International family litigation invites panic, rage, and public performance. None of those substitutes for a clean record. Your job is to remain present, document reality, protect the child from the conflict where possible, and make each decision as though it will be projected on a courtroom wall. The strongest posture is not passivity. It is controlled force." },
    ],
  },
  {
    slug: "lead-your-woman-without-losing-yourself",
    pillar: "Love",
    title: "Love Is Not Surrendering Yourself to Keep the Peace.",
    deck: "Strength, devotion, boundaries, and the work of remaining present when intimacy becomes difficult.",
    readTime: "7 minute read",
    lede: "A man can preserve the appearance of peace while slowly abandoning everything true inside him. That is not love. It is fear wearing the language of devotion.",
    quote: "Love requires presence without self-erasure.",
    sections: [
      { heading: "Presence is stronger than performance", body: "A man cannot lead his woman by managing her perception of him. Real intimacy begins when performance ends and he can tell the truth without using truth as a weapon." },
      { heading: "Boundaries protect devotion", body: "A boundary is not punishment or withdrawal. It defines what you will participate in, what you will protect, and what kind of relationship you are committed to building." },
      { heading: "Stay when pressure rises", body: "Leadership in love is the capacity to remain grounded during conflict. Listen without collapsing, speak without dominating, and refuse both abandonment and self-erasure." },
    ],
  },
  {
    slug: "build-while-your-life-is-burning",
    pillar: "Leadership",
    title: "Your Business Cannot Wait for Your Life to Become Easy.",
    deck: "A field guide for founders leading teams, protecting revenue, and making decisions during private battles.",
    readTime: "9 minute read",
    lede: "The business does not pause because your private life is on fire. Payroll, clients, decisions, and the people depending on your leadership continue to arrive.",
    quote: "Your team needs your leadership—not unrestricted access to your chaos.",
    sections: [
      { heading: "Separate the battlefields", body: "Your team needs honesty, but it does not need to inherit your chaos. Decide what the business must know, what belongs with trusted advisors, and what must remain outside the room." },
      { heading: "Protect decision quality", body: "Under sustained pressure, urgency begins impersonating importance. Create a deliberate cadence for reviewing cash, people, commitments, and risks so consequential decisions are not made inside emotional spikes." },
      { heading: "Keep building capacity", body: "The objective is not heroic endurance. It is a company that can continue without requiring your nervous system to carry every function. Document, delegate, and strengthen the leaders around you." },
    ],
  },
  {
    slug: "protect-what-you-build",
    pillar: "Lifestyle",
    title: "Wealth Without Structure Is an Invitation to the System.",
    deck: "Why fathers must think beyond income and build durable structures around family, ownership, and freedom.",
    readTime: "8 minute read",
    lede: "Most men begin thinking about protection after the threat appears. By then, many of the best options are more expensive, more difficult, or no longer available.",
    quote: "What you build is not protected merely because you earned it.",
    sections: [
      { heading: "Income is not protection", body: "A high income can disappear through taxes, litigation, support orders, poor ownership structures, and a family that was never taught how to steward what was built." },
      { heading: "Structure before crisis", body: "Entity planning, jurisdiction, succession, insurance, custody strategy, and international options are most useful before the emergency. Build with qualified legal and tax professionals while choices remain available." },
      { heading: "Transfer judgment, not only assets", body: "The final inheritance is not money. It is the capacity of your children to understand responsibility, sovereignty, family loyalty, and the cost required to preserve what matters." },
    ],
  },
];

export const getArticle = (slug: string) => articles.find((article) => article.slug === slug);
