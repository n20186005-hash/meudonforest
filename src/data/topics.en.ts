import type { TopicContent } from './topics';

export const enTopics: Record<string, TopicContent> = {
  'randonnee-foret-meudon': {
    slug: 'randonnee-foret-meudon',
    title: 'Hiking in Meudon Forest: routes, distances and practical advice',
    description:
      'Plan a hike in the Forêt de Meudon near Paris: how to pick the right distance, routes starting from Meudon, Chaville or Viroflay, gear to bring and safety tips before you set off.',
    intro: [
      'The Forêt domaniale de Meudon covers roughly 1,100 hectares southwest of Paris, spread across the communes of Meudon, Chaville, Clamart, Sèvres, Vélizy-Villacoublay and Viroflay. Managed by the French national forestry office (Office national des forêts, ONF), it is open to everyone free of charge, which makes it one of the easiest nature outings from the capital.',
      'There is no ticket and no single "full loop": each visitor builds a route from the network of forest tracks. The simplest approach for a first visit is to pick an edge reached by train or bus, then design a loop whose distance and duration you know beforehand.',
      'The department publishes a 13 km three-pond route from Meudon Val-Fleury. Check ONF access notices and use an offline map to stay on open paths.',
    ],
    facts: [
      { label: 'Area', value: 'About 1,100 hectares (public data)' },
      { label: 'Managed by', value: 'Office national des forêts (ONF)' },
      { label: 'Access', value: 'Free and open, no ticket required' },
      { label: 'Map code', value: 'Plus Code Q6W5+8R Meudon, France' },
      { label: 'Handy starting point', value: 'Meudon station (Transilien line N)' },
      { label: 'Terrain', value: 'Rolling, forest tracks sometimes muddy' },
    ],
    sections: [
      {
        id: 'choisir-sa-boucle',
        heading: 'Choosing the right distance',
        paragraphs: [
          'Plan your hike primarily in terms of available time rather than a fixed circuit. Because the forest borders several towns, you can walk to an edge from a station or bus stop, then either retrace your steps or complete a loop on another track.',
        ],
        bullets: [
          'Short outing (1–1.5 h): from an edge, follow a forest track for 20–30 minutes, turn around and come back the same way — good with children or in uncertain weather.',
          'For a longer outing, follow the 13 km three-pond route from Meudon Val-Fleury, which takes in town streets as well as forest paths.',
          'Long loop (4 h+): link several sectors on waymarked tracks, for example between the Meudon, Chaville and Viroflay edges, carrying water and snacks.',
          'Running: the wide tracks and moderate relief attract many runners; set off early at weekends if you prefer quiet paths.',
        ],
      },
      {
        id: 'se-reperer',
        heading: 'Finding your way',
        paragraphs: [
          'The massif mixes wide forest roads, narrow side paths and open edges near residential areas. The main tracks are the easiest to follow; secondary paths look alike and can cross unexpectedly. Downloading an offline map in advance avoids hesitation, especially where mobile coverage under tree cover is weak.',
          'The routes promoted by ONF are waymarked and maintained. On the ground, waymarking takes priority whenever a path appears to have shifted after forestry work.',
        ],
      },
      {
        id: 'quand-partir',
        heading: 'When to go',
        paragraphs: [
          'The forest is walkable all year. Spring brings wildflowers and pleasant light; autumn is prized for foliage colour; in winter the bare canopy opens long views, though some stretches can be muddy.',
          'In warm weather start early in the morning: the canopy keeps things pleasant, but carry enough water. After rain, wear shoes with grip, as several tracks hold water.',
        ],
      },
      {
        id: 'equipement',
        heading: 'Gear and precautions',
        paragraphs: [
          'Preparing an outing here stays simple: good shoes, water, a rain layer and a way to check the route cover most loops.',
        ],
        bullets: [
          'Closed shoes with grip: forest tracks turn slippery after rain.',
          'Water and snacks: shops are in the neighbouring towns, rarely inside the massif.',
          'Offline map or hiking app: mobile coverage is unreliable under the trees.',
          'Charged phone and daylight margins: there is no artificial lighting in the forest.',
          'Dogs on a lead: wildlife is present and local rules apply.',
        ],
      },
      {
        id: 'bien-partager',
        heading: 'Sharing the forest',
        paragraphs: [
          'The massif is shared by walkers, runners, cyclists and horse riders. Keep right, announce yourself before overtaking and slow down at junctions. Wetlands and regeneration plots are sensitive: staying on waymarked paths limits erosion and protects young plantings.',
          'Carry your litter out, as bins are not available along every path. Fires are forbidden, as in any Île-de-France forest exposed to drought risk.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is hiking in Meudon Forest free?',
        answer:
          'Yes. The Forêt domaniale de Meudon is public forest managed by the ONF: access is free and open, with no ticket and no booking.',
      },
      {
        question: 'Which hike should I choose for a first visit?',
        answer:
          'For a short taste of the forest, pick a signed entrance and return by the same path. For a longer outing, follow the published three-pond route from Meudon Val-Fleury.',
      },
      {
        question: 'How long does the lakes circuit take?',
        answer:
          'Allow time for a hilly 13 km route and for stops in town. For a shorter walk, choose an out-and-back from a specific gate.',
      },
      {
        question: 'Can you hike here with children?',
        answer:
          'Yes, by choosing a short loop on wide, gently sloping forest tracks. Plan to return before dusk and avoid narrow trails after heavy rain.',
      },
      {
        question: 'Can you cycle or run in Meudon Forest?',
        answer:
          'Wide forest tracks are used by cyclists and runners. Keep your speed moderate, give way to pedestrians and stay on routes where cycling is permitted according to the waymarking.',
      },
      {
        question: 'Is there much elevation gain?',
        answer:
          'The relief is rolling but moderate; the total ascent suits occasional walkers. A few short pitches climb rather steeply.',
      },
    ],
    internalLinksTitle: 'Keep planning',
  },

  'carte-foret-meudon': {
    slug: 'carte-foret-meudon',
    title: 'Meudon Forest map: trails, access points and landmarks',
    description:
      'Locate the Forêt de Meudon on the map: Plus Code, main access points from Meudon, Chaville, Viroflay or Vélizy, how to read trail maps and prepare a reliable route.',
    intro: [
      'Knowing where the paths start makes planning much easier. Because the forest borders several Hauts-de-Seine communes, it has many access points; the most practical are those connected to a station or a bus stop.',
      'Online maps do not all describe the massif in the same way: some apps show only the main forest roads, while others include narrow side paths. The routes published by ONF remain the reference for waymarked trails, and the IGN Géoportail overlays the paths on a reliable topographic base.',
    ],
    facts: [
      { label: 'Short map code', value: 'Plus Code Q6W5+8R Meudon, France' },
      { label: 'Google Maps link', value: 'Opens in a new tab below' },
      { label: 'Neighbouring towns', value: 'Meudon, Chaville, Clamart, Sèvres, Vélizy-Villacoublay, Viroflay' },
      { label: 'Access', value: 'Free and open, no ticket required' },
      { label: 'Recommended maps', value: 'IGN Géoportail, OpenStreetMap apps, ONF trail maps' },
      { label: 'Field tip', value: 'Download the map offline before you leave' },
    ],
    sections: [
      {
        id: 'lire-la-carte',
        heading: 'Reading the map',
        paragraphs: [
          'On a map, Meudon Forest appears as a large elongated wooded block between the built-up areas of southwestern Paris. Solid lines are driveable forest roads and wide tracks; dashed lines are secondary paths, some of them temporary.',
        ],
        bullets: [
          'Main tracks: suitable for families, all-terrain pushchairs and bikes; they connect the different edges.',
          'Secondary paths: narrower, they can cross each other or disappear temporarily after forestry work.',
          'Working areas: some plots are temporarily closed for felling or regeneration; on-site signage always takes priority over the map.',
          'Water features (ponds, streams): handy landmarks for building a loop, notably towards the forest lakes.',
        ],
      },
      {
        id: 'points-dacces',
        heading: 'Choosing your entry point',
        paragraphs: [
          'Rather than aiming for the "centre" of the forest, pick an edge close to your transport mode: it shortens the urban section and leaves more time on the trails.',
        ],
        bullets: [
          'Meudon: convenient from Meudon station, the most common starting point for a first visit.',
          'Chaville and Viroflay: good gateways for loops towards the lakes and the northern wooded sectors.',
          'Vélizy-Villacoublay: southern edge, useful if you arrive by public transport from the wider Paris metro area.',
          'Sèvres and Ville-d’Avray: northern edge, convenient for combining the outing with nearby ponds.',
        ],
      },
      {
        id: 'applications',
        heading: 'Useful apps and maps',
        paragraphs: [
          'An offline map is the most reliable tool on site: mobile coverage varies under tree cover, and GPS consumes battery quickly during a hike.',
        ],
        bullets: [
          'Géoportail / IGN maps: the national topographic reference, with paths and contour lines.',
          'OpenStreetMap-based apps: useful to visualise secondary paths and draw a custom loop.',
          'ONF documents: the reference for officially waymarked circuits.',
        ],
      },
      {
        id: 'construire-un-itineraire',
        heading: 'Building a reliable route',
        paragraphs: [
          'A good loop depends on three things: the time available, the distance you want to cover, and the endpoint where you catch transport home. Start with a simple out-and-back, then turn it into a loop by returning on a parallel track.',
          'Build in a margin: maps age, a path may be closed for forestry work, and daylight fades quickly in autumn and winter. Staying on waymarked routes protects sensitive areas and reduces the risk of losing your way.',
        ],
      },
    ],
    faq: [
      {
        question: 'Where can I find a reliable map of Meudon Forest?',
        answer:
          'The waymarked circuits published by ONF are the reference. The IGN Géoportail and OpenStreetMap-based apps complement them for spotting paths and access points.',
      },
      {
        question: 'What reference should I use for the forest?',
        answer:
          'The short code used by Google Maps is Q6W5+8R Meudon, France. You can also open the Google Maps link on this page and ask for directions from your location.',
      },
      {
        question: 'Where should I enter the forest for the first time?',
        answer:
          'The edges reachable from Meudon station are the easiest: they lead to a forest track within a few minutes of walking from the town centre.',
      },
      {
        question: 'Is the whole forest open to visitors?',
        answer:
          'Access to the massif is free, but individual plots may close temporarily for forestry work or regeneration. Follow the signage on site.',
      },
      {
        question: 'Where can I find a published pond walk?',
        answer:
          'Destination Hauts-de-Seine publishes a 13 km route from Meudon Val-Fleury. Consult the ONF for changes to forest access.',
      },
      {
        question: 'Is mobile coverage reliable in the forest?',
        answer:
          'Coverage is uneven depending on the wooded sector. Save or download your map offline before setting off.',
      },
    ],
    internalLinksTitle: 'Keep planning',
  },

  'balade-etangs-meudon': {
    slug: 'balade-etangs-meudon',
    title: 'Meudon Forest lakes walk: route, seasons and wildlife watching',
    description:
      'Plan Meudon’s three-pond walk: a 13 km route from Val-Fleury past forest ponds and historic landmarks.',
    intro: [
      'The lakes walk is one of the most popular outings in the Forêt domaniale de Meudon: it combines forest tracks, water bodies and open areas over a distance that fits easily into a half day.',
      'The massif has several ponds and wetlands, some of them laid out for walking. These habitats are fragile: waterbirds and amphibians nest or breed there, which explains the quiet-zone notices on site.',
      'The department’s 13 km route begins at Meudon Val-Fleury and passes Parc Paumier, Chalais, Étang de Meudon, Villebon and the observatory terrace.',
    ],
    facts: [
      { label: 'Reference distance', value: '13 km on the published route from Meudon Val-Fleury' },
      { label: 'Estimated duration', value: 'Depends on walking pace, hills and stops' },
      { label: 'Terrain', value: 'Forest tracks, sections beside wetlands' },
      { label: 'Good for', value: 'Family nature outing, birdwatching, photography' },
      { label: 'Access', value: 'Free and open, no ticket required' },
      { label: 'Quieter times', value: 'Weekday mornings, outside busy autumn weekends' },
    ],
    sections: [
      {
        id: 'itineraire-type',
        heading: 'How the lakes loop works',
        paragraphs: [
          'The route links several water bodies in the massif while staying on waymarked forest tracks, then returns to your starting edge by another path. There is no imposed direction: adapt it to where you begin.',
          'You can shorten the outing by choosing a single pond and planning an out-and-back. Recheck access at the forest edge.',
        ],
      },
      {
        id: 'que-voir',
        heading: 'What you can spot along the way',
        paragraphs: [
          'The wetlands attract varied birdlife through the seasons. Edges and clearings are also rich in insects and small mammals, particularly early in the morning.',
        ],
        bullets: [
          'Waterbirds and ducks on the ponds, depending on the season.',
          'Amphibians in spring, in the wetlands and forest pools.',
          'Dragonflies and damselflies in summer along the banks.',
          'Sweet chestnut, beech and oak are characteristic of the forest.',
        ],
      },
      {
        id: 'saisons',
        heading: 'Best seasons',
        paragraphs: [
          'Spring is the liveliest period for wildlife and wildflowers. Summer provides shade but heavier crowds, so start early. In autumn, foliage colour around the ponds is a classic subject for nature photography in Île-de-France. In winter, low light and the quiet of the place are worth the trip, provided you wear shoes suited to damp tracks.',
        ],
      },
      {
        id: 'respect-des-lieux',
        heading: 'Respecting the wetlands',
        paragraphs: [
          'Banks are sensitive to trampling. Stay on paths, do not go down to the water and keep your dog on a lead: quiet is what keeps the birds here.',
        ],
        bullets: [
          'Do not feed animals, including waterbirds.',
          'Do not pick plants or mushrooms unless you know the local rules.',
          'Carry all litter out: bins are not available along the whole route.',
          'Avoid busy weekend hours to limit disturbance to wildlife.',
        ],
      },
    ],
    faq: [
      {
        question: 'How long is the lakes walk?',
        answer:
          'The department’s loop is 13 km from Meudon Val-Fleury. For a shorter outing, pick one pond or turn back by the planned path.',
      },
      {
        question: 'Is the lakes route waymarked?',
        answer:
          'The discovery routes laid out in the massif by ONF are waymarked. Check the official documents or an offline map before leaving, as works can temporarily alter a section.',
      },
      {
        question: 'Can children do this walk?',
        answer:
          'Yes, provided you stick to wide tracks and take breaks. A shortened version of the loop suits younger walkers better.',
      },
      {
        question: 'When is birdwatching best?',
        answer:
          'Spring and the autumn passage are the busiest periods, but every month brings sightings. The first hours of the morning are the most productive.',
      },
      {
        question: 'Can you picnic by the lakes?',
        answer:
          'Check the local signage, as some banks are protected. In all cases use designated areas and take all your litter with you.',
      },
      {
        question: 'How many lakes are in the forest?',
        answer:
          'The massif has several ponds and wetlands. Since the exact count varies between sources and over time, rely on the most recent official mapping to locate them.',
      },
    ],
    internalLinksTitle: 'Keep planning',
  },

  'acces-foret-meudon': {
    slug: 'acces-foret-meudon',
    title: 'Getting to Meudon Forest: train, bus, car and bike',
    description:
      'How to reach the Forêt domaniale de Meudon from Paris: train from Montparnasse, local buses, parking, cycling access and practical information before you go.',
    intro: [
      'Meudon Forest lies about fifteen kilometres southwest of Paris, in the Hauts-de-Seine department. It borders several communes, so you can arrive by train, bus, bike or car without depending on a single entrance.',
      'Accessibility is its main strength: from Paris, several Transilien stations put you within twenty minutes of a forest edge, followed by a short walk to the first tracks.',
    ],
    facts: [
      { label: 'From Paris', value: 'Transilien line N from Paris Montparnasse to Meudon station' },
      { label: 'Other rail options', value: 'Stations in the neighbouring communes depending on your sector' },
      { label: 'Bus', value: 'Lines serving Meudon, Chaville, Clamart, Sèvres, Vélizy and Viroflay' },
      { label: 'On foot from the station', value: 'Allow 10–20 minutes depending on the entrance' },
      { label: 'By car', value: 'Edge car parks, best on weekdays or early at weekends' },
      { label: 'Timetables', value: 'Check Île-de-France Mobilités on the day' },
    ],
    sections: [
      {
        id: 'en-train',
        heading: 'By train from Paris',
        paragraphs: [
          'Transilien line N links Paris Montparnasse with the southwestern suburbs; Meudon station is one of the most common arrival points for reaching the forest. From the station, allow ten to twenty minutes on foot depending on the edge you aim for.',
        ],
        bullets: [
          'Check the day’s timetable on the Île-de-France Mobilités website or app before leaving.',
          'Suburban trains run less frequently at weekends and in the evening, so plan your return.',
          'Arriving in the morning means cooler air and quieter paths.',
        ],
      },
      {
        id: 'en-bus',
        heading: 'By bus',
        paragraphs: [
          'Several bus lines serve the communes bordering the massif: Meudon, Chaville, Clamart, Sèvres, Vélizy-Villacoublay and Viroflay. They drop you near an edge, from where you continue on foot.',
          'Line numbers and stops change regularly, so use a journey planner on the day to find the stop closest to the entrance you want.',
        ],
      },
      {
        id: 'en-voiture',
        heading: 'By car and parking',
        paragraphs: [
          'Driving is possible, but edge car parks are limited and fill quickly on fine weekends. Arriving early or heading for a quieter sector is the best strategy.',
        ],
        bullets: [
          'Park only in designated spaces, without blocking forest tracks or private accesses.',
          'Leave nothing visible inside the vehicle.',
          'Check that your parking spot allows the duration of your outing, as rules vary between communes.',
        ],
      },
      {
        id: 'a-velo',
        heading: 'By bike',
        paragraphs: [
          'The neighbouring communes are linked by cycle routes, making it possible to reach an edge from Meudon, Chaville or Vélizy. Inside the massif, some wide forest tracks suit mountain biking: respect pedestrian-only sections and ride at a moderate speed.',
          'Bring a solid lock if you leave the bike at the edge during your walk.',
        ],
      },
      {
        id: 'depuis-les-aeroports',
        heading: 'From the Paris airports',
        paragraphs: [
          'From Orly or Roissy-Charles-de-Gaulle, the simplest option is to reach the regional network (RER then a connection southwest), or to use a journey planner to get the fastest route on the day. Travel time is usually well over an hour.',
        ],
      },
    ],
    faq: [
      {
        question: 'Which train should I take from Paris to Meudon Forest?',
        answer:
          'Transilien line N from Paris Montparnasse serves Meudon station, a handy starting point for the first forest edges. Check the day’s timetable on the Île-de-France Mobilités site or app.',
      },
      {
        question: 'How long is the walk from Meudon station?',
        answer:
          'Generally 10 to 20 minutes to reach an entrance, depending on which edge you head for and the gradient of the urban approach.',
      },
      {
        question: 'Are there buses to Meudon Forest?',
        answer:
          'Yes, several lines serve the communes bordering the forest. As numbers and stops change, verify your route on the day of your visit.',
      },
      {
        question: 'Is parking easy?',
        answer:
          'Edge car parks are limited and in high demand on sunny weekends. Arriving early or using public transport is usually simpler.',
      },
      {
        question: 'Can you cycle here from Paris?',
        answer:
          'The ride is feasible via the cycle routes of the southwestern suburbs, but it requires confidence in city traffic. A common option is taking the train to a neighbouring commune and cycling the rest.',
      },
      {
        question: 'Do you have to pay to enter the forest?',
        answer:
          'No. Access to the Forêt domaniale de Meudon is free and open: the only cost is getting there.',
      },
    ],
    internalLinksTitle: 'Plan your visit',
  },
};
