export type LogoConcept = "anchor-arch" | "harbour-m" | "fortress-gate";
export type LogoVariant = "full" | "compact" | "mark";
export type LogoTone = "default" | "on-dark";

export const destinationIdentity = {
  destination: "Rhodes",
  descriptor: "Shore Excursion",
  strapline: "Find the best version of your day in Rhodes",
  accessibleName: "Rhodes Shore Excursion",
  /** Warm stone + Aegean cobalt — medieval, not generic Cyclades blue-and-white */
  accent: "aegean-stone",
  logoConcept: "fortress-gate" as LogoConcept,
} as const;
