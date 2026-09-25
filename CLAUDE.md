# CrownVolt Electrical — Project Context

## Status as at 2026-09-23: LIVE, PAID, and in delivery

Lucas paid the **$1,497** setup on 2026-09-19. Package is **Growth — $1,497 setup + $197/mo**
(reduced from the standard $1,997). Site live at `crownvolt.com.au` since 2026-08-25.

**Everything in the proposal is delivered except the two SMS workflows**, which are built,
unit-tested and inert, waiting on a Twilio AU carrier registration queue (~29 Sep). Nothing
else is outstanding on our side.

### Google Business Profile — Syntra manages it (Manager access on jhammond469@gmail.com)

Done 2026-09-23:
- **Service area fixed** — "Queensland, Australia" deleted (it dragged the Maps pin to inland
  North QLD, ~1,000km away). 18 SEQ suburbs kept. Verified: the knowledge-panel map now renders
  a tight Brisbane / Gold Coast / Tweed Heads area.
- **Business description added** — 719 chars, from the site's own copy.
- **Square profile picture created** — `images/crownvolt-profile-1024.png`. His `logo.png` is a
  1032×494 banner that Google's square/circular slot would crop badly.

Open:
- **Photos.** He has **no logo, no cover photo and no photos at all** — the biggest visual win
  left. 12 files staged ready to drag, numbered in upload order, at
  `Documents/Syntra/Business/CrownVolt - GBP upload/`.
  **Claude cannot upload these** — the dialogs are a cross-origin iframe with a hidden src, and
  the only alternative is a native OS file picker. Don't retry; see [[crownvolt_demo]] memory
  for the four approaches already ruled out.
- Service descriptions (each service exists but has an empty 0/300 description), first Google Post.
- **Do NOT connect his LinkedIn** — Josh's instruction, 2026-09-23.

### Live Google reviews — wired 2026-09-23

Place ID **`ChIJbT3c6R6qnQ4Rvppt3wSc6Oo`** (derived from the feature ID, verified against
`search.google.com/local/reviews`). He is in the published shared workflow
`Syntra - Google Reviews (All Clients)`. He has zero reviews, so the site correctly shows its
placeholder and will populate on its own. Nothing further to do.

### Known, unfixed (cosmetic)

Extensionless URLs 404 — `/about` vs `/about.html`. The site's own nav uses `.html`, so nothing
is broken; a `vercel.json` rewrite would tidy it.

---

*History below.*

## Prospect
- **Business:** CrownVolt Electrical
- **Owner:** Lucas (confirmed by Joshua 2026-08-08)
- **Phone:** 0430 064 848
- **Email:** admin@crownvolt.com.au
- **Location:** Brisbane / South East QLD
- **Instagram:** @crownvolt.electrical (72 followers, 4 posts as of 2026-08-24 — up from 2
  posts/53 followers on 2026-08-08)
- **Their current live site:** crownvolt.com.au — still an unedited Wix/AI template as of
  2026-08-08 (not re-checked since)

## What's built — rebuilt as a real 4-page site, 2026-08-24
Was a single-page demo (`index.html` only) built 2026-08-08. Rebuilt to match the standard now
used by every other Syntra client site (ProCircuit/Powerluxe/SEQ DirtWorx) — shared
`css/styles.css` + `js/main.js`, four real pages:

- `index.html` — Home: hero (free on-site quote lead form), stats, reviews placeholder, gallery,
  services teaser, statement photo, why-us, CTA, footer.
- `about.html` — About Lucas/CrownVolt (honest — no fabricated history, brand-new business),
  why-us grid, statement photo, CTA.
- `services.html` — full breakdown of all 5 service categories, each with a real photo:
  Residential, Commercial, Switchboards & Safety, Hot Water Systems, Feature/Outdoor Lighting.
  Plus a second gallery block.
- `contact.html` — contact form + details.
- `landing.html` — standalone ads/DM page (kept from the original build, image references
  updated to the new hi-res files).
- `dashboard.html` — CrownVolt-branded Ops Dashboard preview (kept from original build,
  untouched this session — still demo/example data only).

Brand colours navy `#0B0D16` + gold `#D9AF3E`, matched to their real logo (unchanged).

