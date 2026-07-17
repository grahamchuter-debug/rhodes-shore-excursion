import type { FAQ } from "./types";
import { getHomepageFaqs } from "./homepage";

export const extraFaqs: FAQ[] = [
  {
    question: "Where do cruise ships dock in Rhodes?",
    answer:
      "Most cruise ships use the Akandia cruise terminal south of Rhodes Town's old harbour. Some smaller vessels berth closer to Mandraki harbour. Berth assignments can change, so check your ship's information on arrival.",
  },
  {
    question: "How far is Rhodes cruise port from the Old Town?",
    answer:
      "The Old Town's Marine Gate area is typically around 15–20 minutes on foot from the Akandia terminal, depending on your exact berth. A taxi is a quick alternative if you prefer not to walk.",
  },
  {
    question: "Can I explore Rhodes Old Town independently?",
    answer:
      "Yes. The medieval Old Town is compact enough for a well-paced independent day, with the Street of the Knights, Palace of the Grand Master, Archaeological Museum area, Suleiman Mosque and Jewish Quarter all within walking distance of each other.",
  },
  {
    question: "What is the best independent Rhodes Old Town itinerary?",
    answer:
      "Walk from the port to the Street of the Knights and the Palace of the Grand Master in the morning, continue through the Old Town's quieter lanes, have lunch near Socratous Street, then return towards the port with time in hand.",
  },
  {
    question: "How far is Lindos from Rhodes cruise port?",
    answer:
      "Lindos is roughly 47–50 km south of Rhodes Town on the east coast. The road journey usually takes 50–60 minutes each way, longer in heavy summer traffic. It is not within walking distance of the port.",
  },
  {
    question: "Do I need advance tickets for the Lindos Acropolis?",
    answer:
      "Advance booking is not usually as critical as at major landmark attractions elsewhere, but current admission arrangements, opening hours and any capacity measures should be checked for your travel date, especially in peak season.",
  },
  {
    question: "Can I visit Lindos and the Old Town in one port day?",
    answer:
      "Only on a comfortably long call, usually eight or more usable hours. A well-designed combined itinerary gives Lindos the larger share of the day and a shortened, focused Old Town visit rather than treating both as brief stops.",
  },
  {
    question: "How difficult is the walk up to the Lindos Acropolis?",
    answer:
      "It is a sustained uphill walk on paved steps from the village, taking roughly 10–15 minutes in normal conditions. It is not technical climbing, but heat, crowding and uneven surfaces make it more demanding than photographs suggest. Limited-mobility visitors should ask their operator about alternatives.",
  },
  {
    question: "Should I take a donkey ride up to the Lindos Acropolis?",
    answer:
      "We do not recommend it on animal-welfare grounds. Pacing the walk yourself, or skipping the climb if it is not manageable, is the better choice.",
  },
  {
    question: "Is Rhodes cruise port busy with several ships at once?",
    answer:
      "Yes, this is common during the summer season. Multiple ships in port on the same day increase demand for taxis and make the Old Town's key sights busier, particularly around midday.",
  },
  {
    question: "Which beaches are closest to Rhodes cruise port?",
    answer:
      "Anthony Quinn Bay is around 15–20 minutes north of the port by road, with Faliraki and Tsambika a little further along the east coast. None are within walking distance of the terminal.",
  },
  {
    question: "What food should I try in Rhodes?",
    answer:
      "Look for pitaroudia (Rhodian chickpea fritters), melekouni (a sesame-and-honey sweet), local cheeses, stifado and Rhodian wine. The Old Town has tavernas and market stalls suited to a short cruise-day lunch.",
  },
  {
    question: "Can I combine a food tour with Old Town sightseeing?",
    answer:
      "Yes. A short food or wine walking tour can anchor an Old Town day because most tasting stops sit close to the main historic sights, keeping transfer time to a minimum.",
  },
  {
    question: "Should I book through the cruise line or independently?",
    answer:
      "Ship excursions offer the clearest protection if an organised tour is delayed. Reputable independent operators may offer smaller groups and better value, but check their port-day experience, cancellation terms and return policy before booking.",
  },
  {
    question: "How much return-to-ship buffer should I allow?",
    answer:
      "For an Old Town day, aim to be at the terminal 60–90 minutes before all-aboard. For Lindos or the coast, build in additional road contingency, especially on days with several ships in port.",
  },
  {
    question: "Is Rhodes accessible for limited mobility?",
    answer:
      "Central areas near the port and parts of the Old Town are broadly manageable, but historic cobbles, the Palace of the Grand Master's uneven floors and the stepped Lindos Acropolis path all require care. Discuss specific needs with your operator before booking.",
  },
  {
    question: "What currency and language are used in Rhodes?",
    answer:
      "Greece uses the euro. Greek is the local language, and English is widely understood in visitor-facing businesses. Cards are common, but carrying a small amount of cash is useful for markets and smaller tavernas.",
  },
];

export function getAllFaqs(): FAQ[] {
  return [...getHomepageFaqs(), ...extraFaqs];
}
