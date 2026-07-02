/**
 * Datos de servicios de Spa Salud y Vida.
 * Archivo único y simplificado (fusiona lo antes repartido en spaData.ts y servicesData.js).
 * Nota: los iconos se omiten por ahora, se reemplazarán por otros más adelante.
 */

export type Categoria = "facial" | "corporal" | "salud";
export type NivelInvasion = "Bajo" | "Medio" | "Alto";

export interface Service {
  slug: string;
  nombre: string;
  categoria: Categoria;
  descripcion_long?: string | null;
  descripcion_short: string;
  beneficios?: string[];
  contraindicaciones?: string | null;
  cuidados?: string | null;
  duracion?: string | null;
  precio_por_sesion: number;
  precio_tratamiento_completo?: string | number | null;
  edad_minima: number;
  edad_maxima: number;
  requiereConsulta: boolean;
  nivel_invasion: NivelInvasion;
  imagenes: {
    cover: string; // ruta relativa dentro de src/assets/img
    galeria?: string[]; // rutas relativas dentro de src/assets/img/<carpeta>
  };
}

export const services: Service[] = [
  // -------------------------------------------------------------------------
  // FACIALES
  // -------------------------------------------------------------------------
  {
    slug: "hifu",
    nombre: "HIFU 7D",
    categoria: "facial",
    descripcion_long:
      'Es un tratamiento que consigue los resultados de un "lifting facial" sin ningún tipo de cirugía. Consiste en la aplicación de un ultrasonido de alta frecuencia, localizando el calor que la maquina realiza y permite tocar la primera capa de la piel, produciendo una regeneración y estimulación de colágeno para un efecto tensor de la piel. Una técnica no invasiva, que trae múltiples ventajas.',
    descripcion_short:
      "Tratamiento no quirúrgico de ultrasonido para un efecto lifting en el rostro que estimula la producción de colágeno.",
    beneficios: ["Eleva", "Redefine", "Mejora flacidez y líneas de expresión", "Hidrata y produce colágeno"],
    contraindicaciones:
      "No tiene contraindicaciones significativas, pero puede causar enrojecimiento e inflamación leve que desaparece en dos días.",
    cuidados: "Evitar sol directo, piscina, jacuzzi y licor durante el tratamiento.",
    duracion: "1 hora y media",
    precio_por_sesion: 1000000,
    precio_tratamiento_completo: "2.000.000 a 2.500.000",
    edad_minima: 15,
    edad_maxima: 65,
    requiereConsulta: true,
    nivel_invasion: "Bajo",
    imagenes: {
      cover: "Hifu.jpg",
      galeria: ["hifu/hifu1.webp", "hifu/hifu2.webp", "hifu/hifu3.webp", "hifu/hifu4.webp"],
    },
  },
  {
    slug: "plasma",
    nombre: "Plasma",
    categoria: "facial",
    descripcion_long:
      "La técnica consiste en la extracción de plasma del propio paciente, que se inyecta en la zona deseada para lograr la regeneración celular de los tejidos y combatir los signos del envejecimiento. Un componente nutritivo que llevamos en la sangre.",
    descripcion_short:
      "Tratamiento con plasma del propio paciente para regenerar tejidos y combatir el envejecimiento.",
    beneficios: ["Estimula colágeno", "Mejora la luminosidad y tersura de la piel"],
    contraindicaciones: null,
    cuidados: "Evitar exposición solar directa, piscina y licor durante el tratamiento.",
    duracion: "30 a 40 minutos",
    precio_por_sesion: 200000,
    precio_tratamiento_completo: "2 a 4 sesiones recomendadas",
    edad_minima: 15,
    edad_maxima: 65,
    requiereConsulta: true,
    nivel_invasion: "Medio",
    imagenes: { cover: "Plasma.jpg" },
  },
  {
    slug: "dermapen",
    nombre: "Dermapen",
    categoria: "facial",
    descripcion_long:
      "Es una técnica totalmente aprobada con registro de INVIMA médico, que funciona mediante micropunciones en la piel, las que favorecen la entrada de los principios activos, los que según el tipo de piel, la especialista podrá incluir vitaminas, silicio, ácido hialurónico, etc. obligando a la misma a producir el colágeno para actuar en esas punciones.",
    descripcion_short:
      "Técnica aprobada por INVIMA que utiliza micropunciones para introducir principios activos y estimular la producción de colágeno.",
    beneficios: ["Reduce manchas", "Cicatrices", "Líneas de expresión", "Arrugas"],
    contraindicaciones: null,
    cuidados: null,
    duracion: null,
    precio_por_sesion: 300000,
    precio_tratamiento_completo: null,
    edad_minima: 15,
    edad_maxima: 65,
    requiereConsulta: true,
    nivel_invasion: "Medio",
    imagenes: { cover: "Dermapen.jpg" },
  },

  // -------------------------------------------------------------------------
  // CORPORALES
  // -------------------------------------------------------------------------
  {
    slug: "criolipolisis",
    nombre: "Criolipolisis",
    categoria: "corporal",
    descripcion_long:
      "Es un tratamiento NO quirúrgico, que se realiza por medio de una aparatologia medica avanzada de nuestro spa, donde se trata por medio de enfriamiento controlado que realiza la máquina en la zona a tratar, previamente con una aplicación de una membrana anticongelante para un mejor resultado y con sus cuidados profesionales y posterior a ello se complementa con masajes corporales sobre la zona.",
    descripcion_short:
      "Tratamiento NO quirúrgico que se realiza mediante aparatología médica avanzada, usando enfriamiento controlado para eliminar grasa localizada.",
    beneficios: ["Elimina grasa localizada", "Mejora la flacidez", "Aporta colágeno", "Elimina celulitis y estrías"],
    contraindicaciones:
      "No tiene contraindicaciones significativas, posibles efectos leves como morados e inflamación que desaparecen en dos semanas.",
    cuidados: "Protegerse del sol y mantener una buena alimentación.",
    duracion: "1 hora",
    precio_por_sesion: 450000,
    precio_tratamiento_completo: "2.000.000 a 2.500.000",
    edad_minima: 15,
    edad_maxima: 65,
    requiereConsulta: true,
    nivel_invasion: "Bajo",
    imagenes: {
      cover: "Criolipolisis.jpg",
      galeria: ["criolipolisis/criolipolisis_bg.webp", "criolipolisis/criolipolisis_bg2.webp"],
    },
  },
  {
    slug: "max-muscle",
    nombre: "Max Muscle",
    categoria: "corporal",
    descripcion_long:
      "Es un tratamiento NO quirúrgico, que se realiza por medio de una aparatología medica avanzada de nuestro spa, donde se trata por medio de unas pulsaciones que realiza la maquina simulando abdominales que vuelve la grasa en músculo. Este tratamiento es un complemento para tus rutinas de ejercicio, si eres una persona activa físicamente, de lo contrario si tu interés va mas en eliminar grasa localizada y reducción de medidas se complementa con otro e nuestros servicios enfocados en ello.",
    descripcion_short:
      "Tratamiento no quirúrgico que simula abdominales y convierte grasa en músculo. Ideal como complemento para personas activas físicamente.",
    beneficios: ["Fortalece la piel", "Tonifica el cuerpo", "Disminuye grasa localizada", "Reduce flacidez"],
    contraindicaciones: "No recomendado si se tiene una hernia.",
    cuidados: "No requiere cuidados externos.",
    duracion: "30 minutos",
    precio_por_sesion: 200000,
    precio_tratamiento_completo: "1.000.000 a 2.000.000",
    edad_minima: 15,
    edad_maxima: 65,
    requiereConsulta: true,
    nivel_invasion: "Bajo",
    imagenes: { cover: "Max Muscle.jpg" },
  },
  {
    slug: "biosueros",
    nombre: "Biosueros",
    categoria: "corporal",
    descripcion_long:
      "Es un bioestiestimulante natural que se inyecta en el área a trabajar para que en complemento con las vitaminas y la aparatología medica lograr aumentar la masa muscular, reafirmar la piel y reducir la flacidez de la zona, logrando así un resultado natural, notorio y lindo en los glúteos.",
    descripcion_short:
      "Bioestimulante natural inyectado en la zona a tratar para aumentar masa muscular y reafirmar la piel, reduciendo la flacidez.",
    precio_por_sesion: 250000,
    precio_tratamiento_completo: "1.500.000",
    edad_minima: 15,
    edad_maxima: 65,
    requiereConsulta: true,
    nivel_invasion: "Medio",
    imagenes: { cover: "Biosueros.jpg" },
  },
  {
    slug: "tensamax",
    nombre: "Tensamax",
    categoria: "corporal",
    descripcion_long:
      "Es una tecnología avanzada de regeneración celular que se utiliza para la estimulación profunda de colágeno, se basa en la radiofrecuencia monopolar, un método que por medio de dos tipos de energía combinadas que realiza esta maquina consigue emitir un calor controlado sobre la piel proporcionando un efecto tensor de manera uniforme.",
    descripcion_short:
      "Tratamiento con radiofrecuencia monopolar que estimula profundamente el colágeno y regenera las células.",
    beneficios: ["Trata flacidez", "Fibrosis", "Celulitis", "Estimulación de colágeno", "Tensado y reafirmación de la piel"],
    cuidados: "Se recomienda usar una faja y aplicar crema hidratante para mejores resultados.",
    duracion: "20 minutos",
    precio_por_sesion: 120000,
    precio_tratamiento_completo: 600000,
    edad_minima: 15,
    edad_maxima: 65,
    requiereConsulta: true,
    nivel_invasion: "Bajo",
    imagenes: { cover: "Tensamax.jpg" },
  },

  // -------------------------------------------------------------------------
  // CUIDA TU SALUD
  // -------------------------------------------------------------------------
  {
    slug: "colonterapia",
    nombre: "Colonterapia",
    categoria: "salud",
    descripcion_short:
      "Proceso mecánico de limpieza del intestino grueso utilizando un equipo avanzado y ozónico.",
    precio_por_sesion: 200000,
    edad_minima: 15,
    edad_maxima: 65,
    requiereConsulta: true,
    nivel_invasion: "Medio",
    imagenes: {
      cover: "Colonterapia.jpg",
      galeria: ["colonterapia/colon1.webp", "colonterapia/colon2.webp", "colonterapia/colon3.webp"],
    },
  },
  {
    slug: "drenajes",
    nombre: "Drenajes",
    categoria: "salud",
    descripcion_long:
      "Es un tratamiento que se usa para poder extraer los fluidos, como la sangre, de la parte del cuerpo del paciente que ha sido intervenida. ¿Para qué sirve? Principalmente para evitar la presión que pueda ejercer la acumulación de estos líquidos sobre la zona operada.",
    descripcion_short: "Tratamiento para extraer líquidos postquirúrgicos y reducir la acumulación en zonas operadas.",
    precio_por_sesion: 60000,
    edad_minima: 15,
    edad_maxima: 65,
    requiereConsulta: false,
    nivel_invasion: "Bajo",
    imagenes: { cover: "Drenajes.jpg", galeria: ["drenajes/drenaje1.webp", "drenajes/drenaje2.webp"] },
  },
];