## Real assets — refreshed again 2026-08-25
Lucas sent 6 more phone photos of the same black kitchen reno (pendant lighting + LED under-bench
strip) already featured on the site. Two were duplicates (one exact byte-for-byte, one a
near-identical composition) — kept but not wired into any page, saved in
`images/unused-duplicates/`. The 4 genuinely distinct shots were added: `kitchen-full-room-wide.jpg`
now replaces the old `kitchen-pendant-lighting-reno.jpg` as the `services.html` page-hero (same
subject, cleaner/sharper angle); `kitchen-led-underbench-strip.jpg` (a dramatic close-up of the
LED strip lighting — the most electrically-relevant new shot), `kitchen-island-benchtop-tap.jpg`
and `kitchen-splashback-fridge-angle.jpg` were added as new gallery tiles on both `index.html`
and `services.html`'s galleries, giving the kitchen reno a full dedicated row on `services.html`
rather than the single tile it had before. The original `kitchen-pendant-lighting-reno.jpg` is
still referenced once — the `index.html` gallery tile it was already in was left untouched, so
that page now shows both the original photo and the 2 new kitchen tiles (5 kitchen photos total
across the two galleries combined, out of a real, unusually photogenic job).

## Real assets — refreshed 2026-08-24
**10 real, full-resolution photos supplied directly** (found in `Photo's/` — IMG_8240–8255,
16 total, 10 selected for the site) — a major upgrade over the original 6 Instagram-screenshot
crops. Categories now covered: bathrooms (4 different renovations), a full kitchen reno
(pendant lighting + LED under-bench strip — new category), garage hexagon LED feature lighting
(the hero photo — genuinely striking, a custom purple Commodore underneath it), switchboard/
meter box upgrade, hot water system connection, patio/alfresco downlights.

**2 more photos pulled fresh from Instagram** (`commercial-gym-mirror-fitout.jpg`,
`commercial-sauna-led-lighting.jpg`) — a real, dated, captioned commercial job: World's Gym
Flagstone, posted 15 Aug 2026 (dimmer install, sauna repair, LED mirror fix). Captured via
zoomed screenshot + ImageMagick crop (same method as the original build — Instagram blocks
direct CDN URL extraction). This is the only Commercial-category material that exists.

**Old lower-res duplicates removed**: `bathroom-checkerboard-tub.png`,
`bathroom-vanity-oval-mirror.png`, `shed-highbay-lights.png`, `shed-exterior-powerpoint.png`,
`shed-subboard.png`, `bathroom-round-mirror.png` — all superseded by the new hi-res versions
(same subjects, better quality) or genuinely unused now. `landing.html`'s image references were
updated to match — check that file too before assuming an old filename is still valid anywhere.

**No real Google reviews still** — Reviews section stays an honest "coming soon" placeholder.

