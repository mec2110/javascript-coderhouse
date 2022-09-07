

//Simulador para saber de que casa de hogwarts sos*

function tucasadeHogwarts(){
    var tucasadeHogwarts=document.getElementById("tucasadeHogwarts")
    tucasadeHogwarts.addEventListener("click",function(){
let Nombre = document.getElementById ("inputNombre").value;


let casa= document.getElementById ("inputPreferencia").value;
while(casa === "") {
    alert ("si no ingresas una casa, podés volver a la tuya...");
    casa= document.getElementById ("inputPreferencia").value;
  }

  let animal= "";
while ( animal == ""){
    animal = document.getElementById ("inputAnimal").value;
    switch (animal) {
        case "águila":
            aguila= document.getElementById ("resultado");
            aguila.innerHTML ="mmmm interesante elección "+ Nombre + "\nLa respuesta rápida sería Ravenclaw, pero sólo un Slytherin creería qué es más inteligente que yo por elegir lo obvio así qué...SLYTHERIN!";
             break;
             case "aguila":
                aguila= document.getElementById ("resultado2");
            aguila.innerHTML ="mmmm interesante elección "+ Nombre + "\nLa respuesta rápida sería Ravenclaw, pero pero águila lleva acento en la a...así que...GRYFFINDOR!";
              break;
         case "hurón":
            huron= document.getElementById ("resultado4");
        huron.innerHTML ="Cuanta sinceridad "+ Nombre + "\nclaramente, Hufflepuff!"
             break;
         case "huron":huron= document.getElementById ("resultado4");
         huron.innerHTML ="Te falto el acento joven "+ Nombre + "\nigualmente, Hufflepuff!";
              break;
        case "león":
            leon= document.getElementById ("resultado");
        leon.innerHTML ="No siempre lo obvio es tan obvio "+ Nombre + "\nSLYTHERIN!";
            break;//
        case "leon":
            leon= document.getElementById ("resultado4");
            leon.innerHTML ="es León, no leon "+ Nombre + "\n Hufflepuff!";
            break;
        case "víbora":
            vibora= document.getElementById ("resultado3");
        vibora.innerHTML ="Hay que ser valiente para tener un animal venenoso de mascota joven "+ NombreIngresado + "\npero hay que prestar mucha atención para escribirlo con acento, RAVENCLAW";
            break;
        case "vibora":
            vibora= document.getElementById ("resultado");
            vibora.innerHTML ="Se requiere valor para tener una víbora de mascota, pero brutalidad para olvidarse un acento, "+ Nombre + "\neres...SLYTHERIN!";
              break;
        case "delfín":
            delfin= document.getElementById ("resultado3");
        delfin.innerHTML ="Es un animal amistoso, ¿sabía joven "+ Nombre + "?" + "\npero también inteligente, RAVENCLAW!";
            break;
        case "delfin":
            delfin= document.getElementById ("resultado4");
            delfin.innerHTML ="Es un animal amistoso, y supongo que usted también joven "+ Nombre + "\nEres Hufflepuff!";
              break;
        case "gato":
            gato= document.getElementById ("resultado");
            gato.innerHTML ="Astuto, ambicioso, independiente...una buena elección "+ Nombre + "\nSLYTHERIN!";
                break;
        case "perro":
            gato= document.getElementById ("resultado2");
        gato.innerHTML ="Leal, muy leal...espero que usted también lo sea joven "+ Nombre + "\ny valiente! GRYFFINDOR!";
            break;
        case "loro":
            loro= document.getElementById ("resultado2");
        loro.innerHTML ="Charlatán, lunatico y aventurero...podrías ser de cualquier casa "+ Nombre + " pero serás de " + casa;
            break;
        default:
            defaul= document.getElementById ("resultado");
          defaul.innerHTML="Esa no es una de las opciones dadas " + Nombre + "\nEres re Slytherin!";
        
    } 
    

  }
  
let welcome = document.getElementById ("bienvenida")
welcome.innerHTML = "¡Te damos la bienvenida a Hogwarts, "+ Nombre+"!";
} , false);
   
} 

tucasadeHogwarts(); 



//Arrays--> ingresar la casa en la que quedo seleccionado/a para conocer más sobre la misma

function infoMiCasa(){
    document.getElementById("infoCasa").addEventListener("click",function(){
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
}, false);
   
} 
infoMiCasa();

//suscripcion
function suscripcion(){	
	document.getElementById("inputQuisquillosoEnviar").addEventListener("click",function(){
		const mail  = document.getElementById ("inputQuisquilloso").value;
        localStorage.setItem('email', mail);
        localStorage.getItem('mail');
		//alert ("Gracias por suscribirte, tu mail "+mail+ " se almacenó con éxito en nuestra base de magos y brujas");
        // if (mail == ""){
        //     alert("Por favor, ingresá un mail para suscribirte");
        // }
        alerta= document.getElementById ("mensajeSuscripcion");
        mail != ""? alerta.innerHTML ="Gracias por suscribirte, tu mail "+mail+ " se almacenó con éxito en nuestra base de magos y brujas":alerta.innerHTML ="Por favor, ingresá un mail para suscribirte"
    }, false);
   
  } 
  
  suscripcion();
  

//contadores de puntos

var a = 10;
function incrementClick() {
    document.getElementById("incrementClick").addEventListener("click",function(){
    a = a * 5;
    document.getElementById ("counter-label").innerHTML = a;
}, false);
   
} incrementClick();

var b = 5;
function incrementClick2() {
    document.getElementById("incrementClick2").addEventListener("click",function(){
    b = b * 5;
    document.getElementById ("counter-label2").innerHTML = b;
}, false);
   
} incrementClick2();

var c = 2;
function incrementClick3() {
    document.getElementById("incrementClick3").addEventListener("click",function(){
    c = c * 5;
    document.getElementById ("counter-label3").innerHTML = c;
}, false);
   
} incrementClick3();

var d = 1;
function incrementClick4() {
    document.getElementById("incrementClick4").addEventListener("click",function(){
    d = d * 5;
    document.getElementById ("counter-label4").innerHTML = d;
}, false);
   
} incrementClick4();




    //Nav toggle
    
    function myFunction() {
        document.getElementById("myFunction").addEventListener("click",function(){
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }, false);
    }
     myFunction();