# Rhodes Shore Excursion — Workers readiness

**Status:** Built and locally audited. **Not deployed. Custom domain not attached.**

| Item | Value |
|------|--------|
| Worker name | `rhodes-shore-excursion` |
| Confirmed unused | Yes (API: Worker does not exist) |
| Platform | Cloudflare Workers Static Assets V1.0 |
| Assets directory | `./out` |
| `html_handling` | `force-trailing-slash` |
| `not_found_handling` | `404-page` |
| `workers_dev` | `true` (for smoke tests after first deploy) |
| Canonical | `https://rhodesshoreexcursion.com` |
| Custom domains | **Do not attach until explicit approval** |
| www behaviour | Cloudflare Redirect Rule www → apex (after approval) |
| Pages | Do **not** create a Pages project |

## Pre-approval blockers

1. User audit and explicit deployment approval
2. Confirm Cloudflare zone for `rhodesshoreexcursion.com` is Active
3. Confirm nameservers
4. workers.dev smoke test after first `wrangler deploy`
5. Only then attach apex Custom Domain + www redirect rule

## Deploy command (after approval)

```bash
npm run deploy
```
