# Future Signature Tour — Rhodes

## Concept (not available yet)

**Rhodes Signature: Lindos, Old Town and Aegean Views**

Potential structure when launched:

1. Early collection at the cruise port
2. Lindos before the largest crowds
3. Acropolis or village exploration
4. Scenic coastal stop
5. Local food or tasting
6. Return to Rhodes Old Town
7. Optional independent Old Town time
8. Cruise-aware timing with return buffer

## Architecture readiness

The site data model already supports:

- `SupplierKind`: `exclusive` | `future` | `shore-excursions-group` | `affiliate`
- Signature Tour badge / `comingSoon` gate
- Direct product fields (without live checkout yet)
- Comparison against cruise-line style messaging (editorial only)

## Launch gate

Do **not** advertise this as available until:

- Product is bookable
- `comingSoon: false`
- Pricing / inclusions verified
- Direct checkout or partner URL live

Path: `/rhodes-signature-experience/`
