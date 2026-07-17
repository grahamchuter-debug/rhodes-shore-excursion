import type { FAQ } from "./types";

export interface Terminal {
  name: string;
  quay: string;
  usedBy: string;
  cityAccess: string;
}

export interface PortGuideSection {
  heading: string;
  paragraphs: string[];
}

export const portGuideContent = {
  title: "Rhodes Cruise Port Guide",
  subtitle:
    "Berths, walking times, the medieval Old Town, Lindos logistics, transport and sensible return-to-ship planning.",
  terminals: [
    {
      name: "Akandia Cruise Terminal",
      quay: "South of Rhodes Town's harbour area, the main berth for larger cruise ships",
      usedBy: "Most medium, large and mega-ships calling at Rhodes",
      cityAccess:
        "Approximately 15–20 minutes on foot to the Old Town's Marine Gate area, depending on the exact berth; taxis and, on some calls, a shuttle may be available",
    },
    {
      name: "Mandraki Harbour / Commercial Quay",
      quay: "The historic harbour area closer to the New Town and the edge of the Old Town",
      usedBy: "Smaller ships, some tenders and yacht-scale vessels",
      cityAccess:
        "Often a short walk of around 10 minutes to the Old Town, though exact arrangements vary by call",
    },
  ] as Terminal[],
  sections: [
    {
      heading: "Where cruise ships dock in Rhodes",
      paragraphs: [
        "Most larger cruise ships calling at Rhodes berth at the Akandia cruise terminal, south of Rhodes Town's old harbour. Rhodes' cruise berths and operations sit under the Municipal Port Fund of South Dodecanese, the local port authority; exact berth assignments, terminal facilities and operating arrangements can change between calls and seasons, so treat this guide as general orientation rather than a live operational feed.",
        "Smaller vessels occasionally use quays nearer Mandraki harbour, closer to the New Town and the edge of the Old Town. Some calls may also use tender operations depending on conditions and ship size.",
        "Rhodes is one of the busiest cruise ports in Greece, and it is common for several ships to be in port on the same day during the summer season. This affects taxi availability, walking-route crowding and how busy the Old Town's key sights feel at any given hour.",
      ],
    },
    {
      heading: "Walking from the port to the Old Town",
      paragraphs: [
        "From the Akandia terminal, the walk to the Old Town's Marine Gate (Pili tis Thalassas) area is typically around 15–20 minutes, mostly on level ground along the harbourfront. The exact distance depends on where within the terminal area your ship berths.",
        "The route is generally straightforward to follow, but summer heat, limited shade along parts of the harbourfront and a lack of clear signage in places can make the walk feel longer than the distance alone suggests. Passengers with limited mobility, young children or heat sensitivity may prefer a taxi.",
        "Once inside the Old Town walls, expect cobbled and sometimes uneven medieval paving. This is part of the city's character, but it is worth factoring into your choice of footwear before you leave the ship.",
      ],
    },
    {
      heading: "Medieval Rhodes Old Town highlights",
      paragraphs: [
        "The Street of the Knights (Odos Ippoton) and the Palace of the Grand Master form the core of most Old Town routes, with the former Hospital of the Knights (now the Archaeological Museum area) nearby.",
        "The Ottoman-era Suleiman Mosque and the Jewish Quarter around Kahal Shalom Synagogue add further historical layers beyond the Knights-era core, reflecting the centuries of Byzantine, Knights Hospitaller, Ottoman and Italian rule that shaped the city.",
        "Socratous Street and the surrounding market lanes are the natural place for shopping, cafés and a slower browse once the main historic sites are covered.",
      ],
    },
    {
      heading: "Planning a Lindos day",
      paragraphs: [
        "Lindos sits roughly 47–50 km south of Rhodes Town on the east coast, and the road journey usually takes 50–60 minutes each way, longer in heavy summer traffic. This is not a walking distance from the port, and it needs organised transport — a coach excursion, taxi, private driver or the public bus.",
        "Once in Lindos, vehicles typically stop at the edge of the village because street access is restricted; the Acropolis itself is reached via a stepped, part-shaded path from the village that takes a sustained 10–15 minutes of uphill walking in normal conditions.",
        "Because of the combined road time and the climb, Lindos is a different planning proposition from the Old Town: it needs a comfortably long call, realistic timing and, ideally, an earlier start to avoid the midday heat and the busiest hours at the Acropolis.",
      ],
    },
    {
      heading: "Taxis, buses and transfers",
      paragraphs: [
        "Taxis are usually available near the cruise terminal and around the New Market (Nea Agora), though demand rises sharply on days when several ships are in port. Confirm the fare or that the meter is running, and keep your ship's name and terminal details for the return journey.",
        "The public KTEL bus network serves Lindos and other coastal destinations from Rhodes Town's bus stations, but timetables are not designed around cruise calls, so allow a wide margin if you plan to use them independently.",
        "Organised shore excursions and private drivers should plan Lindos and coastal routes backwards from your ship's all-aboard time, with contingency for coastal-road traffic and any delays collecting other passengers.",
      ],
    },
    {
      heading: "A realistic independent Old Town day",
      paragraphs: [
        "Start with the Street of the Knights and the Palace of the Grand Master earlier in the day, before the heat and the busiest coach groups arrive. Continue through the Old Town's quieter lanes towards the Jewish Quarter or the Ottoman quarter.",
        "Use the middle of the day for lunch near Socratous Street, then spend the afternoon shopping or exploring at an easier pace before heading back towards the port.",
        "Trying to combine a full Old Town walk with an independent trip to Lindos in the same day is rarely realistic; treat them as separate ambitions unless you have booked organised transport for Lindos specifically.",
      ],
    },
    {
      heading: "Return-to-ship planning",
      paragraphs: [
        "Confirm the ship's all-aboard time, which is earlier than the published departure. For an Old Town day, plan to reach the terminal 60–90 minutes before all-aboard.",
        "For Lindos or the coast, the operator should plan backwards from the ship with allowance for coastal-road traffic and multi-ship crowding at the terminal itself. A journey time shown by a map app is not an adequate return plan on a busy day.",
        "Independent travellers are responsible for reaching the ship on time. If a Lindos trip does not leave a conservative margin, choose the Old Town or a nearby coastal stop instead.",
      ],
    },
  ] as PortGuideSection[],
  faqs: [
    {
      question: "Can I walk into Rhodes Old Town from the cruise terminal?",
      answer:
        "Usually yes. Allow around 15–20 minutes on foot from the Akandia terminal to the Old Town's Marine Gate area, depending on your exact berth. A taxi is a quick alternative if time, heat or mobility are concerns.",
    },
    {
      question: "What can I see close to Rhodes cruise port?",
      answer:
        "The Old Town's Street of the Knights, Palace of the Grand Master, Archaeological Museum area, Suleiman Mosque, Jewish Quarter and Socratous Street market lanes are all within the walkable historic core.",
    },
    {
      question: "Do I need transport for Lindos?",
      answer:
        "Yes. Lindos is roughly 47–50 km from Rhodes Town and needs a coach excursion, taxi, private driver or public bus — it is not within walking distance of the port.",
    },
    {
      question: "Is Rhodes cruise port busy with multiple ships?",
      answer:
        "Often, especially in the summer season. Several ships can be in port on the same day, which increases demand for taxis and makes the Old Town's main sights busier at peak hours.",
    },
    {
      question: "How early should I be back at the ship?",
      answer:
        "Reach the terminal 60–90 minutes before all-aboard for an Old Town day, with a larger road contingency for a Lindos or coastal excursion.",
    },
  ] as FAQ[],
};

export const terminals = portGuideContent.terminals;
export const portGuideSections = portGuideContent.sections;
export const portGuideFaqs = portGuideContent.faqs;
