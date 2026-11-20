import { forestPlaces } from './forest';
import { meudonPlaces } from './meudon';
import { regionalPlaces } from './region';

type Localized = Record<'fr' | 'en' | 'zh', string>;

export type NearbyPlace = {
  slug: string;
  name: string;
  town: string;
  category: 'forest' | 'heritage' | 'parks' | 'culture';
  manager?: string;
  map?: string;
  source: string;
  more?: string;
  image?: { url: string; credit: string; page: string };
  text: Record<'fr' | 'en' | 'zh', readonly [string, string, string, string, string, string, string]>;
};

export const nearbyPlaces: NearbyPlace[] = [...forestPlaces, ...meudonPlaces, ...regionalPlaces];

export function nearbyHref(place: NearbyPlace) {
  return { pathname: '/a-proximite/[place]' as const, params: { place: place.slug } };
}

export function mapQuery(place: NearbyPlace) {
  return encodeURIComponent(place.map ?? `${place.name}, ${place.town}, Île-de-France, France`);
}

export const categories: Record<NearbyPlace['category'], Localized> = {
  forest: { fr: 'En forêt', en: 'In the forest', zh: '森林景点' },
  heritage: { fr: 'Patrimoine', en: 'Historic landmarks', zh: '历史遗产' },
  parks: { fr: 'Parcs et jardins', en: 'Parks and gardens', zh: '公园与花园' },
  culture: { fr: 'Musées et lieux culturels', en: 'Museums and cultural venues', zh: '博物馆与文化场馆' },
};

export const nearbyLabels = {
  fr: { title: 'Que voir autour de la forêt de Meudon ?', intro: 'Choisissez un étang, un lieu historique, un musée ou un jardin à associer à votre sortie. Les accès aux sites se préparent séparément.', name: 'À proximité', home: 'Forêt de Meudon', manager: 'Gestion du site', unknown: 'Gestionnaire à vérifier', pending: 'Photo du lieu à venir', history: 'Histoire', landscape: 'Paysage et points d’intérêt', access: 'Venir à pied et en transports', visit: 'Préparer sa visite', photo: 'Photographier le lieu', faq: 'Question fréquente', maps: 'Plan du site', region: 'Carte du secteur', sources: 'Sources et informations pratiques', related: 'À voir aussi', forestMap: 'Carte de la forêt de Meudon' },
  en: { title: 'Places to visit near Meudon Forest', intro: 'Find ponds, historic landmarks, museums and gardens to pair with a forest outing. Check access for each stop separately.', name: 'Nearby places', home: 'Meudon Forest', manager: 'Site management', unknown: 'Site manager to be verified', pending: 'On-site photograph pending', history: 'History', landscape: 'Landscape and highlights', access: 'Walking and public transport', visit: 'Planning your visit', photo: 'Photography', faq: 'Frequently asked question', maps: 'Place map', region: 'Area map', sources: 'Sources and visitor information', related: 'Places to visit next', forestMap: 'Meudon Forest map' },
  zh: { title: '默东森林周边景点', intro: '在森林徒步之外，还可以探访池塘、历史遗迹、博物馆和花园。请分别确认各站的入口与开放安排。', name: '周边景点', home: '默东森林', manager: '场地管理', unknown: '管理方待核实', pending: '实景待补', history: '历史', landscape: '景观与看点', access: '步行与公共交通', visit: '游览安排', photo: '拍照建议', faq: '常见问题', maps: '景点地图', region: '地区地图', sources: '资料来源与访问信息', related: '附近还可游览', forestMap: '默东森林地图' },
};
