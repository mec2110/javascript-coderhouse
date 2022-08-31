// Dom
function bienvenida(){
    let student  = prompt("¿Te consideras una persona mágica? Si/No");
  
    if (student == "Si") {
        alert ("✨Te damos la bienvenida a Hogwarts, 10puntos para Gryffindor!✨");
    }
    
    else if (student == "No"){
        alert("Todos tenemos magia, descubrilá acá!");
    }
    
  } 
  
  bienvenida(); 
  


let Nombres = document.getElementById ("seleccion")
Nombres.innerHTML = "✨Soy el sombrero seleccionador, decime tu nombre...✨";

//Simulador para saber de que casa de hogwarts sos*

function tucasadeHogwarts(){
let Nombre = document.getElementById ("inputNombre").value;
// while (Nombre === "") {
// alert ("Por favor, ingresa tu nombre o te envío a Azkaban!");
// Nombre = document.getElementById ("inputNombre").value;
// }

let casa= prompt("Qué casa prefieres?");
while(casa === "") {
    alert ("si no ingresas una casa, podés volver a la tuya...");
    casa= prompt("Qué casa prefieres?");
  }

  let animal= "";
while ( animal == ""){
    animal = prompt ("Ahora, cuentame si tuvieras qué elegir una mascota, preferís aguila, hurón, león, víbora, delfín, gato, perro o loro?");
    switch (animal) {
        case "águila":
            alert("mmmm interesante elección "+ Nombre + "\nLa respuesta rápida sería Ravenclaw, pero sólo un Slytherin creería qué es más inteligente que yo por elegir lo obvio así qué...SLYTHERIN!");
             break;
             case "aguila":
                alert("mmmm interesante elección "+ Nombre + "\nLa respuesta rápida sería Ravenclaw, pero pero águila lleva acento en la a...así que...GRYFFINDOR!");
              break;
         case "hurón":
             alert("Cuanta sinceridad "+ Nombre + "\nclaramente, Hufflepuff!");
             break;
         case "huron":
              alert("Te falto el acento joven "+ Nombre + "\nigualmente, Hufflepuff!");
              break;
        case "león":
            alert("No siempre lo obvio es tan obvio "+ Nombre + "\nSLYTHERIN!");
            break;//
        case "leon":
            alert("es León, no leon "+ Nombre + "\n Hufflepuff!");
            break;
        case "víbora":
            alert("Hay que ser valiente para tener un animal venenoso de mascota joven "+ NombreIngresado + "\npero hay que prestar mucha atención para escribirlo con acento, RAVENCLAW");
            break;
        case "vibora":
              alert("Se requiere valor para tener una víbora de mascota, pero brutalidad para olvidarse un acento, "+ Nombre + "\neres...SLYTHERIN!");
              break;
        case "delfín":
            alert("Es un animal amistoso, ¿sabía joven "+ Nombre + "?" + "\npero también inteligente, RAVENCLAW!");
            break;
        case "delfin":
              alert("Es un animal amistoso, y supongo que usted también joven "+ Nombre + "\nEres Hufflepuff!");
              break;
        case "gato":
            alert("Astuto, ambicioso, independiente...una buena elección "+ Nombre + "\nSLYTHERIN!");
                break;
        case "perro":
            alert("Leal, muy leal...espero que usted también lo sea joven "+ Nombre + "\ny valiente! GRYFFINDOR!");
            break;
        case "loro":
            alert("Charlatán, lunatico y aventurero...podrías ser de cualquier casa "+ Nombre + " pero serás de " + casa);
            break;
        default:
          alert("Esa no es una de las opciones dadas " + Nombre + "\nEres re Slytherin!");
        
    } 
    

  }
  
let welcome = document.getElementById ("bienvenida")
welcome.innerHTML = "¡Te damos la bienvenida a Hogwarts "+ Nombre+"!";
} 

//tucasadeHogwarts(); 



//Arrays--> ingresar la casa en la que quedo seleccionado/a para conocer más sobre la misma

function infoMiCasa(){
    const Gryffindor ={ caract:"Los magos y hechiceras de está casa se caracterizan por su Valor. Como se mencionó previamente, su fundador es Godric Gryffindor. El animal que los representa es el león." };
const Slytherin ={ caract:"Los magos y hechiceras de está casa se caracterizan por su Ambición. Como se mencionó previamente, su fundador es Salazar Slytherin. El animal que los representa es la serpiente."};
const Ravenclaw ={ caract:"Los magos y hechiceras de está casa se caracterizan por su Inteligencia. Como se mencionó previamente, su fundadora es Rowena Ravenclaw. El animal que los representa es el aguila."};
const Hufflepuff ={ caract:"Los magos y hechiceras de está casa se caracterizan por su Honestidad. Como se mencionó previamente, su fundadora es Helga Hufflepuff. El animal que los representa es el huron."};

class Casa{
constructor( caract, name){
this.caract=caract;
this.name=name;

 };
 };

const casasHogwarts =[];
let infoCasas = document.getElementById("inputInfo").value;

casasHogwarts.push (new Casa("Los magos y hechiceras de está casa se caracterizan por su Valor. Como se mencionó previamente, su fundador es Godric Gryffindor. El animal que los representa es el león.", "Gryffindor", "gryffindor"));
casasHogwarts.push (new Casa("Los magos y hechiceras de está casa se caracterizan por su Ambicion. Como se mencionó previamente, su fundador es Salazar Slytherin. El animal que los representa es la serpiente.", "Slytherin", "slytherin"));
casasHogwarts.push (new Casa("Los magos y hechiceras de está casa se caracterizan por su Inteligencia. Como se mencionó previamente, su fundadora es Rowena Ravenclaw. El animal que los representa es el aguila.", "Ravenclaw", "ravenclaw"));
casasHogwarts.push (new Casa("Los magos y hechiceras de está casa se caracterizan por su Honestidad. Como se mencionó previamente, su fundadora es Helga Hufflepuff. El animal que los representa es el huron.", "Hufflepuff", "hufflepuff"));


for (const datos of casasHogwarts){
    if (datos.name.toUpperCase() == infoCasas.toUpperCase()) {
        let contenedor = document.getElementById("contenedor");
        contenedor.innerHTML = datos.caract;
    }

    

};
}
infoMiCasa();

//suscripcion
let mail = document.getElementById("inputQuisquilloso").value;
function suscripcion(){
    mail=[];
document.getElementById("inputQuisquillosoEnviar").addEventListener("click",function(){
    alert ("Gracias por suscribirte, tu mail "+mail+ " se almacenó con éxito en nuestra base de magos y brujas");
    }, false);
   
  } 
  
  suscripcion();

//contador


function incrementClick() {
    var counterVal = 1;
    updateDisplay(++counterVal);
}


function updateDisplay(val) {
    document.getElementById("counter-label").innerHTML = val;
    document.getElementById("counter-label2").innerHTML = val;
    document.getElementById("counter-label3").innerHTML = val;
    document.getElementById("counter-label4").innerHTML = val;
}

//Primer entrega final--> la idea es sumar puntos a las distintas casas

// const copaCasas = [
//     {nombre: Gryffindor, puntos: 0},
// { nombre: Slytherin, puntos: 0},
// { nombre: Ravenclaw, puntos: 0},
// { nombre:Hufflepuff, puntos: 0},

// ]

// const puntos = copaCasas.map((el)=> 
// {console.log(el.nombre);
//     return{
//         nombre: el.nombre,
//         puntos: el.puntos + 10,
        
// }

// })
// alert (puntos[0].nombre);

