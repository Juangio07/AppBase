"use strict";
/* Fuente única de identidad institucional para Fixelar Web. */
window.FIXELAR_APP = Object.freeze({
  name: "Fixelar",
  description: "La familia de aplicaciones que convierte la complejidad de cada negocio en claridad para avanzar.",
  logoFull: "../../../Assets/Logos/ImagotipoClaro.png",
  logoCompact: "../../../Assets/Logos/Logo.png",
  theme: {
    primary: "#02ab4c",
    primaryHover: "#02ab4c",
    primaryLight: "#62ec1e",
    primarySoft: "#f2f1f1",
    onPrimary: "#FFFFFF",
    backgroundStart: "#071426",
    backgroundMiddle: "#0B1E3F",
    backgroundEnd: "#071426",
    sidebarStart: "#071426",
    sidebarEnd: "#0B1E3F",
    title: "#FFFFFF",
    accentText: "#62ec1e", /*primaryLight*/
    accentLight: "#96e66d",
    mutedText: "#AFC4DE"
  },
  typography: "Inter",
  hero: {
    eyebrow: "SOFTWARE PARA NEGOCIOS QUE AVANZAN",
    title: "La claridad que tu negocio necesita para avanzar.",
    message: "Fixelar crea aplicaciones especializadas para entender, ordenar y hacer crecer cada tipo de negocio.",
    primaryAction: "Conoce nuestras soluciones",
    secondaryAction: "Explora las aplicaciones"
  },
  navigation: ["Inicio", "Soluciones", "Aplicaciones", "Cómo funciona", "Membresías", "Nosotros", "Contacto"],
  applications: [
    { name: "Kentro", category: "Control empresarial", description: "Una base clara para la operación y las decisiones de tu empresa.", icon: "fa-building", accent: "#62ec1e" },
    { name: "Food", category: "Negocios de comida", description: "Una solución pensada para el ritmo de restaurantes y negocios de comida.", icon: "fa-utensils", accent: "#ffb547" },
    { name: "Vet", category: "Gestión veterinaria", description: "Tecnología cercana para acompañar el cuidado y la gestión veterinaria.", icon: "fa-paw", accent: "#70c9ff" },
    { name: "Barber", category: "Barberías", description: "Organiza la experiencia de tu barbería desde una visión simple.", icon: "fa-scissors", accent: "#d39bff" },
    { name: "Agro", category: "Gestión agrícola", description: "Claridad para operaciones agrícolas que crecen con propósito.", icon: "fa-wheat-awn", accent: "#9bd36a" }
  ]
});