export const facialServices = services.filter((s) => s.categoria === "facial");
export const bodyServices = services.filter((s) => s.categoria === "corporal");
export const healthServices = services.filter((s) => s.categoria === "salud");

// ---------------------------------------------------------------------------
// INFORMACIÓN DEL NEGOCIO
// ---------------------------------------------------------------------------

export const businessInfo = {
  nombre: "Spa Salud y Vida",
  whatsapp: "https://wa.me/573226030044",
  horarios: {
    lunesAViernes: ["8:00 AM - 12:00 PM", "3:00 PM - 7:00 PM"],
    sabado: "8:00 AM - 12:00 PM",
    domingo: "Cerrado",
  },
  procesoReserva: [
    { step: 1, title: "Busca el servicio que deseas" },
    { step: 2, title: "Envíanos un mensaje por WhatsApp" },
    { step: 3, title: "Una asesora te guiará paso a paso" },
  ],
  serviciosHolisticosDestacados: [
    { title: "Masajes Terapéuticos", description: "Técnicas ancestrales para equilibrar cuerpo y mente" },
    { title: "Terapias Energéticas", description: "Restaura tu campo energético y vitalidad" },
    { title: "Medicina Natural", description: "Tratamientos naturales personalizados" },
  ],
  heroTaglines: [
    "Moldea tu figura con tecnología de última generación.",
    "Resultados visibles y duraderos sin cirugía.",
    "La excelencia en tratamientos corporales no invasivos.",
  ],
};

