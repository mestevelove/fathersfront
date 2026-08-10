import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import test from "node:test";

const outputRoot = new URL("../out/", import.meta.url);
const sourceRoot = new URL("../", import.meta.url);

test("keeps Family Lawfare checkout quantity styling scoped and edition-free", async () => {
  const code = await readFile(
    new URL("portal/pages/family-lawfare/complete-head-code.txt", sourceRoot),
    "utf8",
  );

  assert.match(code, /\.ff-fl-quantity-control/);
  assert.match(code, /document\.getElementById\("row-8891df19"\)/);
  assert.match(code, /\["-", "\+"\]/);
  assert.doesNotMatch(code, /edition=standard|edition=signed|ff-ss-edition-control/);
});

test("exports a complete static homepage", async () => {
  const html = await readFile(new URL("index.html", outputRoot), "utf8");

  assert.match(html, /Fight for your fatherhood\./);
  assert.match(html, /Fortify your foundation\./);
  assert.match(html, /Forge your family’s future\./);
  assert.doesNotMatch(html, /Fathers are being erased/);
  assert.doesNotMatch(html, /Love\. Law\. Leadership\. Lifestyle\./);
  assert.match(html, /The Foundation/);
  assert.match(html, /father erasure, abduction and international custody litigation/);
  assert.match(html, /Fathers Front \| Fight for Your Fatherhood/);
  assert.match(html, /property="og:image" content="https:\/\/fathersfront\.com\/assets\/social\/fathers-front-social-share\.jpg"/);
  assert.match(html, /name="twitter:card" content="summary_large_image"/);
  assert.match(html, /href="\/favicon\.svg"/);
  assert.match(html, /href="\/apple-touch-icon\.png"/);
  assert.match(html, /Menu · V\.90/);
  assert.match(html, /Born in/);
  assert.match(html, /Blood\./);
  assert.match(html, /Forged in <em>Fire\.<\/em>/);
  assert.match(html, /Fathers Front builds disciplined, powerful fathers/);
  assert.match(html, /Leadership/);
  assert.match(html, /Lifestyle/);
  assert.match(html, /Law/);
  assert.match(html, /Love/);
  assert.match(html, /The Fathers Front Dispatch/);
  assert.match(html, /A weekly field note for fathers and builders under pressure\./);
  assert.match(html, /footer-dispatch-form/);
  assert.match(html, /First name/);
  assert.match(html, /Email address/);
  assert.doesNotMatch(html, /Born in Blood\.<br\/?><em>Forged in Fire\.<\/em>/);
});

test("uses the secure Dispatch subscription endpoint", async () => {
  const footerSource = await readFile(new URL("../app/components/Footer.tsx", import.meta.url), "utf8");

  assert.match(footerSource, /\/api\/dispatch/);
  assert.match(footerSource, /Received — Welcome to the Front/);
  assert.doesNotMatch(footerSource, /form-script-tag-24876260/);
  assert.doesNotMatch(footerSource, /systeme\.io\/embedded\/43080160\/subscription/);
});

test("exports the expected site routes", async () => {
  const entries = await readdir(outputRoot);

  for (const route of [
    "articles",
    "about",
    "advisory",
    "brotherhood",
    "donate",
    "family-lawfare",
    "stolen-sons",
    "the-framework",
    "work-with-steve",
  ]) {
    assert.ok(entries.includes(route), `missing exported route: ${route}`);
  }

  for (const removedRoute of [
    "article-concepts",
    "pillar-concepts",
    "pillar-concepts-dark",
    "work-section-concepts",
  ]) {
    assert.ok(!entries.includes(removedRoute), `unexpected concept route: ${removedRoute}`);
  }
});

test("exports the GoFundMe donate page", async () => {
  const donate = await readFile(new URL("donate/index.html", outputRoot), "utf8");

  assert.match(donate, /Help Me Bring/);
  assert.match(donate, /My Son Home\./);
  assert.match(donate, /class="gfm-embed-iframe"/);
  assert.match(donate, /aria-label="Primary navigation"/);
  assert.match(donate, /The Fathers Front Dispatch/);
  assert.match(donate, /height="620"/);
  assert.match(donate, /help-me-bring-my-son-ori-home-from-germany/);
  assert.match(donate, /widget\/large\?attribution_id=/);
});

