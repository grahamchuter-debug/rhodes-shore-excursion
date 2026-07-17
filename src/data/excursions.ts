import type { ExcursionPage } from "./types";

/**
 * Rhodes cruise calls berth at the Tourist Port, within walking distance of the Old Town for most
 * berths, though some calls use the outer Commercial Port and a handful of tours meet a short walk
 * from the pier rather than directly alongside it. Confirm your exact meeting point from your
 * booking confirmation before sailing day, since it can vary by ship and tour. Lindos, the coastal
 * bays and the island's interior all require coach, taxi or private transport — there is no
 * practical walking option beyond the Old Town. Plan every day backwards from your ship's stated
 * all-aboard time, not just its published departure, and allow a buffer for summer traffic on the
 * coast road to Lindos.
 */
export const RHODES_PORT_LOGISTICS =
  "Cruise ships calling at Rhodes typically berth at the Tourist Port, within a short walk of the Old Town's medieval walls for most berths, though some calls use the outer Commercial Port and a handful of tours meet a few minutes' walk from the pier rather than directly alongside it. Always confirm your exact meeting point and pickup location from your booking confirmation, since this is set per tour and can vary from ship to ship. The Old Town itself is comfortably walkable from most berths — allow 10–20 minutes — so a guide is optional if you only want the medieval quarter. Lindos, the beaches at Anthony Quinn Bay and Kallithea, and the island's mountainous interior all require coach, taxi or private transport; there is no practical walking option. Whichever excursion you choose, plan your day backwards from the ship's stated all-aboard time rather than its published departure time, and build in a buffer for Rhodes' summer traffic on the coastal road to Lindos.";

export const SEG_SUPPLIER = {
  kind: "shore-excursions-group" as const,
  name: "Shore Excursions Group",
};

