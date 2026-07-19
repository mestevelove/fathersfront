import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import test from "node:test";

const outputRoot = new URL("../out/", import.meta.url);

test("exports a complete static homepage", async () => {
  const html = await readFile(new URL("index.html", outputRoot), "utf8");

  assert.match(html, /Fight for your fatherhood\./);
  assert.match(html, /Fortify your foundation\./);
  assert.match(html, /Forge your family’s future\./);
  assert.doesNotMatch(html, /Fathers are being erased/);
  assert.doesNotMatch(html, /Love\. Law\. Leadership\. Lifestyle\./);
  assert.match(html, /The Foundation/);
  assert.match(html, /V\.70/);
  assert.match(html, /Born in/);
  assert.match(html, /Blood\./);
  assert.match(html, /Forged in Fire\./);
  assert.match(html, /Fathers Front builds disciplined, powerful fathers/);
  assert.match(html, /Leadership/);
  assert.match(html, /Lifestyle/);
  assert.match(html, /Law/);
  assert.match(html, /Love/);
  assert.match(html, /The Fathers Front Dispatch/);
  assert.match(html, /A weekly field note for fathers and builders under pressure\./);
  assert.match(html, /Join the Dispatch/);
  assert.doesNotMatch(html, /Born in Blood\.<br\/?><em>Forged in Fire\.<\/em>/);
});

test("exports the expected site routes", async () => {
  const entries = await readdir(outputRoot);

  for (const route of [
    "articles",
    "bloodline-advisory",
    "bloodline-brotherhood",
    "family-lawfare",
    "stolen-sons",
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

test("exports the unlinked article template", async () => {
  const html = await readFile(new URL("template.html", outputRoot), "utf8");
  assert.match(html, /The Fathers Front Dispatch/);
  assert.match(html, /ARTICLE TEMPLATE · V\.70/);
});

test("exports phase one messaging", async () => {
  const home = await readFile(new URL("index.html", outputRoot), "utf8");
  const work = await readFile(new URL("work-with-steve/index.html", outputRoot), "utf8");
  const speaking = await readFile(new URL("speaking/index.html", outputRoot), "utf8");

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
  assert.match(work, /There is another father in the group who needs you\./);
  assert.match(work, /One brotherhood\. Two ways to work with me\./);
  assert.match(work, /Join Bloodline Brotherhood/);
  assert.match(work, /you also receive access to Bloodline Brotherhood/);
  assert.match(work, /\$297/);
  assert.match(work, /initial strategy call/);
  assert.match(work, /Fathers Front is not a law firm/);
  assert.match(work, /no attorney-client relationship is created/);
  assert.doesNotMatch(work, /The Four Fronts/);
  assert.doesNotMatch(work, /One ascent/);
  assert.match(speaking, /The Father Must Lead the Case/);
  assert.match(speaking, /Born in Blood\. Forged in Fire\./);
  assert.match(speaking, />04</);
});
