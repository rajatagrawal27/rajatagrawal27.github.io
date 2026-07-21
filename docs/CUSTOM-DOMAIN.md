# Custom domain — future setup guide

_Goal: make the portfolio available at your own domain (e.g. `rajatagrawal.dev`
or `rajatagrawal.in`) instead of only `rajatagrawal27.github.io`. The GitHub
Pages hosting stays free — the domain itself is the only cost._

**Status: not done yet — do this whenever you're ready. Nothing in the site
needs to change.**

---

## Step 1 — Buy a domain (~₹700–1,500 / year)

Any registrar works. Good options:

| Registrar | Notes |
|---|---|
| **Cloudflare Registrar** | Sells at cost price (cheapest renewals), great DNS |
| **Namecheap** | Beginner-friendly dashboard, often has first-year deals |
| **GoDaddy / Hostinger** | Popular in India; watch for expensive renewal prices |

Name ideas: `rajatagrawal.dev`, `rajatagrawal.in`, `rajatagrawal.me`,
`rajat.codes`. Check availability on the registrar's search.

> Tip: `.dev` domains are developer-branded and always HTTPS — a nice fit for
> a portfolio.

## Step 2 — Point the domain's DNS at GitHub Pages

In your registrar's dashboard, open **DNS settings / DNS management** for the
domain and add these records:

**For the bare domain (`rajatagrawal.dev`)** — four `A` records
(these are GitHub Pages' official IPs):

| Type | Name/Host | Value |
|---|---|---|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |

**For the `www` version** — one `CNAME` record:

| Type | Name/Host | Value |
|---|---|---|
| CNAME | `www` | `rajatagrawal27.github.io` |

Save. DNS can take from a few minutes up to ~24 hours to propagate
(usually fast).

## Step 3 — Tell GitHub about the domain

1. Open the repo → **Settings → Pages**
   (https://github.com/rajatagrawal27/rajatagrawal27.github.io/settings/pages)
2. In the **"Custom domain"** box, type your domain (e.g. `rajatagrawal.dev`)
   and click **Save**
3. GitHub runs a DNS check — wait for the green tick
4. Tick **"Enforce HTTPS"** (may take a few minutes to become available while
   GitHub issues your free SSL certificate)

## Step 4 — Verify

- Open `https://your-domain` → your portfolio loads with a padlock 🔒
- The old `https://rajatagrawal27.github.io/` keeps working and now redirects
  to the new domain
- Update the URL on your resume / LinkedIn 🎉

## Optional but recommended

**Verify the domain on your GitHub account** (protects it from takeover if you
ever disable Pages): GitHub → Settings → **Pages** (account level) →
**Add a domain** → add the DNS `TXT` record it shows you.

## Troubleshooting

| Problem | Fix |
|---|---|
| GitHub says "DNS check unsuccessful" | Records not propagated yet — wait an hour and re-save the custom domain |
| "Enforce HTTPS" greyed out | Certificate still being issued — wait up to a few hours, then re-tick |
| Domain works without `www` but not with it (or vice-versa) | Make sure BOTH the four A records and the www CNAME exist |
| Site broke after adding domain | Just remove the custom domain in Settings → Pages — the github.io URL always keeps working |