export const excursions: ExcursionPage[] = [
  {
    slug: "exclusive-medieval-town-of-rhodes",
    title: "Old Town Rhodes and the Grand Master's Palace Interior",
    seoTitle: "Rhodes Old Town & Palace Interior Excursion",
    metaDescription:
      "A guided Rhodes Old Town walk with interior access to the Grand Master's Palace and panoramic Monte Smith views — a 3-hour tour from the pier.",
    category: "Old Town and history",
    badge: "best-near-port",
    tagline: "A compact city tour that gets you inside the Grand Master's Palace, not just past its walls.",
    duration: "3 Hours",
    pace: "Moderate",
    groupType: "Small",
    activityLevel: "Moderate",
    foodBeverage: "Not included (per supplier)",
    locations: ["Monte Smith", "Mandraki", "Old Town", "Grand Master's Palace", "Street of the Knights", "Archaeological Museum"],
    bestFor:
      "First-time visitors who want the Old Town's headline sights plus a proper look inside the Palace, in a short, near-port window",
    overview:
      "This small-group orientation covers modern Rhodes Town and the medieval Old Town in one loop, then goes further than most coach tours by walking guests inside the Grand Master's Palace rather than only viewing it from outside.",
    body: [
      "Your guide meets you at the pier and the drive traces Mandraki's waterfront — passing the harbour where legend places the vanished Colossus of Rhodes — before climbing to Monte Smith for open views over the city and the Aegean toward Turkey on a clear day.",
      "From there you enter the Old Town on foot through the Gate d'Amboise, walking down into the UNESCO World Heritage medieval quarter. The centrepiece is the Grand Master's Palace itself: rebuilt in the 1930s on 14th-century foundations, its upper rooms are included on this tour rather than left as an optional add-on.",
      "The walk continues down the cobbled Street of the Knights, past the former inns of the crusader tongues, ending near the Archaeological Museum housed in the old Knights' Hospital. Free time at the end lets you linger in the Old Town or head back to the ship.",
    ],
    highlights: [
      "Small-group orientation drive past Mandraki Port and up to Monte Smith for panoramic photos",
      "Guided interior visit inside the Grand Master's Palace, not just an exterior stop",
      "Walking route down the Street of the Knights to the Archaeological Museum",
      "Finishes with free time in the Old Town before you make your own way back or return with the group",
    ],
    included: [
      "Professional local guide",
      "Transportation from the cruise pier",
      "Interior access to the Grand Master's Palace, per the supplier",
    ],
    notIncluded: [
      "Food and drink — the supplier lists this tour as food/beverage not included",
      "Any purchases made during free time in the Old Town",
    ],
    portLogistics: RHODES_PORT_LOGISTICS,
    tips: [
      "Wear flat, closed walking shoes — the palace has a double flight of stairs to its upper rooms and the Old Town is cobbled",
      "Bring sun protection for the exposed Monte Smith viewpoint",
      "Confirm your exact pier and pickup point from your booking confirmation before the day",
    ],
    faqs: [
      {
        question: "Does this tour actually go inside the Grand Master's Palace?",
        answer:
          "Per the supplier, yes — this itinerary includes a guided walk through the palace's upper rooms, rather than an exterior-only stop, which is the main difference from a general Old Town walking tour.",
      },
      {
        question: "Is this tour wheelchair accessible?",
        answer:
          "No. The supplier states there is a double flight of stairs to the palace's main rooms and that the route covers paved, cobblestone and packed-dirt surfaces with some inclines.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "It's a compact three-hour itinerary with one guided walking loop through the Old Town; comfortable shoes are recommended but this is not a strenuous hike.",
      },
    ],
    relatedExcursionSlugs: ["medieval-old-town-rhodes-walking-tour", "rhodes-city-old-town-segway", "private-rhodes-city-tour"],
    featured: true,
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/medieval-town-rhodes/eurhtcaexcwalk",
      productId: "eurhtcaexcwalk",
    },
    imageKey: "palace",
  },

  {
    slug: "best-of-lindos-and-rhodes",
    title: "Rhodes and Lindos Island Highlights",
    seoTitle: "Best of Lindos & Rhodes Shore Excursion",
    metaDescription:
      "Combine hilltop Lindos and its Acropolis with the Old Town's Grand Master's Palace on one 5-hour highlights tour from the cruise pier.",
    category: "Best of Rhodes",
    badge: "best-for-first-time",
    tagline: "One five-hour loop for both of Rhodes' headline names — Lindos and the medieval Old Town.",
    duration: "5 Hours",
    pace: "Moderate",
    groupType: "Standard",
    activityLevel: "Moderate",
    foodBeverage: "Not included (per supplier)",
    locations: ["Lindos", "Monte Smith", "Acropolis of Lindos", "Grand Master's Palace", "Street of the Knights", "Archaeological Museum"],
    bestFor: "Passengers with roughly half a day ashore who want a single tour covering both Lindos and the medieval Old Town",
    overview:
      "A coach tour built around Rhodes' two defining names, pairing the hilltop village and Acropolis of Lindos with a guided walk through the Old Town and the Grand Master's Palace, with a stop for the island's well-known ceramics along the way.",
    body: [
      "The day heads first to Lindos on the east coast, where the whitewashed village climbs beneath its Acropolis. Depending on your group's pace, time here covers the Byzantine Church of the Ascension and the lanes of the village, with the option to climb higher toward the Acropolis itself for views over St Paul's Bay.",
      "The coach then returns toward Rhodes Town, pausing at Monte Smith for photographs before entering the Old Town. A guide leads you to the Grand Master's Palace and walks you through its history before continuing along the Street of the Knights.",
      "A stop at a local ceramics workshop is built into the itinerary, giving a look at a craft with deep roots on the island — there's no obligation to buy, but it's worth having a little time and small notes on hand if you'd like a keepsake.",
    ],
    highlights: [
      "Guided time in hilltop Lindos, with its Acropolis views over St Paul's Bay",
      "Visit to the Byzantine Church of the Ascension in Lindos village",
      "Photo stop at Monte Smith on the return leg toward Rhodes Town",
      "Guided walk through the Grand Master's Palace and Street of the Knights",
      "Stop at a working ceramics studio to see the island's traditional craft",
    ],
    included: ["Professional guide for both Lindos and Rhodes Town sections", "Coach transportation throughout", "Ceramics workshop visit"],
    notIncluded: [
      "Food and drink — listed by the supplier as not included",
      "Any separate charges for climbing to the Acropolis of Lindos, if applicable on the day",
    ],
    portLogistics: RHODES_PORT_LOGISTICS,
    tips: [
      "Wear closed, flat-soled shoes — the supplier notes this tour is not wheelchair accessible and involves getting in and out of the coach at each stop",
      "Bring a hat and water; Lindos and the Acropolis climb have little shade",
      "This is a full five-hour day split across two very different sites — pace yourself for both",
    ],
    faqs: [
      {
        question: "Do we actually climb to the Acropolis of Lindos on this tour?",
        answer:
          "The itinerary is built around Lindos village and its Acropolis views; how much time is available for the climb itself depends on your group's pace on the day. Confirm the exact stops with your guide.",
      },
      {
        question: "Is lunch included?",
        answer:
          "No. The supplier lists food and beverage as not included on this tour, so plan to eat before or after, or bring snacks for the day.",
      },
      {
        question: "Is this a good first Rhodes excursion?",
        answer:
          "Yes — it's designed to cover both of the island's headline destinations, Lindos and the Old Town, in one outing, which suits passengers who only have one shore excursion booked.",
      },
    ],
    relatedExcursionSlugs: ["lindos-on-your-own", "exclusive-medieval-town-of-rhodes", "private-ancient-lindos-and-rhodes"],
    featured: true,
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/best-of-lindos-and-rhodes/eurhbest",
      productId: "eurhbest",
    },
    imageKey: "lindos",
  },

  {
    slug: "anthony-quinn-kallithea-traganou-cruise",
    title: "Rhodes Coast and Beach Escape",
    seoTitle: "Anthony Quinn Bay Cruise & Beach Escape",
    metaDescription:
      "Sail to Anthony Quinn Bay, Kallithea and Traganou Caves with swimming, snorkelling and onboard refreshments on this coastal Rhodes cruise.",
    category: "Beach and water experiences",
    badge: "relaxed-day-ashore",
    tagline: "Three of Rhodes' best-loved bays by boat, with swimming time built into the day.",
    duration: "6 Hours 30 Minutes",
    pace: "Moderate",
    groupType: "Standard",
    activityLevel: "Moderate",
    foodBeverage: "Cold appetizers, fruit, wine, beer and water included (per supplier)",
    locations: ["Anthony Quinn Bay", "Kallithea", "Traganou Caves", "Ladiko Bay"],
    bestFor: "Passengers who want swimming and coastal scenery rather than another walking tour",
    overview:
      "A boat-based day along Rhodes' east coast taking in Anthony Quinn Bay — the setting for parts of The Guns of Navarone — plus Kallithea's springs architecture and the sea caves at Traganou, with swim stops and refreshments served aboard.",
    body: [
      "After a short transfer from the pier, you board a sailing boat for the run down the coast. Anthony Quinn Bay's emerald water is the first swim stop, with time to snorkel or simply float in one of the island's most photographed coves.",
      "Ladiko Bay follows, where the boat anchors for appetizers, fresh fruit, wine, beer and water — the supplier includes this spread as part of the tour, so it's worth pacing your day around it rather than eating a large lunch beforehand.",
      "Traganou Bay closes the itinerary with snorkelling around small sea caves and rock formations, before the return sail back toward the port in time to reconnect with your ship's schedule.",
    ],
    highlights: [
      "Swim and snorkel stop in Anthony Quinn Bay's clear water",
      "Onboard refreshments — appetizers, fruit, wine, beer and water — anchored at Ladiko Bay",
      "Snorkelling around the sea caves at Traganou Bay",
      "A sailing-boat perspective on the coastline rather than a coach route",
    ],
    included: ["Sailing boat transport along the coast", "Snorkelling equipment (per supplier)", "Cold appetizers, fresh fruit, wine, beer and water aboard"],
    notIncluded: [
      "A full meal — the food included is described as appetizers and refreshments, not a sit-down lunch",
      "Alcohol for guests under the supplier's stated minimum drinking age of 21",
    ],
    portLogistics: RHODES_PORT_LOGISTICS,
    tips: [
      "Wear your swimsuit under your clothes and bring a towel — there's no changing room on board",
      "This is a boat trip, so the supplier notes it runs subject to weather conditions on the day",
      "The supplier states this tour is not wheelchair accessible and that infants and children each require their own seat by local law",
    ],
    faqs: [
      {
        question: "Is food actually included on this tour?",
        answer:
          "Per the supplier, yes — cold appetizers, fresh fruit, wine, beer and water are served aboard at Ladiko Bay, though this is a refreshment spread rather than a full meal.",
      },
      {
        question: "What is the minimum age to drink the included alcohol?",
        answer: "The supplier states the minimum age to consume alcohol on this tour is 21 years.",
      },
      {
        question: "Can this tour be cancelled for weather?",
        answer: "Yes — as a boat-based excursion, the supplier notes it is subject to weather conditions at the time of sailing.",
      },
    ],
    relatedExcursionSlugs: ["sea-kayaking-the-pirates-route", "rhodes-fishing-boat-trip", "private-lindos-and-beach"],
    featured: true,
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/cruise-anthony-quinn-kallithea-traganou-caves/eurhcruisetoantquin",
      productId: "eurhcruisetoantquin",
    },
    imageKey: "coast",
  },

  {
    slug: "rhodes-back-country-adventure",
    title: "Rhodes Back-Country Jeep Safari",
    seoTitle: "Rhodes Back-Country Jeep Safari Excursion",
    metaDescription:
      "Explore inland Rhodes by jeep — mountain villages, monasteries and panoramic viewpoints away from the coast, with a village lunch stop.",
    category: "Scenic island tours",
    tagline: "The mountainous, non-touristy side of Rhodes, reached by semi-private jeep.",
    duration: "7 Hours",
    pace: "Moderate",
    groupType: "Small",
    activityLevel: "Moderate",
    foodBeverage: "Lunch included (per supplier)",
    locations: ["Profitis Ilias", "Embonas"],
    bestFor: "Repeat visitors and anyone who wants to see rural Rhodes beyond the coast and the Old Town",
    overview:
      "A small-group jeep excursion into the wooded, mountainous interior of northern Rhodes, mixing on- and off-road driving with stops in small villages, monasteries and chapels most coach tours never reach, plus a lunch stop in a traditional village.",
    body: [
      "Vehicles carry up to six passengers each, which keeps the group loose enough to take quieter back roads through pine forest and farmland that larger coaches can't use. Your guides point out villages, monasteries and chapels along the way.",
      "A stop at a traditional village for lunch breaks up the driving and gives a look at local life away from the resort towns on the coast. Expect home-style Greek food rather than a formal restaurant setting.",
      "The route is designed to show off the north, east and west of the island from height, so allow for a full and fairly physical day in the vehicle even though there's little actual walking involved.",
    ],
    highlights: [
      "Off-road and back-road driving through Rhodes' mountainous, non-touristy interior",
      "Stops at small villages, monasteries and chapels along Profitis Ilias",
      "A village lunch included as part of the day",
      "Panoramic viewpoints over northern, eastern and western Rhodes",
    ],
    included: ["Semi-private jeep transport (up to six passengers per vehicle, per supplier)", "English-speaking guide", "Lunch at a traditional village"],
    notIncluded: ["Alcohol for guests under the supplier's stated minimum age of 18", "Any dietary substitutions not flagged in advance"],
    portLogistics: RHODES_PORT_LOGISTICS,
    tips: [
      "Tell the operator about any dietary restrictions before booking, as the supplier asks for this in advance",
      "The supplier does not recommend this tour for guests with motion sickness, mobility issues, fear of heights, back problems, or children under 7 (no baby seats provided)",
      "There are also stated height and weight guidelines — check these against the supplier's listing if they might apply to you",
    ],
    faqs: [
      {
        question: "Is this a good fit for anyone prone to car sickness?",
        answer: "The supplier specifically advises against this tour for guests with car sickness, given the mix of on- and off-road driving over several hours.",
      },
      { question: "Is lunch included?", answer: "Yes, per the supplier — a lunch stop at a traditional village is built into the seven-hour itinerary." },
      {
        question: "How many people are in each jeep?",
        answer: "The supplier describes this as a semi-private tour with up to six passengers per vehicle, rather than one large coach group.",
      },
    ],
    relatedExcursionSlugs: ["profitis-ilias-mountain-hike", "butterfly-valley-and-wine-tasting", "private-vehicle-full-day"],
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/rhodes-back-country-adventure/eurhjeepsaf",
      productId: "eurhjeepsaf",
    },
    imageKey: "scenic",
  },

  {
    slug: "lindos-on-your-own",
    title: "Lindos on Your Own Time",
    seoTitle: "Lindos on Your Own — Rhodes Shore Excursion",
    metaDescription: "Ride the scenic coast road to Lindos, then choose your own pace — the Acropolis, the beach, or the village's lanes and cafés.",
    category: "Lindos excursions",
    badge: "lindos-focus",
    tagline: "The transport and commentary to Lindos, then the rest of the day is yours to shape.",
    duration: "6 Hours 30 Minutes",
    pace: "Moderate",
    groupType: "Standard",
    activityLevel: "Moderate",
    foodBeverage: "Not included (per supplier)",
    locations: ["Lindos", "Acropolis of Lindos", "Lindos beach"],
    bestFor: "Independent travellers who want the scenic drive and drop-off handled, then freedom to choose their own Lindos day",
    overview:
      "This is transport and orientation to Lindos rather than a fully guided tour: a scenic coach ride along the east coast with commentary, followed by extended free time in the village to climb to the Acropolis, relax on the beach, shop, or eat, at your own pace.",
    body: [
      "The drive out of Rhodes Town follows the coast road, with your guide narrating the passing villages, bays and history rather than herding you between fixed stops. It's a more relaxed introduction than a tightly scheduled coach tour.",
      "Once in Lindos, you're set loose with a return time to remember. Most people either climb to the Acropolis for the views over the twin bays, head down to the beach to swim, or simply wander the whitewashed lanes and stop for coffee or lunch.",
      "Because the choice is yours, this suits mixed groups well — someone can climb the Acropolis steps while others swim or shop, and you regroup for the ride back to the ship.",
    ],
    highlights: [
      "Narrated coastal drive to Lindos rather than a rushed transfer",
      "Free time to choose your own pace — Acropolis, beach, shopping or a village lunch",
      "Works well for groups with mixed energy levels and interests",
      "Return coach transport with a confirmed pickup time",
    ],
    included: ["Return coach transport along the coast road", "Guide commentary during the drive", "Extended free time in Lindos village"],
    notIncluded: [
      "Food and drink in Lindos — not included by the supplier",
      "Any Acropolis of Lindos admission fee, if applicable — this is independent time, not a guided ticketed visit",
    ],
    portLogistics: RHODES_PORT_LOGISTICS,
    tips: [
      "Decide your priority — Acropolis, beach or village — before you arrive, since the supplier notes this tour is not wheelchair accessible and involves getting on and off the coach",
      "Bring cash for lunch, cafés or the beach, and swimwear if you plan to swim",
      "Note your return departure point and time carefully — this is independent time, so there's no guide chasing stragglers",
    ],
    faqs: [
      {
        question: "Is this a guided tour of Lindos or free time?",
        answer:
          "It's mainly free time. The supplier provides guided coach transport and commentary on the drive, then leaves you to explore Lindos — the Acropolis, beach or village — at your own pace.",
      },
      {
        question: "Is the Acropolis entrance fee included?",
        answer: "No. This is independent time in Lindos rather than a ticketed guided visit, so any Acropolis admission is your own arrangement.",
      },
      {
        question: "Can I just relax on the beach instead of sightseeing?",
        answer:
          "Yes — that's the point of the format. You can choose the beach, the Acropolis, or simply the village lanes and cafés, and switch between them within your allotted time.",
      },
    ],
    relatedExcursionSlugs: ["best-of-lindos-and-rhodes", "private-ancient-lindos", "private-lindos-and-beach"],
    featured: true,
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/lindos-on-your-own/eurhlindosoyo",
      productId: "eurhlindosoyo",
    },
    imageKey: "lindos",
  },

  {
    slug: "sea-kayaking-the-pirates-route",
    title: "Sea Kayaking Rhodes' Pirate Coast",
    seoTitle: "Sea Kayaking Excursion — Rhodes Pirate Coast",
    metaDescription: "Kayak sea caves and rock formations along Rhodes' east coast, with swim stops at Anthony Quinn Bay and a Greek picnic lunch.",
    category: "Beach and water experiences",
    tagline: "A hands-on paddle past sea caves and hidden coves, with lunch on the beach.",
    duration: "6 Hours",
    pace: "Moderate",
    groupType: "Small",
    activityLevel: "Moderate",
    foodBeverage: "Lunch included (per supplier)",
    locations: ["Anthony Quinn Bay", "Ladiko Bay", "Traganou Beach"],
    bestFor: "Active travellers who want to get on the water themselves rather than just view the coast from a boat or coach",
    overview:
      "A small-group sea kayaking outing along a stretch of coast associated with old pirate routes, mixing basic kayak instruction with swim and snorkel breaks and a Greek beach picnic at Traganou.",
    body: [
      "After a short transfer from the pier, guides run through kayaking basics before the group sets out along the coastline, working past small sea caves and rock formations that are only really accessible from the water.",
      "Swim and snorkel breaks are built in at Anthony Quinn Bay and Ladiko Bay, both known for very clear, calm water — a welcome rest between paddling stretches.",
      "The day ends with a Greek picnic lunch at Traganou Beach, with your guides sharing background on the coastline's history and marine environment as you eat.",
    ],
    highlights: [
      "Guided kayak instruction suitable for first-timers",
      "Paddling past sea caves and rock formations along the coast",
      "Swim and snorkel breaks at Anthony Quinn Bay and Ladiko Bay",
      "A traditional Greek picnic lunch at Traganou Beach",
    ],
    included: ["Kayak and snorkel equipment (per supplier)", "Guided instruction and small-group supervision", "Lunch at Traganou Beach"],
    notIncluded: [
      "Participation for children under the supplier's stated minimum age of 14",
      "Suitability for pregnant guests or those with back or neck injuries — the supplier excludes these guests from participating",
    ],
    portLogistics: RHODES_PORT_LOGISTICS,
    tips: [
      "The supplier requires participants to be able to kayak for up to 2.5 hours and sets a maximum weight limit of 230 lbs",
      "Guests under 18 must be accompanied by a parent or legal guardian, and all participants sign a waiver",
      "Bring a change of clothes for after the activity — you'll be wet from paddling and swimming",
    ],
    faqs: [
      {
        question: "Do I need kayaking experience?",
        answer:
          "No — the supplier includes guided instruction suitable for beginners, though you must be able to kayak continuously for up to 2.5 hours to take part.",
      },
      {
        question: "Is there a minimum age?",
        answer: "Yes. The supplier sets a minimum participation age of 14, and guests under 18 must be accompanied by a parent or legal guardian.",
      },
      { question: "Is lunch included?", answer: "Yes, per the supplier — a Greek picnic lunch is served at Traganou Beach as part of the tour." },
    ],
    relatedExcursionSlugs: ["anthony-quinn-kallithea-traganou-cruise", "rhodes-fishing-boat-trip", "profitis-ilias-mountain-hike"],
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/sea-kayaking-the-pirates-route/eurhkayak",
      productId: "eurhkayak",
    },
    imageKey: "kayak",
  },

  {
    slug: "butterfly-valley-and-wine-tasting",
    title: "Butterfly Valley and Rhodes Wine Tasting",
    seoTitle: "Butterfly Valley & Wine Tasting — Rhodes",
    metaDescription: "See thousands of moths in Rhodes' Butterfly Valley, then taste local wine, olive oil and honey at a family-run winery.",
    category: "Food and cultural experiences",
    badge: "food-culture",
    tagline: "A shaded valley thick with moths, followed by a proper sit-down tasting of local wine and produce.",
    duration: "5 Hours 30 Minutes",
    pace: "Moderate",
    groupType: "Standard",
    activityLevel: "Moderate",
    foodBeverage: "Not included; winery tasting included (per supplier)",
    locations: ["Butterfly Valley", "Filerimos", "a Rhodes winery"],
    bestFor: "Nature-minded travellers and anyone who wants a wine and food angle on their Rhodes day",
    overview:
      "A west-coast excursion pairing Petaloudes — known locally as Butterfly Valley for the thousands of Jersey Tiger moths that gather there in season — with a stop at one of the island's established wineries for wine, olive oil and honey tasting.",
    body: [
      "The valley itself is a shaded, stream-fed gorge that draws large numbers of Jersey Tiger moths in the warmer months. You can walk further into the valley on wooded paths or stay near the entrance in a café-lined clearing — either way, expect a cooler, greener corner of the island than the coast.",
      "From there the tour heads to a working winery on Rhodes' western side, where a tasting covers a handful of local wines alongside extra-virgin olive oil and thyme-scented honey, with the winemakers on hand to talk through what makes the island's produce distinctive.",
      "It's a lower-key day than the big historical circuits — more about slowing down in the countryside than covering monuments — and works well paired mentally with a separate Old Town visit on another call.",
    ],
    highlights: [
      "A walk through Petaloudes (Butterfly Valley) to see its seasonal moth population",
      "Choice of a deeper valley walk or a relaxed café stop near the entrance",
      "Guided tasting at a Rhodes winery — wine, olive oil and honey",
      "A quieter, nature-focused alternative to the island's historical tours",
    ],
    included: ["Guide for the valley and winery stops", "Transportation to Butterfly Valley and the winery", "Wine, olive oil and honey tasting at the winery"],
    notIncluded: [
      "A full meal — the supplier lists general food/beverage as not included",
      "Deeper access into Butterfly Valley beyond the entrance area, which the supplier notes carries an additional charge of around 5 EUR, payable on the day",
    ],
    portLogistics: RHODES_PORT_LOGISTICS,
    tips: [
      "The supplier sets a minimum drinking age of 21 for the wine tasting",
      "Wear flat, comfortable shoes for the valley paths",
      "Moth numbers vary seasonally — ask your guide what to expect if this is your main reason for booking",
    ],
    faqs: [
      {
        question: "Will we actually see butterflies (moths)?",
        answer:
          "Petaloudes is known for large seasonal gatherings of Jersey Tiger moths rather than classic butterflies; numbers vary through the year, so ask the operator about current conditions.",
      },
      {
        question: "Is the wine tasting included in the price?",
        answer: "Yes, per the supplier — the winery stop includes tastings of wine, olive oil and honey as part of the tour.",
      },
      {
        question: "Does it cost extra to walk further into the valley?",
        answer: "The supplier notes an additional charge of about 5 EUR per person, payable on the day, if you want to explore further into Butterfly Valley beyond the entrance area.",
      },
    ],
    relatedExcursionSlugs: ["a-taste-of-rhodes", "private-culinary-delights-of-rhodes", "rhodes-back-country-adventure"],
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/butterfly-valley-wine-tasting/eurhbutterflywine",
      productId: "eurhbutterflywine",
    },
    imageKey: "food",
  },

  {
    slug: "medieval-old-town-rhodes-walking-tour",
    title: "Medieval Rhodes and the Street of the Knights",
    seoTitle: "Medieval Old Town Rhodes Walking Tour",
    metaDescription: "Walk Rhodes Old Town's Jewish Quarter, Ippokratous Square, the Grand Master's Palace exterior and the Street of the Knights.",
    category: "Old Town and history",
    badge: "best-near-port",
    tagline: "A three-hour ground-level introduction to the Old Town's layered history, on foot.",
    duration: "3 Hours",
    pace: "Moderate",
    groupType: "Standard",
    activityLevel: "Moderate",
    foodBeverage: "Not included (per supplier)",
    locations: ["Old Town", "Jewish Quarter", "Ippokratous Square", "Grand Master's Palace", "Street of the Knights"],
    bestFor: "First-time visitors who want an accessible, near-port walking introduction to the Old Town",
    overview:
      "A ground-level walking tour of the Old Town covering its Classical, Ottoman and Italian layers, from the Jewish Quarter and Ippokratous Square to the Grand Master's Palace and the Street of the Knights, with optional museum stops along the way.",
    body: [
      "Your English-speaking guide leads the group into the Old Town's cobbled lanes, tracing how the medieval Knights' city absorbed Ottoman and Italian influences over the centuries. The route passes through the historic Jewish Quarter and the busy Ippokratous Square with its old medieval inns.",
      "At the Grand Master's Palace, the guide covers its history as fortress, palace and headquarters of the Knights of Rhodes — the Archaeological and Palace museums are optional add-ons rather than standard inclusions on this itinerary, with entrance fees payable on the day if you choose to go in.",
      "The Street of the Knights closes out the walk, its former crusader inns now housing shops and offices. The tour ends with free time to continue exploring, shop, or find lunch in the Old Town on your own.",
    ],
    highlights: [
      "Walking route through the Jewish Quarter and Ippokratous Square",
      "History of the Grand Master's Palace from the outside, with optional interior entry",
      "The Street of the Knights and its former crusader inns",
      "Free time at the end to continue exploring the Old Town independently",
    ],
    included: ["English-speaking local guide", "Walking tour of the Old Town's main historic quarters"],
    notIncluded: [
      "Museum entrance fees — the supplier notes the Archaeological Museum (about 8 EUR per person) and the Grand Master's Palace (about 6 EUR per person) are optional and payable on the day",
      "Food and drink during the tour or free-time period",
    ],
    portLogistics: RHODES_PORT_LOGISTICS,
    tips: [
      "The supplier notes museum prices can change at any time — treat the figures above as a guide, not a guarantee",
      "Cover your knees and shoulders if you plan to visit any religious sites along the way",
      "Wear flat, sturdy shoes for cobblestones and uneven surfaces — the supplier states this tour is not wheelchair accessible",
    ],
    faqs: [
      {
        question: "Are the Palace and Archaeological Museum included?",
        answer:
          "No. The supplier lists both as optional: you can visit with your guide and pay the entrance fee directly on the day, or use that time for free exploration instead.",
      },
      {
        question: "How much does museum entry cost?",
        answer: "Per the supplier, roughly 8 EUR per person for the Archaeological Museum and 6 EUR per person for the Grand Master's Palace, though prices can change.",
      },
      {
        question: "Is this tour suitable for guests with mobility issues?",
        answer: "The supplier states it is not wheelchair accessible due to cobblestones, uneven surfaces, inclines and steps throughout the Old Town.",
      },
    ],
    relatedExcursionSlugs: ["exclusive-medieval-town-of-rhodes", "rhodes-city-old-town-segway", "private-rhodes-city-tour"],
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/medieval-old-town-rhodes-walking-tour/eurhmedoldwalk",
      productId: "eurhmedoldwalk",
    },
    imageKey: "old-town",
  },

  {
    slug: "a-taste-of-rhodes",
    title: "A Taste of Rhodes: Village Food and Coffee Culture",
    seoTitle: "A Taste of Rhodes — Small-Group Food Excursion",
    metaDescription: "An intimate small-group food tour to Apollona village — a women-run co-op, a traditional kafeneio, and a village lunch.",
    category: "Food and cultural experiences",
    badge: "food-culture",
    tagline: "An intimate, minibus-sized look at rural Rhodes through its food, coffee and co-ops.",
    duration: "6 Hours",
    pace: "Relaxed",
    groupType: "Small",
    activityLevel: "Easy",
    foodBeverage: "Lunch included (per supplier)",
    locations: ["Profitis Ilias", "Apollona village"],
    bestFor: "Small groups who want an unhurried, food-led look at rural village life away from the coast",
    overview:
      "A small, minibus-based tour to the untouched foothill village of Apollona, visiting a women-run agricultural co-op, a traditional Greek kafeneio for coffee, and finishing with a home-style lunch — capped at a small group size for a more personal pace.",
    body: [
      "The drive climbs into the foothills of Profitis Ilias toward Apollona, a village well off the main coastal tourist routes. Group numbers are kept small, which suits the unhurried, conversational style of the day.",
      "At the local agricultural co-op, run by women from the village, you see how traditional produce and delicacies are made and get a sense of how the co-op supports the local economy — a different angle on Rhodes than temples or beaches.",
      "A stop at a traditional kafeneio follows, with Greek coffee prepared the old way on hot sand, among a room full of local antiques. The day closes with a village lunch, giving a genuine taste of rural Rhodes cooking.",
    ],
    highlights: [
      "Small-group format for a more personal, conversational pace",
      "Visit to a women-run agricultural co-op in Apollona",
      "Traditional Greek coffee prepared on hot sand at a village kafeneio",
      "A home-style village lunch included in the tour",
    ],
    included: ["Private minibus transport", "Guide for the village and co-op visit", "Lunch"],
    notIncluded: ["Extra food or drink purchases beyond the included lunch"],
    portLogistics: RHODES_PORT_LOGISTICS,
    tips: [
      "This is a relaxed, easy-paced day — a good choice if you want food and culture without much walking",
      "Bring a hat and sunscreen for the village stops, which have limited shade",
      "The supplier notes guests must be able to get in and out of the transportation; this tour is not wheelchair accessible",
    ],
    faqs: [
      {
        question: "How small is the group on this tour?",
        answer: "The supplier describes it as limited to a small number of guests for an intimate experience, travelling together in a private minibus rather than a large coach.",
      },
      { question: "Is lunch included?", answer: "Yes, per the supplier — a village lunch is included as part of the six-hour tour." },
      {
        question: "Is this tour physically demanding?",
        answer: "No — the supplier rates it Easy, and it's built around village visits and tastings rather than sustained walking or hiking.",
      },
    ],
    relatedExcursionSlugs: ["butterfly-valley-and-wine-tasting", "private-culinary-delights-of-rhodes", "rhodes-back-country-adventure"],
    featured: true,
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/a-taste-of-rhodes/eurhcook",
      productId: "eurhcook",
    },
    imageKey: "food",
  },

  {
    slug: "rhodes-fishing-boat-trip",
    title: "Traditional Rhodes Fishing Boat Trip",
    seoTitle: "Rhodes Fishing Boat Trip Shore Excursion",
    metaDescription: "Join a veteran captain on a traditional Rhodes fishing boat, with time to fish, swim or sunbathe and a grilled-fish lunch included.",
    category: "Beach and water experiences",
    badge: "relaxed-day-ashore",
    tagline: "A slow morning on a real working fishing boat, lunch included.",
    duration: "4 Hours",
    pace: "Relaxed",
    groupType: "Small",
    activityLevel: "Easy",
    foodBeverage: "Grilled fish lunch included (per supplier)",
    locations: ["Mediterranean waters off Rhodes"],
    bestFor: "Families and small groups who want a relaxed, low-key morning on the water rather than an active watersport",
    overview:
      "A small-group outing aboard a registered traditional fishing boat, led by a captain with decades of experience, mixing hands-on fishing technique with time to swim or simply relax for those not interested in fishing.",
    body: [
      "Once aboard, the captain — with more than 35 years on these waters, per the supplier — talks through traditional Mediterranean fishing methods and lets guests try their hand at the line if they'd like to.",
      "It's a genuinely family-friendly format: non-fishers can sunbathe on deck or take a swim stop, so the boat suits mixed groups where not everyone wants to fish.",
      "Lunch is part of the deal — a grilled fish plate with salad, bread, fruit, water and soft drinks — served aboard, which the supplier notes may even include the day's actual catch.",
    ],
    highlights: [
      "Traditional fishing technique from a captain with decades of local experience",
      "Family-friendly pacing — swim or sunbathe if you'd rather not fish",
      "A grilled fish lunch served aboard, included in the price",
      "A shorter four-hour format that suits an easier port day",
    ],
    included: ["Traditional fishing boat and equipment", "Grilled fish lunch with salad, bread, fruit, water and soft drinks"],
    notIncluded: ["Any catch beyond what's prepared for the included lunch", "Alternative activities on days when weather rules out sailing"],
    portLogistics: RHODES_PORT_LOGISTICS,
    tips: [
      "This is a weather-dependent boat trip — the supplier notes it runs subject to conditions at the time of sailing",
      "Bring sun protection since most of the time is spent on open deck",
      "The supplier states this tour is not wheelchair accessible and that all guests, including infants and children, require their own seat by local law",
    ],
    faqs: [
      {
        question: "Do I need fishing experience to join?",
        answer: "No. The captain guides technique for anyone who wants to try, and the supplier notes non-fishing guests are welcome to simply swim or sunbathe instead.",
      },
      {
        question: "Is lunch really included?",
        answer: "Yes, per the supplier — a grilled fish lunch with salad, bread, fruit, water and soft drinks is served as part of the trip.",
      },
      {
        question: "What happens if the weather is bad?",
        answer: "As a boat-based excursion, the supplier notes the trip is subject to weather conditions at the time of sailing.",
      },
    ],
    relatedExcursionSlugs: ["sea-kayaking-the-pirates-route", "anthony-quinn-kallithea-traganou-cruise", "private-lindos-and-beach"],
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/rhodes-fishing-boat-trip/eurhfishboat",
      productId: "eurhfishboat",
    },
    imageKey: "harbour",
  },

  {
    slug: "rhodes-city-old-town-segway",
    title: "Rhodes Old Town by Segway",
    seoTitle: "Rhodes Old Town Segway Mini Tour",
    metaDescription: "Cover more of Rhodes Old Town in less time on a small-group Segway Mini tour past the Grand Master's Palace and Street of the Knights.",
    category: "Old Town and history",
    badge: "best-near-port",
    tagline: "The Old Town's landmarks covered on wheels, in under two hours.",
    duration: "1 Hour 30 Minutes",
    pace: "Moderate",
    groupType: "Small",
    activityLevel: "Moderate",
    foodBeverage: "Not included (per supplier)",
    locations: ["Mandraki", "Old Town", "Grand Master's Palace", "Street of the Knights", "Archaeological Museum"],
    bestFor: "Short port calls, or anyone who'd rather glide than walk through the Old Town's cobbled lanes",
    overview:
      "A small-group Segway Mini tour through the Old Town's cobbled streets — the Jewish Quarter, Ippokratous Square and the Street of the Knights — covering more ground than a walking tour in a tight ninety-minute window.",
    body: [
      "After a safety briefing and helmet fitting, guides lead the small group through the Old Town on Segway Minis — a two-wheeled, handlebar-free format that takes a short practice run before you set off.",
      "The route weaves through the Jewish Quarter and Ippokratous Square before reaching the Grand Master's Palace, where the guide covers its history as a Gothic fortress and former Knights' headquarters, and on to the Street of the Knights and the Archaeological Museum exterior.",
      "Because it moves faster than walking, this format suits shorter port windows or anyone who wants a taster of the Old Town's landmarks without a long walking commitment.",
    ],
    highlights: [
      "Small-group Segway Mini tour through the Old Town's cobbled streets",
      "Stops at the Jewish Quarter, Ippokratous Square and the Street of the Knights",
      "History of the Grand Master's Palace and the Archaeological Museum from outside",
      "A fast-paced ninety-minute format that suits a tight schedule",
    ],
    included: ["Segway Mini rental and safety helmet", "Guide and safety briefing"],
    notIncluded: ["Food and drink during the tour", "Interior museum or palace entry — this is an exterior-focused route"],
    portLogistics: RHODES_PORT_LOGISTICS,
    tips: [
      "The supplier notes the Segway Mini has no handlebars, so a short practice period is built in before you set off",
      "Wear closed, flat-soled shoes",
      "By local law, the supplier requires every participant to have their own seat/place accounted for at booking",
    ],
    faqs: [
      {
        question: "Do I need prior Segway experience?",
        answer: "No — the tour includes a safety briefing and practice period before the group sets off, and helmets are provided.",
      },
      {
        question: "Does the Segway have handlebars?",
        answer: "No. The supplier notes this is a Segway Mini format without handlebars, which is part of why a brief practice session is included.",
      },
      {
        question: "Is this a good option for a short port call?",
        answer: "Yes — at ninety minutes, it's one of the fastest ways to see the Old Town's main landmarks without a long walking commitment.",
      },
    ],
    relatedExcursionSlugs: ["medieval-old-town-rhodes-walking-tour", "exclusive-medieval-town-of-rhodes", "private-rhodes-city-tour"],
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/rhodes-city-old-town-segway-mini/eurhctyoldseg",
      productId: "eurhctyoldseg",
    },
    imageKey: "old-town",
  },

  {
    slug: "profitis-ilias-mountain-hike",
    title: "Profitis Ilias Mountain Hike",
    seoTitle: "Profitis Ilias Mountain Hike — Rhodes",
    metaDescription: "Hike shaded mountain paths from Salakos toward Profitis Ilias, with Aegean views, an Italian-era villa and a Byzantine church.",
    category: "Scenic island tours",
    tagline: "A genuine woodland hike into the island's highlands, with sea views from the top.",
    duration: "5 Hours 30 Minutes",
    pace: "Moderate",
    groupType: "Small",
    activityLevel: "Moderate",
    foodBeverage: "Snack and beverage included (per supplier)",
    locations: ["Salakos", "Profitis Ilias"],
    bestFor: "Travellers who want a real walk in nature rather than a coach-and-photo-stop day",
    overview:
      "A guided small-group hike starting from the village of Salakos, climbing shaded mountain paths through Profitis Ilias to Italian-era buildings and Aegean viewpoints, before returning the same way.",
    body: [
      "The hike begins in Salakos and follows shaded paths up through the mountain's forest cover — a genuinely different pace and setting from Rhodes' coastal excursions, with fresh air and gradual, steady climbing rather than a single steep push.",
      "Higher up, the route reaches the Elafos and Elafina hotels, relics of the Italian colonial period, along with the historic Villa de Vecci and an old Byzantine church — small, atmospheric stops that reward the climb.",
      "From the top, views stretch out over the Aegean toward the Turkish coast and other islands on a clear day, before the group retraces its steps back down to Salakos.",
    ],
    highlights: [
      "A genuine forest hike rather than a coach tour with photo stops",
      "Italian-era buildings including the Elafos and Elafina hotels",
      "The historic Villa de Vecci and an old Byzantine church",
      "Aegean views toward Turkey and neighbouring islands from the summit area",
    ],
    included: ["Guide for the hike", "Transportation to and from Salakos", "Snack and beverage"],
    notIncluded: ["A full meal — only a snack and beverage are included, per the supplier"],
    portLogistics: RHODES_PORT_LOGISTICS,
    tips: [
      "The supplier sets a minimum age of 8 and a maximum age of 75 for participants",
      "Wear closed-toe shoes and bring a waterproof top layer in spring or autumn",
      "The supplier does not recommend this hike for guests with limited mobility",
    ],
    faqs: [
      {
        question: "How difficult is this hike?",
        answer: "The supplier rates it Moderate — a sustained uphill walk on shaded paths, suitable for reasonably fit guests but not recommended for those with limited mobility.",
      },
      { question: "Is there an age limit?", answer: "Yes. The supplier sets a minimum participation age of 8 and a maximum of 75." },
      {
        question: "Is food included?",
        answer: "A snack and beverage are included per the supplier, though this is not a full meal — eat beforehand if you'll want more.",
      },
    ],
    relatedExcursionSlugs: ["rhodes-back-country-adventure", "butterfly-valley-and-wine-tasting", "sea-kayaking-the-pirates-route"],
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/profitis-ilias-mountain-hike/eurhhikeprofit",
      productId: "eurhhikeprofit",
    },
    imageKey: "scenic",
  },

  {
    slug: "private-ancient-lindos",
    title: "Private Ancient Lindos Half-Day",
    seoTitle: "Private Ancient Lindos Shore Excursion",
    metaDescription: "A private, flexible half-day to Lindos and its Acropolis, with a professionally trained guide and departure times built around your ship.",
    category: "Lindos excursions",
    badge: "private-experience",
    tagline: "Lindos and its Acropolis, on a private schedule built around your ship.",
    duration: "3 Hours 30 Minutes",
    pace: "Active",
    groupType: "Private",
    activityLevel: "Difficult",
    foodBeverage: "Not included (per supplier)",
    locations: ["Lindos", "Acropolis of Lindos", "Rhodes Town"],
    bestFor: "Travellers who want Lindos and its Acropolis without joining a large coach group, and with flexible timing",
    overview:
      "A private half-day to Lindos with a professionally trained guide, covering the village's cobbled streets and courtyards and the climb to the Acropolis, with flexible departure times to suit your ship's schedule.",
    body: [
      "With a private guide rather than a coach group, the pace through Lindos is entirely up to you — more time in the narrow lanes and courtyards if that's your interest, or a faster route straight up to the Acropolis if time is tighter.",
      "The Acropolis itself combines a Byzantine fort with Greek temple ruins and sweeping views over St Paul's Bay, a site closely tied to the arrival of Christianity on Rhodes. The supplier notes the climb involves inclines, several flights of steps and a long unrailed staircase to the castle.",
      "Because departure times are flexible, this suits passengers whose ship schedule doesn't line up neatly with fixed-departure group tours, or who simply prefer a private pace.",
    ],
    highlights: [
      "Private guide and flexible departure timing built around your ship",
      "Time in Lindos' narrow cobbled streets and historic courtyards",
      "Guided visit to the Acropolis of Lindos and its Byzantine fort remains",
      "Views over St Paul's Bay from the Acropolis heights",
    ],
    included: ["Private, professionally trained guide", "Transportation from the cruise pier", "Flexible half-day departure timing"],
    notIncluded: ["Food and drink — not included per the supplier", "Any Acropolis of Lindos entrance fee, unless separately confirmed with your booking"],
    portLogistics: RHODES_PORT_LOGISTICS,
    tips: [
      "The supplier notes the climb to the Acropolis includes a long, unrailed flight of stairs — plan accordingly if heights or steps are a concern",
      "Wear flat, sensible walking shoes for paved, cobblestone and packed-dirt surfaces",
      "Confirm your preferred departure window in advance since this tour offers flexible timing",
    ],
    faqs: [
      {
        question: "How is this different from the standard Lindos tours?",
        answer: "This is a private tour with a dedicated guide and flexible departure times, rather than a fixed-schedule coach group — useful if your ship's timing is unusual or you simply prefer a private pace.",
      },
      {
        question: "How strenuous is the Acropolis climb?",
        answer: "The supplier rates this tour Difficult and notes several flights of steps, inclines and a long staircase without a handrail leading to the castle.",
      },
      {
        question: "Is Acropolis admission included?",
        answer: "The supplier does not list an included entrance fee for this tour — confirm ticketing arrangements with your booking before travelling.",
      },
    ],
    relatedExcursionSlugs: ["private-ancient-lindos-and-rhodes", "lindos-on-your-own", "private-lindos-and-beach"],
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/lindos-ancient-rhodes/eurhtcalindo",
      productId: "eurhtcalindo",
    },
    imageKey: "lindos",
  },

  {
    slug: "private-ancient-lindos-and-rhodes",
    title: "Private Ancient Lindos and Rhodes Full Day",
    seoTitle: "Private Lindos & Rhodes Full-Day Excursion",
    metaDescription: "A private full day pairing Lindos' Acropolis with Rhodes Old Town's Palace and Street of the Knights, plus a Greek lunch with wine.",
    category: "Lindos excursions",
    badge: "rhodes-essential",
    tagline: "Both of Rhodes' headline destinations, privately guided, in a single flexible full day.",
    duration: "8 Hours",
    pace: "Active",
    groupType: "Private",
    activityLevel: "Difficult",
    foodBeverage: "Greek lunch with wine included (per supplier)",
    locations: ["Lindos", "Acropolis of Lindos", "Old Town", "Grand Master's Palace", "Street of the Knights"],
    bestFor: "Passengers with a full port day who want Lindos and the Old Town covered privately rather than split across two separate tours",
    overview:
      "A private, full-day combination of Lindos and Rhodes Old Town, with a dedicated guide, a seaside Greek lunch with wine included, and flexible departure times between roughly 7:30 AM and 7:00 PM.",
    body: [
      "The day typically opens with Lindos, exploring its Acropolis — with Byzantine fort remains and Greek temple ruins above St Paul's Bay — and the village's whitewashed lanes below, at whatever pace your group prefers.",
      "A seaside Greek lunch with wine, included as part of the tour, breaks up the day between the two main sites, giving a proper sit-down meal rather than a quick stop.",
      "The Old Town section follows, with a walking tour through the Palace of the Grand Masters — including a long staircase to its second-floor rooms — and down the Street of the Knights, before returning to the ship with flexible timing built around your schedule.",
    ],
    highlights: [
      "Private, full-day combination of Lindos and the Old Town in one guided itinerary",
      "Guided time at the Acropolis of Lindos, with its Byzantine and Greek ruins",
      "A seaside Greek lunch with wine included in the tour price",
      "Walking tour of the Grand Master's Palace and the Street of the Knights",
    ],
    included: ["Private guide for the full day", "Transportation between Lindos and Rhodes Town", "A typical Greek lunch with wine"],
    notIncluded: ["Any Acropolis of Lindos or museum entrance fees, unless separately confirmed"],
    portLogistics: RHODES_PORT_LOGISTICS,
    tips: [
      "This is a long, active day — the supplier rates it Difficult due to the Acropolis climb and the Palace's second-floor staircase",
      "Wear flat, sensible walking shoes for cobblestones and uneven surfaces at both sites",
      "Ask about departure flexibility if you want the day arranged around your ship's specific hours",
    ],
    faqs: [
      {
        question: "Is this tour too long for a shorter port call?",
        answer: "At around eight hours covering two major sites, this suits a full port day; for a shorter call, consider the half-day private Lindos tour or the Old Town walking tour instead.",
      },
      { question: "Is lunch included?", answer: "Yes, per the supplier — a typical Greek lunch with wine is included as part of this full-day itinerary." },
      {
        question: "How physically demanding is the day?",
        answer: "The supplier rates this tour Difficult, citing the Acropolis climb's unrailed stairs and a long double staircase to the Palace's upper rooms.",
      },
    ],
    relatedExcursionSlugs: ["private-ancient-lindos", "best-of-lindos-and-rhodes", "private-rhodes-highlights"],
    featured: true,
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/ancient-lindos-rhodes/eurhtcalinot",
      productId: "eurhtcalinot",
    },
    imageKey: "lindos",
  },

  {
    slug: "private-culinary-delights-of-rhodes",
    title: "Private Rhodes Culinary Workshop and Tasting",
    seoTitle: "Private Culinary Delights of Rhodes Tour",
    metaDescription: "A private tour combining Rhodes Old Town sights with a hands-on taverna cooking class and a tasting of your own Greek dishes.",
    category: "Food and cultural experiences",
    badge: "food-culture",
    tagline: "Sightseeing in the morning, then cook and taste your own Greek lunch.",
    duration: "5 Hours",
    pace: "Moderate",
    groupType: "Private",
    activityLevel: "Moderate",
    foodBeverage: "Lunch with Greek wine included (per supplier)",
    locations: ["Monte Smith", "Mandraki", "Old Town", "Grand Master's Palace", "Street of the Knights"],
    bestFor: "Food-focused travellers who want a private, hands-on cooking element alongside classic Old Town sightseeing",
    overview:
      "A private tour that pairs Rhodes' cultural landmarks — Monte Smith, the Grand Master's Palace and the Street of the Knights — with a hands-on cooking session at a local taverna, finishing with a tasting of the dishes you helped prepare, alongside Greek wine.",
    body: [
      "The day opens with a private sightseeing loop from Monte Smith's panoramic views down into the Old Town, taking in the Palace of the Grand Masters and the Street of the Knights and its former crusader inns.",
      "The focus then shifts to food: at a local taverna, you learn to prepare a handful of classic Greek dishes under guidance, rather than simply watching a demonstration.",
      "The tasting session at the end lets you sit down to the dishes you've made, paired with local wine — a more participatory alternative to a standard restaurant lunch stop.",
    ],
    highlights: [
      "Private sightseeing covering Monte Smith, the Grand Master's Palace and the Street of the Knights",
      "A hands-on cooking session preparing classic Greek dishes at a local taverna",
      "A sit-down tasting of your own cooking, paired with Greek wine",
      "Flexible private timing rather than a fixed group schedule",
    ],
    included: ["Private guide for the sightseeing portion", "Cooking class at a local taverna", "Lunch featuring traditional Greek dishes and Greek wine"],
    notIncluded: ["Any museum or palace interior entrance fees not part of the standard route"],
    portLogistics: RHODES_PORT_LOGISTICS,
    tips: [
      "Let the operator know about dietary restrictions in advance so the cooking menu can be adjusted",
      "Wear comfortable, flat-soled shoes — the sightseeing portion covers paved, cobblestone and packed-dirt surfaces",
      "The supplier notes a double flight of stairs to reach the Palace's main rooms if that's included on your route",
    ],
    faqs: [
      {
        question: "Do we actually cook the food ourselves?",
        answer: "Yes — the supplier describes a hands-on session learning to prepare classic Greek dishes at a local taverna, followed by a tasting of what you've made.",
      },
      { question: "Is wine included with the tasting?", answer: "Yes, per the supplier — the lunch tasting includes traditional Greek dishes paired with Greek wine." },
      {
        question: "Can dietary restrictions be accommodated?",
        answer: "This is a private tour, so it's worth flagging allergies or dietary needs when booking so the cooking session can be adapted.",
      },
    ],
    relatedExcursionSlugs: ["a-taste-of-rhodes", "butterfly-valley-and-wine-tasting", "private-rhodes-city-tour"],
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/culinary-delights-group-rhodes/eurhtcaculin",
      productId: "eurhtcaculin",
    },
    imageKey: "food",
  },

  {
    slug: "private-guide-vehicle-full-day",
    title: "Private Rhodes Island Discovery",
    seoTitle: "Private Guide & Vehicle Full Day — Rhodes",
    metaDescription: "Design your own full-day Rhodes itinerary with a private English-speaking guide and vehicle, from the Acropolis to quiet beaches.",
    category: "Private Rhodes tours",
    badge: "private-experience",
    tagline: "A private guide, a vehicle, and a full day to design your own Rhodes itinerary.",
    duration: "8 Hours",
    pace: "Relaxed",
    groupType: "Private",
    activityLevel: "Easy",
    foodBeverage: "Not included (per supplier)",
    locations: ["Lindos", "Acropolis of Lindos", "Grand Master's Palace"],
    bestFor: "Travellers who want full control over their itinerary with a knowledgeable guide, rather than a fixed route",
    overview:
      "A private, English-speaking guide and vehicle for a full day, letting you set your own pace and priorities across Rhodes' ancient sites and beaches rather than following a preset coach itinerary — vehicles are available for groups from a few people up to larger parties.",
    body: [
      "Because the itinerary is genuinely open, the day can lean however you like: more time at the Acropolis of Rhodes examining the Temple of Apollo and ancient stadium, a longer stop at the Palace of the Grand Masters, or extra beach time if the weather's good.",
      "The supplier notes vehicles are available to suit different group sizes, from small parties up to larger groups of around 49 guests, which makes this format practical for anything from a couple to an extended family or friend group.",
      "Because time is genuinely at leisure and admissions aren't bundled in, this suits travellers who know roughly what they want to see and prefer flexibility over a fixed script.",
    ],
    highlights: [
      "Fully private guide and vehicle for the whole day",
      "Itinerary built around your priorities — Acropolis, Palace, beaches or a mix",
      "Vehicle sizing available for groups from a handful of guests up to larger parties",
      "No fixed group schedule to work around",
    ],
    included: ["Private English-speaking guide", "Private vehicle for the day"],
    notIncluded: ["Admission fees to any sites visited — the supplier states these are not included", "Food or beverage during the day"],
    portLogistics: RHODES_PORT_LOGISTICS,
    tips: [
      "Come with a rough priority list — this format rewards knowing what you want to see rather than expecting a set route",
      "Cover shoulders and knees if a religious site is on your plan",
      "Wear flat, comfortable shoes for cobblestones and uneven ground at historic sites",
    ],
    faqs: [
      {
        question: "Can we build our own itinerary?",
        answer: "Yes — this is a private guide-and-vehicle format, so the route and pacing are genuinely up to you rather than fixed in advance.",
      },
      { question: "Are entrance fees included?", answer: "No. The supplier states there are no admission fees, food or beverage included in the tour price." },
      {
        question: "How many people can travel together?",
        answer: "The supplier notes vehicles are available to suit groups of various sizes, from a few passengers up to larger parties — ask about options for your specific group.",
      },
    ],
    relatedExcursionSlugs: ["private-vehicle-full-day", "private-rhodes-highlights", "private-ancient-lindos-and-rhodes"],
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/private-guide-and-vehicle-full-day-rhodes/eurhpvtguidefull",
      productId: "eurhpvtguidefull",
    },
    imageKey: "private",
  },

  {
    slug: "private-guide-vehicle-half-day",
    title: "Private Rhodes Half-Day with Guide and Vehicle",
    seoTitle: "Private Guide & Vehicle Half Day — Rhodes",
    metaDescription: "A private half-day with an English-speaking guide and vehicle to the Acropolis, Filerimos or a Rhodes beach, on your own schedule.",
    category: "Private Rhodes tours",
    badge: "private-experience",
    tagline: "Half a day, a private guide and driver, and your own choice of stops.",
    duration: "4 Hours",
    pace: "Relaxed",
    groupType: "Private",
    activityLevel: "Easy",
    foodBeverage: "Not included (per supplier)",
    locations: ["Acropolis of Rhodes", "Filerimos", "a Rhodes beach"],
    bestFor: "Shorter port calls where you still want a private, flexible outing rather than a fixed group tour",
    overview:
      "A private English-speaking guide and vehicle for a shorter four-hour window, well suited to a mix of the Acropolis of Rhodes, the ancient site at Filerimos Hill, or simply relaxing at a beach like Oasis, with the pacing entirely up to you.",
    body: [
      "In a compact four-hour window, the day can be shaped around one or two priorities rather than trying to cover everything — commonly the Acropolis of Rhodes, Filerimos Hill's ancient remains and Roman-era greenery at Parc Rodini, or simply time on a beach.",
      "Because there's no fixed script, you can linger somewhere that interests you and skip what doesn't, which suits nature lovers, photographers, or anyone who wants a slower morning or afternoon rather than a checklist.",
      "As with the full-day version, vehicles are sized to different group counts, and admissions and food are not part of the package.",
    ],
    highlights: [
      "Private English-speaking guide and driver for a half-day window",
      "Flexible choice between the Acropolis, Filerimos Hill or beach time",
      "Vehicle sizing available for different group counts",
      "No fixed itinerary — spend more time where you want",
    ],
    included: ["Private English-speaking guide", "Private vehicle for the half-day"],
    notIncluded: ["Admission fees to any sites visited", "Food or beverage during the tour"],
    portLogistics: RHODES_PORT_LOGISTICS,
    tips: [
      "Pick one or two priorities rather than trying to fit everything into four hours",
      "Bring a swimsuit if beach time is part of your plan",
      "Wear flat, comfortable shoes for uneven ground at historic sites",
    ],
    faqs: [
      {
        question: "Can this tour include beach time instead of sightseeing?",
        answer: "Yes — the itinerary is flexible, and a beach stop such as Oasis beach can replace or supplement historic sites depending on your preference.",
      },
      {
        question: "Is this enough time to see the Acropolis and Filerimos both?",
        answer: "It's possible but tight in four hours; most groups pick one as the priority and add the other only if time allows.",
      },
      { question: "Are entrance fees included?", answer: "No. The supplier states there are no admission fees, food or beverage included in the tour price." },
    ],
    relatedExcursionSlugs: ["private-guide-vehicle-full-day", "private-rhodes-highlights", "private-vehicle-half-day"],
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/private-guide-and-vehicle-half-day-rhodes/eurhpvtdriguide",
      productId: "eurhpvtdriguide",
    },
    imageKey: "private",
  },

  {
    slug: "private-lindos-and-beach",
    title: "Private Lindos and Beach Day",
    seoTitle: "Private Lindos and Beach Shore Excursion",
    metaDescription: "A private half-day combining Lindos' Acropolis and cobbled lanes with relaxed time at a Rhodes beach, paced to suit your group.",
    category: "Lindos excursions",
    badge: "private-experience",
    tagline: "History in Lindos, then a proper stretch of beach time — privately paced.",
    duration: "5 Hours 30 Minutes",
    pace: "Moderate",
    groupType: "Private",
    activityLevel: "Moderate",
    foodBeverage: "Not included (per supplier)",
    locations: ["Lindos", "Acropolis of Lindos", "a Rhodes beach"],
    bestFor: "Groups who want Lindos' history and a real swim stop in the same private outing",
    overview:
      "A private tour combining Lindos village and its Acropolis with genuine time at one of Rhodes' beaches, giving both history and relaxation in one outing rather than splitting them across separate tours.",
    body: [
      "The Lindos portion covers the village's narrow cobbled streets, courtyards and ancient mosaics, along with the Byzantine Church of the Ascension, before or after time at the Acropolis above, depending on how your guide sequences the day.",
      "The beach stop that follows is a genuine unwind rather than a brief photo stop — time for water sports, a meal at a local restaurant, or simply relaxing on the sand, on your own private schedule.",
      "Because it's private, the balance between history and beach time can be adjusted to your group's preference on the day.",
    ],
    highlights: [
      "Private guided time in Lindos village and at the Acropolis",
      "Visit to the Byzantine Church of the Ascension",
      "A genuine beach stop with time to swim, eat or relax",
      "Flexible balance of sightseeing and beach time, set by your group",
    ],
    included: ["Private guide", "Transportation to Lindos and the beach"],
    notIncluded: ["Food and drink at the beach or in Lindos", "Water sports equipment rental at the beach, unless separately arranged"],
    portLogistics: RHODES_PORT_LOGISTICS,
    tips: [
      "Bring your swimsuit under your clothes and a towel for the beach portion",
      "Wear flat, sensible shoes for cobblestones and uneven terrain in Lindos",
      "Cover shoulders and knees if visiting the Church of the Ascension",
    ],
    faqs: [
      {
        question: "How is the time split between Lindos and the beach?",
        answer: "As a private tour, the balance is flexible and can be adjusted with your guide on the day, though both elements are included in the standard itinerary.",
      },
      {
        question: "Is this tour wheelchair accessible?",
        answer: "The supplier states it is not, due to varied terrain including cobblestones, uneven surfaces, sand and steps at the sites visited.",
      },
      {
        question: "Do we need to bring our own beach gear?",
        answer: "Yes — bring a swimsuit, towel and sun protection; water sports equipment is not included unless arranged separately.",
      },
    ],
    relatedExcursionSlugs: ["lindos-on-your-own", "private-ancient-lindos", "anthony-quinn-kallithea-traganou-cruise"],
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/private-lindos-and-beach/eurhovtlinbch",
      productId: "eurhovtlinbch",
    },
    imageKey: "beach",
  },

  {
    slug: "private-lindos-kallithea-panoramic",
    title: "Private Lindos, Kallithea and Panoramic Rhodes",
    seoTitle: "Private Lindos & Kallithea Panoramic Tour",
    metaDescription: "A private day linking Lindos village, the therapeutic Kallithea Springs and panoramic Rhodes City viewpoints.",
    category: "Lindos excursions",
    badge: "private-experience",
    tagline: "Three very different sides of Rhodes — village, springs and skyline — in one private day.",
    duration: "6 Hours 30 Minutes",
    pace: "Moderate",
    groupType: "Private",
    activityLevel: "Moderate",
    foodBeverage: "Not included (per supplier)",
    locations: ["Lindos", "Saint Paul's Bay", "Kallithea Springs", "Monte Smith", "Acropolis of Rhodes"],
    bestFor: "Groups wanting a broader private day beyond the standard Lindos-only or city-only routes",
    overview:
      "A private day trip combining Lindos village and its Panoramic viewpoint with the striking Italian-era architecture and beachfront of Kallithea Springs, finishing with a panoramic tour of Rhodes City's ancient and modern landmarks.",
    body: [
      "The day begins in Lindos with stops at Saint Paul's Bay and the Lindos Panoramic viewpoint, with an optional climb to the Acropolis if your group has time and interest.",
      "Kallithea Springs follows — a beautifully restored Italian-era spa complex right on the water, with striking domed architecture and a relaxing beachfront setting that's quite different in character from the medieval sites elsewhere on the island.",
      "The day closes with a panoramic tour of Rhodes City, taking in the Acropolis of Rhodes and other landmarks that bridge the island's ancient and contemporary sides.",
    ],
    highlights: [
      "Lindos stops at Saint Paul's Bay and the Lindos Panoramic viewpoint",
      "Optional climb to the Acropolis of Lindos, time and group permitting",
      "Kallithea Springs' restored Italian-era architecture and beachfront",
      "A panoramic closing tour of Rhodes City's ancient and modern landmarks",
    ],
    included: ["Private guide for all three stops", "Transportation throughout the day"],
    notIncluded: ["Food and drink at any of the stops", "Any Acropolis of Lindos entrance fee, if the optional climb is taken"],
    portLogistics: RHODES_PORT_LOGISTICS,
    tips: [
      "The supplier notes this tour is wheelchair accessible with advance notice to the tour operator — flag any accessibility needs at booking",
      "Expect a fair amount of walking, with some full flights of steps and uneven terrain at Lindos in particular",
      "Bring swimwear if you'd like to make use of Kallithea's beachfront setting",
    ],
    faqs: [
      {
        question: "Is this tour wheelchair accessible?",
        answer: "The supplier states it is wheelchair accessible but recommends contacting the tour operator in advance to arrange accommodations, since a fair amount of walking and some steps are involved.",
      },
      {
        question: "What is Kallithea Springs?",
        answer: "A restored early-20th-century spa complex on the coast near Rhodes Town, known for its domed Italian-era architecture and a beachfront that makes a relaxing contrast to the day's historic stops.",
      },
      {
        question: "Do we definitely climb to the Acropolis of Lindos?",
        answer: "It's described as an optional element of the Lindos stop, so whether you climb depends on your group's time and preference on the day.",
      },
    ],
    relatedExcursionSlugs: ["private-lindos-and-beach", "private-ancient-lindos-and-rhodes", "private-rhodes-city-tour"],
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/lindos-village-kallithea-panoramic-highlights/eurhvillpancitytour",
      productId: "eurhvillpancitytour",
    },
    imageKey: "coast",
  },

  {
    slug: "private-rhodes-city-tour",
    title: "Private Rhodes City and Old Town Tour",
    seoTitle: "Private Rhodes City Tour — Old Town & Palace",
    metaDescription: "A private guided city tour taking in Mandraki Port, Monte Smith, the Grand Master's Palace and the Street of the Knights.",
    category: "Private Rhodes tours",
    badge: "private-experience",
    tagline: "The city's landmark sights, privately guided and timed around your schedule.",
    duration: "3 Hours 30 Minutes",
    pace: "Moderate",
    groupType: "Private",
    activityLevel: "Moderate",
    foodBeverage: "Not included (per supplier)",
    locations: ["Monte Smith", "Mandraki", "Old Town", "Grand Master's Palace", "Street of the Knights"],
    bestFor: "Travellers who want the classic city highlights with a private guide instead of a coach group",
    overview:
      "A private guided tour of Rhodes City's landmark sights — Mandraki Port, Monte Smith's viewpoints, the Grand Master's Palace and the Street of the Knights — with flexible departure timing rather than a fixed group schedule.",
    body: [
      "The drive passes Mandraki Port, where a guide points out the government buildings, the Church of Annunciation and the spot where the Colossus of Rhodes is believed to have once stood, before continuing up to Monte Smith for photo stops over the city and the Aegean.",
      "In the Old Town, the private format allows more time to linger at the Palace of the Grand Masters — built in the 14th century and reconstructed in 1939 for Italian royalty — and along the Street of the Knights, ending near the Archaeological Museum.",
      "Because timing is flexible, this suits a private, intimate exploration for couples or small groups who'd rather not join a scheduled coach departure.",
    ],
    highlights: [
      "Private guided drive past Mandraki Port and up to Monte Smith",
      "In-depth time at the Palace of the Grand Masters with your own guide",
      "A private walk down the Street of the Knights to the Archaeological Museum",
      "Flexible departure times to suit your schedule",
    ],
    included: ["Private guide", "Transportation throughout the tour"],
    notIncluded: ["Food and drink during the tour", "Palace or museum interior entrance fees unless separately confirmed"],
    portLogistics: RHODES_PORT_LOGISTICS,
    tips: [
      "The supplier notes a double flight of stairs to reach the Palace's main rooms",
      "Wear flat, sensible shoes for paved, cobblestone and packed-dirt surfaces",
      "Ask about flexible timing if your ship's schedule doesn't suit a standard mid-morning departure",
    ],
    faqs: [
      {
        question: "How is this different from the standard group city tour?",
        answer: "This is a private version with your own guide and flexible timing, rather than a set departure with a larger group — useful if you want a more personal pace.",
      },
      {
        question: "Is the Grand Master's Palace interior included?",
        answer: "The supplier does not list this as a confirmed inclusion — confirm palace interior access and any entrance fee with your booking.",
      },
      {
        question: "Can departure times be adjusted?",
        answer: "Yes — the supplier notes flexible departure times are offered so you can customise the schedule around your ship.",
      },
    ],
    relatedExcursionSlugs: ["private-rhodes-highlights", "exclusive-medieval-town-of-rhodes", "private-guide-vehicle-half-day"],
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/city-tour-rhodes/eurhtcarhode",
      productId: "eurhtcarhode",
    },
    imageKey: "old-town",
  },

  {
    slug: "private-rhodes-highlights",
    title: "Private Rhodes Highlights: Filerimos and Old Town",
    seoTitle: "Private Rhodes Highlights Shore Excursion",
    metaDescription: "A private tour to Filerimos Hill's ancient ruins and the Acropolis of Rhodes, finishing with the Old Town's Street of the Knights.",
    category: "Private Rhodes tours",
    badge: "private-experience",
    tagline: "Filerimos Hill's layered ruins, the coastal Acropolis, and the Old Town — privately guided.",
    duration: "4 Hours",
    pace: "Moderate",
    groupType: "Private",
    activityLevel: "Moderate",
    foodBeverage: "Not included (per supplier)",
    locations: ["Filerimos", "Acropolis of Rhodes", "Old Town", "Grand Master's Palace", "Street of the Knights"],
    bestFor: "Travellers who want Filerimos Hill included alongside the classic city sights, privately guided",
    overview:
      "A private four-hour tour built around Filerimos Hill — with its layered temple, basilica and Byzantine church ruins — plus the coastal Acropolis of Rhodes and a closing walk through the Old Town's Street of the Knights.",
    body: [
      "Filerimos Hill anchors the day, with a professional guide walking you through the site's layers: the ruined Temple of Athena Polias, an Early Christian basilica, and a Byzantine church later rebuilt by the Italians for Capuchin monks, plus views out from the mountaintop.",
      "From there, the route heads seaward to the ancient Acropolis of Rhodes, with a stop at the old stadium and the Temple of Apollo for photographs and a short history from your guide.",
      "The day finishes in the Old Town, walking the cobbled Street of the Knights — its former crusader inns now shops, homes and even part of a university — before returning to the ship.",
    ],
    highlights: [
      "Guided walk through Filerimos Hill's temple, basilica and Byzantine church ruins",
      "A stop at the Acropolis of Rhodes' ancient stadium and Temple of Apollo",
      "Closing walk down the Street of the Knights in the Old Town",
      "Private guide throughout, rather than a scheduled group departure",
    ],
    included: ["Private guide", "Transportation between Filerimos, the Acropolis and the Old Town"],
    notIncluded: ["Food and drink during the tour", "Any museum or palace interior entrance fees"],
    portLogistics: RHODES_PORT_LOGISTICS,
    tips: [
      "Wear flat, sensible shoes for paved, cobblestone and packed-dirt surfaces at all three stops",
      "The supplier notes a double flight of stairs if your route includes the Palace's main rooms",
      "This is a broader mix than a single-site tour — good if you want variety in four hours rather than depth on one site",
    ],
    faqs: [
      {
        question: "What makes Filerimos worth visiting?",
        answer: "It's a layered site with the ruins of a Hellenistic temple, an Early Christian basilica and a Byzantine church later rebuilt by the Italians, plus views from the mountaintop — a different flavour of history from the Old Town.",
      },
      {
        question: "Do we go inside the Grand Master's Palace on this tour?",
        answer: "The core route focuses on the Street of the Knights and the Palace's exterior; confirm with your guide or booking if interior access is something you specifically want.",
      },
      {
        question: "Is this tour suitable for a shorter port call?",
        answer: "At four hours covering three separate sites, it moves at a fairly brisk pace — a good fit if you want breadth, but the half-day private tours may suit a very short call better.",
      },
    ],
    relatedExcursionSlugs: ["private-rhodes-city-tour", "private-ancient-lindos-and-rhodes", "private-guide-vehicle-full-day"],
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/highlights-rhodes/eurhtcahighl",
      productId: "eurhtcahighl",
    },
    imageKey: "scenic",
  },

  {
    slug: "private-vehicle-full-day",
    title: "Private Vehicle Hire: Full Day Rhodes",
    seoTitle: "Private Vehicle Full Day Hire — Rhodes",
    metaDescription: "Hire a private air-conditioned vehicle and English-speaking driver for a full day in Rhodes, on your own route.",
    category: "Private Rhodes tours",
    badge: "private-experience",
    tagline: "Just the vehicle and driver for a full day — you set the route.",
    duration: "8 Hours",
    pace: "Relaxed",
    groupType: "Private",
    activityLevel: "Easy",
    foodBeverage: "Not included (per supplier)",
    locations: ["Grand Master's Palace", "Acropolis of Rhodes", "Filerimos"],
    bestFor: "Independent travellers who know where they want to go and mainly need private wheels for the day",
    overview:
      "A private, air-conditioned vehicle and English-speaking driver for a full day, without a narrating tour guide — this is transport and time at leisure at each stop, for travellers who prefer to explore independently.",
    body: [
      "The supplier suggests a loop covering the medieval city and the Palace of the Grand Masters, the Acropolis of Rhodes for its temples and ancient stadium, the Rhodes Jewish Museum, and Filerimos Hill and the ruins of ancient Ialyssos — but the route is genuinely up to you.",
      "Because this is a driver rather than a guide, the supplier notes English fluency can vary and drivers are not expected to provide narration or historical commentary — this format suits travellers who prefer to research their own stops or use their own guidebook.",
      "Time is at leisure at each stop, so plan your own pacing and be mindful of your return time to the ship.",
    ],
    highlights: [
      "Private air-conditioned vehicle for the full day",
      "Suggested route covering the Old Town, Acropolis, Jewish Museum and Filerimos",
      "Time at leisure at each stop — no fixed schedule to follow",
      "Suits independent travellers who prefer to set their own pace",
    ],
    included: ["Private air-conditioned vehicle", "English-speaking driver"],
    notIncluded: ["A narrating tour guide — this is a driver-only format, per the supplier", "Admission fees, food or beverage at any stop"],
    portLogistics: RHODES_PORT_LOGISTICS,
    tips: [
      "This is vehicle hire, not a guided tour — bring your own research or guidebook if you want historical context",
      "The supplier notes driver English fluency can vary since drivers are not tour guides",
      "Cover shoulders and knees if visiting a religious or memorial site",
    ],
    faqs: [
      {
        question: "Will the driver act as a tour guide?",
        answer: "No. The supplier is explicit that drivers cannot act as tour guides and their English fluency may vary — this is private transport rather than narrated sightseeing.",
      },
      {
        question: "Where can we go?",
        answer: "The supplier suggests attractions such as the Old Town, the Acropolis of Rhodes, the Jewish Museum and Filerimos Hill, but the exact route and stops are up to you.",
      },
      { question: "Are entrance fees included?", answer: "No. The supplier states there are no admissions, food or beverage included in the tour price." },
    ],
    relatedExcursionSlugs: ["private-guide-vehicle-full-day", "private-vehicle-half-day", "private-rhodes-highlights"],
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/private-vehicle-full-day-rhodes/eurhpvtfullbig",
      productId: "eurhpvtfullbig",
    },
    imageKey: "private",
  },

  {
    slug: "private-vehicle-half-day",
    title: "Private Vehicle Hire: Half Day Rhodes",
    seoTitle: "Private Vehicle Half Day Hire — Rhodes",
    metaDescription: "Hire a private air-conditioned vehicle for a half day in Rhodes — Old City, Prasonisi beach or your own choice of stops.",
    category: "Private Rhodes tours",
    badge: "private-experience",
    tagline: "A private vehicle for half a day, with the route entirely up to you.",
    duration: "4 Hours",
    pace: "Relaxed",
    groupType: "Private",
    activityLevel: "Easy",
    foodBeverage: "Not included (per supplier)",
    locations: ["Old Town", "Grand Master's Palace", "Acropolis of Rhodes", "Filerimos", "Prasonisi"],
    bestFor: "Independent travellers with a shorter window who mainly want private wheels rather than a narrated tour",
    overview:
      "A private, air-conditioned vehicle for a shorter four-hour window, again without a narrating guide — the supplier suggests options from the UNESCO-listed Old City to Prasonisi Beach at the island's southern tip, but the route is yours to choose.",
    body: [
      "Popular suggested stops include the Old City's medieval walls and the Palace of the Grand Master, the Acropolis and Archaeological Museum, or a longer drive down to Prasonisi, where the Aegean and Mediterranean seas meet and conditions suit water sports.",
      "As with the full-day version, this is a driver-only format: the supplier notes English fluency can vary and drivers are not expected to provide guided commentary.",
      "Given the shorter window, it's worth picking one clear priority — a coastal drive to Prasonisi and back uses most of the four hours, while an Old Town loop leaves more room to also stop elsewhere.",
    ],
    highlights: [
      "Private air-conditioned vehicle for a half-day window",
      "Options ranging from the Old City's walls and Palace to Prasonisi Beach",
      "Comfortable, tailored transport without joining a group tour",
      "Route and pacing entirely up to you",
    ],
    included: ["Private air-conditioned vehicle", "English-speaking driver"],
    notIncluded: ["A narrating tour guide — this is a driver-only format, per the supplier", "Admission fees, food or beverage at any stop"],
    portLogistics: RHODES_PORT_LOGISTICS,
    tips: [
      "Choose one main priority given the shorter time window — Prasonisi is a longer drive than an Old Town loop",
      "This is vehicle hire, not a guided tour — the driver's English and local commentary may be limited",
      "Bring swimwear if a Prasonisi stop is part of your plan",
    ],
    faqs: [
      {
        question: "Can we visit Prasonisi Beach on this tour?",
        answer: "Yes, per the supplier — Prasonisi, where the Aegean and Mediterranean seas meet, is one of the suggested stops, though it's a longer drive that will use much of the available four hours.",
      },
      {
        question: "Does the driver provide guided commentary?",
        answer: "No. The supplier notes that if you choose the driver-only option, the driver's English may vary and they will not act as a tour guide.",
      },
      {
        question: "Is this wheelchair accessible?",
        answer: "The supplier notes cobblestones and uneven surfaces at some stops mean it may not be accessible for all guests — check specific sites against your needs.",
      },
    ],
    relatedExcursionSlugs: ["private-vehicle-full-day", "private-guide-vehicle-half-day", "private-rhodes-city-tour"],
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/private-vehicle-half-day-rhodes/eurhpvthalfbig",
      productId: "eurhpvthalfbig",
    },
    imageKey: "private",
  },
];

export function getExcursionBySlug(slug: string): ExcursionPage | undefined {
  return excursions.find((excursion) => excursion.slug === slug);
}

export function getAllExcursionSlugs(): string[] {
  return excursions.map((excursion) => excursion.slug);
}

export function getFeaturedExcursions(): ExcursionPage[] {
  return excursions.filter((excursion) => excursion.featured);
}

export function getExcursionsByCategory(category: string): ExcursionPage[] {
  return excursions.filter((excursion) => excursion.category === category);
}
