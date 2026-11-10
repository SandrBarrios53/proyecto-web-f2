//prueba de coneccion a la consola//
console.log("JSconectado");

//Saludo de Bienvenida y hora//
const date= new Date();
const hour= date.getHours();
let greeting;
if(hour<12){
    greeting="Buenos Días";
}else if (hour<18){
    greeting="Buenas Tardes";
}else if (hour>=18 && hour < 24){
    greeting="Buenas Noches";}

// creación de los menus desplegables en Galery y about-us, mouseover y mouseout//
const titulo = document.getElementById("greeting");
titulo.textContent = greeting + ", es un gusto saludarle";    

const menuGalery = document.getElementById("menuGalery");
const submenuGalery = document.getElementById("submenuGalery");
menuGalery.addEventListener("mouseover", function() {
    submenuGalery.classList.remove("oculto");
});
menuGalery.addEventListener("mouseout", function() {
    submenuGalery.classList.add("oculto")
});

const menuAboutus = document.getElementById("menuAboutus");
const submenuAboutus = document.getElementById("submenuAboutus");

menuAboutus.addEventListener("mouseover", function(){
    submenuAboutus.classList.remove("oculto")
});
menuAboutus.addEventListener("mouseout", function(){
    submenuAboutus.classList.add("oculto")
});

// creacion de slides pagina inicio//
const slides = document.querySelectorAll(".slide");
let actual = 0;
function mostrarSiguiente(){
    slides[actual].classList.add("oculto");
    actual=(actual+1) % slides.length;
    slides[actual].classList.remove("oculto");
}
setInterval(mostrarSiguiente, 3000);

//creacion botones siguiente y anterior//
const btnAnterior = document.getElementById("btnanterior");
const btnSiguiente = document.getElementById("btnsiguiente");

btnAnterior.addEventListener("click", function(){
    slides[actual].classList.add("oculto");
    actual = (actual-1+slides.length)% slides.length;
    slides[actual].classList.remove("oculto");
});

btnSiguiente.addEventListener("click", function(){
    slides[actual].classList.add("oculto");
    actual = (actual+1) % slides.length;
    slides[actual].classList.remove("oculto");
});
