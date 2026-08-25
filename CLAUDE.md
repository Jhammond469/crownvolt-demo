# CrownVolt Electrical — Project Context

## Status: LIVE at real domain — still not signed/paid
**2026-08-25: site taken live at Lucas's real domain, crownvolt.com.au.** Josh got Lucas's Wix
login and asked to make the rebuilt site live ahead of any tier pick/payment (explicit call —
Lucas hasn't signed or paid yet). Domain now points at the Vercel deployment instead of the old
Wix placeholder — see "Deployed" section below for exact DNS changes made.

Lucas has engaged (2026-08-24): gave Josh his Wix login so Josh could build the real site.
Josh still needs to send Lucas the `syntrasoftware.com/get-started` link for him to pick a
tier/bolt-ons — payment happens after that. **Not a done deal yet** — no tier picked, no payment,
site is live as a courtesy/momentum move, not because the deal closed.

The get-started form's SendGrid outage (see [[client_analytics_system]]) is fully fixed —
switched to Resend, confirmed delivering. No longer a blocker for sending Lucas this link.

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
1. Get Lucas to actually pick a tier via `syntrasoftware.com/get-started` and pay — the site
   going live ahead of that was a deliberate goodwill/momentum move, not a signal the deal is
   done. Don't treat this as closed.
2. Once he picks a tier: replace demo-safe forms with a real n8n webhook (checking field names
   carefully — see the SEQ DirtWorx field-name bug in [[client_analytics_system]]), add a real
   GA4 property + event tracking, and get real facts/photos directly from him if there's
   anything better than what's already here.
3. If real Google reviews land, replace the "coming soon" placeholder.
