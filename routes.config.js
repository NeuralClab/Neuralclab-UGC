/**
 * routes.config.js — NeuralClab
 * -----------------------------------------------------------------------
 * Reparto de keywords acordado tras revisar el keyword research de AdWords:
 *
 * - Home: cluster de identidad (creador de contenido IA / influencer
 *   tecnología / influencer inteligencia artificial). Volumen modesto
 *   (10-100/mes cada una) pero competencia baja en Ads — hueco pequeño,
 *   fácil de ocupar, coherente con quién eres en ese canal.
 *
 * - "Formación IA": SOLO keywords de intención "quiero aprender con
 *   alguien / sesiones prácticas". Se descartan:
 *     · "consultor de inteligencia artificial" → intención de contratar
 *       consultoría empresarial, no de formarse — landing distinta o
 *       directamente fuera si no ofreces ese servicio.
 *     · "FP inteligencia artificial" y variantes (fp big data, fp
 *       superior...) → buscan un ciclo formativo OFICIAL y homologado
 *       (2 años, título regulado). Pujas muy altas (hasta 8€) porque son
 *       muy comerciales, pero quien busca esto no quiere tu formación
 *       1:1 — el rebote sería alto. Fuera de esta landing.
 * -----------------------------------------------------------------------
 */

const SITE = {
  name: "NeuralClab",
  personName: "Patrick Bravo", // el Person siempre es Patrick, aunque la marca sea NeuralClab
  baseUrl: "https://neuralclab-ugc.vercel.app", // ⚠️ confírmame la URL real del repo Neuralclab-UGC
  defaultImage: "https://neuralclab-ugc.vercel.app/img/og-default.jpg",
  twitterHandle: "@neuralclab",
  logo: "https://neuralclab-ugc.vercel.app/img/logo.png",
  sameAs: [
    "https://www.youtube.com/channel/UC_EQH_U6yBtna6zt81mbBCQ",
    "https://www.tiktok.com/@neuralclab",
    "https://www.instagram.com/neuralclab",
  ],
  stats: [
    { platform: "YouTube", followers: 7485 },
    { platform: "TikTok", followers: 1278 },
    { platform: "Instagram", followers: 877 },
  ],
};

const ROUTES = [
  {
    path: "/",
    title: "NeuralClab — Creador de Contenido IA e Influencer Tecnología",
    description:
      "Contenido, herramientas y formación práctica de Inteligencia Artificial para creadores y empresas. IA aplicada, sin humo.",
    changefreq: "weekly",
    priority: 1.0,
    lastmod: "2026-07-17",
    type: "Person",
    jobTitle: "Creador de contenido IA / Divulgador de tecnología",
    image: "https://neuralclab-ugc.vercel.app/img/og-home.jpg",
    // keywords: creador de contenido ia (10-100) · influencer de
    // tecnologia (10-100) · influencer tecnologia (10-100) · influencer
    // inteligencia artificial (10-100) · inteligencia artificial
    // influencer (10-100) · youtuber tecnologia (10-100)
  },
  {
    path: "/formacion-ia",
    title: "Formación en Inteligencia Artificial 1:1 | NeuralClab",
    description:
      "Sesiones personalizadas de formación en IA y herramientas de productividad: ChatGPT, Gemini, Claude y automatizaciones aplicadas a tu día a día.",
    changefreq: "monthly",
    priority: 0.9,
    lastmod: "2026-07-17",
    type: "ServicePage",
    serviceType: "Formación en Inteligencia Artificial 1:1",
    areaServed: "ES",
    image: "https://neuralclab-ugc.vercel.app/img/og-formacion.jpg",
    faq: [
      {
        q: "¿Necesito conocimientos técnicos para la formación en IA?",
        a: "No. Las sesiones parten de cero y avanzan a tu ritmo, con casos prácticos aplicados a tu negocio o trabajo diario.",
      },
      {
        q: "¿Qué diferencia hay entre esta formación y un ciclo de FP en IA?",
        a: "Esta es formación práctica 1:1 orientada a resultados inmediatos con herramientas concretas, no un título oficial homologado.",
      },
    ],
    // keywords: formacion en inteligencia artificial (100-1mil, alta
    // puja 2,19-6,50€) · formación en datos e inteligencia artificial
    // (10-100) · herramientas de ia para productividad (10-100)
  },
  // 👉 Pendiente de decidir: ¿landing propia para "consultor de
  // inteligencia artificial" si en algún momento ofreces consultoría
  // B2B además de formación 1:1? Por ahora queda fuera.
];

module.exports = { SITE, ROUTES };
