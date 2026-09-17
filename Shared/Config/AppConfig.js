"use strict";
/* Único archivo que debe personalizarse al duplicar AppBase. */
window.FIXELAR_APP = Object.freeze({
  name: "AppBase",
  description: "Plantilla oficial de aplicaciones Fixelar",
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
  login: {
    category: "GESTIÓN EMPRESARIAL",
    title: "Bienvenido",
    message: "Gestiona tu negocio con claridad y control.",
    slogan: "Una forma más clara de mover tu negocio hacia adelante.",
    sloganAccent: "hacia adelante.",
    functionality: "Ventas, inventario, caja y decisiones importantes en un solo lugar."
  }
});
