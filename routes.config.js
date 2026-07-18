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
    title: "Creador de Contenido IA e Influencer Tecnología",
    description:
      "Creador de Contenido IA sobre herramientas y formación práctica en IA para creadores y empresas. IA aplicada, sin humo.",
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
    faq: [
      {
        q: "¿Qué es un creador de contenido de inteligencia artificial?",
        a: "Es un creador que produce contenido educativo y práctico sobre herramientas y aplicaciones de IA, ayudando a su audiencia a entender y usar la tecnología.",
      },
      {
        q: "¿Quién está detrás de NeuralClab?",
        a: "NeuralClab es el proyecto de contenido tecnológico de Patrick Bravo, centrado en IA aplicada y formación práctica para creadores y empresas.",
      },
      {
        q: "¿En qué redes se puede seguir a NeuralClab?",
        a: "NeuralClab está en YouTube, TikTok e Instagram, con contenido de herramientas de IA, tutoriales y automatizaciones.",
      },
    ],
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
        q: "¿Qué incluye la formación en inteligencia artificial de NeuralClab?",
        a: "Sesiones personalizadas 1:1 centradas en el uso práctico de IA generativa (ChatGPT, Gemini, Claude) aplicada a tu trabajo o negocio, sin necesidad de conocimientos técnicos previos.",
      },
      {
        q: "¿Qué herramientas de IA para productividad se enseñan?",
        a: "Se trabajan herramientas de automatización y productividad según el caso de cada alumno: gestión de tareas, generación de contenido y flujos de trabajo con IA.",
      },
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
