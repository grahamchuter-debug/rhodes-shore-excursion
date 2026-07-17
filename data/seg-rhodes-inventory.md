# Rhodes — Shore Excursions Group Inventory

```json
{
  "source_port_listing": "https://www.shoreexcursionsgroup.com/port/rhodes-shore-excursions",
  "scraped_from": {
    "listing_html": "/tmp/seg-rhodes.html",
    "product_html_dir": "/tmp/seg-rhodes-tours/"
  },
  "scrape_date_local": "2026-07-17",
  "tour_count": 23,
  "affiliate_tracking": {
    "network_sites_checked": [
      "/Users/graham.chuter/Desktop/Desktop folder/malaga-shore-excursions",
      "/Users/graham.chuter/Desktop/Desktop folder/naples-shore-excursion"
    ],
    "findings": [
      "Málaga: supplier model uses kind 'shore-excursions-group' with optional url/productId fields, but no live SEG URLs or affiliate query params are populated in excursions.ts / site.ts.",
      "Naples (more mature): stores absolute SEG product URLs as supplier.url, e.g. https://www.shoreexcursionsgroup.com/tour/journey-to-pompeii/eunppompeii with productId matching the path code (eunppompeii). CTA copy: 'Check Current Price'. Links use rel='noopener noreferrer sponsored'.",
      "No AID=, afid, partner id, or tracking query-string pattern found in either codebase. Affiliate tracking appears to be either cookie/session-based after TA login, or not yet wired as URL params on these World 2.0 sites.",
      "Recommended Rhodes pattern (matching Naples until an affiliate ID is confirmed): https://www.shoreexcursionsgroup.com/tour/{slug}/{code} with productId={code}; disclose affiliate/partner relationship; do not invent prices.",
      "UNCERTAIN: actual Shore Excursions Group travel-agent / affiliate ID for World 2.0 network — not present in Málaga or Naples source. Confirm with partnership docs before adding tracking params."
    ],
    "proposed_url_template": "https://www.shoreexcursionsgroup.com/tour/{path-slug}/{code}",
    "proposed_cta": "Check Current Price / Check Availability on Shore Excursions Group"
  },
  "listing_card_note": "Port listing cards hide `.product-extra` via CSS on mobile/base styles but the HTML contains Excursion Size, Type, Food/Beverage, Activity Level, Duration for each tour. Prices and review counts are visible on cards.",
  "data_quality_notes": [
    "Prices are scraped as displayed USD text only — do not invent or persist as fixed catalogue prices.",
    "Inclusions/exclusions are often narrative-inferred; SEG rarely provides a clean Includes/Excludes list on these pages.",
    "Sitewide 'Guaranteed Return to Ship' appears in SEG chrome; per-tour return wording varies and may be thin.",
    "Some private tours show 'Starting at $X/person' — actual total depends on party size / vehicle.",
    "Review counts on listing cards may differ from product-page widgets; both recorded where available."
  ],
  "tours": [
    {
      "seg_code": "EURHTCAEXCWALK",
      "seg_code_lower": "eurhtcaexcwalk",
      "relative_path": "/tour/medieval-town-rhodes/eurhtcaexcwalk",
      "absolute_url": "https://www.shoreexcursionsgroup.com/tour/medieval-town-rhodes/eurhtcaexcwalk",
      "official_title": "Exclusive Medieval Town of Rhodes",
      "official_title_source": "h1",
      "listing_title": "Exclusive Medieval Town of Rhodes",
      "duration": "3 Hours",
      "activity_level": "Moderate",
      "excursion_size": "Small",
      "excursion_type_category": "Scenic, Cultural, Historical",
      "tour_type_inferred": "Small group",
      "destination_areas": [
        "Monte Smith",
        "Mandraki",
        "Old Town",
        "Medieval Town",
        "Grand Master",
        "Palace",
        "Street of the Knights",
        "Archaeological Museum"
      ],
      "highlights": [
        "Explore the ancient and modern highlights of Rhodes",
        "Visit the UNESCO World Heritage Medieval Town of Rhodes, with an expert guide",
        "Enjoy exclusive access to the interior of the Grand Master's Palace",
        "Take photos of Rhodes and the Aegean Sea from Monte Smith",
        "Stroll down the Street of the Knights and see the well-preserved Archaeological Museum."
      ],
      "key_inclusions_inferred": [
        "Highlight: Explore the ancient and modern highlights of Rhodes",
        "Highlight: Visit the UNESCO World Heritage Medieval Town of Rhodes, with an expert guide",
        "Highlight: Enjoy exclusive access to the interior of the Grand Master's Palace",
        "Highlight: Take photos of Rhodes and the Aegean Sea from Monte Smith",
        "Highlight: Stroll down the Street of the Knights and see the well-preserved Archaeological Museum.",
        "Dress guidance (not an inclusion): Comfortable clothing is recommended and sensible, flat-soled walking shoes are required. Sun glasses and sun screen are also suggested."
      ],
      "key_exclusions_inferred": [
        "Food/beverage: Not Included",
        "Restriction/capability note: Guests must be able to walk over paved, cobblestone and packed dirt surfaces, some on inclines. There is a double flight of stairs to reach the main rooms of the Grand Masters Palace."
      ],
      "port_pickup_details": [
        "Leaves from: Cruise Ship Pier",
        "After meeting your professionally trained guide on the pier, you will set off in your transportation to see the highlights of ancient and modern-day Rhodes during this picturesque orientation tour of the city.",
        "At the appointed time for those guests wishing to return to the ship pier, your guide will lead you to the transportation for the approximate 3 - 5 minute drive back to the pier.",
        "Booking confirmation contains meeting instructions (standard SEG wording)."
      ],
      "return_to_ship_wording": [
        "Sitewide claim: Guaranteed Return to Ship",
        "At the appointed time for those guests wishing to return to the ship pier, your guide will lead you to the transportation for the approximate 3 - 5 minute drive back to the pier."
      ],
      "dress": "Comfortable clothing is recommended and sensible, flat-soled walking shoes are required. Sun glasses and sun screen are also suggested.",
      "restrictions": "Guests must be able to walk over paved, cobblestone and packed dirt surfaces, some on inclines. There is a double flight of stairs to reach the main rooms of the Grand Masters Palace.",
      "food_beverage": "Not Included",
      "description_paragraphs": [
        "After meeting your professionally trained guide on the pier, you will set off in your transportation to see the highlights of ancient and modern-day Rhodes during this picturesque orientation tour of the city. As you pass by the Mandraki Esplanade, you will see the government buildings, Church of Annunciation built in 1925, a replica of the Old Church of the Knights of St. John and the Deer Statues at the entrance of Mandraki Port where it is believed the Colossus of Rhodes once stood.",
        "Your drive will then continue up to Monte Smith for panoramic views and photo opportunities of Rhodes and the Aegean Sea. From here, you will continue to the top of Rhodes' Old City. You will disembark your transportation at the Gate d'Amboise, from where you will begin your Old Town walking tour.",
        "As you pass through the medieval walls and into the UNESCO World Heritage site of the Medieval Town of Rhodes, the first site that meets you is the imposing Grand Master's Palace. The Palace was built in the 14th century A.D., destroyed in 1856 and rebuilt in 1939 by the Italians to accommodate the King of Italy, Emmanuel II and Mussolini.",
        "Most cruise line tours only visit the outside of the palace, but on this tour, after your guide gives you a brief history of the knights outside, they will lead you on a guided walking tour of the palace.",
        "After leaving the palace, you will walk down the Street of the Knights, where you will see the many inns once occupied by the crusaders. It is considered the most beautiful area of the Old City. At the end of the street, you will see the exterior of what is now the Archaeological Museum. Formerly the Knights' Hospital, the museum was built in 1440 A.D. and is the most spectacular and well-preserved building in the Old City.",
        "Your guide will answer any questions about additional sightseeing, shopping, or where you can find some of the wonderful Greek food before giving you some free time for browsing at your leisure. At the appointed time for those guests wishing to return to the ship pier, your guide will lead you to the transportation for the approximate 3 - 5 minute drive back to the pier. For guests wishing longer in the Old City, please just let your guide know you are ending your tour there."
      ],
      "pricing": {
        "displayed_price_text": "Price: $145.00 Sale Price: $115.00 Save: $30.00",
        "listing_price_text": "Price: $145.00 Sale Price: $115.00 Save: $30.00",
        "mechanism_notes": [
          "List + sale price shown (USD)",
          "Add to cart after selecting departure date/time",
          "Book Now button present",
          "Date/time selection required before purchase"
        ],
        "caveat": "Prices shown are as scraped from SEG HTML at scrape time (USD). Do not invent or hard-code prices on our site; confirm live on SEG."
      },
      "reviews": {
        "stars": "5 Stars",
        "count_label": "90 Reviews",
        "samples": [],
        "source_note": "port listing card (static star image + review count); product page uses TurnTo widget (not populated in static scrape)",
        "legitimate": true
      },
      "proposed_editorial_slug": "exclusive-medieval-town-of-rhodes",
      "uncertainties": [],
      "listing_card_snippets": {
        "Excursion Size": "Small",
        "Excursion Type": "Scenic, Cultural, Historical",
        "Food/Beverage": "Not Included",
        "Activity Level": "Moderate",
        "Excursion Duration": "3 Hours"
      }
    },
    {
      "seg_code": "EURHBEST",
      "seg_code_lower": "eurhbest",
      "relative_path": "/tour/best-of-lindos-and-rhodes/eurhbest",
      "absolute_url": "https://www.shoreexcursionsgroup.com/tour/best-of-lindos-and-rhodes/eurhbest",
      "official_title": "Best of Lindos and Rhodes",
      "official_title_source": "h1",
      "listing_title": "Best of Lindos and Rhodes",
      "duration": "5 Hours",
      "activity_level": "Moderate",
      "excursion_size": "Standard",
      "excursion_type_category": "Scenic, Cultural, Historical",
      "tour_type_inferred": "Standard / coach-size group",
      "destination_areas": [
        "Lindos",
        "Monte Smith",
        "Grand Master",
        "Acropolis",
        "Palace",
        "Street of the Knights",
        "Archaeological Museum"
      ],
      "highlights": [
        "Experience the breathtaking ancient Greek towns of Lindos and Rhodes, combine stunning views and rich history",
        "Soak in the panoramic views from the 535-feet tall Acropolis",
        "Stop into the Byzantine Church of the Ascension",
        "Witness the world-renowned ceramics crafting of Rhodes",
        "Explore the 14th-century Grand Master's Palace"
      ],
      "key_inclusions_inferred": [
        "Highlight: Experience the breathtaking ancient Greek towns of Lindos and Rhodes, combine stunning views and rich history",
        "Highlight: Soak in the panoramic views from the 535-feet tall Acropolis",
        "Highlight: Stop into the Byzantine Church of the Ascension",
        "Highlight: Witness the world-renowned ceramics crafting of Rhodes",
        "Highlight: Explore the 14th-century Grand Master's Palace",
        "Travel next to Rhodes where you will watch ceramics being carefully crafted from the world-renowned Rhodes potters. The island is known for its tradition in pottery and ceramics, as there are documents stating that clay bricks from the island of Rhodes were used in construction of the dome of \"Hagia Sophia\" Byzantine church in Constantinople. A quick ride up to Monte Smith will reward you will panoramic views of the town and Aegean Sea. Walk through the Gate d'Amboise in the city's medieval walls to see and explore the 14th century Grand Master's Palace. While entrance to the palace is not included, there will be time for those who wish to visit on their own.",
        "Dress guidance (not an inclusion): We recommend wearing comfortable clothing and sensible, closed-toe walking shoes. Sunscreen, sunglasses and hat are also suggested."
      ],
      "key_exclusions_inferred": [
        "Food/beverage: Not Included",
        "Travel next to Rhodes where you will watch ceramics being carefully crafted from the world-renowned Rhodes potters. The island is known for its tradition in pottery and ceramics, as there are documents stating that clay bricks from the island of Rhodes were used in construction of the dome of \"Hagia Sophia\" Byzantine church in Constantinople. A quick ride up to Monte Smith will reward you will panoramic views of the town and Aegean Sea. Walk through the Gate d'Amboise in the city's medieval walls to see and explore the 14th century Grand Master's Palace. While entrance to the palace is not included, there will be time for those who wish to visit on their own.",
        "Restriction/capability note: Guests must be able to get in and out of the transportation. This tour is not wheelchair accessible."
      ],
      "port_pickup_details": [
        "Leaves from: Cruise Ship Pier",
        "Booking confirmation contains meeting instructions (standard SEG wording)."
      ],
      "return_to_ship_wording": [
        "Sitewide claim: Guaranteed Return to Ship"
      ],
      "dress": "We recommend wearing comfortable clothing and sensible, closed-toe walking shoes. Sunscreen, sunglasses and hat are also suggested.",
      "restrictions": "Guests must be able to get in and out of the transportation. This tour is not wheelchair accessible.",
      "food_beverage": "Not Included",
      "description_paragraphs": [
        "Step back into time as you walk in the footsteps of history and explore the remarkable Grecian towns of Lindos and Rhodes. Your journey of discovery will take you along breathtaking coastlines and through small, quaint villages as you make your way to these ancient cities.",
        "When you first catch a glimpse of the ancient, unbelievably scenic Lindos, it will take your breath. Stand in the 535 feet tall Acropolis and savor stunning views of the entire village as it tumbles below to the aquamarine sea. As you enter the town you'll find yourself in a magical place of hidden alleyways where stacked, ornate houses of long-ago sea captains now are occupied with tantalizing tavernas, atmospheric bars and the coolest cafes. Be sure to bring your camera to capture shots of the medieval castle, white-washed houses, colorful courtyards and Lindos' famous mosaics. While here you will also visit the Byzantine Church of the Ascension and enjoy free time to explore the area on your own. This walking tour will also take you down the Street of the Knights flanked by inns that were once occupied by the Crusaders. At the bottom of the street you will reach the 14th century Knights Hospital-turned-Archaeological Museum.",
        "Travel next to Rhodes where you will watch ceramics being carefully crafted from the world-renowned Rhodes potters. The island is known for its tradition in pottery and ceramics, as there are documents stating that clay bricks from the island of Rhodes were used in construction of the dome of \"Hagia Sophia\" Byzantine church in Constantinople. A quick ride up to Monte Smith will reward you will panoramic views of the town and Aegean Sea. Walk through the Gate d'Amboise in the city's medieval walls to see and explore the 14th century Grand Master's Palace. While entrance to the palace is not included, there will be time for those who wish to visit on their own.",
        "Throughout the tour your guides will share the history and culture of the cities of Lindos and Rhodes. This popular tour sells out fast so claim your reservation and book now!"
      ],
      "pricing": {
        "displayed_price_text": "Price: $139.00 Sale Price: $119.00 Save: $20.00",
        "listing_price_text": "Price: $139.00 Sale Price: $119.00 Save: $20.00",
        "mechanism_notes": [
          "List + sale price shown (USD)",
          "Add to cart after selecting departure date/time",
          "Book Now button present",
          "Date/time selection required before purchase"
        ],
        "caveat": "Prices shown are as scraped from SEG HTML at scrape time (USD). Do not invent or hard-code prices on our site; confirm live on SEG."
      },
      "reviews": {
        "stars": "5 Stars",
        "count_label": "68 Reviews",
        "samples": [],
        "source_note": "port listing card (static star image + review count); product page uses TurnTo widget (not populated in static scrape)",
        "legitimate": true
      },
      "proposed_editorial_slug": "best-of-lindos-and-rhodes",
      "uncertainties": [],
      "listing_card_snippets": {
        "Excursion Size": "Standard",
        "Excursion Type": "Scenic, Cultural, Historical",
        "Food/Beverage": "Not Included",
        "Activity Level": "Moderate",
        "Excursion Duration": "5 Hours"
      }
    },
    {
      "seg_code": "EURHCRUISETOANTQUIN",
      "seg_code_lower": "eurhcruisetoantquin",
      "relative_path": "/tour/cruise-anthony-quinn-kallithea-traganou-caves/eurhcruisetoantquin",
      "absolute_url": "https://www.shoreexcursionsgroup.com/tour/cruise-anthony-quinn-kallithea-traganou-caves/eurhcruisetoantquin",
      "official_title": "Cruise to Anthony Quinn, Kallithea and Traganou Caves",
      "official_title_source": "og:title",
      "listing_title": "Cruise to Anthony Quinn, Kallithea & Traganou Bays",
      "duration": "6 Hours 30 Minutes",
      "activity_level": "Moderate",
      "excursion_size": "Standard",
      "excursion_type_category": "Eco, Nature",
      "tour_type_inferred": "Standard / coach-size group",
      "destination_areas": [
        "Kallithea",
        "Anthony Quinn",
        "Traganou",
        "Wine"
      ],
      "highlights": [
        "Swim in the emerald waters of Anthony Quinn Bay, renowned as the backdrop of The Guns of Navarone.",
        "Relax in the picturesque Ladiko Bay on a sailing yacht enjoying appetizers, fresh fruits, wine, and music.",
        "Dive into adventure at Traganou Bay, where snorkeling and exploration of small creeks and captivating caves await.",
        "This exclusive 6.5-hour voyage to Rhodes' three most beautiful bays in one day is a hot-ticket tour that sells out quickly!",
        "Rest assured with our return-to-ship and satisfaction guarantees, promising the highest quality shore excursions at unbeatable prices."
      ],
      "key_inclusions_inferred": [
        "Food/beverage: Cold appetizers, fresh fruits, wine, beer, and water are included.",
        "Highlight: Swim in the emerald waters of Anthony Quinn Bay, renowned as the backdrop of The Guns of Navarone.",
        "Highlight: Relax in the picturesque Ladiko Bay on a sailing yacht enjoying appetizers, fresh fruits, wine, and music.",
        "Highlight: Dive into adventure at Traganou Bay, where snorkeling and exploration of small creeks and captivating caves await.",
        "Highlight: This exclusive 6.5-hour voyage to Rhodes' three most beautiful bays in one day is a hot-ticket tour that sells out quickly!",
        "Highlight: Rest assured with our return-to-ship and satisfaction guarantees, promising the highest quality shore excursions at unbeatable prices.",
        "Dress guidance (not an inclusion): We recommend wearing comfortable clothing and sensible, flat-soled walking shoes, with your swimsuit below your clothes. Don't forget your swimsuit, towel, sunscreen, and sunglasses also."
      ],
      "key_exclusions_inferred": [
        "Restriction/capability note: The minimum age to consume alcohol is 21 years. Snorkel equipment is provided. Boat trips are subject to weather conditions at the time of sailing. This tour is not wheelchair accessible. Due to local laws all individuals including infants and children must be accounted for at the time of booking as each individual will require a seat on the tour."
      ],
      "port_pickup_details": [
        "Leaves from: An approximate 5-minute walk from the cruise ship pier is required to reach your departure location. Full details will be provided in your electronic ticket upon confirmation.",
        "Booking confirmation contains meeting instructions (standard SEG wording)."
      ],
      "return_to_ship_wording": [
        "Sitewide claim: Guaranteed Return to Ship"
      ],
      "dress": "We recommend wearing comfortable clothing and sensible, flat-soled walking shoes, with your swimsuit below your clothes. Don't forget your swimsuit, towel, sunscreen, and sunglasses also.",
      "restrictions": "The minimum age to consume alcohol is 21 years. Snorkel equipment is provided. Boat trips are subject to weather conditions at the time of sailing. This tour is not wheelchair accessible. Due to local laws all individuals including infants and children must be accounted for at the time of booking as each individual will require a seat on the tour.",
      "food_beverage": "Cold appetizers, fresh fruits, wine, beer, and water are included.",
      "description_paragraphs": [
        "This daylong tour takes you to 3 of Rhodes' most beautiful bays in 1 day! Your excursion will take you to Anthony Quinn Bay, famous for its role as the setting for the movie The Guns of Navarone. This small, picturesque cove sports emerald green waters and is a favored snorkeling spot.",
        "Next, At Ladiko Bay, you can simply enjoy the scenery while sunbathing on the sailing yacht. Cold appetizers, fresh fruits, wine, beer, and music will be available during the excursion for your enjoyment.",
        "Stop at one of the bays that are most popular with the locals - Traganou Bay. Spend some time swimming and snorkeling around the many small creeks that make up the area, exploring the inlets and caves. This popular 6.5-hour tour sells out fast--book now! PLEASE NOTE: Due to local laws all individuals including infants and children must be accounted for at the time of booking as each individual will require a seat on the tour. The boat used on this tour is a small sailing yacht (not a catamaran or larger commercialized vessel) that can accommodate up to 20 guests. Please be advised, as this is a sailing yacht, there is no shade provided on the vessel. Please familiarize yourself with what a small sailing yacht experience usually entails prior to booking this tour."
      ],
      "pricing": {
        "displayed_price_text": "Price: $189.00 Sale Price: $149.00 Save: $40.00",
        "listing_price_text": "Price: $189.00 Sale Price: $149.00 Save: $40.00",
        "mechanism_notes": [
          "List + sale price shown (USD)",
          "Add to cart after selecting departure date/time",
          "Book Now button present",
          "Date/time selection required before purchase"
        ],
        "caveat": "Prices shown are as scraped from SEG HTML at scrape time (USD). Do not invent or hard-code prices on our site; confirm live on SEG."
      },
      "reviews": {
        "stars": "5 Stars",
        "count_label": "26 Reviews",
        "samples": [],
        "source_note": "port listing card (static star image + review count); product page uses TurnTo widget (not populated in static scrape)",
        "legitimate": true
      },
      "proposed_editorial_slug": "anthony-quinn-kallithea-traganou-cruise",
      "uncertainties": [
        "Listing Food/Beverage 'Beverages, Snacks Included' vs product page 'Cold appetizers, fresh fruits, wine, beer, and water are included.' (wording may differ).",
        "Official h1 missing on product page; title taken from og:title."
      ],
      "listing_card_snippets": {
        "Excursion Size": "Standard",
        "Excursion Type": "Eco, Nature",
        "Food/Beverage": "Beverages, Snacks Included",
        "Activity Level": "Moderate",
        "Excursion Duration": "6 Hours 30 Minutes"
      }
    },
    {
      "seg_code": "EURHJEEPSAF",
      "seg_code_lower": "eurhjeepsaf",
      "relative_path": "/tour/rhodes-back-country-adventure/eurhjeepsaf",
      "absolute_url": "https://www.shoreexcursionsgroup.com/tour/rhodes-back-country-adventure/eurhjeepsaf",
      "official_title": "Rhodes Back Country Adventure",
      "official_title_source": "h1",
      "listing_title": "Rhodes Back Country Adventure",
      "duration": "7 Hours",
      "activity_level": "Moderate",
      "excursion_size": "Small",
      "excursion_type_category": "Scenic, Cultural, Historical",
      "tour_type_inferred": "Small group",
      "destination_areas": [
        "Profitis Ilias",
        "Embonas"
      ],
      "highlights": [
        "Explore the non-touristy, mountainous northern region of Rhodes on a unforgettable Rhodes Back Country Adventure",
        "Enjoy an exclusive, semi-private tour (up to 6 people per vehicle), navigating on and off-road routes for the best panoramic views and wildlife sightings",
        "Immerse in local history as our experienced guides share insights and stories while passing through small villages, monasteries, and chapels",
        "Experience the unique hospitality of Rhodes with a lunch stop at a traditional village, and capture stunning views of Northern, East, and West Rhodes",
        "Book your spot quickly for the most exciting day in Rhodes, with our strongest industry guarantees, ensuring your satisfaction and timely return to the cruise ship"
      ],
      "key_inclusions_inferred": [
        "Food/beverage: Lunch",
        "Highlight: Explore the non-touristy, mountainous northern region of Rhodes on a unforgettable Rhodes Back Country Adventure",
        "Highlight: Enjoy an exclusive, semi-private tour (up to 6 people per vehicle), navigating on and off-road routes for the best panoramic views and wildlife sightings",
        "Highlight: Immerse in local history as our experienced guides share insights and stories while passing through small villages, monasteries, and chapels",
        "Highlight: Experience the unique hospitality of Rhodes with a lunch stop at a traditional village, and capture stunning views of Northern, East, and West Rhodes",
        "Highlight: Book your spot quickly for the most exciting day in Rhodes, with our strongest industry guarantees, ensuring your satisfaction and timely return to the cruise ship",
        "Dress guidance (not an inclusion): We recommend wearing comfortable clothing and sensible, closed, flat-soled walking shoes. Sunscreen, sunglasses, and camera are also recommended. During spring and autumn, we advise you to bring a jacket."
      ],
      "key_exclusions_inferred": [
        "Restriction/capability note: Guests with food allergies or dietary restrictions must advise prior to placing a booking. Minimum age to consume alcohol is 18 years. This tour is not recommended for people suffering car sickness, with mobility issues, fear of heights, back issues, pregnant women, or children under 7 years old for baby seats are not provided. Also, individuals taller than 195 cm (6.3 feet) or heavier than 130 kg (287 pounds) may find the trip challenging. Itinerary may change due to unforeseen circumstances."
      ],
      "port_pickup_details": [
        "Leaves from: Cruise Ship Pier",
        "Booking confirmation contains meeting instructions (standard SEG wording)."
      ],
      "return_to_ship_wording": [
        "Sitewide claim: Guaranteed Return to Ship"
      ],
      "dress": "We recommend wearing comfortable clothing and sensible, closed, flat-soled walking shoes. Sunscreen, sunglasses, and camera are also recommended. During spring and autumn, we advise you to bring a jacket.",
      "restrictions": "Guests with food allergies or dietary restrictions must advise prior to placing a booking. Minimum age to consume alcohol is 18 years. This tour is not recommended for people suffering car sickness, with mobility issues, fear of heights, back issues, pregnant women, or children under 7 years old for baby seats are not provided. Also, individuals taller than 195 cm (6.3 feet) or heavier than 130 kg (287 pounds) may find the trip challenging. Itinerary may change due to unforeseen circumstances.",
      "food_beverage": "Lunch",
      "description_paragraphs": [
        "Explore more on the island of Knights Rhodes, on a semiprivate premium safari tour for up to 6 people per vehicle. Discover the mountainous northern non-tourist parts of Rhodes Island from West to East, far away from mass tourism and crowded places, through the natural beauty of the mountains whilst enjoying the best panoramic views. Get ready for a day to remember at unique places that only a four-wheel vehicle can approach.",
        "Start your day tour from the Rhodes cruise Port as you head towards the east side of the island. You and your group will navigate on a mixture of on and off-road routes in the peaks of the mountains with panoramic views, wild life and stunning nature. Our adventure day continues by following a German Italian war route with historical points of interest through villages like Archipoli, Eleousa, Profit Ilias, and Embonas.",
        "During the ride the experienced tour guide provides you with lots of local history and information, stories and insights, as we pass through small villages, monasteries, and chapels. The hidden off-road paths through the dense vegetation give us the opportunity to marvel up close to the natural beauty and enjoy the heartfelt hospitality and local knowledge of our escorts. Continuing our day tour from east to west, we reach a small traditional village where our lunch stop takes place. Fully refreshed we continue our tour, following an easy asphalt route back to the cruise ship.",
        "Our escort drivers with the help of the premium off -road vehicles will offer you the most exciting day in Rhodes, allowing you to take in the best panoramic views of Northern, East, and West Rhodes with opportunities to capture every moment, embrace the local hospitality while enjoying the professional yet relaxed service."
      ],
      "pricing": {
        "displayed_price_text": "Price: $177.00",
        "listing_price_text": "Price: $177.00",
        "mechanism_notes": [
          "Add to cart after selecting departure date/time",
          "Book Now button present",
          "Date/time selection required before purchase"
        ],
        "caveat": "Prices shown are as scraped from SEG HTML at scrape time (USD). Do not invent or hard-code prices on our site; confirm live on SEG."
      },
      "reviews": {
        "stars": "5 Stars",
        "count_label": "10 Reviews",
        "samples": [],
        "source_note": "port listing card (static star image + review count); product page uses TurnTo widget (not populated in static scrape)",
        "legitimate": true
      },
      "proposed_editorial_slug": "rhodes-back-country-adventure",
      "uncertainties": [
        "Listing Food/Beverage 'Meal' vs product page 'Lunch' (wording may differ)."
      ],
      "listing_card_snippets": {
        "Excursion Size": "Small",
        "Excursion Type": "Scenic, Cultural, Historical",
        "Food/Beverage": "Meal",
        "Activity Level": "Moderate",
        "Excursion Duration": "7 Hours"
      }
    },
    {
      "seg_code": "EURHLINDOSOYO",
      "seg_code_lower": "eurhlindosoyo",
      "relative_path": "/tour/lindos-on-your-own/eurhlindosoyo",
      "absolute_url": "https://www.shoreexcursionsgroup.com/tour/lindos-on-your-own/eurhlindosoyo",
      "official_title": "Lindos On Your Own",
      "official_title_source": "h1",
      "listing_title": "Lindos On Your Own",
      "duration": "6 Hours 30 Minutes",
      "activity_level": "Moderate",
      "excursion_size": "Standard",
      "excursion_type_category": "Scenic, Cultural, Historical",
      "tour_type_inferred": "Standard / coach-size group",
      "destination_areas": [
        "Lindos",
        "Acropolis",
        "Beach"
      ],
      "highlights": [
        "Lindos' Medieval charms await you on this popular, fast-selling tour, allowing you to explore at your own pace!",
        "Enjoy a scenic ride along Rhodes' east coast, enriched by fascinating commentary from your expert guide.",
        "Soak in breathtaking views from Lindos' hilltop before wandering through its whitewashed, historical buildings.",
        "Choose between visiting the ancient Acropolis, sunbathing on a sandy beach, or indulging in local cuisine and retail therapy.",
        "With our industry-leading guarantees, small-group atmosphere, and best prices, your Lindos experience is incomparable! Secure your spot today."
      ],
      "key_inclusions_inferred": [
        "Highlight: Lindos' Medieval charms await you on this popular, fast-selling tour, allowing you to explore at your own pace!",
        "Highlight: Enjoy a scenic ride along Rhodes' east coast, enriched by fascinating commentary from your expert guide.",
        "Highlight: Soak in breathtaking views from Lindos' hilltop before wandering through its whitewashed, historical buildings.",
        "Highlight: Choose between visiting the ancient Acropolis, sunbathing on a sandy beach, or indulging in local cuisine and retail therapy.",
        "Highlight: With our industry-leading guarantees, small-group atmosphere, and best prices, your Lindos experience is incomparable! Secure your spot today.",
        "Dress guidance (not an inclusion): We recommend wearing comfortable, casual seasonal clothing and walking shoes. A hat, sunglasses and sunscreen are also suggested."
      ],
      "key_exclusions_inferred": [
        "Food/beverage: Not Included",
        "Restriction/capability note: Guests must be able to get in and out of transportation required to tour site. This tour is not wheelchair accessible."
      ],
      "port_pickup_details": [
        "Leaves from: Cruise Port (Gate A) Bus Stop",
        "Booking confirmation contains meeting instructions (standard SEG wording)."
      ],
      "return_to_ship_wording": [
        "Sitewide claim: Guaranteed Return to Ship"
      ],
      "dress": "We recommend wearing comfortable, casual seasonal clothing and walking shoes. A hat, sunglasses and sunscreen are also suggested.",
      "restrictions": "Guests must be able to get in and out of transportation required to tour site. This tour is not wheelchair accessible.",
      "food_beverage": "Not Included",
      "description_paragraphs": [
        "Spend the day exploring the charming medieval village of Lindos! Your journey begins as you and your group are picked up at the port and transferred to Lindos in a comfortable medium-sized bus with no more than 30 guests.",
        "Enjoy a scenic ride along the east coast of Rhodes as your guide shares interesting and useful commentary along the way. Upon arrival to Lindos, take a few minutes at the top of the hill to soak in the spectacular views and grab memorable photographs before heading to the main village square.",
        "Take full advantage of four hours to see Lindos exactly the way you want to, at your own pace. Walk the paths that wind between traditional, whitewashed buildings and keep an eye out for the Captain's houses, some dating from as early as the 14th century. You can choose to head towards the famous Acropolis, an ancient citadel situated on a steep cliff.",
        "While here, look for the remains of an ancient amphitheater carved into the slope nearby. Alternatively, you can make your way down to the sandy beach for a little fun under the Grecian sun and enjoy a refreshing swim. Be sure to pop into one of the many cafes and restaurants and take in a little retail therapy before you leave.",
        "This 6.5-hour tour sells out fast! What are you waiting for? Book now to experience YOUR Lindos, YOUR way."
      ],
      "pricing": {
        "displayed_price_text": "Price: $48.00",
        "listing_price_text": "Price: $48.00",
        "mechanism_notes": [
          "Add to cart after selecting departure date/time",
          "Book Now button present",
          "Date/time selection required before purchase"
        ],
        "caveat": "Prices shown are as scraped from SEG HTML at scrape time (USD). Do not invent or hard-code prices on our site; confirm live on SEG."
      },
      "reviews": {
        "stars": "4.5 Stars",
        "count_label": "17 Reviews",
        "samples": [],
        "source_note": "port listing card (static star image + review count); product page uses TurnTo widget (not populated in static scrape)",
        "legitimate": true
      },
      "proposed_editorial_slug": "lindos-on-your-own",
      "uncertainties": [
        "Listing Food/Beverage 'None' vs product page 'Not Included' (wording may differ)."
      ],
      "listing_card_snippets": {
        "Excursion Size": "Standard",
        "Excursion Type": "Scenic, Cultural, Historical",
        "Food/Beverage": "None",
        "Activity Level": "Moderate",
        "Excursion Duration": "6 Hours 30 Minutes"
      }
    },
    {
      "seg_code": "EURHKAYAK",
      "seg_code_lower": "eurhkayak",
      "relative_path": "/tour/sea-kayaking-the-pirates-route/eurhkayak",
      "absolute_url": "https://www.shoreexcursionsgroup.com/tour/sea-kayaking-the-pirates-route/eurhkayak",
      "official_title": "Sea Kayaking the Pirates Route",
      "official_title_source": "h1",
      "listing_title": "Sea Kayaking the Pirates Route",
      "duration": "6 Hours",
      "activity_level": "Moderate",
      "excursion_size": "Small",
      "excursion_type_category": "Canoeing or Kayaking",
      "tour_type_inferred": "Small group",
      "destination_areas": [
        "Wine",
        "Beach"
      ],
      "highlights": [
        "Uncover the hidden gems of Rhodes by kayaking the Pirates Route, an unforgettable adventure through the path of infamous pirates",
        "Learn kayaking techniques that will allow you to confidently explore stunning sea caves and rock formations",
        "Take a delightful swim or snorkel break at Anthony Quinns Bay and Ladiko Bay, immersing in the crystal-clear waters of the Aegean Sea",
        "Indulge in a scrumptious seaside picnic featuring traditional Greek food at Traounou Beach, adding culinary delight to your adventure",
        "Learn about the rich history and environment of Rhodes from knowledgeable local guides"
      ],
      "key_inclusions_inferred": [
        "Food/beverage: Lunch is included.",
        "Highlight: Uncover the hidden gems of Rhodes by kayaking the Pirates Route, an unforgettable adventure through the path of infamous pirates",
        "Highlight: Learn kayaking techniques that will allow you to confidently explore stunning sea caves and rock formations",
        "Highlight: Take a delightful swim or snorkel break at Anthony Quinns Bay and Ladiko Bay, immersing in the crystal-clear waters of the Aegean Sea",
        "Highlight: Indulge in a scrumptious seaside picnic featuring traditional Greek food at Traounou Beach, adding culinary delight to your adventure",
        "Highlight: Learn about the rich history and environment of Rhodes from knowledgeable local guides",
        "Dress guidance (not an inclusion): We recommend wearing comfortable, seasonal clothing over your swim wear with sturdy walking shoes or sandals. Hat, sunglasses and sunscreen are also recommended. If you wish, you may bring a change of clothes for after the activity."
      ],
      "key_exclusions_inferred": [
        "Restriction/capability note: Guests must be able to get in and out of transportation to kayak site. Minimum age required is 14 years old. Maximum weight allowed is 230 lbs. All participants must be able to kayak for up to 2.5 hours to participate. Pregnant women or guests with back/neck injuries are not allowed to participate. A parent or legal guardian must accompany children under 18 years of age and all participants must sign a waiver. This tour is not wheelchair accessible and not recommended for any guest with limited mobility."
      ],
      "port_pickup_details": [
        "Leaves from: Cruise Ship Pier",
        "Booking confirmation contains meeting instructions (standard SEG wording)."
      ],
      "return_to_ship_wording": [
        "Sitewide claim: Guaranteed Return to Ship"
      ],
      "dress": "We recommend wearing comfortable, seasonal clothing over your swim wear with sturdy walking shoes or sandals. Hat, sunglasses and sunscreen are also recommended. If you wish, you may bring a change of clothes for after the activity.",
      "restrictions": "Guests must be able to get in and out of transportation to kayak site. Minimum age required is 14 years old. Maximum weight allowed is 230 lbs. All participants must be able to kayak for up to 2.5 hours to participate. Pregnant women or guests with back/neck injuries are not allowed to participate. A parent or legal guardian must accompany children under 18 years of age and all participants must sign a waiver. This tour is not wheelchair accessible and not recommended for any guest with limited mobility.",
      "food_beverage": "Lunch is included.",
      "description_paragraphs": [
        "There is so much more to Rhodes than what meets the eye. Discover this amazing destination in a unique way as you go where there are no roads or footpaths.",
        "The fun begins as your expert guide shares kayaking techniques and makes sure you feel at ease in your kayak-then it's your turn to paddle along the route taken by the infamous Rhodes pirates of yesteryear!",
        "Venture into hidden sea caves, soak in panoramic views of beautiful bays and make your way past stunning rock formations. You can take a break from paddling with a quick swim or snorkel at Anthony Quinns Bay and Ladiko Bay, then unwind at Traounou Beach with an appetizing seaside picnic of traditional Greek food including Dakos with feta cheese and cherry tomatoes, local olives, a variety of salads plus wrapped wine leaves with rice.",
        "Throughout the tour, the local and knowledgeable guide will share plenty of pirate lore as well as fascinating facts about the area's environment and rich history. This eco-friendly form of transportation allows you to explore the island's maritime charms in a quiet, up-close, and personal way.",
        "Enjoy a different take on this amazing island with an active tour of Rhodes at water level by booking now."
      ],
      "pricing": {
        "displayed_price_text": "Price: $172.00",
        "listing_price_text": "Price: $172.00",
        "mechanism_notes": [
          "Add to cart after selecting departure date/time",
          "Book Now button present",
          "Date/time selection required before purchase"
        ],
        "caveat": "Prices shown are as scraped from SEG HTML at scrape time (USD). Do not invent or hard-code prices on our site; confirm live on SEG."
      },
      "reviews": {
        "stars": "5 Stars",
        "count_label": "7 Reviews",
        "samples": [],
        "source_note": "port listing card (static star image + review count); product page uses TurnTo widget (not populated in static scrape)",
        "legitimate": true
      },
      "proposed_editorial_slug": "sea-kayaking-the-pirates-route",
      "uncertainties": [
        "Listing Food/Beverage 'Lunch, Beverages' vs product page 'Lunch is included.' (wording may differ)."
      ],
      "listing_card_snippets": {
        "Excursion Size": "Small",
        "Excursion Type": "Canoeing or Kayaking",
        "Food/Beverage": "Lunch, Beverages",
        "Activity Level": "Moderate",
        "Excursion Duration": "6 Hours"
      }
    },
    {
      "seg_code": "EURHBUTTERFLYWINE",
      "seg_code_lower": "eurhbutterflywine",
      "relative_path": "/tour/butterfly-valley-wine-tasting/eurhbutterflywine",
      "absolute_url": "https://www.shoreexcursionsgroup.com/tour/butterfly-valley-wine-tasting/eurhbutterflywine",
      "official_title": "Butterfly Valley and Wine Tasting",
      "official_title_source": "og:title",
      "listing_title": "Butterfly Valley and Wine Tasting",
      "duration": "5 Hours 30 Minutes",
      "activity_level": "Moderate",
      "excursion_size": "Standard",
      "excursion_type_category": "Culinary / Food",
      "tour_type_inferred": "Standard / coach-size group",
      "destination_areas": [
        "Butterfly Valley",
        "Filerimos",
        "Wine"
      ],
      "highlights": [
        "Experience the awe-inspiring sight of thousands of Jersey Tiger Moths at the magnificent Butterfly Valley in Rhodes.",
        "Explore the western side of this stunning Greek island with your local, expert guide.",
        "Choose your adventure: delve further into the valley or relax in a local cafe, absorbing the breathtaking surroundings.",
        "Enjoy one of Rhodes' top wineries, tasting delectable wines, locally-produced extra-virgin olive oil, and thyme-infused honey.",
        "Book this tour now to discover a unique side of Rhodes - don't miss out, seats fill up quickly!"
      ],
      "key_inclusions_inferred": [
        "Highlight: Experience the awe-inspiring sight of thousands of Jersey Tiger Moths at the magnificent Butterfly Valley in Rhodes.",
        "Highlight: Explore the western side of this stunning Greek island with your local, expert guide.",
        "Highlight: Choose your adventure: delve further into the valley or relax in a local cafe, absorbing the breathtaking surroundings.",
        "Highlight: Enjoy one of Rhodes' top wineries, tasting delectable wines, locally-produced extra-virgin olive oil, and thyme-infused honey.",
        "Highlight: Book this tour now to discover a unique side of Rhodes - don't miss out, seats fill up quickly!",
        "Dress guidance (not an inclusion): We recommend wearing comfortable clothing and sensible, flat-soled walking shoes. Sunscreen and sunglasses are also recommended."
      ],
      "key_exclusions_inferred": [
        "Food/beverage: Not Included",
        "Continue on to one of the best wineries in Rhodes and partake in a delicious wine tasting. While here you will have a chance to sample extra-virgin olive oil from ancient trees harvested by the ancestors, and try local honey infused with with thyme, pine, orange blossom and various spring flowers. This 5.5 hour tour introduces you to a unique side of Rhodes. Book now! PLEASE NOTE : The itinerary is subject to change depending on the butterfly season (the beginning of June till the end of September). If butterflies are not in season, an alternate would be a visit to Filerimos, a serene location home to vibrant peacocks. Due to local laws all individuals including infants and children must be accounted for at the time of booking as each individual will require a seat on the tour.",
        "Restriction/capability note: Minimum age to consume alcohol is 21 years. If you wish to explore further into Butterfly Valley there is an additional charge of 5 EUR (not included) is payable on the day. This tour is not wheelchair accessible. Due to local laws all individuals including infants and children must be accounted for at the time of booking as each individual will require a seat on the tour."
      ],
      "port_pickup_details": [
        "Leaves from: An approximate 5-minute walk from the cruise ship pier is required to reach your departure location. Full details will be provided in your electronic ticket upon confirmation.",
        "Booking confirmation contains meeting instructions (standard SEG wording)."
      ],
      "return_to_ship_wording": [
        "Sitewide claim: Guaranteed Return to Ship"
      ],
      "dress": "We recommend wearing comfortable clothing and sensible, flat-soled walking shoes. Sunscreen and sunglasses are also recommended.",
      "restrictions": "Minimum age to consume alcohol is 21 years. If you wish to explore further into Butterfly Valley there is an additional charge of 5 EUR (not included) is payable on the day. This tour is not wheelchair accessible. Due to local laws all individuals including infants and children must be accounted for at the time of booking as each individual will require a seat on the tour.",
      "food_beverage": "Not Included",
      "description_paragraphs": [
        "The fun begins when you and your local English speaking guide board the minibus for a ride out to Butterfly Valley on the western side of the island of Rhodes. Every year, the end of the wet season brings thousands of Jersey Tiger Moths to the area, blanketing the entire landscape in a sight that is exhilarating to behold.",
        "This species has black and cream-colored striped wings at the top with stunning orange or yellow wings at the bottom decorated with black dots. You have the choice of paying an entrance fee and venturing further into the valley or relax in the main area and enjoy the local cafe.",
        "Continue on to one of the best wineries in Rhodes and partake in a delicious wine tasting. While here you will have a chance to sample extra-virgin olive oil from ancient trees harvested by the ancestors, and try local honey infused with with thyme, pine, orange blossom and various spring flowers. This 5.5 hour tour introduces you to a unique side of Rhodes. Book now! PLEASE NOTE : The itinerary is subject to change depending on the butterfly season (the beginning of June till the end of September). If butterflies are not in season, an alternate would be a visit to Filerimos, a serene location home to vibrant peacocks. Due to local laws all individuals including infants and children must be accounted for at the time of booking as each individual will require a seat on the tour."
      ],
      "pricing": {
        "displayed_price_text": "Price: $128.00",
        "listing_price_text": "Price: $128.00",
        "mechanism_notes": [
          "Add to cart after selecting departure date/time",
          "Book Now button present",
          "Date/time selection required before purchase"
        ],
        "caveat": "Prices shown are as scraped from SEG HTML at scrape time (USD). Do not invent or hard-code prices on our site; confirm live on SEG."
      },
      "reviews": {
        "stars": "5 Stars",
        "count_label": "5 Reviews",
        "samples": [],
        "source_note": "port listing card (static star image + review count); product page uses TurnTo widget (not populated in static scrape)",
        "legitimate": true
      },
      "proposed_editorial_slug": "butterfly-valley-and-wine-tasting",
      "uncertainties": [
        "Official h1 missing on product page; title taken from og:title."
      ],
      "listing_card_snippets": {
        "Excursion Size": "Standard",
        "Excursion Type": "Culinary / Food",
        "Food/Beverage": "Not Included",
        "Activity Level": "Moderate",
        "Excursion Duration": "5 Hours 30 Minutes"
      }
    },
    {
      "seg_code": "EURHMEDOLDWALK",
      "seg_code_lower": "eurhmedoldwalk",
      "relative_path": "/tour/medieval-old-town-rhodes-walking-tour/eurhmedoldwalk",
      "absolute_url": "https://www.shoreexcursionsgroup.com/tour/medieval-old-town-rhodes-walking-tour/eurhmedoldwalk",
      "official_title": "Medieval Old Town Rhodes Walking Tour",
      "official_title_source": "og:title",
      "listing_title": "Medieval Old Town Rhodes Walking Tour",
      "duration": "3 Hours",
      "activity_level": "Moderate",
      "excursion_size": "Standard",
      "excursion_type_category": "Walking Tour",
      "tour_type_inferred": "Standard / coach-size group",
      "destination_areas": [
        "Old Town",
        "Grand Master",
        "Palace",
        "Street of the Knights"
      ],
      "highlights": [
        "Step into history with every cobbled alleyway in the Old Town of Rhodes through this mesmerizing walking tour.",
        "Discover Classical, Ottoman, and Italian influences scattered throughout the town as your local English-speaking guide escorts you to main highlights.",
        "Venture into the heart of Old Town through the Jewish Quarter and bustling Ippokratous Square with its medieval inns.",
        "Behold the impressive Grand Master Palace, a Gothic castle that was a palace, fortress, and Knights of Rhodes headquarters.",
        "Uncover medieval legends and marvel at Fortifications of the Palace and the Archeological Museum, housed in an ancient Knights hospital."
      ],
      "key_inclusions_inferred": [
        "Highlight: Step into history with every cobbled alleyway in the Old Town of Rhodes through this mesmerizing walking tour.",
        "Highlight: Discover Classical, Ottoman, and Italian influences scattered throughout the town as your local English-speaking guide escorts you to main highlights.",
        "Highlight: Venture into the heart of Old Town through the Jewish Quarter and bustling Ippokratous Square with its medieval inns.",
        "Highlight: Behold the impressive Grand Master Palace, a Gothic castle that was a palace, fortress, and Knights of Rhodes headquarters.",
        "Highlight: Uncover medieval legends and marvel at Fortifications of the Palace and the Archeological Museum, housed in an ancient Knights hospital.",
        "Dress guidance (not an inclusion): We recommend wearing comfortable clothing and sensible, flat-soled walking shoes. Sunscreen and sunglasses are also recommended. Guests must have their knees and shoulders covered if visiting a religious site."
      ],
      "key_exclusions_inferred": [
        "Food/beverage: Not Included",
        "Restriction/capability note: Entrance fees to the museums are not included in the price. The museums (Archeological Museum and Grand Master's Palace) are optional. You can visit it together with our guide and pay the entrance fees directly on the day, or you can enjoy some free time in the Old Town instead. The entrance fees are: Archeological Museum (not included) is approximately 8 EUR per person. Grand Master's Palace is approximately 6 EUR per person. Please note: the museums can change their prices at any time. Guests must be able to walk over cobblestones and uneven surfaces, inclines, and steps. This tour is not wheelchair accessible because of the varied terrain. Please have your knees and shoulders covered if visiting a religious site. Due to local laws all individuals including infants and children must be accounted for at the time of booking as each individual will require a seat on the tour."
      ],
      "port_pickup_details": [
        "Leaves from: An approximate 5-minute walk from the cruise ship pier is required to reach your departure location. Full details will be provided in your electronic ticket upon confirmation.",
        "Booking confirmation contains meeting instructions (standard SEG wording)."
      ],
      "return_to_ship_wording": [
        "Sitewide claim: Guaranteed Return to Ship"
      ],
      "dress": "We recommend wearing comfortable clothing and sensible, flat-soled walking shoes. Sunscreen and sunglasses are also recommended. Guests must have their knees and shoulders covered if visiting a religious site.",
      "restrictions": "Entrance fees to the museums are not included in the price. The museums (Archeological Museum and Grand Master's Palace) are optional. You can visit it together with our guide and pay the entrance fees directly on the day, or you can enjoy some free time in the Old Town instead. The entrance fees are: Archeological Museum (not included) is approximately 8 EUR per person. Grand Master's Palace is approximately 6 EUR per person. Please note: the museums can change their prices at any time. Guests must be able to walk over cobblestones and uneven surfaces, inclines, and steps. This tour is not wheelchair accessible because of the varied terrain. Please have your knees and shoulders covered if visiting a religious site. Due to local laws all individuals including infants and children must be accounted for at the time of booking as each individual will require a seat on the tour.",
      "food_beverage": "Not Included",
      "description_paragraphs": [
        "Your local English-speaking guide will escort you into the Old Town, through the narrow maze of cobbled alleyways full of Classical, Ottoman, and Italian influences, stopping at the city's main highlights",
        "Walk through the Jewish Quarter and into Ippokratous Square in the heart of Old Town. Along the famous Street of the Knights, you will find small, medieval inns that housed the crusading knights. The end of this street leads you to the massive Grand Master Palace, a Gothic castle that was used as a palace, a fortress, and the headquarters of the Knight of Rhodes.",
        "Pass by the Archeological Museum housed in the 15th-century hospital of the Knights of Saint John, and see the Fortifications of the Palace. Throughout your tour, you will hear fascinating medieval legends and learn the rich history of the Old Town. Stroll through layers of Rhodes history when you book this 3-hour walking tour now.",
        "PLEASE NOTE : Due to local laws all individuals including infants and children must be accounted for at the time of booking as each individual will require a seat on the tour."
      ],
      "pricing": {
        "displayed_price_text": "Price: $108.00",
        "listing_price_text": "Price: $108.00",
        "mechanism_notes": [
          "Add to cart after selecting departure date/time",
          "Book Now button present",
          "Date/time selection required before purchase"
        ],
        "caveat": "Prices shown are as scraped from SEG HTML at scrape time (USD). Do not invent or hard-code prices on our site; confirm live on SEG."
      },
      "reviews": {
        "stars": "5 Stars",
        "count_label": "5 Reviews",
        "samples": [],
        "source_note": "port listing card (static star image + review count); product page uses TurnTo widget (not populated in static scrape)",
        "legitimate": true
      },
      "proposed_editorial_slug": "medieval-old-town-rhodes-walking-tour",
      "uncertainties": [
        "Official h1 missing on product page; title taken from og:title."
      ],
      "listing_card_snippets": {
        "Excursion Size": "Standard",
        "Excursion Type": "Walking Tour",
        "Food/Beverage": "Not Included",
        "Activity Level": "Moderate",
        "Excursion Duration": "3 Hours"
      }
    },
    {
      "seg_code": "EURHCOOK",
      "seg_code_lower": "eurhcook",
      "relative_path": "/tour/a-taste-of-rhodes/eurhcook",
      "absolute_url": "https://www.shoreexcursionsgroup.com/tour/a-taste-of-rhodes/eurhcook",
      "official_title": "A Taste of Rhodes",
      "official_title_source": "h1",
      "listing_title": "A Taste of Rhodes",
      "duration": "6 Hours",
      "activity_level": "Easy",
      "excursion_size": "Small",
      "excursion_type_category": "Culinary / Food",
      "tour_type_inferred": "Small group",
      "destination_areas": [
        "Profitis Ilias",
        "Wine"
      ],
      "highlights": [
        "Dive into the culinary culture this tantalizing 5.5-hour tour, limited to only 8 guests for an intimate experience.",
        "Journey in a private minibus to the untouched village of Apollona, nestled in the scenic foothills of Profitis Ilias.",
        "Visit a local agricultural co-op, learn how it's managed by resourceful women, and witness the production of local delicacies.",
        "Explore a traditional Kefeneion, savor aromatic Greek coffee prepared on hot sand, and relish the antiques adorning the cafe."
      ],
      "key_inclusions_inferred": [
        "Food/beverage: Lunch is included.",
        "Highlight: Dive into the culinary culture this tantalizing 5.5-hour tour, limited to only 8 guests for an intimate experience.",
        "Highlight: Journey in a private minibus to the untouched village of Apollona, nestled in the scenic foothills of Profitis Ilias.",
        "Highlight: Visit a local agricultural co-op, learn how it's managed by resourceful women, and witness the production of local delicacies.",
        "Highlight: Explore a traditional Kefeneion, savor aromatic Greek coffee prepared on hot sand, and relish the antiques adorning the cafe.",
        "Having enjoyed the winetasting we return to savour the fruits of your culinary labors by sitting down to a homemade lunch that you and your fellow cooks have lovingly prepared. Included in your meal is a fresh seasonal salad and Apollona's local delicacy - roasted goat with chickpeas!",
        "Dress guidance (not an inclusion): We recommend wearing comfortable, seasonal clothing and walking shoes. Hat, sunglasses and sunscreen are also recommended for hot, sunny days."
      ],
      "key_exclusions_inferred": [
        "Restriction/capability note: Guests must be able to enter and exit transportation. This tour is not wheelchair accessible."
      ],
      "port_pickup_details": [
        "Leaves from: Cruise Ship Pier",
        "Booking confirmation contains meeting instructions (standard SEG wording)."
      ],
      "return_to_ship_wording": [
        "Sitewide claim: Guaranteed Return to Ship"
      ],
      "dress": "We recommend wearing comfortable, seasonal clothing and walking shoes. Hat, sunglasses and sunscreen are also recommended for hot, sunny days.",
      "restrictions": "Guests must be able to enter and exit transportation. This tour is not wheelchair accessible.",
      "food_beverage": "Lunch is included.",
      "description_paragraphs": [
        "You can get to know a lot about the culture and people of a city through its food, and this tasty 5.5-hour tour does not disappoint! With no more than 12 guests in total, you will be given a very special and intimate introduction to the culinary culture of Greece.",
        "The fun begins as soon as you board a private minibus for a scenic and picturesque journey away from the island's coast to the small, unspoiled mountainous village of Apollona nestled in the foothills of Profitis Ilias.",
        "Stop for a brief visit to an agricultural co-op operated by a group of proud, resourceful women. You'll observe how the enterprise is run and get a closer look at the traditional methods used to produce a local delicacy.",
        "From there you will take a short walk through the village on your way to one of the best-loved restaurants on the island. The highlight of the tour, which takes place here, will be a personal cooking class from a cook from the village who will share her secrets in making traditional, famous Greek fare including tzatziki, cheese pies, and aubergine salad. You will also learn how to make Ntolmadakia (stuffed wine leaves with rice)!",
        "After cooking you will visit a winemaker and learn about the various local grape varieties as well as the wine-making process.While here, bring a glass of delicious wine to your lips and understand firsthand why Rhodes produces some of the world's most award-winning wines.",
        "Having enjoyed the winetasting we return to savour the fruits of your culinary labors by sitting down to a homemade lunch that you and your fellow cooks have lovingly prepared. Included in your meal is a fresh seasonal salad and Apollona's local delicacy - roasted goat with chickpeas!",
        "Conclude your time in Apollona enjoying a visit to a traditional Kefeneion (cafe) in the village. You will travel back in time by admiring the antiques of the Italian Era in the interior of the building and also learn the secrets of the strong aromatic Greek coffee prepared on the hot sand - Hovoli in Greek.",
        "This popular culinary tour is a perfect introduction to the flavors and culture of Rhodes, sign up today as this tour is very popular and has limited space."
      ],
      "pricing": {
        "displayed_price_text": "Price: $242.00",
        "listing_price_text": "Price: $242.00",
        "mechanism_notes": [
          "Add to cart after selecting departure date/time",
          "Book Now button present",
          "Date/time selection required before purchase"
        ],
        "caveat": "Prices shown are as scraped from SEG HTML at scrape time (USD). Do not invent or hard-code prices on our site; confirm live on SEG."
      },
      "reviews": {
        "stars": "5 Stars",
        "count_label": "5 Reviews",
        "samples": [],
        "source_note": "port listing card (static star image + review count); product page uses TurnTo widget (not populated in static scrape)",
        "legitimate": true
      },
      "proposed_editorial_slug": "a-taste-of-rhodes",
      "uncertainties": [
        "Listing Food/Beverage 'Lunch, Beverages' vs product page 'Lunch is included.' (wording may differ)."
      ],
      "listing_card_snippets": {
        "Excursion Size": "Small",
        "Excursion Type": "Culinary / Food",
        "Food/Beverage": "Lunch, Beverages",
        "Activity Level": "Easy",
        "Excursion Duration": "6 Hours"
      }
    },
    {
      "seg_code": "EURHFISHBOAT",
      "seg_code_lower": "eurhfishboat",
      "relative_path": "/tour/rhodes-fishing-boat-trip/eurhfishboat",
      "absolute_url": "https://www.shoreexcursionsgroup.com/tour/rhodes-fishing-boat-trip/eurhfishboat",
      "official_title": "Rhodes Fishing Boat Trip",
      "official_title_source": "og:title",
      "listing_title": "Rhodes Fishing Boat Trip",
      "duration": "4 Hours",
      "activity_level": "Easy",
      "excursion_size": "Small",
      "excursion_type_category": "Fishing",
      "tour_type_inferred": "Small group",
      "destination_areas": [],
      "highlights": [
        "Experience authentic fishing in the Mediterranean on a registered traditional boat with our Rhodes Fishing Boat Trip.",
        "Gain insider fishing techniques from a captain with over 35 years of experience you might even catch the day's lunch!",
        "Enjoy a family-friendly outing non-fishing members can sunbathe, swim or try their hand at fishing.",
        "Book your spot on this exciting 4-hour tour today and don't miss out on this unforgettable adventure!"
      ],
      "key_inclusions_inferred": [
        "Food/beverage: Enjoy one grilled fish (400 gr.) with salad, bread, fruit, water, and soft drinks.",
        "Highlight: Experience authentic fishing in the Mediterranean on a registered traditional boat with our Rhodes Fishing Boat Trip.",
        "Highlight: Gain insider fishing techniques from a captain with over 35 years of experience you might even catch the day's lunch!",
        "Highlight: Enjoy a family-friendly outing non-fishing members can sunbathe, swim or try their hand at fishing.",
        "Highlight: Book your spot on this exciting 4-hour tour today and don't miss out on this unforgettable adventure!",
        "Dress guidance (not an inclusion): We recommend wearing comfortable clothing and sensible, flat-soled, closed shoes. Sunscreen and sunglasses are also recommended."
      ],
      "key_exclusions_inferred": [
        "Restriction/capability note: Boat trips are subject to weather conditions at the time of sailing. This tour is not wheelchair accessible. Due to local laws all individuals including infants and children must be accounted for at the time of booking as each individual will require a seat on the tour."
      ],
      "port_pickup_details": [
        "Leaves from: An approximate 5-minute walk from the cruise ship pier is required to reach your departure location. Full details will be provided in your electronic ticket upon confirmation.",
        "Booking confirmation contains meeting instructions (standard SEG wording)."
      ],
      "return_to_ship_wording": [
        "Sitewide claim: Guaranteed Return to Ship"
      ],
      "dress": "We recommend wearing comfortable clothing and sensible, flat-soled, closed shoes. Sunscreen and sunglasses are also recommended.",
      "restrictions": "Boat trips are subject to weather conditions at the time of sailing. This tour is not wheelchair accessible. Due to local laws all individuals including infants and children must be accounted for at the time of booking as each individual will require a seat on the tour.",
      "food_beverage": "Enjoy one grilled fish (400 gr.) with salad, bread, fruit, water, and soft drinks.",
      "description_paragraphs": [
        "If you love fishing, you won't want to miss this tour! Take to the waters in an authentic, registered traditional fishing boat that maintains the safety, hygiene, and inspection standards. This vessel is perfect for a fun day in the sun!",
        "Your Captain has over 35 years of experience and a passion for sharing his best fishing techniques that will help you become a master with the fishing rod. Take photos with your catch of the day! Then get ready for a delicious light lunch of fresh fish and salad.",
        "This tour is family-friendly and non-fishing members can try their hand at the sport, or elect to still have a great time swimming and sunbathing while you tend to the fishing reel. Book this 4-hour fishing tour today and get ready to experience the thrill of fishing in the Mediterranean!",
        "PLEASE NOTE: This tour is for guests looking for an authentic fishing experience in an actual fisherman's (not modern) fishing boat. Due to local laws all individuals including infants and children must be accounted for at the time of booking as each individual will require a seat on the tour."
      ],
      "pricing": {
        "displayed_price_text": "Price: $143.00",
        "listing_price_text": "Price: $143.00",
        "mechanism_notes": [
          "Add to cart after selecting departure date/time",
          "Book Now button present",
          "Date/time selection required before purchase"
        ],
        "caveat": "Prices shown are as scraped from SEG HTML at scrape time (USD). Do not invent or hard-code prices on our site; confirm live on SEG."
      },
      "reviews": {
        "stars": "5 Stars",
        "count_label": "1 Review",
        "samples": [],
        "source_note": "port listing card (static star image + review count); product page uses TurnTo widget (not populated in static scrape)",
        "legitimate": true
      },
      "proposed_editorial_slug": "rhodes-fishing-boat-trip",
      "uncertainties": [
        "Listing Food/Beverage 'Beverage, Meal Included' vs product page 'Enjoy one grilled fish (400 gr.) with salad, bread, fruit, water, and soft drinks.' (wording may differ).",
        "Official h1 missing on product page; title taken from og:title."
      ],
      "listing_card_snippets": {
        "Excursion Size": "Small",
        "Excursion Type": "Fishing",
        "Food/Beverage": "Beverage, Meal Included",
        "Activity Level": "Easy",
        "Excursion Duration": "4 Hours"
      }
    },
    {
      "seg_code": "EURHCTYOLDSEG",
      "seg_code_lower": "eurhctyoldseg",
      "relative_path": "/tour/rhodes-city-old-town-segway-mini/eurhctyoldseg",
      "absolute_url": "https://www.shoreexcursionsgroup.com/tour/rhodes-city-old-town-segway-mini/eurhctyoldseg",
      "official_title": "Rhodes City and Old Town by Segway Mini",
      "official_title_source": "og:title",
      "listing_title": "Rhodes City and Old Town by Segway Mini",
      "duration": "1 Hour 30 Minutes",
      "activity_level": "Moderate",
      "excursion_size": "Small",
      "excursion_type_category": "Segway Tour",
      "tour_type_inferred": "Small group",
      "destination_areas": [
        "Mandraki",
        "Old Town",
        "Grand Master",
        "Rhodes City",
        "Palace",
        "Street of the Knights",
        "Archaeological Museum"
      ],
      "highlights": [
        "Experience the charm of Rhodes like never before on a swift Segway Mini, covering more iconic landmarks in less time.",
        "Discover Rhodes' rich history as you glide through the cobbled streets of the Jewish Quarter, Ippokratous Square, and the famous Street of Knights.",
        "Marvel at the grandeur of the Gothic Grand Master Palace, once a palace, fortress, and headquarters of the Knight of Rhodes.",
        "Explore the Fortifications of the Palace and the Archaeological Museum, brimming with medieval legends and the city's vibrant past.",
        "Don't miss out on this unique, small-group tour; book now to guarantee a spot and ensure an unforgettable shore excursion."
      ],
      "key_inclusions_inferred": [
        "Highlight: Experience the charm of Rhodes like never before on a swift Segway Mini, covering more iconic landmarks in less time.",
        "Highlight: Discover Rhodes' rich history as you glide through the cobbled streets of the Jewish Quarter, Ippokratous Square, and the famous Street of Knights.",
        "Highlight: Marvel at the grandeur of the Gothic Grand Master Palace, once a palace, fortress, and headquarters of the Knight of Rhodes.",
        "Highlight: Explore the Fortifications of the Palace and the Archaeological Museum, brimming with medieval legends and the city's vibrant past.",
        "Highlight: Don't miss out on this unique, small-group tour; book now to guarantee a spot and ensure an unforgettable shore excursion.",
        "Dress guidance (not an inclusion): We recommend wearing comfortable clothing and sensible, flat-soled, closed shoes. Sunscreen and sunglasses are also recommended. Safety helmets are provided"
      ],
      "key_exclusions_inferred": [
        "Food/beverage: Not Included",
        "Restriction/capability note: The segway experience is comprised of 1 hour on a segway mini, which does not have handlebars. Due to local laws all individuals must be accounted for at the time of booking as each individual will require a seat on the tour."
      ],
      "port_pickup_details": [
        "Leaves from: An approximate 5-minute walk from the cruise ship pier is required to reach your departure location. Full details will be provided in your electronic ticket upon confirmation.",
        "Booking confirmation contains meeting instructions (standard SEG wording)."
      ],
      "return_to_ship_wording": [
        "Sitewide claim: Guaranteed Return to Ship"
      ],
      "dress": "We recommend wearing comfortable clothing and sensible, flat-soled, closed shoes. Sunscreen and sunglasses are also recommended. Safety helmets are provided",
      "restrictions": "The segway experience is comprised of 1 hour on a segway mini, which does not have handlebars. Due to local laws all individuals must be accounted for at the time of booking as each individual will require a seat on the tour.",
      "food_beverage": "Not Included",
      "description_paragraphs": [
        "Got 1.5 hours? Spend them seeing Rhodes with the help of a Segway Mini. This self balancing electric scooter allows you to cover more ground quickly, allowing you to see more landmarks in less time.",
        "You and your small group will meet up with your local English speaking guide for a brief training session on your Segway, then it's time to take to the streets to discover the beauty and history that Rhodes has to offer.",
        "Pass by the Mandraki Harbour and see Elefos and Elafina, the bronze statues of 2 deer that guard the harbor and stand where the feet of the Colossus once stood. Ride through the cobbled streets of the Jewish Quarter, Ippokratous Square, and up the famous Street of the Knights, passing by the mini inns that housed the crusaders as you end at the Grand Master Palace. This Gothic castle was used as a palace, a fortress, and the headquarters of the Knight of Rhodes.",
        "Also on tour is the Fortifications of the Palace and the Archeological Museum, the latter of which is housed in the 15th century hospital of the Knights of Saint John. During the visit your guide will share medieval legends and the rich history of the city of Rhodes. Reserve your spot on this unique tour today and get ready to experience the sights and sounds of the city and Old Town of Rhodes like never before!",
        "Please Note: The segway experience is comprised of 1 hour on a segway mini, which does not have handlebars. Due to local laws all individuals must be accounted for at the time of booking as each individual will require a seat on the tour."
      ],
      "pricing": {
        "displayed_price_text": "Price: $91.00",
        "listing_price_text": "Price: $91.00",
        "mechanism_notes": [
          "Add to cart after selecting departure date/time",
          "Book Now button present",
          "Date/time selection required before purchase"
        ],
        "caveat": "Prices shown are as scraped from SEG HTML at scrape time (USD). Do not invent or hard-code prices on our site; confirm live on SEG."
      },
      "reviews": {
        "stars": null,
        "count_label": null,
        "samples": [],
        "source_note": "product page uses TurnTo widget (not populated in static scrape)",
        "legitimate": false
      },
      "proposed_editorial_slug": "rhodes-city-old-town-segway",
      "uncertainties": [
        "Listing Food/Beverage 'None' vs product page 'Not Included' (wording may differ).",
        "Official h1 missing on product page; title taken from og:title."
      ],
      "listing_card_snippets": {
        "Excursion Size": "Small",
        "Excursion Type": "Segway Tour",
        "Food/Beverage": "None",
        "Activity Level": "Moderate",
        "Excursion Duration": "1 Hour 30 Minutes"
      }
    },
    {
      "seg_code": "EURHHIKEPROFIT",
      "seg_code_lower": "eurhhikeprofit",
      "relative_path": "/tour/profitis-ilias-mountain-hike/eurhhikeprofit",
      "absolute_url": "https://www.shoreexcursionsgroup.com/tour/profitis-ilias-mountain-hike/eurhhikeprofit",
      "official_title": "Profitis Ilias Mountain Hike",
      "official_title_source": "h1",
      "listing_title": "Profitis Ilias Mountain Hike",
      "duration": "5 Hours 30 Minutes",
      "activity_level": "Moderate",
      "excursion_size": "Small",
      "excursion_type_category": "Hiking",
      "tour_type_inferred": "Small group",
      "destination_areas": [
        "Profitis Ilias"
      ],
      "highlights": [
        "Kick off your adventure from Salakos, embracing a family-friendly hike through Profitis Ilias Mountain's shaded paths and breathing in the fresh air.",
        "Ascend gradually, enjoying the panoramic views of the Aegean Sea, Turkish coasts, and distant islands that stretch out beneath you.",
        "Reach the summit to explore the quaint Elafos and Elafina hotels, relics of Italian elegance amidst the island’s rugged beauty.",
        "Discover the historical Villa de Vecci and the ancient Byzantine church, diving deep into Rhodes' rich past.",
        "Hike back to Salakos, carrying fond memories of breathtaking vistas, historical insights, and the tranquility of nature's embrace."
      ],
      "key_inclusions_inferred": [
        "Food/beverage: Snack, Beverage Included",
        "Highlight: Kick off your adventure from Salakos, embracing a family-friendly hike through Profitis Ilias Mountain's shaded paths and breathing in the fresh air.",
        "Highlight: Ascend gradually, enjoying the panoramic views of the Aegean Sea, Turkish coasts, and distant islands that stretch out beneath you.",
        "Highlight: Reach the summit to explore the quaint Elafos and Elafina hotels, relics of Italian elegance amidst the island’s rugged beauty.",
        "Highlight: Discover the historical Villa de Vecci and the ancient Byzantine church, diving deep into Rhodes' rich past.",
        "Highlight: Hike back to Salakos, carrying fond memories of breathtaking vistas, historical insights, and the tranquility of nature's embrace.",
        "Dress guidance (not an inclusion): We recommend wearing sensible closed-toe shoes and layers of clothing, with the top layer being waterproof."
      ],
      "key_exclusions_inferred": [
        "Under the serene canopy of ilex, pine, and olive trees, the hike promises a comfortable temperature and a scenic journey. Revel in stunning vistas of the Aegean Sea, Turkey's coastline, and neighboring islands, adding an extra layer of enchantment to this captivating hike.",
        "Restriction/capability note: This tour is not recommended for guests with limited mobility. The minimum age to participate is 8 years old and the maximum age is 75 years old."
      ],
      "port_pickup_details": [
        "Leaves from: Cruise Ship Pier",
        "Booking confirmation contains meeting instructions (standard SEG wording)."
      ],
      "return_to_ship_wording": [
        "Sitewide claim: Guaranteed Return to Ship"
      ],
      "dress": "We recommend wearing sensible closed-toe shoes and layers of clothing, with the top layer being waterproof.",
      "restrictions": "This tour is not recommended for guests with limited mobility. The minimum age to participate is 8 years old and the maximum age is 75 years old.",
      "food_beverage": "Snack, Beverage Included",
      "description_paragraphs": [
        "Explore the wonders of a hiking tour at Profitis Ilias Mountain, commencing from the charming village of Salakos, nestled amid the foothills yet close to the captivating sea. This adventure invites all levels of hikers, even families, owing to its gradual ascent and well-maintained trails.",
        "Under the serene canopy of ilex, pine, and olive trees, the hike promises a comfortable temperature and a scenic journey. Revel in stunning vistas of the Aegean Sea, Turkey's coastline, and neighboring islands, adding an extra layer of enchantment to this captivating hike.",
        "Ascend to the summit, greeted by a serene picnic area set amidst the tranquil pine forest and the iconic Italian-built hotels, Elafos and Elafina, exuding an alpine charm that's remarkably unique for a Greek island. These vestiges from the Italian occupation of 1929 unveil Rhodes' heritage as a luxury holiday destination.",
        "Venture further to discover the Villa de Vecci, former residence of the Italian governor, and the Byzantine church of Profitis Elias, steeped in historical significance. After a rejuvenating break, start your descent back to Salakos.",
        "This tour, while relatively easy, encapsulates breathtaking landscapes and a rich historical tapestry, beckoning travelers to relish the allure of Rhodes away from the bustling crowds. Experience the perfect blend of adventure, history, and natural beauty in this unique hiking journey at Profitis Ilias Mountain."
      ],
      "pricing": {
        "displayed_price_text": "Price: $123.00",
        "listing_price_text": "Price: $123.00",
        "mechanism_notes": [
          "Add to cart after selecting departure date/time",
          "Book Now button present",
          "Date/time selection required before purchase"
        ],
        "caveat": "Prices shown are as scraped from SEG HTML at scrape time (USD). Do not invent or hard-code prices on our site; confirm live on SEG."
      },
      "reviews": {
        "stars": null,
        "count_label": null,
        "samples": [],
        "source_note": "product page uses TurnTo widget (not populated in static scrape)",
        "legitimate": false
      },
      "proposed_editorial_slug": "profitis-ilias-mountain-hike",
      "uncertainties": [
        "Listing Food/Beverage 'A traditional snack and drinking water is included.' vs product page 'Snack, Beverage Included' (wording may differ)."
      ],
      "listing_card_snippets": {
        "Excursion Size": "Small",
        "Excursion Type": "Hiking",
        "Food/Beverage": "A traditional snack and drinking water is included.",
        "Activity Level": "Moderate",
        "Excursion Duration": "5 Hours 30 Minutes"
      }
    },
    {
      "seg_code": "EURHTCALINDO",
      "seg_code_lower": "eurhtcalindo",
      "relative_path": "/tour/lindos-ancient-rhodes/eurhtcalindo",
      "absolute_url": "https://www.shoreexcursionsgroup.com/tour/lindos-ancient-rhodes/eurhtcalindo",
      "official_title": "Private Ancient Lindos",
      "official_title_source": "h1",
      "listing_title": "Private Ancient Lindos",
      "duration": "3 Hours 30 Minutes",
      "activity_level": "Difficult",
      "excursion_size": "Private",
      "excursion_type_category": "Private Sightseeing",
      "tour_type_inferred": "Private",
      "destination_areas": [
        "Lindos",
        "Acropolis",
        "Rhodes Town"
      ],
      "highlights": [
        "Experience the majesty of Ancient Lindos, renowned for its breathtaking Acropolis and charming white-washed houses. Don't miss this renowned village!",
        "Explore the Acropolis's Byzantine fort and Greek temple ruins, reveling in stunning views of St. Paul's Bay, marking Rhodes's Christian beginning",
        "Wander through Lindos's labyrinth of narrow cobbled streets, past vibrant courtyards and mosaics, guided by a professionally-trained expert.",
        "Enjoy flexible departure times for a half-day tour, allowing your personal exploration of Rhodes to fit perfectly into your schedule."
      ],
      "key_inclusions_inferred": [
        "Highlight: Experience the majesty of Ancient Lindos, renowned for its breathtaking Acropolis and charming white-washed houses. Don't miss this renowned village!",
        "Highlight: Explore the Acropolis's Byzantine fort and Greek temple ruins, reveling in stunning views of St. Paul's Bay, marking Rhodes's Christian beginning",
        "Highlight: Wander through Lindos's labyrinth of narrow cobbled streets, past vibrant courtyards and mosaics, guided by a professionally-trained expert.",
        "Highlight: Enjoy flexible departure times for a half-day tour, allowing your personal exploration of Rhodes to fit perfectly into your schedule.",
        "Dress guidance (not an inclusion): Comfortable clothing and sensible, flat-soled walking shoes are recommended. Sun glasses and sun screen are suggested."
      ],
      "key_exclusions_inferred": [
        "Food/beverage: Not Included",
        "Restriction/capability note: Guests must be able to walk over paved, cobblestone and packed dirt surfaces. The climb to the Acropolis includes inclines, several flights of steps, narrow walkways and a long flight of stairs to reach the castle which do not have a handrail."
      ],
      "port_pickup_details": [
        "Leaves from: Cruise Ship Pier",
        "After meeting your professionally trained guide on the pier, you will depart Rhodes Town and drive along the east coast of the island passing some of the island's most beautiful beaches.",
        "Following your visit, you will return to your transportation for the return drive to the pier along the same coastal road from Rhodes Town.",
        "Booking confirmation contains meeting instructions (standard SEG wording)."
      ],
      "return_to_ship_wording": [
        "Sitewide claim: Guaranteed Return to Ship",
        "Following your visit, you will return to your transportation for the return drive to the pier along the same coastal road from Rhodes Town."
      ],
      "dress": "Comfortable clothing and sensible, flat-soled walking shoes are recommended. Sun glasses and sun screen are suggested.",
      "restrictions": "Guests must be able to walk over paved, cobblestone and packed dirt surfaces. The climb to the Acropolis includes inclines, several flights of steps, narrow walkways and a long flight of stairs to reach the castle which do not have a handrail.",
      "food_beverage": "Not Included",
      "description_paragraphs": [
        "After meeting your professionally trained guide on the pier, you will depart Rhodes Town and drive along the east coast of the island passing some of the island's most beautiful beaches. You will drive through several small villages before arriving at Lindos, one of the three ancient cities on the island of Rhodes.",
        "Lindos is among the island's most famous villages, and is renowned for its famous Acropolis. At a height of 535 feet, the Acropolis offers breathtaking views and photo opportunities of the entire village, including its Medieval castle, superb sandy beaches and charming white-washed, sugar-cubed houses. During your visit, you will take a walking tour through the labyrinth of narrow cobbled streets, and past the colorful courtyards and mosaics for which Lindos is famous.",
        "Ancient Lindos was the most important town on the island, and has been inhabited for 5,000 years. The Acropolis is home to the ruins of a Byzantine fort and a Greek temple from centuries before. You can also glimpse the Bay of St. Paul from the very top of the Acropolis. It is said he washed ashore here during a storm and brought Christianity to the island. After your guided tour of the Acropolis, you will walk down to the village of Lindos for a visit to the Byzantine Church of the Ascension, followed by some free time to explore the area at your leisure.",
        "Following your visit, you will return to your transportation for the return drive to the pier along the same coastal road from Rhodes Town.",
        "Please Note: This tour offers customized departure times between 7:30 AM and 7:00 PM. If your preferred departure time is not listed, please contact us to place your request."
      ],
      "pricing": {
        "displayed_price_text": "From $193.00/person to $624.00/person (Select \"Individuals\" below) Price varies based on number of individuals in your group",
        "listing_price_text": "Price: Starting at $193.00/person",
        "mechanism_notes": [
          "Add to cart after selecting departure date/time",
          "Book Now button present",
          "Date/time selection required before purchase"
        ],
        "caveat": "Prices shown are as scraped from SEG HTML at scrape time (USD). Do not invent or hard-code prices on our site; confirm live on SEG."
      },
      "reviews": {
        "stars": null,
        "count_label": null,
        "samples": [],
        "source_note": "product page uses TurnTo widget (not populated in static scrape)",
        "legitimate": false
      },
      "proposed_editorial_slug": "private-ancient-lindos",
      "uncertainties": [],
      "listing_card_snippets": {
        "Excursion Size": "Private",
        "Excursion Type": "Private Sightseeing",
        "Food/Beverage": "Not Included",
        "Activity Level": "Difficult",
        "Excursion Duration": "3 Hours 30 Minutes"
      }
    },
    {
      "seg_code": "EURHTCALINOT",
      "seg_code_lower": "eurhtcalinot",
      "relative_path": "/tour/ancient-lindos-rhodes/eurhtcalinot",
      "absolute_url": "https://www.shoreexcursionsgroup.com/tour/ancient-lindos-rhodes/eurhtcalinot",
      "official_title": "Private Ancient Lindos and Rhodes",
      "official_title_source": "h1",
      "listing_title": "Private Ancient Lindos and Rhodes",
      "duration": "8 Hours",
      "activity_level": "Difficult",
      "excursion_size": "Private",
      "excursion_type_category": "Private Sightseeing",
      "tour_type_inferred": "Private",
      "destination_areas": [
        "Lindos",
        "Old Town",
        "Acropolis",
        "Rhodes Town",
        "Palace",
        "Street of the Knights",
        "Archaeological Museum"
      ],
      "highlights": [
        "Experience the breathtaking views of Lindos, famous for its Acropolis, Medieval castle, and white-washed houses.",
        "Visit this significant town on the island of Rhodes, steeped in 5,000 years of history, with Byzantine fort and Greek temple ruins.",
        "Enjoy a typical Greek lunch at a seaside restaurant after exploring the Acropolis and taking memorable photos at a church in Lindos.",
        "Embark on a walking tour of Old Rhodes Town, exploring the Palace of the Grand Masters and the cobbled Street of the Knights.",
        "Customize your tour with flexible departure times between 7:30 AM and 7:00 PM for ultimate convenience."
      ],
      "key_inclusions_inferred": [
        "Food/beverage: A typical Greek lunch with wine is included.",
        "Highlight: Experience the breathtaking views of Lindos, famous for its Acropolis, Medieval castle, and white-washed houses.",
        "Highlight: Visit this significant town on the island of Rhodes, steeped in 5,000 years of history, with Byzantine fort and Greek temple ruins.",
        "Highlight: Enjoy a typical Greek lunch at a seaside restaurant after exploring the Acropolis and taking memorable photos at a church in Lindos.",
        "Highlight: Embark on a walking tour of Old Rhodes Town, exploring the Palace of the Grand Masters and the cobbled Street of the Knights.",
        "Highlight: Customize your tour with flexible departure times between 7:30 AM and 7:00 PM for ultimate convenience.",
        "Dress guidance (not an inclusion): Comfortable clothing and sensible, flat-soled walking shoes are recommended. Sunglasses and sunscreen is suggested."
      ],
      "key_exclusions_inferred": [
        "Restriction/capability note: Guests must be able to walk over paved, cobblestone and packed dirt surfaces. The climb to the Acropolis includes inclines, several flights of steps, narrow walkways and a long flight of stairs to reach the castle which do not have a handrail. At the palace there is a long double flight of stairs to reach the second floor rooms."
      ],
      "port_pickup_details": [
        "Leaves from: Cruise Ship Pier",
        "After meeting your professionally trained guide on the pier, you will depart Rhodes Town and drive along the east coast of the island passing some of the island's most beautiful beaches.",
        "At the appointed time, you will meet your guide to walk to the nearby transportation for the short ride back to the pier.",
        "Those guests wishing to stay and enjoy more of the Old Town will be responsible for getting back to the pier on their own.",
        "Booking confirmation contains meeting instructions (standard SEG wording)."
      ],
      "return_to_ship_wording": [
        "Sitewide claim: Guaranteed Return to Ship",
        "At the appointed time, you will meet your guide to walk to the nearby transportation for the short ride back to the pier.",
        "Those guests wishing to stay and enjoy more of the Old Town will be responsible for getting back to the pier on their own."
      ],
      "dress": "Comfortable clothing and sensible, flat-soled walking shoes are recommended. Sunglasses and sunscreen is suggested.",
      "restrictions": "Guests must be able to walk over paved, cobblestone and packed dirt surfaces. The climb to the Acropolis includes inclines, several flights of steps, narrow walkways and a long flight of stairs to reach the castle which do not have a handrail. At the palace there is a long double flight of stairs to reach the second floor rooms.",
      "food_beverage": "A typical Greek lunch with wine is included.",
      "description_paragraphs": [
        "After meeting your professionally trained guide on the pier, you will depart Rhodes Town and drive along the east coast of the island passing some of the island's most beautiful beaches. You will drive through several small villages before arriving at Lindos, one of the three ancient cities on the island of Rhodes.",
        "Lindos is among the island's most famous villages, and is renowned for its famous Acropolis. At a height of 535 feet, the Acropolis offers breathtaking views and photo opportunities of the entire village, including its Medieval castle, superb sandy beaches, and charming white-washed, sugar-cubed houses. During your visit, you will take a walking tour through the labyrinth of narrow cobbled streets, and past the colorful courtyards and mosaics for which Lindos is famous.",
        "Ancient Lindos was the most important town on the island and has been inhabited for 5,000 years. The Acropolis is home to the ruins of a Byzantine fort and a Greek temple from centuries before. You can also glimpse the Bay of St Paul from the very top of the Acropolis. It is said he washed ashore here during a storm and brought Christianity to the island. After your guided tour of the Acropolis, a brief photo stop will be made at a church in Lindos, followed by a typical Greek lunch at seaside restaurant.",
        "Following your visit to Lindos, you will drive back along the coast toward Rhodes Town and continue directly to the Old Town, entering through the Gate d'Amboise.",
        "After lunch, you will being your walking tour of the Old Town. As you enter the first sight before you will be the impressive outer walls of the Palace of the Grand Masters. In the shadows of the palace you will be given a short history of the Palace of the Knights before walking the main entrance to begin your internal visit of several of the palace's main rooms located on the second level.",
        "Returning back to the Street of the Knights which runs from in front of the palace down to the Knight's hospital, you will begin a walk down this charming cobblestone street as your guide points out the facades of what used to be the Inns of the Knights. Today, they are shops, private residences, and even a small university. Your guide will point out the Knight's hospital, now a very interesting Archaeological Museum.",
        "You will then be given some free time to explore on your own, find an ice cream shop, or visit the archeological museum on your own. At the appointed time, you will meet your guide to walk to the nearby transportation for the short ride back to the pier. Those guests wishing to stay and enjoy more of the Old Town will be responsible for getting back to the pier on their own. From the Knight's Hospital area, it is approximately 15 minutes walking to the pier.",
        "Please Note: This tour offers customized departure times between 7:30 AM and 7:00 PM. If your preferred departure time is not listed, please contact us to place your request."
      ],
      "pricing": {
        "displayed_price_text": "From $361.00/person to $1,658.00/person (Select \"Individuals\" below) Price varies based on number of individuals in your group",
        "listing_price_text": "Price: Starting at $361.00/person",
        "mechanism_notes": [
          "Add to cart after selecting departure date/time",
          "Book Now button present",
          "Date/time selection required before purchase"
        ],
        "caveat": "Prices shown are as scraped from SEG HTML at scrape time (USD). Do not invent or hard-code prices on our site; confirm live on SEG."
      },
      "reviews": {
        "stars": null,
        "count_label": null,
        "samples": [],
        "source_note": "product page uses TurnTo widget (not populated in static scrape)",
        "legitimate": false
      },
      "proposed_editorial_slug": "private-ancient-lindos-and-rhodes",
      "uncertainties": [
        "Listing Food/Beverage 'Lunch, Beverage Included' vs product page 'A typical Greek lunch with wine is included.' (wording may differ)."
      ],
      "listing_card_snippets": {
        "Excursion Size": "Private",
        "Excursion Type": "Private Sightseeing",
        "Food/Beverage": "Lunch, Beverage Included",
        "Activity Level": "Difficult",
        "Excursion Duration": "8 Hours"
      }
    },
    {
      "seg_code": "EURHTCACULIN",
      "seg_code_lower": "eurhtcaculin",
      "relative_path": "/tour/culinary-delights-group-rhodes/eurhtcaculin",
      "absolute_url": "https://www.shoreexcursionsgroup.com/tour/culinary-delights-group-rhodes/eurhtcaculin",
      "official_title": "Private Group Culinary Delights of Rhodes",
      "official_title_source": "h1",
      "listing_title": "Private Group Culinary Delights of Rhodes",
      "duration": "5 Hours",
      "activity_level": "Moderate",
      "excursion_size": "Private",
      "excursion_type_category": "Culinary / Food",
      "tour_type_inferred": "Private",
      "destination_areas": [
        "Monte Smith",
        "Mandraki",
        "Old Town",
        "Wine",
        "Palace",
        "Street of the Knights",
        "Archaeological Museum"
      ],
      "highlights": [
        "Discover the enchanting charm of Rhodes, from panoramic views of Monte Smith to the grandeur of the Palace of the Grand Masters.",
        "Explore the ancient city's cultural treasures, including the historic Street of the Knights and the impressive Archaeological Museum.",
        "Immerse in authentic Greek culinary experience, learning to prepare classic dishes at a local taverna.",
        "Enjoy a delightful tasting session featuring your self-made Greek delicacies accompanied by fine local wine.",
        "Enjoy the convenience of custom departure times, the assurance of a return-to-ship guarantee and satisfaction guarantee."
      ],
      "key_inclusions_inferred": [
        "Food/beverage: A lunch featuring traditional Greek dishes and Greek wine is included.",
        "Highlight: Discover the enchanting charm of Rhodes, from panoramic views of Monte Smith to the grandeur of the Palace of the Grand Masters.",
        "Highlight: Explore the ancient city's cultural treasures, including the historic Street of the Knights and the impressive Archaeological Museum.",
        "Highlight: Immerse in authentic Greek culinary experience, learning to prepare classic dishes at a local taverna.",
        "Highlight: Enjoy a delightful tasting session featuring your self-made Greek delicacies accompanied by fine local wine.",
        "Highlight: Enjoy the convenience of custom departure times, the assurance of a return-to-ship guarantee and satisfaction guarantee.",
        "Dress guidance (not an inclusion): Comfortable clothing and sensible, flat-soled walking shoes are recommended. Sunglasses and sun screen are suggested."
      ],
      "key_exclusions_inferred": [
        "Restriction/capability note: Guests must be able to walk over paved, cobblestone and packed dirt surfaces. There is a double flight of stairs to reach the main rooms of the Grand Masters Palace."
      ],
      "port_pickup_details": [
        "Leaves from: Cruise Ship Pier",
        "After meeting your professionally trained guide on the pier, depart on a scenic drive through the modern areas of Rhodes.",
        "Booking confirmation contains meeting instructions (standard SEG wording)."
      ],
      "return_to_ship_wording": [
        "Sitewide claim: Guaranteed Return to Ship"
      ],
      "dress": "Comfortable clothing and sensible, flat-soled walking shoes are recommended. Sunglasses and sun screen are suggested.",
      "restrictions": "Guests must be able to walk over paved, cobblestone and packed dirt surfaces. There is a double flight of stairs to reach the main rooms of the Grand Masters Palace.",
      "food_beverage": "A lunch featuring traditional Greek dishes and Greek wine is included.",
      "description_paragraphs": [
        "After meeting your professionally trained guide on the pier, depart on a scenic drive through the modern areas of Rhodes. As you pass by the Mandraki Esplanade, you will see the government buildings, Church of Annunciation built in 1925, a replica of the Old Church of the Knights of St. John and the Deer Statues at the entrance of Mandraki Port. It is believed that this was where the Colossus of Rhodes once stood. Your drive will then continue up to Monte Smith for panoramic views and photo opportunities over Rhodes and the Aegean Sea. On clear days, you can see the coast of Turkey.",
        "Next, you will continue along the walls of Rhodes' Old City to reach the upper Gate d'Amboise. Here, you will leave your transportation and begin a walking tour of the Old Town. Entering through the massive gates, the first thing you see is the imposing Palace of the Grand Masters. After a brief explanation outside, you will proceed to the Palace for a guided walking tour of many of the major rooms located on the second floor. The Palace was built in the 14th century A.D., destroyed in 1856 and rebuilt in 1939 by the Italians in order to accommodate the King of Italy, Emmanuel II and Mussolini.",
        "Departing the palace, you will find yourself at the top of the Street of the Knights. As you walk down the street with your guide, they will point out the facades of the many inns once occupied by the crusaders. At the end of the street, you will see the outside of the Knight's Hospital which is now an impressive Archaeological Museum. The hospital was built in 1440 A.D., and is the most spectacular and well-preserved building in the Old City.",
        "You will then walk to a nearby Greek taverna where you will watch the chef prepare the dish of the day. You will be shown how to prepare classic Greek dishes such as tzatziki, fried meatballs and many others. You will have the chance to talk with the chef and learn all the tricks of the trade so that you can impress your friends back home with your new creations.",
        "After the demonstration, you will be sampling the foods you will have helped prepare along with Greek wine. When you are finished, your guide will lead you to nearby Socrates Square which is the main square of the old town. The tour will end here after your guide answers questions about additional sightseeing, shopping and points out the city gate which will lead you back to the cruise pier, a casual 10 - 15 minute walk from the gate.",
        "Please Note: This tour offers customized departure times between 7:30 AM and 7:00 PM. If your preferred departure time is not listed, please contact us to place your request."
      ],
      "pricing": {
        "displayed_price_text": "From $139.00/person to $155.00/person (Select \"Individuals\" below) Price varies based on number of individuals in your group",
        "listing_price_text": "Price: Starting at $139.00/person",
        "mechanism_notes": [
          "Add to cart after selecting departure date/time",
          "Book Now button present",
          "Date/time selection required before purchase"
        ],
        "caveat": "Prices shown are as scraped from SEG HTML at scrape time (USD). Do not invent or hard-code prices on our site; confirm live on SEG."
      },
      "reviews": {
        "stars": null,
        "count_label": null,
        "samples": [],
        "source_note": "product page uses TurnTo widget (not populated in static scrape)",
        "legitimate": false
      },
      "proposed_editorial_slug": "private-culinary-delights-of-rhodes",
      "uncertainties": [
        "Listing Food/Beverage 'Lunch, Beverage Included' vs product page 'A lunch featuring traditional Greek dishes and Greek wine is included.' (wording may differ)."
      ],
      "listing_card_snippets": {
        "Excursion Size": "Private",
        "Excursion Type": "Culinary / Food",
        "Food/Beverage": "Lunch, Beverage Included",
        "Activity Level": "Moderate",
        "Excursion Duration": "5 Hours"
      }
    },
    {
      "seg_code": "EURHPVTGUIDEFULL",
      "seg_code_lower": "eurhpvtguidefull",
      "relative_path": "/tour/private-guide-and-vehicle-full-day-rhodes/eurhpvtguidefull",
      "absolute_url": "https://www.shoreexcursionsgroup.com/tour/private-guide-and-vehicle-full-day-rhodes/eurhpvtguidefull",
      "official_title": "Private Guide and Vehicle - Full Day Rhodes",
      "official_title_source": "og:title",
      "listing_title": "Private Guide and Vehicle - Full Day Rhodes",
      "duration": "8 Hours",
      "activity_level": "Easy",
      "excursion_size": "Private",
      "excursion_type_category": "Private Sightseeing",
      "tour_type_inferred": "Private (guide + vehicle)",
      "destination_areas": [
        "Lindos",
        "Acropolis",
        "Beach",
        "Palace"
      ],
      "highlights": [
        "Experience the treasures of Rhodes with this exclusive tour, exploring ancient relics and relaxing on scenic beaches.",
        "Enjoy the luxury of designing your own itinerary with a private, English-speaking local guide and convenient vehicle transportation.",
        "Visit the Acropolis of Rhodes to discover ancient relics, including the Temple of Apollo and the ancient stadium, showcasing the island's rich history.",
        "Immerse yourself in the island's culture by exploring the Gothic architecture of the Palace of the Grand Masters and the Municipal Art Gallery of Rhodes.",
        "This popular tour is great for groups, accommodating parties of up to 3, 6, 14, 32, or 49 guests."
      ],
      "key_inclusions_inferred": [
        "Highlight: Experience the treasures of Rhodes with this exclusive tour, exploring ancient relics and relaxing on scenic beaches.",
        "Highlight: Enjoy the luxury of designing your own itinerary with a private, English-speaking local guide and convenient vehicle transportation.",
        "Highlight: Visit the Acropolis of Rhodes to discover ancient relics, including the Temple of Apollo and the ancient stadium, showcasing the island's rich history.",
        "Highlight: Immerse yourself in the island's culture by exploring the Gothic architecture of the Palace of the Grand Masters and the Municipal Art Gallery of Rhodes.",
        "Highlight: This popular tour is great for groups, accommodating parties of up to 3, 6, 14, 32, or 49 guests.",
        "Please Note: Vehicles available for this tour can accommodate groups of up to 3, 6, 14, 32, or 49 guests, so please consider this when booking. Please note that because this is a completely customized experience, entrance fees to attractions are not included in the tour price. Enjoy the flexibility to spend as much time as you desire at each location, adjusting your schedule according to your interests. Book now and enjoy a self-made adventure exploring the enchanting island of Rhodes!",
        "Dress guidance (not an inclusion): We recommend wearing comfortable clothing and sensible, flat-soled walking shoes. Sunscreen and sunglasses are also recommended. If you plan to be visiting a religious or memorial site, shoulders and knees must be covered."
      ],
      "key_exclusions_inferred": [
        "Food/beverage: Not Included",
        "Please Note: Vehicles available for this tour can accommodate groups of up to 3, 6, 14, 32, or 49 guests, so please consider this when booking. Please note that because this is a completely customized experience, entrance fees to attractions are not included in the tour price. Enjoy the flexibility to spend as much time as you desire at each location, adjusting your schedule according to your interests. Book now and enjoy a self-made adventure exploring the enchanting island of Rhodes!",
        "Restriction/capability note: Time is at leisure. There are no admission fees, food or beverage included in the tour price. Guests must be able to walk over cobblestones and uneven surfaces, inclines and steps. This tour is not wheelchair accessible."
      ],
      "port_pickup_details": [
        "Leaves from: Cruise Ship Pier.",
        "Booking confirmation contains meeting instructions (standard SEG wording)."
      ],
      "return_to_ship_wording": [
        "Sitewide claim: Guaranteed Return to Ship"
      ],
      "dress": "We recommend wearing comfortable clothing and sensible, flat-soled walking shoes. Sunscreen and sunglasses are also recommended. If you plan to be visiting a religious or memorial site, shoulders and knees must be covered.",
      "restrictions": "Time is at leisure. There are no admission fees, food or beverage included in the tour price. Guests must be able to walk over cobblestones and uneven surfaces, inclines and steps. This tour is not wheelchair accessible.",
      "food_beverage": "Not Included",
      "description_paragraphs": [
        "Embark on a customized full-day tour designed to showcase the best of Rhodes at your own pace. This private excursion is perfect for families or small groups seeking an intimate and personalized experience of Rhodes' rich culture. Enjoy the freedom to create your own itinerary and explore the island's scenic sites with your own private driver and English-speaking guide. Travel comfortably in an air-conditioned vehicle and dive into the history, nature, and beauty of this stunning Greek island.",
        "Travel comfortably in an air-conditioned vehicle and dive into the history, nature, and beauty of this stunning Greek island. Suggested attractions include a visit to the Acropolis of Rhodes, where you can explore ancient relics from the Classical Greek era, such as the Temple of Apollo and the ancient stadium. Take a detour to see the Gothic architecture of the Palace of the Grand Masters, and spend some time at the Municipal Art Gallery of Rhodes to enhance your cultural experience. For relaxation, consider ending your tour at Elli Beach, a family-friendly destination with a diving platform, local bars, and plenty of sunbathing spots. Another highlight is a drive to Lindos, a beautiful village with traditional charm and the ancient acropolis sacred to the goddess Athena Lyndia. Walk the narrow streets, visit medieval churches, and enjoy a cool drink in one of the many cafes.",
        "Please Note: Vehicles available for this tour can accommodate groups of up to 3, 6, 14, 32, or 49 guests, so please consider this when booking. Please note that because this is a completely customized experience, entrance fees to attractions are not included in the tour price. Enjoy the flexibility to spend as much time as you desire at each location, adjusting your schedule according to your interests. Book now and enjoy a self-made adventure exploring the enchanting island of Rhodes!"
      ],
      "pricing": {
        "displayed_price_text": "From $42.00/person to $1,401.00/person (Select \"Individuals\" below) Price varies based on number of individuals in your group",
        "listing_price_text": "Price: Starting at $42.00/person",
        "mechanism_notes": [
          "Add to cart after selecting departure date/time",
          "Book Now button present",
          "Date/time selection required before purchase"
        ],
        "caveat": "Prices shown are as scraped from SEG HTML at scrape time (USD). Do not invent or hard-code prices on our site; confirm live on SEG."
      },
      "reviews": {
        "stars": "5 Stars",
        "count_label": "1 Review",
        "samples": [],
        "source_note": "port listing card (static star image + review count); product page uses TurnTo widget (not populated in static scrape)",
        "legitimate": true
      },
      "proposed_editorial_slug": "private-guide-vehicle-full-day",
      "uncertainties": [
        "Listing Food/Beverage 'None' vs product page 'Not Included' (wording may differ).",
        "Official h1 missing on product page; title taken from og:title."
      ],
      "listing_card_snippets": {
        "Excursion Size": "Private",
        "Excursion Type": "Private Sightseeing",
        "Food/Beverage": "None",
        "Activity Level": "Easy",
        "Excursion Duration": "8 Hours"
      }
    },
    {
      "seg_code": "EURHPVTDRIGUIDE",
      "seg_code_lower": "eurhpvtdriguide",
      "relative_path": "/tour/private-guide-and-vehicle-half-day-rhodes/eurhpvtdriguide",
      "absolute_url": "https://www.shoreexcursionsgroup.com/tour/private-guide-and-vehicle-half-day-rhodes/eurhpvtdriguide",
      "official_title": "Private Guide and Vehicle - Half Day Rhodes",
      "official_title_source": "og:title",
      "listing_title": "Private Guide and Vehicle - Half Day Rhodes",
      "duration": "4 Hours",
      "activity_level": "Easy",
      "excursion_size": "Private",
      "excursion_type_category": "Private Sightseeing",
      "tour_type_inferred": "Private (guide + vehicle)",
      "destination_areas": [
        "Acropolis",
        "Filerimos",
        "Beach"
      ],
      "highlights": [
        "Don't miss the chance to explore Rhodes' attractions in style with our private, English-speaking guide and driver.",
        "Explore Parc Rodini's lush greenery and ancient Roman remnants, relax at Oasis beach, or discover the ancient acropolis at Filerimos Hill.",
        "Choose from vehicles that accommodate up to 3, 6, 14, 32, or 49 guests, making it easy to tailor the tour for your group.",
        "Spend as much time as you wish at each location of your choosing, adjusting your schedule to match your interests and preferences.",
        "Enjoy personalized, small group experiences with our industry-leding guarantees and unbeatable prices. Perfect for nature lovers and outdoor enthusiasts."
      ],
      "key_inclusions_inferred": [
        "Highlight: Don't miss the chance to explore Rhodes' attractions in style with our private, English-speaking guide and driver.",
        "Highlight: Explore Parc Rodini's lush greenery and ancient Roman remnants, relax at Oasis beach, or discover the ancient acropolis at Filerimos Hill.",
        "Highlight: Choose from vehicles that accommodate up to 3, 6, 14, 32, or 49 guests, making it easy to tailor the tour for your group.",
        "Highlight: Spend as much time as you wish at each location of your choosing, adjusting your schedule to match your interests and preferences.",
        "Highlight: Enjoy personalized, small group experiences with our industry-leding guarantees and unbeatable prices. Perfect for nature lovers and outdoor enthusiasts.",
        "Please Note: Vehicles available for this tour can accommodate groups of up to 3, 6, 14, 32, or 49 guests, so please consider this when booking. Please note that because this is a completely customized experience, entrance fees to attractions are not included in the tour price. Enjoy the flexibility to spend as much time as you desire at each location, adjusting your schedule according to your interests. Book now and enjoy a self-made adventure exploring the enchanting island of Rhodes!",
        "Dress guidance (not an inclusion): We recommend wearing comfortable clothing and sensible, flat-soled walking shoes. Sunscreen and sunglasses are also recommended. If you plan to be visiting a religious or memorial site, shoulders and knees must be covered."
      ],
      "key_exclusions_inferred": [
        "Food/beverage: Not Included",
        "Please Note: Vehicles available for this tour can accommodate groups of up to 3, 6, 14, 32, or 49 guests, so please consider this when booking. Please note that because this is a completely customized experience, entrance fees to attractions are not included in the tour price. Enjoy the flexibility to spend as much time as you desire at each location, adjusting your schedule according to your interests. Book now and enjoy a self-made adventure exploring the enchanting island of Rhodes!",
        "Restriction/capability note: Time is at leisure. There are no admissions fees, food or beverage included in the tour price. Guests must be able to walk over cobblestones and uneven surfaces, inclines and steps. This tour is not wheelchair accessible."
      ],
      "port_pickup_details": [
        "Leaves from: Cruise Ship Pier.",
        "Booking confirmation contains meeting instructions (standard SEG wording)."
      ],
      "return_to_ship_wording": [
        "Sitewide claim: Guaranteed Return to Ship"
      ],
      "dress": "We recommend wearing comfortable clothing and sensible, flat-soled walking shoes. Sunscreen and sunglasses are also recommended. If you plan to be visiting a religious or memorial site, shoulders and knees must be covered.",
      "restrictions": "Time is at leisure. There are no admissions fees, food or beverage included in the tour price. Guests must be able to walk over cobblestones and uneven surfaces, inclines and steps. This tour is not wheelchair accessible.",
      "food_beverage": "Not Included",
      "description_paragraphs": [
        "Embark on a customized half-day tour designed to showcase the best of Rhodes at your own pace. This private excursion is perfect for families or small groups seeking an intimate and personalized experience of Rhodes' rich culture. Enjoy the freedom to create your own itinerary and explore the island's scenic sites with your own private driver and English-speaking guide.",
        "Travel comfortably in an air-conditioned vehicle and dive into the history, nature, and beauty of this stunning Greek island. Suggested attractions include a visit to Parc Rodini, known for its lush greenery and historical remnants from Roman times, Oasis Beach for a relaxing break by the Mediterranean Sea, or Filerimos Hill to discover the acropolis of the ancient city of Ialyssos and explore the remains of the ancient temple dedicated to the Virgin-Goddess Athena.",
        "Please Note: Vehicles available for this tour can accommodate groups of up to 3, 6, 14, 32, or 49 guests, so please consider this when booking. Please note that because this is a completely customized experience, entrance fees to attractions are not included in the tour price. Enjoy the flexibility to spend as much time as you desire at each location, adjusting your schedule according to your interests. Book now and enjoy a self-made adventure exploring the enchanting island of Rhodes!"
      ],
      "pricing": {
        "displayed_price_text": "From $34.00/person to $816.00/person (Select \"Individuals\" below) Price varies based on number of individuals in your group",
        "listing_price_text": "Price: Starting at $34.00/person",
        "mechanism_notes": [
          "Add to cart after selecting departure date/time",
          "Book Now button present",
          "Date/time selection required before purchase"
        ],
        "caveat": "Prices shown are as scraped from SEG HTML at scrape time (USD). Do not invent or hard-code prices on our site; confirm live on SEG."
      },
      "reviews": {
        "stars": "5 Stars",
        "count_label": "1 Review",
        "samples": [],
        "source_note": "port listing card (static star image + review count); product page uses TurnTo widget (not populated in static scrape)",
        "legitimate": true
      },
      "proposed_editorial_slug": "private-guide-vehicle-half-day",
      "uncertainties": [
        "Listing Food/Beverage 'None' vs product page 'Not Included' (wording may differ).",
        "Official h1 missing on product page; title taken from og:title."
      ],
      "listing_card_snippets": {
        "Excursion Size": "Private",
        "Excursion Type": "Private Sightseeing",
        "Food/Beverage": "None",
        "Activity Level": "Easy",
        "Excursion Duration": "4 Hours"
      }
    },
    {
      "seg_code": "EURHOVTLINBCH",
      "seg_code_lower": "eurhovtlinbch",
      "relative_path": "/tour/private-lindos-and-beach/eurhovtlinbch",
      "absolute_url": "https://www.shoreexcursionsgroup.com/tour/private-lindos-and-beach/eurhovtlinbch",
      "official_title": "Private Lindos and Beach",
      "official_title_source": "og:title",
      "listing_title": "Private Lindos and Beach",
      "duration": "5 Hours 30 Minutes",
      "activity_level": "Moderate",
      "excursion_size": "Standard",
      "excursion_type_category": "Beach",
      "tour_type_inferred": "Private (SEG size field: Standard)",
      "destination_areas": [
        "Lindos",
        "Acropolis",
        "Beach"
      ],
      "highlights": [
        "Experience Rhodes' breathtaking east coast from iconic Lindos, renowned for its stunning Acropolis with medieval castle and charming white-washed houses.",
        "Wander through narrow, cobbled streets of ancient Lindos, taking in the vibrant courtyards and 5,000-year-old mosaics for a unique historical experience.",
        "Visit the sacred Byzantine Church of the Ascension in the village of Lindos, an unmissable cultural attraction.",
        "Unwind at one of Rhodes' beautiful beaches, where you can engage in water sports, dine at local restaurants, or simply relax on the soft white sands.",
        "Guarantee your place on this unforgettable shore excursion with our industry-leading guarantees, but hurry - spaces fill up quickly!"
      ],
      "key_inclusions_inferred": [
        "Highlight: Experience Rhodes' breathtaking east coast from iconic Lindos, renowned for its stunning Acropolis with medieval castle and charming white-washed houses.",
        "Highlight: Wander through narrow, cobbled streets of ancient Lindos, taking in the vibrant courtyards and 5,000-year-old mosaics for a unique historical experience.",
        "Highlight: Visit the sacred Byzantine Church of the Ascension in the village of Lindos, an unmissable cultural attraction.",
        "Highlight: Unwind at one of Rhodes' beautiful beaches, where you can engage in water sports, dine at local restaurants, or simply relax on the soft white sands.",
        "Highlight: Guarantee your place on this unforgettable shore excursion with our industry-leading guarantees, but hurry - spaces fill up quickly!",
        "Dress guidance (not an inclusion): We recommend wearing comfortable clothing and sensible, flat-soled walking shoes, with your swimsuit below your clothes for the beach. Don't forget your swimsuit, towel, sunscreen and sunglasses also."
      ],
      "key_exclusions_inferred": [
        "Food/beverage: Not Included",
        "You will then take a walk down to the village of Lindos for a visit to the Byzantine Church of the Ascension, followed by some free time to explore the area at your leisure. From there you will continue towards the beaches where you'll find sport activities, restaurants and showers (at your own expense). You will have the opportunity to relax and take a swim to enjoy the soft, white sand and sparkling blue water at one of the beautiful beaches that Rhodes has to offer.",
        "Restriction/capability note: Guests must be able to walk over cobblestones and uneven surfaces, inclines, sand and steps. Guests should be in good physical condition with the ability to walk uphill or climb stairs. Guests must be able to get in and out of transportation. This tour is not wheelchair accessible because of the varied terrain at the sites you will be visiting. Knees and shoulders must be covered when visiting places of religion."
      ],
      "port_pickup_details": [
        "Leaves from: Cruise Ship Pier",
        "After swim you will re-board your coach for the return drive to the pier.",
        "Booking confirmation contains meeting instructions (standard SEG wording)."
      ],
      "return_to_ship_wording": [
        "Sitewide claim: Guaranteed Return to Ship",
        "After swim you will re-board your coach for the return drive to the pier."
      ],
      "dress": "We recommend wearing comfortable clothing and sensible, flat-soled walking shoes, with your swimsuit below your clothes for the beach. Don't forget your swimsuit, towel, sunscreen and sunglasses also.",
      "restrictions": "Guests must be able to walk over cobblestones and uneven surfaces, inclines, sand and steps. Guests should be in good physical condition with the ability to walk uphill or climb stairs. Guests must be able to get in and out of transportation. This tour is not wheelchair accessible because of the varied terrain at the sites you will be visiting. Knees and shoulders must be covered when visiting places of religion.",
      "food_beverage": "Not Included",
      "description_paragraphs": [
        "Drive along the east coast of Rhodes, and past some of the island's most beautiful beaches. Pass through several small villages before arriving to Lindos, one of the ancient cities on the island of Rhodes.",
        "Lindos is the island's most famous villages and is renowned for its famous Acropolis. Acropolis offers breathtaking views and photo opportunities, including its Medieval castle, sandy beaches, and charming white-washed, sugar-cubed houses.",
        "During your visit, you will take a walking tour through the narrow-cobbled streets, and past the colorful courtyards and mosaics for which Lindos is famous. Ancient Lindos was the most important town on the island and has been inhabited for 5,000 years.",
        "You will then take a walk down to the village of Lindos for a visit to the Byzantine Church of the Ascension, followed by some free time to explore the area at your leisure. From there you will continue towards the beaches where you'll find sport activities, restaurants and showers (at your own expense). You will have the opportunity to relax and take a swim to enjoy the soft, white sand and sparkling blue water at one of the beautiful beaches that Rhodes has to offer.",
        "After swim you will re-board your coach for the return drive to the pier."
      ],
      "pricing": {
        "displayed_price_text": "From $87.00/person to $1,207.00/person (Select \"Individuals\" below) Price varies based on number of individuals in your group",
        "listing_price_text": "Price: Starting at $87.00/person",
        "mechanism_notes": [
          "Add to cart after selecting departure date/time",
          "Book Now button present",
          "Date/time selection required before purchase"
        ],
        "caveat": "Prices shown are as scraped from SEG HTML at scrape time (USD). Do not invent or hard-code prices on our site; confirm live on SEG."
      },
      "reviews": {
        "stars": "4 Stars",
        "count_label": "1 Review",
        "samples": [],
        "source_note": "port listing card (static star image + review count); product page uses TurnTo widget (not populated in static scrape)",
        "legitimate": true
      },
      "proposed_editorial_slug": "private-lindos-and-beach",
      "uncertainties": [
        "Listing Food/Beverage 'None' vs product page 'Not Included' (wording may differ).",
        "Title is Private but SEG Excursion Size field is 'Standard' — treat as private product with uncertain group-size taxonomy.",
        "Official h1 missing on product page; title taken from og:title."
      ],
      "listing_card_snippets": {
        "Excursion Size": "Standard",
        "Excursion Type": "Beach",
        "Food/Beverage": "None",
        "Activity Level": "Moderate",
        "Excursion Duration": "5 Hours 30 Minutes"
      }
    },
    {
      "seg_code": "EURHVILLPANCITYTOUR",
      "seg_code_lower": "eurhvillpancitytour",
      "relative_path": "/tour/lindos-village-kallithea-panoramic-highlights/eurhvillpancitytour",
      "absolute_url": "https://www.shoreexcursionsgroup.com/tour/lindos-village-kallithea-panoramic-highlights/eurhvillpancitytour",
      "official_title": "Private Lindos Village and Kallithea with Panoramic Highlights",
      "official_title_source": "h1",
      "listing_title": "Private Lindos Village and Kallithea with Panoramic Highlights",
      "duration": "6 Hours 30 Minutes",
      "activity_level": "Moderate",
      "excursion_size": "Private",
      "excursion_type_category": "Scenic, Cultural, Historical",
      "tour_type_inferred": "Private",
      "destination_areas": [
        "Lindos",
        "Kallithea",
        "Monte Smith",
        "Acropolis"
      ],
      "highlights": [
        "Experience Rhodes' stunning blend of history and beauty with a day-long tour of Lindos Village, Kallithea Springs, and panoramic city sights.",
        "Explore the enchanting Lindos with stops at Saint Paul’s Bay and the Lindos Panoramic viewpoint, plus an optional climb to the Acropolis.",
        "Discover the therapeutic Kallithea Springs, enjoying its historical architecture and relaxing beachfront, perfect for a leisurely break.",
        "Conclude with a panoramic city tour highlighting Rhodes' ancient and contemporary landmarks, from the Acropolis of Rhodes to modern attractions."
      ],
      "key_inclusions_inferred": [
        "Highlight: Experience Rhodes' stunning blend of history and beauty with a day-long tour of Lindos Village, Kallithea Springs, and panoramic city sights.",
        "Highlight: Explore the enchanting Lindos with stops at Saint Paul’s Bay and the Lindos Panoramic viewpoint, plus an optional climb to the Acropolis.",
        "Highlight: Discover the therapeutic Kallithea Springs, enjoying its historical architecture and relaxing beachfront, perfect for a leisurely break.",
        "Highlight: Conclude with a panoramic city tour highlighting Rhodes' ancient and contemporary landmarks, from the Acropolis of Rhodes to modern attractions.",
        "Dress guidance (not an inclusion): We recommend comfortable clothes and sensible walking shoes or sneakers. Sunglasses and sunscreen are also suggested."
      ],
      "key_exclusions_inferred": [
        "Food/beverage: Not Included",
        "Restriction/capability note: This tour is wheelchair accessible. Please contact tour operator beforehand for accomdations A fair amount of walking is required, and you may need to climb up full flights of steps and or negotiate uneven terrain."
      ],
      "port_pickup_details": [
        "Leaves from: Cruise Ship Pier",
        "Booking confirmation contains meeting instructions (standard SEG wording)."
      ],
      "return_to_ship_wording": [
        "Sitewide claim: Guaranteed Return to Ship"
      ],
      "dress": "We recommend comfortable clothes and sensible walking shoes or sneakers. Sunglasses and sunscreen are also suggested.",
      "restrictions": "This tour is wheelchair accessible. Please contact tour operator beforehand for accomdations A fair amount of walking is required, and you may need to climb up full flights of steps and or negotiate uneven terrain.",
      "food_beverage": "Not Included",
      "description_paragraphs": [
        "Discover the enchanting island of Rhodes, Greece, with our day-long private sightseeing tour, blending luxurious comfort, captivating history, and breathtaking scenery. This unique tour offers you a comprehensive exploration of Rhodes' most cherished landmarks, from the historic village of Lindos to the healing Kallithea Springs.",
        "Your journey begins with a picturesque drive along the East coast of Rhodes, leading you to the island's jewel: Lindos. Here, capture the essence of Rhodes with photo stops at Saint Paul's Bay, the Lindos Panoramic viewpoint, and the famed Acropolis, offering perfect backdrops for unforgettable memories. Once in Lindos, enjoy the freedom to wander this charming village for about three hours at your own pace, aided by a map for exploration.",
        "You'll find Lindos to be a fun mosaic of quaint boutiques, white-washed houses, and delightful shops. Stroll through its narrow streets, ride a traditional donkey, or relax on the pristine sandy beaches like St. Paul's Bay. For history enthusiasts, the Lindos Acropolis is a must-visit, with its breathtaking views and historical significance. The Church of Panagia, nestled in the village's heart, is another gem, boasting a Rhodian campanile tower and intricate pebble mosaic flooring.",
        "Next, we journey to Kallithea Springs, renowned since ancient times for its therapeutic waters. This beautifully restored complex welcomes visitors with its unique architecture, reminiscent of its luxurious spa heritage. Explore the \"Big Rotunda\" exhibition to learn about Kallithea's history and its role in famous films like \"Guns of Navarone.\" Relax at the beachfront snack bar, enjoying a light lunch or a refreshing drink amidst this historical setting.",
        "Your tour concludes with a panoramic city tour of Rhodes. Marvel at landmarks like The Acropolis of Rhodes, The Temple of Apollo, and Monte Smith Hill, offering sweeping views of the city. Drive past modern attractions like the Underwater Aquarium, Town Hall, and National Theatre, showcasing Rhodes's blend of ancient and contemporary allure.",
        "Your luxurious Mercedes VIP minibus awaits to transport you from your cruise ship, ensuring you a comfortable and seamless experience. Book now for an unforgettable exploration of this Greek paradise, where history, culture, and natural beauty converge.",
        "Please Note: Though your English-speaking driver can provide commentary while driving you around, they cannot act as a guide outside of the car."
      ],
      "pricing": {
        "displayed_price_text": "From $46.00/person to $536.00/person (Select \"Individuals\" below) Price varies based on number of individuals in your group",
        "listing_price_text": "Price: Starting at $46.00/person",
        "mechanism_notes": [
          "Add to cart after selecting departure date/time",
          "Book Now button present",
          "Date/time selection required before purchase"
        ],
        "caveat": "Prices shown are as scraped from SEG HTML at scrape time (USD). Do not invent or hard-code prices on our site; confirm live on SEG."
      },
      "reviews": {
        "stars": null,
        "count_label": null,
        "samples": [],
        "source_note": "product page uses TurnTo widget (not populated in static scrape)",
        "legitimate": false
      },
      "proposed_editorial_slug": "private-lindos-kallithea-panoramic",
      "uncertainties": [],
      "listing_card_snippets": {
        "Excursion Size": "Private",
        "Excursion Type": "Scenic, Cultural, Historical",
        "Food/Beverage": "Not Included",
        "Activity Level": "Moderate",
        "Excursion Duration": "6 Hours 30 Minutes"
      }
    },
    {
      "seg_code": "EURHTCARHODE",
      "seg_code_lower": "eurhtcarhode",
      "relative_path": "/tour/city-tour-rhodes/eurhtcarhode",
      "absolute_url": "https://www.shoreexcursionsgroup.com/tour/city-tour-rhodes/eurhtcarhode",
      "official_title": "Private Rhodes City Tour",
      "official_title_source": "h1",
      "listing_title": "Private Rhodes City Tour",
      "duration": "3 Hours 30 Minutes",
      "activity_level": "Moderate",
      "excursion_size": "Private",
      "excursion_type_category": "Private Sightseeing",
      "tour_type_inferred": "Private",
      "destination_areas": [
        "Monte Smith",
        "Mandraki",
        "Old Town",
        "Rhodes City",
        "Palace",
        "Street of the Knights",
        "Archaeological Museum"
      ],
      "highlights": [
        "Experience Rhodes’ breathtaking beauty with a scenic drive and a professionally guided tour, covering iconic landmarks like the Mandraki Port.",
        "Discover history at the Palace of the Grand Masters, built in the 14th century, and reconstructed in 1939 for Italian royalty.",
        "Stroll the historic Street of the Knights, with former crusader inns, culminating at the Knight's Hospital, now an Archaeological Museum.",
        "Enjoy panoramic views from Monte Smith - overlooking Rhodes, the Aegean Sea and the Turkish coastline; great for photos!",
        "Flexible departure times offered, allowing you to customize your schedule for a more private, intimate exploration."
      ],
      "key_inclusions_inferred": [
        "Highlight: Experience Rhodes’ breathtaking beauty with a scenic drive and a professionally guided tour, covering iconic landmarks like the Mandraki Port.",
        "Highlight: Discover history at the Palace of the Grand Masters, built in the 14th century, and reconstructed in 1939 for Italian royalty.",
        "Highlight: Stroll the historic Street of the Knights, with former crusader inns, culminating at the Knight's Hospital, now an Archaeological Museum.",
        "Highlight: Enjoy panoramic views from Monte Smith - overlooking Rhodes, the Aegean Sea and the Turkish coastline; great for photos!",
        "Highlight: Flexible departure times offered, allowing you to customize your schedule for a more private, intimate exploration.",
        "Dress guidance (not an inclusion): Comfortable clothing and sensible, flat-soled walking shoes are recommended. Sun glasses and sun screen are suggested."
      ],
      "key_exclusions_inferred": [
        "Food/beverage: Not Included",
        "Restriction/capability note: Guests must be able to walk over paved, cobblestone and packed dirt surfaces. There is a double flight of stairs to reach the main rooms of the Grand Masters Palace."
      ],
      "port_pickup_details": [
        "Leaves from: Cruise Ship Pier",
        "After meeting your professionally trained guide on the pier, depart on a scenic drive through the modern areas of Rhodes.",
        "At the appointed time, you will meet your guide to walk to the nearby transportation for the short ride back to the pier.",
        "Those guests wishing to stay and enjoy more of the Old Town will be responsible for getting back to the pier on their own.",
        "Booking confirmation contains meeting instructions (standard SEG wording)."
      ],
      "return_to_ship_wording": [
        "Sitewide claim: Guaranteed Return to Ship",
        "At the appointed time, you will meet your guide to walk to the nearby transportation for the short ride back to the pier.",
        "Those guests wishing to stay and enjoy more of the Old Town will be responsible for getting back to the pier on their own."
      ],
      "dress": "Comfortable clothing and sensible, flat-soled walking shoes are recommended. Sun glasses and sun screen are suggested.",
      "restrictions": "Guests must be able to walk over paved, cobblestone and packed dirt surfaces. There is a double flight of stairs to reach the main rooms of the Grand Masters Palace.",
      "food_beverage": "Not Included",
      "description_paragraphs": [
        "After meeting your professionally trained guide on the pier, depart on a scenic drive through the modern areas of Rhodes. As you pass by the Mandraki Esplanade, you will see the government buildings, Church of Annunciation built in 1925, a replica of the Old Church of the Knights of St. John and the Deer Statues at the entrance of Mandraki Port. It is believed that this was where the Colossus of Rhodes once stood. Your drive will then continue up to Monte Smith for panoramic views and photo opportunities over Rhodes and the Aegean Sea. On clear days, you can see the coast of Turkey.",
        "Next, you will continue along the walls of Rhodes' Old City to reach the upper Gate d'Amboise. Here, you will leave your transportation and begin a walking tour of the Old Town. Entering through the massive gates, the first thing you see is the imposing Palace of the Grand Masters. After a brief explanation outside, you will proceed to the Palace for a guided walking tour of many of the major rooms located on the second floor. The Palace was built in the 14th century A.D., destroyed in 1856 and rebuilt in 1939 by the Italians in order to accommodate the King of Italy, Emmanuel II and Mussolini.",
        "Departing the palace, you will find yourself at the top of the Street of the Knights. As you walk down the street with your guide, they will point out the facades of the many inns once occupied by the crusaders. At the end of the street, you will see the outside of the Knight's Hospital which is now an impressive Archaeological Museum. The hospital was built in 1440 A.D., and is the most spectacular and well-preserved building in the Old City.",
        "You will then be given some free time to explore on your own, find an ice cream or visit the archeological museum on your own. At the appointed time, you will meet your guide to walk to the nearby transportation for the short ride back to the pier. Those guests wishing to stay and enjoy more of the Old Town will be responsible for getting back to the pier on their own. From the Knight's Hospital area, it is approximately 15 minutes walking to the pier.",
        "Please Note: This tour offers customized departure times between 7:30 AM and 7:00 PM. If your preferred departure time is not listed, please contact us to place your request."
      ],
      "pricing": {
        "displayed_price_text": "From $146.00/person to $448.00/person (Select \"Individuals\" below) Price varies based on number of individuals in your group",
        "listing_price_text": "Price: Starting at $146.00/person",
        "mechanism_notes": [
          "Add to cart after selecting departure date/time",
          "Book Now button present",
          "Date/time selection required before purchase"
        ],
        "caveat": "Prices shown are as scraped from SEG HTML at scrape time (USD). Do not invent or hard-code prices on our site; confirm live on SEG."
      },
      "reviews": {
        "stars": "5 Stars",
        "count_label": "1 Review",
        "samples": [],
        "source_note": "port listing card (static star image + review count); product page uses TurnTo widget (not populated in static scrape)",
        "legitimate": true
      },
      "proposed_editorial_slug": "private-rhodes-city-tour",
      "uncertainties": [],
      "listing_card_snippets": {
        "Excursion Size": "Private",
        "Excursion Type": "Private Sightseeing",
        "Food/Beverage": "Not Included",
        "Activity Level": "Moderate",
        "Excursion Duration": "3 Hours 30 Minutes"
      }
    },
    {
      "seg_code": "EURHTCAHIGHL",
      "seg_code_lower": "eurhtcahighl",
      "relative_path": "/tour/highlights-rhodes/eurhtcahighl",
      "absolute_url": "https://www.shoreexcursionsgroup.com/tour/highlights-rhodes/eurhtcahighl",
      "official_title": "Private Rhodes Highlights",
      "official_title_source": "h1",
      "listing_title": "Private Rhodes Highlights",
      "duration": "4 Hours",
      "activity_level": "Moderate",
      "excursion_size": "Private",
      "excursion_type_category": "Private Sightseeing",
      "tour_type_inferred": "Private",
      "destination_areas": [
        "Old Town",
        "Acropolis",
        "Filerimos",
        "Palace",
        "Street of the Knights",
        "Archaeological Museum"
      ],
      "highlights": [
        "Experience magnificent Filerimos with professional guides, exploring the ruins of a temple, an Early Christian basilica, and a Byzantine church.",
        "Witness the Temple of Athena Polias, a spiritual place for the nights of St. John, with its historic remnants still visible.",
        "Enjoy panoramic views from atop the mountain at the beautiful church rebuilt by the Italians, and previously home to Capuchin Monks.",
        "Drive seaside to Rhodes' ancient Acropolis for photo ops at the stadium and Temple of Apolonas, enriching your journey with history.",
        "Stroll the cobblestone Street of the Knights, admiring a historic Inn turned into shops, homes, and a university, brimming with charm."
      ],
      "key_inclusions_inferred": [
        "Highlight: Experience magnificent Filerimos with professional guides, exploring the ruins of a temple, an Early Christian basilica, and a Byzantine church.",
        "Highlight: Witness the Temple of Athena Polias, a spiritual place for the nights of St. John, with its historic remnants still visible.",
        "Highlight: Enjoy panoramic views from atop the mountain at the beautiful church rebuilt by the Italians, and previously home to Capuchin Monks.",
        "Highlight: Drive seaside to Rhodes' ancient Acropolis for photo ops at the stadium and Temple of Apolonas, enriching your journey with history.",
        "Highlight: Stroll the cobblestone Street of the Knights, admiring a historic Inn turned into shops, homes, and a university, brimming with charm.",
        "Dress guidance (not an inclusion): Comfortable clothing and sensible, flat-soled walking shoes are recommended. Sun glasses and sun screen are suggested."
      ],
      "key_exclusions_inferred": [
        "Food/beverage: Not Included",
        "Restriction/capability note: Guests must be able to walk over paved, cobblestone and packed dirt surfaces. There is a double flight of stairs to reach the main rooms of the Grand Masters Palace."
      ],
      "port_pickup_details": [
        "Leaves from: Cruise Ship Pier",
        "After meeting your professionally trained guide on the pier, you will drive to Filerimos.",
        "At the appointed time, you will meet your guide to walk to the nearby transportation for the short ride back to the pier.",
        "Those guests wishing to stay and enjoy more of the Old Town will be responsible for getting back to the pier on their own.",
        "Booking confirmation contains meeting instructions (standard SEG wording)."
      ],
      "return_to_ship_wording": [
        "Sitewide claim: Guaranteed Return to Ship",
        "At the appointed time, you will meet your guide to walk to the nearby transportation for the short ride back to the pier.",
        "Those guests wishing to stay and enjoy more of the Old Town will be responsible for getting back to the pier on their own."
      ],
      "dress": "Comfortable clothing and sensible, flat-soled walking shoes are recommended. Sun glasses and sun screen are suggested.",
      "restrictions": "Guests must be able to walk over paved, cobblestone and packed dirt surfaces. There is a double flight of stairs to reach the main rooms of the Grand Masters Palace.",
      "food_beverage": "Not Included",
      "description_paragraphs": [
        "After meeting your professionally trained guide on the pier, you will drive to Filerimos. The upper part of Filerimos is a large plateau and contains the ruins of several buildings including the foundations of a temple, an Early Christian basilica and a Byzantine church.",
        "In 1876, excavations brought to light the Hellenic temple of Athena Polias which was used as a spiritual place for the order of the nights of St. John. Later it was passed onto the Turks and then to the Italians. Remnants of this period can still be seen. On top of the mountain there is a beautiful church that was destroyed under the Turkish occupation and later rebuilt by the Italians who housed Capuchin Monks in it. After a guided tour of the site, enjoy some free time to explore or sit under a huge tree and enjoy the beautiful view.",
        "Next, you will continue with a drive along the seaside road of the city to the ancient Acropolis of Rhodes where the ruins of a stadium and the Temple of Apolonas, will be seen during a short description and photo opportunity.",
        "You will then drive along the walls of the Old Town to reach the top of the city at the Gate d'Amboise. From here, you will begin your walking tour of the Old Town. Upon entering the first thing you will see are the outer walls of the imposing Palace of the Grand Masters. In the shadows of the palace you will be given a short history of the Palace of the Knights before walking the main entrance to begin your internal visit of several of the palace's main rooms located on the second level.",
        "Returning back to the Street of the Knights which runs from in front of the palace down to the Knight's hospital, you will begin a walk down this charming cobblestone street as your guide points out the facades of what used to be the Inns of the Knights. Today, they are shops, private residences, and even a small university. Your guide will point out the Knight's hospital, now a very interesting Archaeological Museum.",
        "You will then be given some free time to explore on your own, find an ice cream or visit the archeological museum on your own. At the appointed time, you will meet your guide to walk to the nearby transportation for the short ride back to the pier. Those guests wishing to stay and enjoy more of the Old Town will be responsible for getting back to the pier on their own. From the Knight's Hospital area, it is approximately 15 minutes walking to the pier.",
        "Please Note: This tour offers customized departure times between 7:30 AM and 7:00 PM. If your preferred departure time is not listed, please contact us to place your request."
      ],
      "pricing": {
        "displayed_price_text": "From $134.00/person to $566.00/person (Select \"Individuals\" below) Price varies based on number of individuals in your group",
        "listing_price_text": "Price: Starting at $134.00/person",
        "mechanism_notes": [
          "Add to cart after selecting departure date/time",
          "Book Now button present",
          "Date/time selection required before purchase"
        ],
        "caveat": "Prices shown are as scraped from SEG HTML at scrape time (USD). Do not invent or hard-code prices on our site; confirm live on SEG."
      },
      "reviews": {
        "stars": null,
        "count_label": null,
        "samples": [],
        "source_note": "product page uses TurnTo widget (not populated in static scrape)",
        "legitimate": false
      },
      "proposed_editorial_slug": "private-rhodes-highlights",
      "uncertainties": [],
      "listing_card_snippets": {
        "Excursion Size": "Private",
        "Excursion Type": "Private Sightseeing",
        "Food/Beverage": "Not Included",
        "Activity Level": "Moderate",
        "Excursion Duration": "4 Hours"
      }
    },
    {
      "seg_code": "EURHPVTFULLBIG",
      "seg_code_lower": "eurhpvtfullbig",
      "relative_path": "/tour/private-vehicle-full-day-rhodes/eurhpvtfullbig",
      "absolute_url": "https://www.shoreexcursionsgroup.com/tour/private-vehicle-full-day-rhodes/eurhpvtfullbig",
      "official_title": "Private Vehicle - Full Day Rhodes",
      "official_title_source": "og:title",
      "listing_title": "Private Vehicle - Full Day Rhodes",
      "duration": "8 Hours",
      "activity_level": "Easy",
      "excursion_size": "Private",
      "excursion_type_category": "Private Sightseeing",
      "tour_type_inferred": "Private (vehicle only)",
      "destination_areas": [
        "Grand Master",
        "Acropolis",
        "Filerimos",
        "Palace"
      ],
      "highlights": [
        "Experience the incredible historical journey of Rhodes your way with our flexible and customizable city tour.",
        "Discover the rich heritage of Rhodes by exploring suggested attractions like the medieval city of Rhodes, a UNESCO World Heritage site, where you can stroll along its impressive walls and admire the Gothic architecture of the Palace of the Grand Mast",
        "Uncover the ancient wonders of Rhodes at the Acropolis, where you'll find temples and relics that offer insight into the island's fascinating history.",
        "Dive into the island's diverse history with a visit to the Rhodes Jewish Museum, exploring the culture and heritage of Rhodes' Jewish community.",
        "Take a scenic detour to Trianda village and Filerimos Hill to explore the ancient city of Ialyssos and the remains of the temple dedicated to the Virgin-Goddess Athena, adding a touch of adventure to your Rhodes exploration."
      ],
      "key_inclusions_inferred": [
        "Highlight: Experience the incredible historical journey of Rhodes your way with our flexible and customizable city tour.",
        "Highlight: Discover the rich heritage of Rhodes by exploring suggested attractions like the medieval city of Rhodes, a UNESCO World Heritage site, where you can stroll along its impressive walls and admire the Gothic architecture of the Palace of the Grand Mast",
        "Highlight: Uncover the ancient wonders of Rhodes at the Acropolis, where you'll find temples and relics that offer insight into the island's fascinating history.",
        "Highlight: Dive into the island's diverse history with a visit to the Rhodes Jewish Museum, exploring the culture and heritage of Rhodes' Jewish community.",
        "Highlight: Take a scenic detour to Trianda village and Filerimos Hill to explore the ancient city of Ialyssos and the remains of the temple dedicated to the Virgin-Goddess Athena, adding a touch of adventure to your Rhodes exploration.",
        "Please Note: Vehicles for this tour can accommodate groups of up to 3, 6, 14, 32, or 49 guests. Please note that entrance fees to attractions are not included in the tour price. Enjoy the freedom to spend as much time as you like at each location. Book now for a personalized adventure exploring the beautiful island of Rhodes!",
        "Dress guidance (not an inclusion): We recommend wearing comfortable clothing and sensible, flat-soled walking shoes. Sunscreen and sunglasses are also recommended. If you plan to be visiting a religious or memorial site, shoulders and knees must be covered."
      ],
      "key_exclusions_inferred": [
        "Food/beverage: Not Included",
        "Please Note: Vehicles for this tour can accommodate groups of up to 3, 6, 14, 32, or 49 guests. Please note that entrance fees to attractions are not included in the tour price. Enjoy the freedom to spend as much time as you like at each location. Book now for a personalized adventure exploring the beautiful island of Rhodes!",
        "Restriction/capability note: Time is at leisure. Please note that the drivers' command of the English language may vary and drivers cannot act as tour guides. There are no admissions, food or beverage included in the tour price. Guests must be able to walk over cobblestones and uneven surfaces, inclines and steps. This tour is not wheelchair accessible."
      ],
      "port_pickup_details": [
        "Leaves from: Cruise Ship Pier.",
        "Booking confirmation contains meeting instructions (standard SEG wording)."
      ],
      "return_to_ship_wording": [
        "Sitewide claim: Guaranteed Return to Ship"
      ],
      "dress": "We recommend wearing comfortable clothing and sensible, flat-soled walking shoes. Sunscreen and sunglasses are also recommended. If you plan to be visiting a religious or memorial site, shoulders and knees must be covered.",
      "restrictions": "Time is at leisure. Please note that the drivers' command of the English language may vary and drivers cannot act as tour guides. There are no admissions, food or beverage included in the tour price. Guests must be able to walk over cobblestones and uneven surfaces, inclines and steps. This tour is not wheelchair accessible.",
      "food_beverage": "Not Included",
      "description_paragraphs": [
        "Create a custom eight-hour itinerary to explore Rhodes your way with this private excursion. You'll have a private air-conditioned vehicle and an English-speaking driver to take you to the destinations of your choice. Perfect for those who want flexibility, this tour lets you design your own schedule.",
        "Travel comfortably in an air-conditioned vehicle and immerse yourself in the history, nature, and beauty of this captivating Greek island. Delve into the island's rich heritage by visiting suggested attractions such as the medieval city of Rhodes, a UNESCO World Heritage site. Wander along the impressive 2.5-mile-long walls and marvel at the exquisite Gothic architecture of the Palace of the Grand Master. Explore the Acropolis of Rhodes to unearth ancient temples and relics that reveal the island's fascinating past. To experience the diverse history of Rhodes, stop for lunch and then visit the Rhodes Jewish Museum to explore the island's Jewish history. For a scenic excursion, venture to Trianda village and Filerimos Hill, where you can discover the ancient city of Ialyssos and the remains of the temple dedicated to the Virgin-Goddess Athena.",
        "Please Note: Vehicles for this tour can accommodate groups of up to 3, 6, 14, 32, or 49 guests. Please note that entrance fees to attractions are not included in the tour price. Enjoy the freedom to spend as much time as you like at each location. Book now for a personalized adventure exploring the beautiful island of Rhodes!"
      ],
      "pricing": {
        "displayed_price_text": "From $31.00/person to $575.00/person (Select \"Individuals\" below) Price varies based on number of individuals in your group",
        "listing_price_text": "Price: Starting at $31.00/person",
        "mechanism_notes": [
          "Add to cart after selecting departure date/time",
          "Book Now button present",
          "Date/time selection required before purchase"
        ],
        "caveat": "Prices shown are as scraped from SEG HTML at scrape time (USD). Do not invent or hard-code prices on our site; confirm live on SEG."
      },
      "reviews": {
        "stars": "5 Stars",
        "count_label": "1 Review",
        "samples": [],
        "source_note": "port listing card (static star image + review count); product page uses TurnTo widget (not populated in static scrape)",
        "legitimate": true
      },
      "proposed_editorial_slug": "private-vehicle-full-day",
      "uncertainties": [
        "Listing Food/Beverage 'None' vs product page 'Not Included' (wording may differ).",
        "Official h1 missing on product page; title taken from og:title."
      ],
      "listing_card_snippets": {
        "Excursion Size": "Private",
        "Excursion Type": "Private Sightseeing",
        "Food/Beverage": "None",
        "Activity Level": "Easy",
        "Excursion Duration": "8 Hours"
      }
    },
    {
      "seg_code": "EURHPVTHALFBIG",
      "seg_code_lower": "eurhpvthalfbig",
      "relative_path": "/tour/private-vehicle-half-day-rhodes/eurhpvthalfbig",
      "absolute_url": "https://www.shoreexcursionsgroup.com/tour/private-vehicle-half-day-rhodes/eurhpvthalfbig",
      "official_title": "Private Vehicle - Half Day Rhodes",
      "official_title_source": "og:title",
      "listing_title": "Private Vehicle - Half Day Rhodes",
      "duration": "4 Hours",
      "activity_level": "Easy",
      "excursion_size": "Private",
      "excursion_type_category": "Private Sightseeing",
      "tour_type_inferred": "Private (vehicle only)",
      "destination_areas": [
        "Monte Smith",
        "Medieval Town",
        "Grand Master",
        "Acropolis",
        "Rhodes Town",
        "Prasonisi",
        "Filerimos",
        "Beach",
        "Palace",
        "Street of the Knights",
        "Archaeological Museum"
      ],
      "highlights": [
        "Experience the top attractions of Rhodes including the Old City and Prasonisi Beach on your own, with this private tour.",
        "Enjoy stress-free exploration with an English-speaking driver in a comfortable air-conditioned vehicle tailored to your group size.",
        "Step back in time visiting the UNESCO-listed Old City, boasting medieval structures including the grand Palace of the Grand Master.",
        "Explore ancient treasures at Rhodes' Archaeological Museum, housing remarkable Mycenaean artifacts like ceramics and vases.",
        "Relax or engage in water sports at Prasonisi Beach, renowned for its stunning location where Aegean and Mediterranean Seas meet."
      ],
      "key_inclusions_inferred": [
        "Highlight: Experience the top attractions of Rhodes including the Old City and Prasonisi Beach on your own, with this private tour.",
        "Highlight: Enjoy stress-free exploration with an English-speaking driver in a comfortable air-conditioned vehicle tailored to your group size.",
        "Highlight: Step back in time visiting the UNESCO-listed Old City, boasting medieval structures including the grand Palace of the Grand Master.",
        "Highlight: Explore ancient treasures at Rhodes' Archaeological Museum, housing remarkable Mycenaean artifacts like ceramics and vases.",
        "Highlight: Relax or engage in water sports at Prasonisi Beach, renowned for its stunning location where Aegean and Mediterranean Seas meet.",
        "Please Note: Vehicles for this tour accommodate groups of up to 3, 6, 14, 32, or 49 guests, so please consider this when booking. Please note that because this is a completely customized experience, entrance fees to attractions are not included in the tour price. Enjoy the flexibility to spend as much time as you desire at each location, adjusting your schedule according to your interests. Book now and enjoy a self-made adventure exploring the enchanting island of Rhodes!",
        "Dress guidance (not an inclusion): We recommend wearing comfortable clothing and sensible, flat-soled walking shoes. Sunscreen and sunglasses are also recommended. If you plan to be visiting a religious or memorial site, shoulders and knees must be covered."
      ],
      "key_exclusions_inferred": [
        "Food/beverage: Not Included",
        "Please Note: Vehicles for this tour accommodate groups of up to 3, 6, 14, 32, or 49 guests, so please consider this when booking. Please note that because this is a completely customized experience, entrance fees to attractions are not included in the tour price. Enjoy the flexibility to spend as much time as you desire at each location, adjusting your schedule according to your interests. Book now and enjoy a self-made adventure exploring the enchanting island of Rhodes!",
        "Restriction/capability note: Time is at leisure. If you choose the driver-only option, please be aware that the drivers' command of English varies and that drivers cannot act as tour guides. There are no admissions, food or beverage included in the tour price. Guests must be able to walk over cobblestones and uneven surfaces, inclines and steps and so may not be wheelchair accessible for you."
      ],
      "port_pickup_details": [
        "Leaves from: Cruise Ship Pier.",
        "Booking confirmation contains meeting instructions (standard SEG wording)."
      ],
      "return_to_ship_wording": [
        "Sitewide claim: Guaranteed Return to Ship"
      ],
      "dress": "We recommend wearing comfortable clothing and sensible, flat-soled walking shoes. Sunscreen and sunglasses are also recommended. If you plan to be visiting a religious or memorial site, shoulders and knees must be covered.",
      "restrictions": "Time is at leisure. If you choose the driver-only option, please be aware that the drivers' command of English varies and that drivers cannot act as tour guides. There are no admissions, food or beverage included in the tour price. Guests must be able to walk over cobblestones and uneven surfaces, inclines and steps and so may not be wheelchair accessible for you.",
      "food_beverage": "Not Included",
      "description_paragraphs": [
        "Embark on a customized four-hour tour designed to showcase the best of Rhodes at your own pace. This private excursion is perfect for tourists who want to explore Rhodes' popular attractions leisurely, such as the Archaeological Museum and the medieval castles of Old City. Enjoy the convenience of having your own English-speaking driver take you around town in an air-conditioned private vehicle that accommodates your party size.",
        "Travel comfortably from your port destination to your chosen attractions. Begin with a visit to the famous walled medieval town of Old City, the largest of its kind in Europe and a UNESCO World Heritage Site. Discover its narrow streets and Gothic architecture, including the Palace of the Grand Master, a medieval castle and former citadel built by the Byzantine Empire. Continue to the Archaeological Museum to see Mycenaean artifacts like ceramics and vases. For a relaxing end to your tour, head to Prasonisi Beach, where the Aegean Sea and the Mediterranean Sea meet. Enjoy water sports such as kitesurfing and windsurfing, or simply relax on the beach with a refreshment.",
        "For a more scenic experience, consider a short drive to the west coast to visit the village of Trianda and Filerimos Hill, the acropolis of the ancient city of Ialyssos. Here, explore the remains of the ancient temple dedicated to the Virgin-Goddess Athena and walk the path lined with cypress trees leading to a monumental cross. Enjoy a traditional Greek coffee at a local coffee shop before returning to Rhodes town. Take a photo opportunity at the remains of the ancient Acropolis in the Monte Smith area, and then enter the old city through the D'Amboise Gate. Your tour will continue on foot to the Palace of the Grand Masters, down the street of the knights, and past medieval buildings and towers.",
        "As Greece's fourth-largest island, there's much to do when visiting Rhodes. Sign up for your fun, private excursion in Rhodes and explore what Rhodes has to offer at your leisure!",
        "Please Note: Vehicles for this tour accommodate groups of up to 3, 6, 14, 32, or 49 guests, so please consider this when booking. Please note that because this is a completely customized experience, entrance fees to attractions are not included in the tour price. Enjoy the flexibility to spend as much time as you desire at each location, adjusting your schedule according to your interests. Book now and enjoy a self-made adventure exploring the enchanting island of Rhodes!"
      ],
      "pricing": {
        "displayed_price_text": "From $21.00/person to $341.00/person (Select \"Individuals\" below) Price varies based on number of individuals in your group",
        "listing_price_text": "Price: Starting at $21.00/person",
        "mechanism_notes": [
          "Add to cart after selecting departure date/time",
          "Book Now button present",
          "Date/time selection required before purchase"
        ],
        "caveat": "Prices shown are as scraped from SEG HTML at scrape time (USD). Do not invent or hard-code prices on our site; confirm live on SEG."
      },
      "reviews": {
        "stars": null,
        "count_label": null,
        "samples": [],
        "source_note": "product page uses TurnTo widget (not populated in static scrape)",
        "legitimate": false
      },
      "proposed_editorial_slug": "private-vehicle-half-day",
      "uncertainties": [
        "Listing Food/Beverage 'None' vs product page 'Not Included' (wording may differ).",
        "Official h1 missing on product page; title taken from og:title."
      ],
      "listing_card_snippets": {
        "Excursion Size": "Private",
        "Excursion Type": "Private Sightseeing",
        "Food/Beverage": "None",
        "Activity Level": "Easy",
        "Excursion Duration": "4 Hours"
      }
    }
  ]
}
```

