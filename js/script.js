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