test("uses Donate in shared navigation while keeping Articles available", async () => {
  const home = await readFile(new URL("index.html", outputRoot), "utf8");
  const articles = await readFile(new URL("articles/index.html", outputRoot), "utf8");

  assert.match(home, /href="\/donate\/?"[^>]*>Donate</);
  assert.match(home, /Site version 90/);
  assert.match(home, /V\.90/);
  assert.match(articles, /Articles/);
});

test("exports optimized book cover assets", async () => {
  const homepage = await readFile(new URL("index.html", outputRoot), "utf8");
  const books = await readFile(new URL("books/index.html", outputRoot), "utf8");
  const familyLawfare = await readFile(new URL("family-lawfare/index.html", outputRoot), "utf8");
  const stolenSons = await readFile(new URL("stolen-sons/index.html", outputRoot), "utf8");

  assert.match(homepage, /family-lawfare-cover\.webp/);
  assert.match(homepage, /stolen-sons-cover\.webp/);
  assert.match(familyLawfare, /family-lawfare-cover\.webp/);
  assert.match(stolenSons, /stolen-sons-cover\.webp/);
  assert.match(stolenSons, /https:\/\/portal\.fathersfront\.com\/stolen-sons\?edition=standard/);
  assert.match(stolenSons, /https:\/\/portal\.fathersfront\.com\/stolen-sons\?edition=signed/);
  assert.match(books, /href="\/stolen-sons\/?">Get the Book<\/a>/);
  assert.match(books, /href="\/family-lawfare\/?">Get the Book<\/a>/);
  assert.match(familyLawfare, /Buy Family Lawfare/);
  assert.match(familyLawfare, /Notify Me When It Drops/);
  assert.match(familyLawfare, /tag\\":\\"dispatch/);
  assert.doesNotMatch(familyLawfare, /family-lawfare-waitlist/);
  assert.doesNotMatch(familyLawfare, /Test Systeme Popup/);
  assert.doesNotMatch(familyLawfare, /form-script-tag-24902650/);
  assert.match(stolenSons, /Choose Your Edition/);
  assert.match(stolenSons, /The Founding Hundred/);
  assert.match(stolenSons, /\$25/);
  assert.match(stolenSons, /\$100/);
  assert.match(homepage, /aria-label="Site version 90"/);
  assert.doesNotMatch(homepage, /family-lawfare\.png|stolen-sons\.png/);
});

test("exports browser cache rules for static assets", async () => {
  const headers = await readFile(new URL("_headers", outputRoot), "utf8");

  assert.match(headers, /\/_next\/static\/\*\s+Cache-Control: public, max-age=31536000, immutable/);
  assert.match(headers, /\/assets\/\*\s+Cache-Control: public, max-age=2592000, stale-while-revalidate=86400/);
  assert.match(headers, /\/fonts\/\*\s+Cache-Control: public, max-age=31536000, immutable/);
});

test("exports the cream editorial About Steve page", async () => {
  const html = await readFile(new URL("about/index.html", outputRoot), "utf8");

  assert.match(html, /About Steve Love/);
  assert.match(html, /I Became a Father Before I Knew How to Be a Man/);
  assert.match(html, /Who Am I on the Other Side of Impossible\?/);
  assert.match(html, /Why I Created Fathers Front/);
  assert.match(html, /This Is the Work/);
  assert.match(html, /In the beginning, I was my own worst liability\. By the end, I would be legally lethal\./);
  for (const image of [
    "about-steve-intro-with-sons-at-court.jpg",
    "about-steve-01-father-at-19.webp",
    "about-steve-02-moment-everything-changed.webp",
    "about-steve-03-first-family-court.webp",
    "about-steve-04-exile-reconstruction.webp",
    "about-steve-05-another-chance-at-fatherhood.webp",
    "about-steve-06-second-time-learned-to-lead.webp",
    "about-steve-07-other-side-of-impossible.webp",
    "about-steve-08-why-i-created-fathers-front.webp",
    "about-steve-09-this-is-the-work.webp",
  ]) {
    assert.match(html, new RegExp(`/assets/about/${image}`));
  }
});

