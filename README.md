# ListingsAI — The honest AI tools directory

> **Real tools to earn more and spend less — honestly reviewed.**

🌐 **Live site:** [https://listingsai.directory](https://listingsai.directory) · 📧 **[hello@listingsai.directory](mailto:hello@listingsai.directory)**

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Live](https://img.shields.io/website?url=https%3A%2F%2Flistingsai.directory&label=live%20site&up_message=online&down_message=offline)](https://listingsai.directory)
[![Last commit](https://img.shields.io/github/last-commit/magnustheassistant-creator/listingsai.directory.svg)](https://github.com/magnustheassistant-creator/listingsai.directory/commits/master)
[![GitHub stars](https://img.shields.io/github/stars/magnustheassistant-creator/listingsai.directory.svg?style=social)](https://github.com/magnustheassistant-creator/listingsai.directory)

---

## What is ListingsAI?

Most "Top 10 AI Tools" lists are SEO bait. ListingsAI is the alternative: an independent directory of AI tools and online platforms that **genuinely help you earn or save money**, written by people who actually use them.

We started this project because we were tired of affiliate sites that recommend whatever pays the highest commission. Our rule is simple: **if we wouldn't use it ourselves, we don't list it**.

---

## The three pillars

Everything on ListingsAI fits one of these three categories:

1. **💰 [Make Money](https://listingsai.directory/category/make-money.html)** — AI & online tools to build income
2. **💸 [Save Money](https://listingsai.directory/category/save-money.html)** — deals & tools that cut costs
3. **🎁 [Get Paid to Start](https://listingsai.directory/category/get-paid-to-start.html)** — low-friction sign-ups with bonuses

---

## What's on the site

| Section | What's there |
|---|---|
| 🌐 [Homepage](https://listingsai.directory/) | 3-pillar grid, latest articles, comparisons, lead magnet |
| 📂 [3 category pages](https://listingsai.directory/category/make-money.html) | Make Money, Save Money, Get Paid to Start |
| ⚖️ [Side-by-side comparisons](https://listingsai.directory/compare/) | Systeme vs ClickFunnels, Moosend vs Systeme, Dealify vs monthly |
| 📚 [Cornerstone guide](https://listingsai.directory/guides/how-to-make-first-100-online-with-ai.html) | "How to make your first $100 online with AI" (1,500+ words) |
| 📝 [8 long-form reviews](https://listingsai.directory/articles/) | Honest deep-dives on every tool we recommend |
| 🧭 [Interactive tool finder](https://listingsai.directory/ai-finder.html) | 6-question quiz that matches you to the right tool |
| 📩 [Lead magnet](https://listingsai.directory/lead-magnet.html) | The 7 highest-paying, lowest-effort money tools (free list) |
| 🛡️ [Trust pages](https://listingsai.directory/how-we-review.html) | How We Review, Affiliate Disclosure, About, Contact |

**Total: 23 live pages, all hand-written, all FTC-compliant.**

---

## Currently approved affiliate programs

We're committed to transparency. These are the **5 programs we earn from** — and we only earn from them because we actually use them. Every other tool on the site is informational only.

| Program | Commission | What we use it for | Review |
|---|---|---|---|
| **[Systeme.io](https://systeme.io/?sa=sa027313620420830f0b15ad666119989b3bc80031)** | **60% recurring for life** | All-in-one platform — email, funnels, courses, affiliate program. Best for beginners. | [Read review](https://listingsai.directory/articles/systeme-review.html) |
| **[Moosend](https://trymoo.moosend.com/l08gomnfefxi)** | **30% recurring for life** | The email tool we use for our own list. $9/mo, better deliverability than ConvertKit. | [Read review](https://listingsai.directory/articles/moosend-review.html) |
| **[ClickFunnels](https://www.clickfunnels.com/signup-flow?aff=108e2ab3f13e6bf0ef03c71339d2dcb330873383a8541ea451851aaf63da7380)** | **30% recurring** | The industry-standard funnel builder. Best for established marketers. | [Read review](https://listingsai.directory/articles/clickfunnels-review.html) |
| **[I'm All In bundle](https://www.imallin.com/?aff=108e2ab3f13e6bf0ef03c71339d2dcb330873383a8541ea451851aaf63da7380)** | 12 months of CF Scale + course | High-ticket upgrade path for ClickFunnels users. $1,970 one-time. | [Read review](https://listingsai.directory/articles/im-all-in-review.html) |
| **[Dealify](https://dealify.com?ref=magnus)** | ~30% per sale | Lifetime software deals marketplace. Buy once, own forever. | [Read review](https://listingsai.directory/articles/dealify-review.html) |

We have 30+ pending applications. Only tools we genuinely use get approved here. See [our full affiliate disclosure](https://listingsai.directory/affiliate-disclosure.html) and the [AFFILIATE-PROGRAMS.md](AFFILIATE-PROGRAMS.md) tracker.

---

## How we review

Our review methodology is public. The short version:

1. **We use the tool** (or interview someone who has) for at least 30 days
2. **We test the pricing** at the tier real customers would buy
3. **We check deliverability, support, and reliability** in a real workflow
4. **We publish what we found** — including what doesn't work
5. **We disclose affiliate relationships** on every page, in plain English

Read the full process: [listingsai.directory/how-we-review.html](https://listingsai.directory/how-we-review.html)

**What we don't do:**
- Sponsored posts (a tool can't pay to be listed or to get a higher rating)
- "Best tools" lists based on commission rates
- Hidden affiliate links (every link with a relationship is marked)

---

## Tech stack

A deliberately simple stack — no frameworks, no build step, no JS bundlers.

- **Static HTML** — 23 hand-written pages
- **Vanilla CSS** — single 1,167-line file, dark theme with purple/cyan gradient
- **Vanilla JavaScript** — 1 small file for FAQ accordion and form interactions
- **No build step** — `index.html` is the entry point
- **Hosted on GitHub Pages** with custom domain (`listingsai.directory`)

We chose this stack because the site is a content project, not a web app. Static HTML means the site loads in <500ms, has zero attack surface, and will outlive any framework.

---

## Project structure

```
.
├── index.html                          # Homepage
├── about.html                          # About us
├── affiliate-disclosure.html           # FTC-compliant disclosure
├── ai-finder.html                      # Interactive tool finder
├── contact.html                        # Contact form
├── how-we-review.html                  # Review methodology
├── lead-magnet.html                    # 7-tool lead magnet
├── privacy.html                        # Privacy policy
├── sitemap.xml                         # SEO sitemap (23 URLs)
├── styles.css                          # Single CSS file (1,167 lines)
├── robots.txt
├── CNAME                               # listingsai.directory
├── category/
│   ├── make-money.html
│   ├── save-money.html
│   └── get-paid-to-start.html
├── compare/
│   ├── index.html                      # Hub
│   ├── systeme-vs-clickfunnels.html
│   ├── moosend-vs-systeme-email.html
│   └── dealify-vs-monthly-software.html
├── guides/
│   └── how-to-make-first-100-online-with-ai.html
├── articles/                           # 8 long-form reviews
├── templates/
│   └── listing-template.html
└── assets/
    ├── css/
    ├── js/
    └── img/
```

---

## Local development

No build step, no dependencies. Just clone and open:

```bash
git clone https://github.com/magnustheassistant-creator/listingsai.directory.git
cd listingsai.directory
# Open index.html in your browser
```

Or run a local server (for testing the JS interactions):

```bash
python3 -m http.server 8000
# Visit http://localhost:8000
```

---

## Deployment

This site auto-deploys via GitHub Pages on every push to `master`:

```bash
git add .
git commit -m "Your message"
git push origin master
# Wait ~2 min for GitHub Pages to deploy
```

DNS is managed in Hostinger. The custom domain (`listingsai.directory`) is configured via the `CNAME` file in the repo root.

---

## Contributing

We don't accept external contributions to the site content (every review is our own opinion). But we welcome:

- 🛠️ **Tool suggestions** — [contact us](mailto:hello@listingsai.directory) with a tool you think we should review
- 🐛 **Corrections** — spotted something wrong or outdated? [Tell us](https://listingsai.directory/contact.html)
- 🐞 **Bug reports** — open an issue in this repo for broken links, layout issues, etc.
- ⭐ **Stars** — if ListingsAI is useful to you, starring this repo helps others find it

---

## License

- **Code** (HTML structure, CSS, JavaScript, this README): [MIT License](LICENSE)
- **Content** (articles, reviews, guides, the AI finder quiz, comparison pages): © 2026 Brain Storm Corp — ListingsAI. All rights reserved. You may link to and quote from any page (with attribution and a link back). You may not republish entire articles or the comparison tables without written permission.

---

## About the team

ListingsAI is run by **[Brain Storm Corp](https://listingsai.directory/about.html)** — a small, independent review team based in Southeast Asia. We review global tools for a global audience. The whole team is 1 human + 1 AI, and we're honest about it on the [About page](https://listingsai.directory/about.html).

---

## Contact

- 📧 **Email:** [hello@listingsai.directory](mailto:hello@listingsai.directory)
- 🌐 **Contact form:** [listingsai.directory/contact.html](https://listingsai.directory/contact.html)
- 💬 **Telegram:** [@ka_barang](https://t.me/ka_barang)
- 🐙 **GitHub:** [github.com/magnustheassistant-creator/listingsai.directory](https://github.com/magnustheassistant-creator/listingsai.directory)

---

<div align="center">

**🌐 [Visit ListingsAI →](https://listingsai.directory)**

*Real tools. Honest reviews. No SEO bait.*

</div>
