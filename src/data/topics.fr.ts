import type { TopicContent } from './topics';

export const frTopics: Record<string, TopicContent> = {
  'randonnee-foret-meudon': {
    slug: 'randonnee-foret-meudon',
    title: 'Randonnée en Forêt de Meudon : itinéraires, distances et conseils',
    description:
      'Organisez votre randonnée dans la Forêt de Meudon (Hauts-de-Seine) : comment choisir la bonne distance, itinéraires au départ de Meudon, Chaville ou Viroflay, équipement et conseils de sécurité avant de partir.',
    intro: [
      'La Forêt domaniale de Meudon s’étend sur environ 1 100 hectares au sud-ouest de Paris, à cheval sur Meudon, Chaville, Clamart, Sèvres, Vélizy-Villacoublay et Viroflay. Gérée par l’Office national des forêts (ONF), elle se visite librement et gratuitement, ce qui en fait l’une des sorties nature les plus accessibles depuis la capitale.',
      'Aucun billet n’est nécessaire et il n’existe pas un « tour complet » unique : chacun compose sa boucle à partir du réseau de chemins forestiers. Pour une première visite, l’approche la plus simple consiste à choisir un point de départ desservi par le train ou le bus, puis à construire une boucle dont vous connaissez la distance et le temps estimé.',
      'Destination Hauts-de-Seine publie un circuit des trois étangs de 13 km depuis Meudon Val-Fleury. Consultez les avis de l’ONF et gardez une carte hors ligne.',
    ],
    facts: [
      { label: 'Superficie', value: 'Environ 1 100 hectares (données publiques)' },
      { label: 'Gestionnaire', value: 'Office national des forêts (ONF)' },
      { label: 'Accès', value: 'Libre et gratuit, sans billetterie' },
      { label: 'Repère géographique', value: 'Q6W5+8R Meudon, France' },
      { label: 'Départ pratique', value: 'Gare de Meudon (Transilien ligne N)' },
      { label: 'Terrain', value: 'Relief vallonné, chemins forestiers parfois boueux' },
    ],
    sections: [
      {
        id: 'choisir-sa-boucle',
        heading: 'Choisir la bonne distance',
        paragraphs: [
          'La randonnée en Forêt de Meudon se planifie surtout en termes de temps disponible plutôt qu’en itinéraire imposé. La forêt est bordée par plusieurs communes, ce qui permet de rejoindre facilement une lisière depuis une gare ou un arrêt de bus, puis de revenir sur ses pas ou de boucler par un autre chemin.',
        ],
        bullets: [
          'Sortie courte (1 h à 1 h 30) : depuis une lisière, marchez 20 à 30 minutes sur un chemin forestier, faites demi-tour et revenez par le même axe. Idéal avec des enfants ou quand le temps est incertain.',
          'Pour une sortie plus longue, suivez le circuit des trois étangs de 13 km depuis Meudon Val-Fleury, entre rues et chemins forestiers.',
          'Grande boucle (4 h et plus) : reliez plusieurs secteurs en suivant les chemins balisés, par exemple entre les lisières de Meudon, Chaville et Viroflay, en prévoyant eau et ravitaillement.',
          'Course à pied : les chemins larges et le relief modéré du massif attirent de nombreux coureurs ; partez tôt le week-end pour marcher au calme.',
        ],
      },
      {
        id: 'se-reperer',
        heading: 'Se repérer pendant la marche',
        paragraphs: [
          'Le massif alterne routes forestières larges, sentiers secondaires et zones de lisière proches des quartiers résidentiels. Les chemins principaux sont les plus simples à suivre ; les sentiers secondaires se ressemblent et peuvent se croiser. Une carte hors ligne téléchargée à l’avance évite les hésitations, en particulier dans les secteurs boisés où le réseau mobile est parfois faible.',
          'Les itinéraires mis en avant par l’ONF sont balisés et entretenus ; le balisage est la référence à suivre lorsqu’un chemin semble avoir changé de tracé après des travaux forestiers.',
        ],
      },
      {
        id: 'quand-partir',
        heading: 'Quand partir randonner',
        paragraphs: [
          'La forêt se visite toute l’année. Le printemps offre les floraisons et une lumière agréable ; l’automne est apprécié pour les couleurs du feuillage ; l’hiver, les chemins dégagés permettent de longues vues entre les arbres, mais certaines portions peuvent être boueuses.',
          'Par temps chaud, privilégiez le début de matinée : la fraîcheur du couvert forestier est appréciable, mais emportez de l’eau en quantité suffisante. En période humide, prévoyez des chaussures adaptées, car plusieurs chemins du massif retiennent l’eau.',
        ],
      },
      {
        id: 'equipement',
        heading: 'Équipement et précautions',
        paragraphs: [
          'Une sortie en forêt reste simple à préparer : de bonnes chaussures, une réserve d’eau, une couche de pluie et de quoi consulter un itinéraire suffisent pour la majorité des boucles.',
        ],
        bullets: [
          'Chaussures fermées avec une semelle adhérente : les chemins forestiers peuvent être glissants après la pluie.',
          'Eau et encas : les points de ravitaillement se trouvent dans les communes riveraines, rarement à l’intérieur du massif.',
          'Carte hors ligne ou application de randonnée : le réseau mobile n’est pas fiable partout sous couvert forestier.',
          'Téléphone chargé et horaires de fin de journée en tête : la forêt reste éclairée par la lumière du jour uniquement.',
          'Chien tenu en laisse : la faune est présente et la réglementation locale s’applique.',
        ],
      },
      {
        id: 'bien-partager',
        heading: 'Bien partager la forêt',
        paragraphs: [
          'Le massif est partagé entre marcheurs, coureurs, cyclistes et cavaliers. Tenez votre droite, annoncez votre présence avant de dépasser et réduisez l’allure aux croisements. Les zones humides et les secteurs de régénération sont sensibles : rester sur les chemins balisés limite l’érosion et protège les jeunes plantations.',
          'Les déchets se rapportent : la forêt ne dispose pas de poubelles sur l’ensemble de ses chemins. Le feu est à proscrire, comme dans toute forêt d’Île-de-France exposée au risque de sécheresse.',
        ],
      },
    ],
    faq: [
      {
        question: 'La randonnée en Forêt de Meudon est-elle gratuite ?',
        answer:
          'Oui. La Forêt domaniale de Meudon est un massif public géré par l’Office national des forêts : son accès est libre et gratuit, sans billet ni réservation.',
      },
      {
        question: 'Quelle randonnée faire pour une première visite ?',
        answer:
          'Pour une sortie courte, choisissez une lisière puis revenez sur vos pas. Pour marcher davantage, suivez la boucle départementale depuis Meudon Val-Fleury.',
      },
      {
        question: 'Combien de temps faut-il pour faire le tour des étangs ?',
        answer:
          'Sur un parcours vallonné de 13 km, prévoyez du temps pour les pentes et les haltes en ville. Pour raccourcir, choisissez un aller-retour depuis une entrée.',
      },
      {
        question: 'Peut-on randonner en Forêt de Meudon avec des enfants ?',
        answer:
          'Oui, en choisissant une boucle courte sur les chemins forestiers larges, faciles à suivre et peu escarpés. Prévoyez un retour avant la tombée du jour et évitez les sentiers étroits détrempés.',
      },
      {
        question: 'Peut-on y faire du vélo ou courir ?',
        answer:
          'Les chemins forestiers larges sont pratiqués par les cyclistes et les coureurs. Roulez ou courez à allure modérée, cédez le passage aux piétons et restez sur les itinéraires autorisés indiqués par le balisage.',
      },
      {
        question: 'Y a-t-il un dénivelé important ?',
        answer:
          'Le relief du massif est vallonné mais reste modéré : les dénivelés cumulés conviennent à des marcheurs occasionnels. Certaines portions montent de façon soutenue sur de courtes distances.',
      },
    ],
    internalLinksTitle: 'Aller plus loin',
  },

  'carte-foret-meudon': {
    slug: 'carte-foret-meudon',
    title: 'Carte et plan de la Forêt de Meudon : sentiers, entrées et repères',
    description:
      'Repérez la Forêt de Meudon sur la carte : Plus Code, principaux accès depuis Meudon, Chaville, Viroflay ou Vélizy, conseils pour lire les plans de sentiers et préparer un itinéraire fiable.',
    intro: [
      'Avant de partir, il est utile de savoir où commencent les chemins. Comme la forêt est bordée par plusieurs communes des Hauts-de-Seine, il existe de nombreux accès : les plus pratiques sont ceux reliés à une gare ou à un arrêt de bus.',
      'Les cartes disponibles en ligne ne décrivent pas toutes le massif de la même manière : certaines applications n’affichent que les routes forestières principales, d’autres incluent les sentiers secondaires. Les itinéraires publiés par l’ONF restent la référence pour les parcours balisés, et le Géoportail de l’IGN permet de superposer les chemins à un fond topographique fiable.',
    ],
    facts: [
      { label: 'Repère court (Plus Code)', value: 'Q6W5+8R Meudon, France' },
      { label: 'Lien Google Maps', value: 'Ouvert dans un nouvel onglet ci-dessous' },
      { label: 'Communes riveraines', value: 'Meudon, Chaville, Clamart, Sèvres, Vélizy-Villacoublay, Viroflay' },
      { label: 'Accès', value: 'Libre, gratuit et sans billetterie' },
      { label: 'Cartographie conseillée', value: 'Géoportail IGN, applications OpenStreetMap, cartes de l’ONF' },
      { label: 'Astuce terrain', value: 'Télécharger la carte hors ligne avant le départ' },
    ],
    sections: [
      {
        id: 'lire-la-carte',
        heading: 'Comprendre la carte du massif',
        paragraphs: [
          'Sur une carte, la Forêt de Meudon apparaît comme une grande tache boisée allongée entre les zones urbaines du sud-ouest parisien. Les traits continus correspondent aux routes forestières carrossables et aux larges chemins ; les pointillés signalent les sentiers secondaires, parfois temporaires.',
        ],
        bullets: [
          'Les chemins principaux : adaptés aux sorties en famille, aux poussettes tout-terrain et aux vélos, ils relient les lisières entre elles.',
          'Les sentiers secondaires : plus étroits, ils peuvent se croiser ou disparaître temporairement après des travaux forestiers.',
          'Les zones d’exploitation : certaines parcelles sont temporairement fermées pour coupe ou régénération ; le balisage sur place prévaut toujours sur la carte.',
          'Les points d’eau (étangs, rus) : repères utiles pour construire une boucle, notamment vers les étangs du massif.',
        ],
      },
      {
        id: 'points-dacces',
        heading: 'Choisir son point d’entrée',
        paragraphs: [
          'Plutôt que de viser « le centre » de la forêt, choisissez une lisière proche de votre mode de transport : cela réduit la portion urbaine de la sortie et laisse plus de temps pour la marche.',
        ],
        bullets: [
          'Meudon : pratique depuis la gare de Meudon, l’accès le plus utilisé pour une première visite.',
          'Chaville et Viroflay : bons points de départ pour les boucles vers les étangs et les secteurs boisés du nord du massif.',
          'Vélizy-Villacoublay : accès par la lisière sud, utile si vous venez en transports depuis la métropole du Grand Paris.',
          'Sèvres et Ville-d’Avray : accès à la partie nord, pratique pour combiner la sortie avec les étangs de la vallée.',
        ],
      },
      {
        id: 'applications',
        heading: 'Applications et cartes utiles',
        paragraphs: [
          'Une carte hors ligne reste la solution la plus fiable sur le terrain : le réseau mobile est irrégulier sous couvert forestier, et le GPS consomme beaucoup de batterie en mode randonnée.',
        ],
        bullets: [
          'Géoportail / cartes IGN : référence topographique nationale, avec les chemins et les courbes de niveau.',
          'Applications basées sur OpenStreetMap : utiles pour visualiser les sentiers secondaires et tracer une boucle personnalisée.',
          'Documents de l’ONF : à privilégier pour connaître les circuits officiellement balisés du massif.',
        ],
      },
      {
        id: 'construire-un-itineraire',
        heading: 'Construire un itinéraire fiable',
        paragraphs: [
          'Une boucle réussie tient à trois paramètres : le temps dont vous disposez, la distance que vous souhaitez parcourir et le point de retour vers les transports. Tracez d’abord un aller-retour simple, puis transformez-le en boucle en empruntant un chemin parallèle au retour.',
          'Prévoyez une marge : une carte peut vieillir, un chemin peut être barré par des travaux forestiers, et le jour tombe vite en automne et en hiver. Restez sur les itinéraires balisés : cela protège les zones sensibles et limite le risque de se perdre.',
        ],
      },
    ],
    faq: [
      {
        question: 'Où trouver une carte fiable de la Forêt de Meudon ?',
        answer:
          'Les circuits balisés publiés par l’ONF constituent la référence. Le Géoportail de l’IGN et les applications basées sur OpenStreetMap complètent utilement le repérage des chemins et des points d’accès.',
      },
      {
        question: 'Quelle est l’adresse ou le repère pour la Forêt de Meudon ?',
        answer:
          'Le repère court utilisé par Google Maps est Q6W5+8R Meudon, en France. Vous pouvez également ouvrir le lien Google Maps présent sur cette page puis « Itinéraire » depuis votre position.',
      },
      {
        question: 'Par où entrer dans la forêt pour une première fois ?',
        answer:
          'Les lisières accessibles depuis la gare de Meudon sont les plus simples : elles permettent de rejoindre un chemin forestier en quelques minutes de marche depuis le centre-ville.',
      },
      {
        question: 'La forêt est-elle entièrement ouverte au public ?',
        answer:
          'L’accès au massif est libre, mais certaines parcelles peuvent être temporairement fermées pour travaux forestiers ou régénération. Suivez la signalisation présente sur place.',
      },
      {
        question: 'Où trouver un circuit des étangs publié ?',
        answer:
          'Destination Hauts-de-Seine publie une boucle de 13 km depuis Meudon Val-Fleury. Consultez l’ONF pour les changements d’accès.',
      },
      {
        question: 'Le réseau mobile passe-t-il partout dans la forêt ?',
        answer:
          'La couverture est irrégulière selon les secteurs boisés. Il est conseillé d’enregistrer ou de télécharger votre carte hors ligne avant de partir.',
      },
    ],
    internalLinksTitle: 'Continuer la préparation',
  },

  'balade-etangs-meudon': {
    slug: 'balade-etangs-meudon',
    title: 'Balade des étangs de Meudon : itinéraire, saisons et observation',
    description:
      'Préparez la promenade des trois étangs, une boucle de 13 km depuis Val-Fleury entre forêt et patrimoine de Meudon.',
    intro: [
      'La balade vers les étangs est l’une des sorties les plus appréciées de la Forêt domaniale de Meudon : elle combine chemins forestiers, points d’eau et secteurs ouverts, sur une distance compatible avec une demi-journée.',
      'Le massif compte plusieurs étangs et zones humides, dont certains sont aménagés pour la promenade. Ces milieux sont fragiles : les oiseaux d’eau et les amphibiens y nichent ou s’y reproduisent, ce qui explique les consignes de quiétude affichées sur place.',
      'La boucle de 13 km part de Meudon Val-Fleury et dessert le parc Paumier, Chalais, l’étang de Meudon, Villebon et la terrasse de l’Observatoire.',
    ],
    facts: [
      { label: 'Distance de référence', value: '13 km sur le parcours publié depuis Meudon Val-Fleury' },
      { label: 'Durée estimée', value: 'Selon l’allure, les pentes et les haltes' },
      { label: 'Terrain', value: 'Chemins forestiers, passages près de zones humides' },
      { label: 'Idéal pour', value: 'Sortie nature en famille, observation des oiseaux, photographie' },
      { label: 'Accès', value: 'Libre et gratuit, sans billetterie' },
      { label: 'Périodes calmes', value: 'Matinées en semaine, hors week-ends d’automne' },
    ],
    sections: [
      {
        id: 'itineraire-type',
        heading: 'Le principe de la boucle des étangs',
        paragraphs: [
          'L’itinéraire consiste à relier plusieurs points d’eau du massif en restant sur les chemins forestiers balisés, puis à revenir vers sa lisière de départ par un autre chemin. Il n’impose pas de sens unique : vous pouvez l’adapter à votre point d’arrivée.',
          'Pour raccourcir la sortie, choisissez un seul étang et préparez un aller-retour. Vérifiez le passage depuis la lisière.',
        ],
      },
      {
        id: 'que-voir',
        heading: 'Ce que l’on observe en chemin',
        paragraphs: [
          'Les zones humides structurantes du massif attirent une avifaune variée au fil des saisons. Les lisières et les clairières sont également riches en insectes et en petits mammifères, surtout tôt le matin.',
        ],
        bullets: [
          'Oiseaux d’eau et canards sur les plans d’eau, selon la saison.',
          'Amphibiens au printemps, dans les zones humides et les mares forestières.',
          'Libellules et demoiselles en été, au bord des berges.',
          'Châtaigniers, hêtres et chênes caractérisent le couvert forestier.',
        ],
      },
      {
        id: 'saisons',
        heading: 'Quelle saison privilégier',
        paragraphs: [
          'Le printemps est la période la plus animée pour observer la faune et les floraisons. L’été offre de l’ombre mais une fréquentation plus forte ; partez tôt. En automne, les couleurs du feuillage autour des étangs sont un classique de la photographie de nature en Île-de-France. En hiver, la lumière rasante et la quiétude des lieux valent le détour, à condition de prévoir des chaussures adaptées aux chemins humides.',
        ],
      },
      {
        id: 'respect-des-lieux',
        heading: 'Respecter les zones humides',
        paragraphs: [
          'Les berges sont sensibles au piétinement. Restez sur les chemins, ne descendez pas vers l’eau et gardez votre chien en laisse : la tranquillité des lieux conditionne la présence des oiseaux.',
        ],
        bullets: [
          'Ne nourrissez pas les animaux, y compris les oiseaux d’eau.',
          'Ne cueillez ni plantes ni champignons sans connaissance : la réglementation locale s’applique.',
          'Emportez vos déchets : aucune poubelle n’est présente sur l’ensemble du parcours.',
          'Évitez les heures de forte affluence le week-end pour limiter le dérangement de la faune.',
        ],
      },
    ],
    faq: [
      {
        question: 'Quelle est la distance de la balade des étangs ?',
        answer:
          'La boucle départementale fait 13 km depuis Meudon Val-Fleury. Pour une sortie courte, visez un étang ou revenez par le chemin prévu.',
      },
      {
        question: 'La balade des étangs est-elle balisée ?',
        answer:
          'Les itinéraires de découverte du massif aménagés par l’ONF sont balisés. Vérifiez le tracé sur les documents officiels ou sur une carte hors ligne avant le départ, car des travaux peuvent modifier temporairement un passage.',
      },
      {
        question: 'Peut-on faire cette balade avec des enfants ?',
        answer:
          'Oui, à condition de choisir les chemins larges et de prévoir des pauses. Une version raccourcie de la boucle convient mieux aux jeunes marcheurs.',
      },
      {
        question: 'Quelle est la meilleure saison pour observer les oiseaux ?',
        answer:
          'Le printemps et le passage de l’automne offrent le plus d’activité, mais tous les mois de l’année permettent des observations. Les premières heures du matin sont les plus favorables.',
      },
      {
        question: 'Peut-on pique-niquer au bord des étangs ?',
        answer:
          'Renseignez-vous sur la signalisation locale : certaines berges sont protégées. En tout état de cause, utilisez les aires aménagées et rapportez l’intégralité de vos déchets.',
      },
      {
        question: 'Combien d’étangs compte la forêt ?',
        answer:
          'Le massif comporte plusieurs étangs et zones humides. Le nombre précis variant selon les sources et les aménagements, fiez-vous à la cartographie officielle la plus récente pour les localiser.',
      },
    ],
    internalLinksTitle: 'Compléter sa sortie',
  },

  'acces-foret-meudon': {
    slug: 'acces-foret-meudon',
    title: 'Accès à la Forêt de Meudon : train, bus, voiture et vélo',
    description:
      'Comment rejoindre la Forêt domaniale de Meudon depuis Paris : train depuis Montparnasse, bus des communes riveraines, stationnement, accès à vélo et informations pratiques avant le départ.',
    intro: [
      'La Forêt de Meudon se trouve à une quinzaine de kilomètres au sud-ouest de Paris, dans les Hauts-de-Seine. Elle est bordée par plusieurs communes, ce qui permet d’arriver par le train, par le bus, à vélo ou en voiture, sans dépendre d’une entrée unique.',
      'Le principal avantage du massif est son accessibilité en transports : depuis Paris, plusieurs gares du réseau Transilien permettent de rejoindre une lisière en une vingtaine de minutes, puis à pied jusqu’aux premiers chemins forestiers.',
    ],
    facts: [
      { label: 'Depuis Paris', value: 'Transilien ligne N (Paris Montparnasse) jusqu’à la gare de Meudon' },
      { label: 'Autres accès ferroviaires', value: 'Gares des communes riveraines selon votre secteur de départ' },
      { label: 'Bus', value: 'Lignes des communes de Meudon, Chaville, Clamart, Sèvres, Vélizy et Viroflay' },
      { label: 'À pied depuis la gare', value: 'Comptez 10 à 20 minutes selon l’entrée choisie' },
      { label: 'En voiture', value: 'Parkings en lisière, plutôt en semaine ou tôt le week-end' },
      { label: 'Référence horaires', value: 'Île-de-France Mobilités pour les trajets du jour' },
    ],
    sections: [
      {
        id: 'en-train',
        heading: 'En train depuis Paris',
        paragraphs: [
          'La ligne N du Transilien relie Paris Montparnasse aux communes du sud-ouest francilien ; la gare de Meudon est l’un des points d’arrivée les plus utilisés pour rejoindre la forêt. Depuis la gare, comptez une dizaine à une vingtaine de minutes de marche selon la lisière visée.',
        ],
        bullets: [
          'Vérifiez les horaires du jour sur l’application ou le site d’Île-de-France Mobilités avant de partir.',
          'Les trains de banlieue circulent à cadence plus espacée le week-end et en soirée : anticipez votre retour.',
          'Privilégiez une arrivée le matin pour profiter de la fraîcheur et de chemins moins fréquentés.',
        ],
      },
      {
        id: 'en-bus',
        heading: 'En bus',
        paragraphs: [
          'Plusieurs lignes de bus desservent les communes qui bordent le massif : Meudon, Chaville, Clamart, Sèvres, Vélizy-Villacoublay et Viroflay. Elles permettent de se rapprocher d’une lisière puis de terminer à pied.',
          'Les numéros de lignes et les arrêts évoluent régulièrement : utilisez un calculateur d’itinéraire le jour de la sortie pour connaître l’arrêt le plus proche de l’entrée que vous visez.',
        ],
      },
      {
        id: 'en-voiture',
        heading: 'En voiture et stationnement',
        paragraphs: [
          'Venir en voiture est possible, mais les stationnements situés en lisière sont limités et vite saturés les week-ends de beau temps. Arriver tôt ou viser un secteur moins fréquenté du massif reste la meilleure stratégie.',
        ],
        bullets: [
          'Garez-vous uniquement sur les emplacements prévus, sans bloquer les chemins forestiers ou les accès riverains.',
          'Ne laissez aucun objet visible dans l’habitacle.',
          'Vérifiez que le stationnement autorise la durée de votre sortie, variable selon les communes.',
        ],
      },
      {
        id: 'a-velo',
        heading: 'À vélo',
        paragraphs: [
          'Les communes riveraines sont reliées entre elles par des axes cyclables, ce qui permet de rejoindre une lisière à vélo depuis Meudon, Chaville ou Vélizy. Dans le massif, certains chemins forestiers larges se prêtent à la pratique du VTT : respectez les portions réservées aux piétons et roulez à allure modérée.',
          'Un antivol solide est recommandé si vous laissez le vélo en lisière pendant la balade.',
        ],
      },
      {
        id: 'depuis-les-aeroports',
        heading: 'Depuis les aéroports parisiens',
        paragraphs: [
          'Depuis Orly comme depuis Roissy-Charles-de-Gaulle, le plus simple consiste à rejoindre le réseau francilien (RER puis correspondance vers le sud-ouest), ou à utiliser un calculateur d’itinéraire pour obtenir le trajet le plus court le jour de votre visite. Le temps de trajet dépasse généralement une heure.',
        ],
      },
    ],
    faq: [
      {
        question: 'Quel train prendre depuis Paris pour aller à la Forêt de Meudon ?',
        answer:
          'Le Transilien ligne N depuis Paris Montparnasse dessert la gare de Meudon, point de départ pratique vers les premières lisières. Vérifiez les horaires du jour sur le site ou l’application d’Île-de-France Mobilités.',
      },
      {
        question: 'Combien de temps de marche depuis la gare de Meudon ?',
        answer:
          'Comptez généralement 10 à 20 minutes pour atteindre une entrée du massif, selon la lisière choisie et le dénivelé sur le trajet urbain.',
      },
      {
        question: 'Y a-t-il des bus pour la Forêt de Meudon ?',
        answer:
          'Oui, plusieurs lignes desservent les communes qui bordent la forêt. Les numéros et arrêts évoluant, mieux vaut vérifier l’itinéraire du jour avant le départ.',
      },
      {
        question: 'Peut-on se garer facilement ?',
        answer:
          'Les stationnements de lisière sont limités et très demandés les week-ends ensoleillés. Arriver tôt ou privilégier les transports en commun reste la solution la plus simple.',
      },
      {
        question: 'Peut-on venir à vélo depuis Paris ?',
        answer:
          'Le trajet est envisageable via les axes cyclables du sud-ouest francilien, mais il demande une bonne habitude du trafic urbain. Une option courante consiste à prendre le train jusqu’à une commune riveraine, puis à terminer à vélo.',
      },
      {
        question: 'L’accès à la forêt est-il payant ?',
        answer:
          'Non. L’accès à la Forêt domaniale de Meudon est libre et gratuit : seul le transport pour s’y rendre est à prévoir.',
      },
    ],
    internalLinksTitle: 'Préparer sa visite',
  },
};