// ---------------------------------------------------------------------------
// HELPERS
// ---------------------------------------------------------------------------

export const categoryMeta: Record<Categoria, { label: string; eyebrow: string; blurb: string }> = {
  facial: {
    label: "Rostro",
    eyebrow: "Estética facial",
    blurb: "Rejuvenecimiento y luminosidad con tecnología no invasiva.",
  },
  corporal: {
    label: "Cuerpo",
    eyebrow: "Estética corporal",
    blurb: "Esculpe, tonifica y reafirma tu figura sin cirugía.",
  },
  salud: {
    label: "Salud",
    eyebrow: "Bienestar interno",
    blurb: "Desintoxicación y equilibrio para tu bienestar integral.",
  },
};

/** Precio en pesos colombianos, sin decimales. Ej: 200000 → "$200.000" */
export function formatCOP(value: number): string {
  return "$" + value.toLocaleString("es-CO");
}

/** Precio "desde" para tarjetas. */
export function priceFrom(s: Service): string {
  return formatCOP(s.precio_por_sesion);
}

/** Busca un servicio por slug. */
export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

/** Paleta de acento por servicio para los placeholders de arte. [from, to] */
export const serviceAccent: Record<string, [string, string]> = {
  hifu: ["#7d5bc4", "#cfa64d"],
  plasma: ["#b0862f", "#5c3aa6"],
  dermapen: ["#452a80", "#dcbb6e"],
  criolipolisis: ["#5c3aa6", "#a2a7bd"],
  "max-muscle": ["#311a5c", "#cfa64d"],
  biosueros: ["#8a6520", "#452a80"],
  tensamax: ["#7d5bc4", "#b0862f"],
  colonterapia: ["#452a80", "#7f849c"],
  drenajes: ["#311a5c", "#dcbb6e"],
};
