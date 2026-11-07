console.log("JSconectado");
const date= new Date();
const hour= date.getHours();
let greeting;
if(hour<12){
    greeting="Buenos Días";
}else if (hour<18){
    greeting="Buenas Tardes";
}else if (hour>=18 && hour < 24){
    greeting="Buenas Noches";}

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


