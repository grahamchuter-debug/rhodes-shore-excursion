# Rhodes Shore Excursion

World 2.0 editorial cruise planning site for rhodesshoreexcursion.com.

## Positioning

Find the best version of your day in Rhodes.

Experience pillars: Medieval Rhodes (Old Town), Lindos, scenic coast and beaches, food/culture and private touring.

## Platform

- Next.js static export (`output: "export"`, `trailingSlash: true`)
- Cloudflare **Workers Static Assets** (not Pages)
- Worker name: `rhodes-shore-excursion`
- Canonical: `https://rhodesshoreexcursion.com`
- Do not attach custom domains without explicit approval

## Destination identity

- Config: `src/data/destination-identity.ts`
- Component: `src/components/DestinationLogo.tsx`
- Brand: Rhodes Shore Excursion (singular formal brand; plural phrases OK in prose)

## Key paths

- Homepage: `src/app/page.tsx`
- Excursions: `/shore-excursions/`
- Cruise schedule: `/rhodes-cruise-schedule/`
- Port guide: `/rhodes-cruise-port-guide/`
- Data: `src/data/`
- Workers docs: `docs/CLOUDFLARE-WORKERS-DEPLOYMENT.md`

## Commercial rules

- Do not invent products, prices, ratings or return guarantees
- Affiliate CTAs use `rel="sponsored"` and partner disclosure
- Signature Tour architecture may exist as `comingSoon` only until live
- Do not deploy or attach the production domain until audited and approved

## Regenerate

```bash
npm run download:images
npm run build
```
