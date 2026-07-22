import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import styles from "../articles/article-styles.module.css";
import { Footer } from "../components/Footer";
import { FourFronts } from "../components/FourFronts";
import { Header } from "../components/Header";

export const metadata: Metadata = {
  title: "The Four Fronts | Fathers Front",
  description: "The Four Fronts show fathers where pressure is landing, how each part of life affects the others, and what to lead next.",
};

const forYou = ["Want more than another place to complain", "Are willing to understand their case and participate in the strategy", "Want to become less reactive and more effective", "Know the fight has affected their health, income, relationships, and future", "Are willing to examine their own decisions and take radical responsibility", "Want to rebuild a meaningful relationship with their children", "Are ready to fight, fortify, or forge from wherever they are now"];
const notForYou = ["Only want validation that everyone else is wrong", "Want someone else to take responsibility for their case or life", "Refuse to examine their own behavior and decisions", "Want guaranteed legal outcomes", "Expect coaching to replace an attorney", "Are unwilling to act between calls", "Want to use their children as weapons in the conflict", "Blame their failures on the courts, their ex, or the laws"];
const command = ["Understanding the facts and priorities", "Knowing what you can and cannot control", "Responding instead of reacting", "Using professionals without surrendering your leadership", "Protecting your relationship with your children", "Rebuilding your body, income, confidence, and life", "Creating a future that is no longer organized around the conflict"];

function Section({ title, children }: { title: string; children: ReactNode }) {
  return <section><h2>{title}</h2><br />{children}</section>;
}

function List({ items }: { items: string[] }) {
  return <ul className="framework-plain-list">{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}

function NumberedList({ items }: { items: string[] }) {
  return <ol className="framework-plain-list framework-numbered-list">{items.map((item) => <li key={item}>{item}</li>)}</ol>;
}

export default function FrameworkPage() {
  return <main className={`${styles.articlePage} ${styles.v01} framework-article`}>
    <Header />
    <article>
      <header className={`${styles.articleHero} framework-article-header`}><div className={`${styles.heroInner} framework-article-header-inner`}>
        <p className="section-kicker work-page-kicker">The Framework</p>
        <div className="framework-article-header-copy">
        <h1>One Father.<br />Four Fronts.</h1>
        <p className={`${styles.deck} framework-article-subtitle work-page-deck`}>Family court may be where the fight starts. It does not stay there.</p>
        <p className="framework-article-hero-copy">It moves into your relationship with your kids, your decisions, your money, your body, and the future you are trying to build.</p>
        <p className="framework-article-hero-copy">The Four Fronts show you where the pressure is landing, how each part of your life affects the others, and what you need to lead next.</p>
        </div>
      </div></header>

      <FourFronts subtle detailed />

      <div className={`${styles.articleBody} framework-article-body`}>
        <div className={`${styles.story} framework-article-story`}>
          <div className="framework-diagram-close">
            <p>The Four Fronts are not four separate problems.</p><p>Pressure on one front affects the other three.</p><p>There are Three Stages of Strength:</p>
            <NumberedList items={["Fight for your fatherhood", "Fortify your foundation", "Forge your family’s future"]} />
          </div>
          <Section title="Who I Help"><p>I work with fathers whose lives have been affected by divorce, custody conflict, separation from their children, or the damage that follows.</p><p>These are fathers who:</p><List items={forYou} /></Section>
          <Section title="Who This Work Is Not For"><p>This work is not for fathers who:</p><List items={notForYou} /></Section>
          <Section title="What Taking Command Actually Means Here"><p>Taking command does not mean controlling your ex, the court, the judge, or the outcome.</p><p>It means:</p><List items={command} /></Section>
          <Section title="What Makes Fathers Front Different"><p>Most forms of support address one part of the problem.</p><p>Attorneys handle the legal case.</p><p>Therapists address emotional and mental health.</p><p>Men’s groups provide emotional support and accountability.</p><p>Business coaches help restore income and momentum.</p><p>But fathers do not experience these problems separately.</p><p>All four collide inside one man during one of the most devastating experiences a father can face.</p><p>The case affects your nervous system.</p><p>Your nervous system affects your decisions.</p><p>Your decisions affect your children.</p><p>Your finances affect how long you can remain in the fight.</p><p>Fathers Front connects all four fronts.</p></Section>
          <Section title="Where to Go Next"><p>You do not have to face all four fronts alone.</p><div className="framework-simple-actions"><Link className="button ember" href="/work-with-steve">Work With Steve</Link></div></Section>
          <aside className={`${styles.disclaimer} framework-disclaimer`}><strong>Important:</strong> Fathers Front and Steve Love provide coaching and general educational information, not legal representation or legal, tax, financial, medical, or therapeutic advice. Fathers Front is not a law firm, and no attorney-client relationship is created by this website, its content, or any coaching or advisory engagement. Decisions are fact-specific; consult qualified professionals familiar with your circumstances.</aside>
        </div>
      </div>
    </article>
    <Footer />
  </main>;
}
