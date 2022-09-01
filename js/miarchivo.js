

//Simulador para saber de que casa de hogwarts sos*

function tucasadeHogwarts(){
    document.getElementById("tucasadeHogwarts").addEventListener("click",function(){
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
            alert("Astuto, ambicioso, independiente...una buena elección "+ Nombre + "\nSLYTHERIN!");
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
function suscripcion(){	
	document.getElementById("inputQuisquillosoEnviar").addEventListener("click",function(){
		const mail  = document.getElementById ("inputQuisquilloso").value;
		console.log("MAIL: " + mail)
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
    document.getElementById ("counter-label").innerHTML = val;
    
}

//Login con LocalStorage

const submitHandler = e =>{
        e.preventDefault();
        
        const nombre = e.target.nombre.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
    
        if((nombre === "XXXX") &&(email === "XXXX") && (password === "XXXXX")){
            alert("Iniciaste sesión con éxito")
        }
    
        localStorage.setItem('nombre', nombre)
        localStorage.setItem('email', email)
        localStorage.setItem('password', password)
    }