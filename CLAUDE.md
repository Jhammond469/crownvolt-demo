# CrownVolt Electrical — Project Context

## Status: WARM — converting, not yet signed/paid
Lucas has engaged (2026-08-24): giving Josh his Wix login so Josh can build the real site, and
Josh will send the "get started" link (syntrasoftware.com/get-started) for Lucas to pick a tier
and bolt-ons — payment happens after that. **Not a done deal yet** — no password handed over,
no tier picked, no payment. This full-site rebuild is what Josh sends Lucas as the finished
product before that happens.

⚠ **The "get started" form is currently broken in production** — no `SENDGRID_API_KEY` set for
the `Syntra-Website-Final` Vercel project, so submissions silently fail (503, logged to a server
console nobody watches). Fix this **before** sending Lucas the link, or his submission will never
reach Josh's inbox. See [[client_analytics_system]] memory, 2026-08-24 entry, for the full
investigation.

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

## Contact forms — demo-safe, not wired to a real backend
Every form (hero lead form + contact page form) is **client-side success only** — no n8n
webhook, no email. This is deliberate: CrownVolt hasn't signed on, so there's nothing real to
send submissions to yet. **Wire this up for real once Lucas actually converts** — same pattern
as every other Syntra client site (real n8n webhook + honeypot + verified test submission). Watch
for the exact field-name-mismatch bug found and fixed on SEQ DirtWorx's form this session (form
field names must match the n8n email template's expected variables exactly) — check this
carefully when building the real workflow, don't just copy-paste blind.

## No GA4 / event tracking yet
Deliberately not installed — CrownVolt isn't a real property yet. Add a GA4 property + the
`click_to_call`/`form_submit` event tracking pattern (see [[client_analytics_system]]) once they
sign on, matching every other live client site.

## Deployed
- **Live at:** https://jhammond469.github.io/crownvolt-demo/ (+ `/landing.html`, `/dashboard.html`)
- **Repo:** github.com/Jhammond469/crownvolt-demo (public)

## Next steps (priority order)
1. **Fix the `get-started` SendGrid key** before sending Lucas anything — otherwise his
   submission vanishes silently. See the warning at the top of this file.
2. Send Lucas the finished site + the `get-started` link.
3. Once he picks a tier and the password/domain access comes through: replace demo-safe forms
   with a real n8n webhook (checking field names carefully), add a real GA4 property + event
   tracking, and get real facts/photos directly from him if there's anything better than what's
   already here.
4. If real Google reviews land, replace the "coming soon" placeholder.