test("exports the Four Fronts framework page", async () => {
  const html = await readFile(new URL("the-framework/index.html", outputRoot), "utf8");

  assert.match(html, /Family court may be where the fight starts\. It does not stay there\./);
  assert.match(html, /Pressure on one front affects the other three\./);
  assert.match(html, /take radical responsibility/);
  assert.match(html, /Four Fronts/);
  assert.match(html, /One Father/);
  assert.match(html, /Leadership/);
  assert.match(html, /Lifestyle/);
  assert.match(html, /Law/);
  assert.match(html, /Love/);
  assert.match(html, /Fathers Front is not a law firm/);
});

test("exports the unlinked article template", async () => {
  const html = await readFile(new URL("template.html", outputRoot), "utf8");
  assert.match(html, /The Fathers Front Dispatch/);
  assert.match(html, /ARTICLE TEMPLATE · V\.80/);
});

test("exports phase one messaging", async () => {
  const home = await readFile(new URL("index.html", outputRoot), "utf8");
  const work = await readFile(new URL("work-with-steve/index.html", outputRoot), "utf8");
  const speaking = await readFile(new URL("speaking/index.html", outputRoot), "utf8");
  const advisory = await readFile(new URL("advisory/index.html", outputRoot), "utf8");
  const brotherhood = await readFile(new URL("brotherhood/index.html", outputRoot), "utf8");

  assert.match(home, /protect their relationship with their children/);
  assert.match(home, /The court case is one front\./);
  assert.doesNotMatch(work, /If you’re a father and made it to this page, there is a reason for it\./);
  assert.match(work, /Fight for Your Fatherhood/);
  assert.match(work, /Fortify Your Foundation/);
  assert.match(work, /Forge Your Family’s Future/);
  assert.match(work, /Family Court Hits Fathers on Four Fronts\./);
  assert.match(work, /Most Are Only Fighting One\./);
  assert.match(work, /Your kids, money, peace, and future depend/);
  assert.match(work, /Three Levels\. One Fight for Your Future\./);
  assert.match(work, /46% custody and was ordered to pay child support/);
  assert.match(work, /They gave mom primary while she was driving drunk with the kids in the car\./);
  assert.doesNotMatch(work, /snorting coke and driving drunk/);
  assert.match(work, /There is another father in the group who needs you\./);
  assert.match(work, /One brotherhood\. Two ways to work with me\./);
  assert.match(work, /Join Brotherhood/);
  assert.match(work, /Group Coaching/);
  assert.match(work, /One-on-One Coaching/);
  assert.match(work, /you also receive access to Brotherhood/);
  assert.doesNotMatch(work, /Bloodline (?:Brotherhood|Advisory)/);
  assert.match(work, /class="button ink" href="\/advisory\/?"/);
  assert.match(work, /\$297/);
  assert.match(work, /initial strategy call/);
  assert.doesNotMatch(home, /\$15,000/);
  assert.doesNotMatch(work, /\$15,000/);
  assert.doesNotMatch(advisory, /\$15,000/);
  assert.match(work, /Fathers Front is not a law firm/);
  assert.match(work, /no attorney-client relationship is created/);
  assert.doesNotMatch(work, /The Four Fronts/);
  assert.doesNotMatch(work, /One ascent/);
  assert.match(speaking, /Want Steve to speak to your audience or community\?/);
  assert.match(speaking, /leadership as a father and in business when under impossible pressure/);
  assert.match(speaking, /Who am I on the other side of impossible\?/);
  assert.match(speaking, /Steve's story is the doorway\. Your audience is the reason he tells it\./);
  assert.match(speaking, /Book Steve to Speak/);
  assert.match(speaking, /href="\/speaking-inquiry\/"/);
  assert.match(advisory, /href="https:\/\/portal\.fathersfront\.com\/advisory"/);
  assert.match(advisory, />Schedule Now</);
  assert.match(brotherhood, /href="https:\/\/portal\.fathersfront\.com\/brotherhood"/);

  const speakingInquiry = await readFile(new URL("speaking-inquiry/index.html", outputRoot), "utf8");
  assert.match(speakingInquiry, /Speaking Inquiry/);
  assert.match(speakingInquiry, /tally\.so\/embed\/vGVjOd/);
});