## Summary table

| Code | Title | Duration | Activity | Type | Proposed editorial slug |
|---|---|---|---|---|---|
| EURHTCAEXCWALK | Exclusive Medieval Town of Rhodes | 3 Hours | Moderate | Small group | `exclusive-medieval-town-of-rhodes` |
| EURHBEST | Best of Lindos and Rhodes | 5 Hours | Moderate | Standard / coach-size group | `best-of-lindos-and-rhodes` |
| EURHCRUISETOANTQUIN | Cruise to Anthony Quinn, Kallithea and Traganou Caves | 6 Hours 30 Minutes | Moderate | Standard / coach-size group | `anthony-quinn-kallithea-traganou-cruise` |
| EURHJEEPSAF | Rhodes Back Country Adventure | 7 Hours | Moderate | Small group | `rhodes-back-country-adventure` |
| EURHLINDOSOYO | Lindos On Your Own | 6 Hours 30 Minutes | Moderate | Standard / coach-size group | `lindos-on-your-own` |
| EURHKAYAK | Sea Kayaking the Pirates Route | 6 Hours | Moderate | Small group | `sea-kayaking-the-pirates-route` |
| EURHBUTTERFLYWINE | Butterfly Valley and Wine Tasting | 5 Hours 30 Minutes | Moderate | Standard / coach-size group | `butterfly-valley-and-wine-tasting` |
| EURHMEDOLDWALK | Medieval Old Town Rhodes Walking Tour | 3 Hours | Moderate | Standard / coach-size group | `medieval-old-town-rhodes-walking-tour` |
| EURHCOOK | A Taste of Rhodes | 6 Hours | Easy | Small group | `a-taste-of-rhodes` |
| EURHFISHBOAT | Rhodes Fishing Boat Trip | 4 Hours | Easy | Small group | `rhodes-fishing-boat-trip` |
| EURHCTYOLDSEG | Rhodes City and Old Town by Segway Mini | 1 Hour 30 Minutes | Moderate | Small group | `rhodes-city-old-town-segway` |
| EURHHIKEPROFIT | Profitis Ilias Mountain Hike | 5 Hours 30 Minutes | Moderate | Small group | `profitis-ilias-mountain-hike` |
| EURHTCALINDO | Private Ancient Lindos | 3 Hours 30 Minutes | Difficult | Private | `private-ancient-lindos` |
| EURHTCALINOT | Private Ancient Lindos and Rhodes | 8 Hours | Difficult | Private | `private-ancient-lindos-and-rhodes` |
| EURHTCACULIN | Private Group Culinary Delights of Rhodes | 5 Hours | Moderate | Private | `private-culinary-delights-of-rhodes` |
| EURHPVTGUIDEFULL | Private Guide and Vehicle - Full Day Rhodes | 8 Hours | Easy | Private (guide + vehicle) | `private-guide-vehicle-full-day` |
| EURHPVTDRIGUIDE | Private Guide and Vehicle - Half Day Rhodes | 4 Hours | Easy | Private (guide + vehicle) | `private-guide-vehicle-half-day` |
| EURHOVTLINBCH | Private Lindos and Beach | 5 Hours 30 Minutes | Moderate | Private (SEG size field: Standard) | `private-lindos-and-beach` |
| EURHVILLPANCITYTOUR | Private Lindos Village and Kallithea with Panoramic Highlights | 6 Hours 30 Minutes | Moderate | Private | `private-lindos-kallithea-panoramic` |
| EURHTCARHODE | Private Rhodes City Tour | 3 Hours 30 Minutes | Moderate | Private | `private-rhodes-city-tour` |
| EURHTCAHIGHL | Private Rhodes Highlights | 4 Hours | Moderate | Private | `private-rhodes-highlights` |
| EURHPVTFULLBIG | Private Vehicle - Full Day Rhodes | 8 Hours | Easy | Private (vehicle only) | `private-vehicle-full-day` |
| EURHPVTHALFBIG | Private Vehicle - Half Day Rhodes | 4 Hours | Easy | Private (vehicle only) | `private-vehicle-half-day` |
