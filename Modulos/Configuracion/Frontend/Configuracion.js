"use strict";
const STORAGE_KEY="AppBase_configuracion_empresa_v1";
const formulario=document.getElementById("formularioEmpresa"), campos=["nit","nombre","propietario","telefono","correo","ubicacion"];
const logoInput=document.getElementById("logoEmpresa"), imagen=document.getElementById("imagenEmpresa"), inicial=document.getElementById("inicialEmpresa"), quitarLogo=document.getElementById("quitarLogo"), mensaje=document.getElementById("mensajeConfiguracion"), toast=document.getElementById("toastConfiguracion");
let logoData="", toastTimer;
function cargar(){try{const datos=JSON.parse(localStorage.getItem(STORAGE_KEY)||"{}");campos.forEach(campo=>{document.getElementById(campo).value=datos[campo]||""});logoData=datos.logo||"";actualizarLogo();}catch{actualizarLogo();}}
function actualizarLogo(){const nombre=document.getElementById("nombre").value.trim();inicial.textContent=nombre.charAt(0).toUpperCase()||"N";inicial.hidden=Boolean(logoData);imagen.hidden=!logoData;if(logoData)imagen.src=logoData;quitarLogo.hidden=!logoData;}
function mostrarToast(texto){clearTimeout(toastTimer);toast.textContent=texto;toast.classList.add("show");toastTimer=setTimeout(()=>toast.classList.remove("show"),2400)}
document.getElementById("seleccionarLogo").addEventListener("click",()=>logoInput.click());
logoInput.addEventListener("change",()=>{const archivo=logoInput.files[0];if(!archivo)return;const lector=new FileReader();lector.onload=()=>{logoData=lector.result;actualizarLogo()};lector.readAsDataURL(archivo)});
quitarLogo.addEventListener("click",()=>{logoData="";logoInput.value="";actualizarLogo()});document.getElementById("nombre").addEventListener("input",actualizarLogo);
formulario.addEventListener("submit",evento=>{evento.preventDefault();mensaje.textContent="";formulario.querySelectorAll(".invalid").forEach(elemento=>elemento.classList.remove("invalid"));if(!formulario.reportValidity()){const invalido=formulario.querySelector(":invalid");if(invalido)invalido.classList.add("invalid");return}const datos=Object.fromEntries(campos.map(campo=>[campo,document.getElementById(campo).value.trim()]));if(!/^\d+$/.test(datos.nit)) {mensaje.textContent="El NIT/CC debe contener solo números.";document.getElementById("nit").classList.add("invalid");return}if(!/^\d+$/.test(datos.telefono)){mensaje.textContent="El teléfono debe contener solo números.";document.getElementById("telefono").classList.add("invalid");return}localStorage.setItem(STORAGE_KEY,JSON.stringify({...datos,nombreEmpresa:datos.nombre,logo:logoData}));mostrarToast("Información guardada")});
cargar();