## Contact forms — real, wired to production, 2026-08-25
All three forms (hero lead form on `index.html`, the contact page form, and `landing.html`'s
standalone form) now POST real submissions to `https://jhammond.app.n8n.cloud/webhook/crownvolt-contact`
— a new n8n workflow ("CrownVolt - Contact Form", duplicated from ProCircuit's proven pattern),
Resend SMTP, notifying `admin@crownvolt.com.au`. Each form has a honeypot (`_hp`) and a real
error state (`heroFormError`/`formError`/`form-error`) that surfaces "please call Lucas directly"
if the webhook fails, rather than always claiming success — matches the ProCircuit pattern, not
the older SEQ DirtWorx pattern that silently claimed success regardless. `main.js` now carries
the real fetch logic (was previously a demo-only stub); `landing.html` has its own inline copy
since it doesn't load `main.js`.

**Verified with real end-to-end test submissions, not just "got a 200 back"** — checked Resend's
own Emails log after each test, confirmed `Delivered` to `admin@crownvolt.com.au` with the actual
rendered content, not just an accepted webhook response.

**Real bug found and fixed while verifying — this is the important part.** The first real test
delivered successfully but the email body was completely unusable: every `{{ $json.body.x }}`
expression showed up as literal raw text, not the actual submitted values. Root cause: the
"Send an Email" node's Subject and HTML fields were both left in n8n's **"Fixed" mode** (inherited
from the ProCircuit template this was duplicated from) — Fixed mode never evaluates `{{ }}`
expressions at all, even though it looks like it should. Switched both fields to **"Expression"**
mode, re-tested, confirmed the email now renders real submitted data correctly.

**This is very likely a live, ongoing bug on Powerluxe's, ProCircuit's and SEQ DirtWorx's actual
contact-form workflows too** — checked one recent real Powerluxe lead email in Resend and it shows
the exact same raw unrendered `{{ }}` text. That means real customer leads for real paying clients
may have been arriving as blank templates for as long as those workflows have been live. Flagged
directly to Josh, not fixed unprompted — those are live production workflows for other clients,
out of scope for a CrownVolt-only task without his go-ahead. If asked to fix: same one-toggle
change (Fixed → Expression) on the Subject and HTML fields of each client's "Send an Email" node,
already proven safe and correct on CrownVolt's copy.

## GA4 tracking — live, 2026-08-25
New GA4 property "CrownVolt Electrical" (Measurement ID `G-M3LS2122NC`), Home & Garden / Small
business / Generate leads. Tracking snippet + `click_to_call` event listener added to all 5 real
pages (`index`/`about`/`services`/`contact`/`landing` — `dashboard.html` deliberately excluded,
it has no forms or tel-links, nothing to track). `form_submit` events fire from the same submit
handlers that POST to the webhook. Matches the pattern in [[client_analytics_system]] used on
every other live client site.

## Deployed
- **Live at the real domain:** https://crownvolt.com.au and https://www.crownvolt.com.au —
  cut over 2026-08-25. Also still live at https://crownvolt-demo.vercel.app (same deployment)
  and https://jhammond469.github.io/crownvolt-demo/ (older GitHub Pages copy, now superseded).
- **Repo:** github.com/Jhammond469/crownvolt-demo (public), deployed to Vercel project
  `crownvolt-demo` (org `jhammond469s-projects`).
- **DNS cutover detail (2026-08-25):** domain registrar/DNS host is Wix (nameservers
  `ns6/ns7.wixdns.net`, registrar is actually Tucows/OpenSRS per whois) — did NOT move
  nameservers to Vercel, instead edited Wix's own DNS records (Settings > Domains > Domain
  Actions "..." menu > Manage DNS Records — this menu is easy to miss, buried behind a
  three-dot icon that can get clipped off-screen in narrow viewports). Removed Wix's 3 old A
  records (185.230.63.107/.186/.171) and Wix's `www` CNAME (→ cdn1.wixdns.net), added two new A
  records: `crownvolt.com.au → 76.76.21.21` and `www.crownvolt.com.au → 76.76.21.21` (Vercel's
  IP, from `vercel domains inspect crownvolt.com.au`). **Email (Microsoft 365/Outlook) was not
  touched** — MX (`crownvolt-com-au.mail.protection.outlook.com`), SPF TXT, the `MS=` verification
  TXT, and the `autodiscover`/`enterpriseenrollment`/`enterpriseregistration`/`lyncdiscover`/`sip`
  CNAMEs are separate record types/entries from the site's A records, confirmed via `dig`
  before and after the change. Verified live via `dig` (both root and www resolving to
  76.76.21.21) and a real HTTP fetch of the production domain returning the new site's content
  — HTTPS took a few minutes after the DNS change for Vercel to auto-issue the certificate,
  same as any newly-pointed domain.
- Domain was already registered to the Vercel project (`vercel domains add`) in an earlier
  session — this cutover was purely the DNS-record change on Wix's side.

## Next steps (priority order)
1. **Send Lucas the proposal.** He submitted the Get Started form 2026-08-25 9:21pm — picked
   **Growth** + ticked "Extra automation" with the note "Automatic review link send to client."
   Built two documents 2026-08-26, both at the **old signed rate** ($1,997 + $197/mo, Josh's
   explicit call over the new proposed $2,997/$247 in `agency-os/standards/pricing.md`), both
   treating the "extra automation" ask as already covered by Growth's standard Google
   review-request workflow rather than a separate paid line:
   - `Business/Proposal - CrownVolt Electrical.pdf` — client-facing, branded to match
     `Syntra Design & Direction/Syntra-Services-Reference.pdf`'s look (dark navy + purple accent
     Syntra brand system, built from the real `--brand-*` tokens in
     `Syntra-Website-Final/app/globals.css`). This is the one to actually send Lucas.
   - `Business/Service Agreement - CrownVolt Electrical.md` — the signable agreement, same
     template as NXT LVL/Young Renewal, for after he confirms.
   **Worth Josh confirming with Lucas directly that "extra automation" is what he meant** before
   treating it as settled — his note was a paraphrase, not a spec, and both documents currently
   assume that read. Still needs: Josh to send the PDF, then follow up with the agreement once
   Lucas confirms.
2. Once signed, collect payment and content within the timelines the agreement states.
3. Get real facts/photos directly from Lucas if there's anything better than what's already here.
4. If real Google reviews land, replace the "coming soon" placeholder.
4. (Separate, cross-client, not a CrownVolt task) Josh authorized applying the same
   Fixed→Expression n8n fix to Powerluxe/ProCircuit/SEQ DirtWorx's contact-form workflows —
   deferred to a following session, not done yet. See [[client_analytics_system]] for the
   pickup point, not here.
