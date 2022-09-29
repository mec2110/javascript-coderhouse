

//Simulador para saber de que casa de hogwarts sos*

function tucasadeHogwarts(){
    var tucasadeHogwarts=document.getElementById("tucasadeHogwarts")
    tucasadeHogwarts.addEventListener("click",function(){
let Nombre = document.getElementById ("inputNombre").value;
let casa= document.getElementById ("inputPreferencia").value;
let animal= "";
if ( animal == ""){
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
        
    } ;
    

  } if (casa === "") {
    alertaCasa=document.getElementById ("faltanDatos");
    alertaCasa.innerHTML=("Tenés que ingresar todos los datos solicitados...");
   
  };//revisar para que cuando salga estè mensaje no salga la casa
  
let welcome = document.getElementById ("bienvenida")
welcome.innerHTML = "¡Te damos la bienvenida a Hogwarts, "+ Nombre+"!";
} , false);
   
} 

tucasadeHogwarts(); 



//Arrays--> ingresar la casa en la que quedo seleccionado/a para conocer más sobre la misma

function infoMiCasa(){
    document.getElementById("infoCasa").addEventListener("click",function(){
    const Gryffindor ={ caract:"La Casa Gryffindor fue fundada por el célebre mago Godric Gryffindor. Godric sólo aceptaba en su casa a aquellos magos y brujas que tenían valentía, disposición, coraje y caballerosidad, ya que éstas son las cualidades de un auténtico Gryffindor. Los colores de esta casa son el dorado y el escarlata y su símbolo es un león. La reliquia más preciada de la casa es la espada de Godric Gryffindor, perteneciente, como su nombre indica, al fundador de la casa. Los estudiantes de esta casa pasan la mayor parte del tiempo en la Torre de Gryffindor, ubicada en el séptimo piso del Castillo de Hogwarts." };
const Slytherin ={ caract:"La Casa Slytherin está caracterizada principalmente por la ambición y la astucia. Fue fundada por el mago Salazar Slytherin. La Sala Común está situada en las mazmorras, pasando por un serie de numerosos pasillos subterráneos. Posiblemente se llega a ellos a través del Vestíbulo de Hogwarts . Específicamente se encuentra debajo del Lago Negro, haciendo que la sala común sea fría y con una tonalidad verdosa, ya que hay ventanas que dan a las aguas. Se accede a ella por una puerta altamente disimulada en un muro de piedra, diciendo una contraseña requerida. La única conocida es Sangre Pura. Su principal reliquia es el guardapelo de Salazar Slytherin. El animal representativo es la serpiente, sus colores son verde y plateado y el elemento es el agua, asociada con la astucia y la frialdad."};
const Ravenclaw ={ caract:"La Casa Ravenclaw se encuentra en una torre en el ala oeste del castillo. En la entrada se encuentra una estatua con forma de águila que dice acertijos y sólo te deja entrar si lo resuelves. Sus colores son el azul y el bronce. Ravenclaw busca alumnos creativos, curiosos y que siempre busquen la respuesta. Fue fundada por la bruja, nacida en las cañadas de Escocia, Rowena Ravenclaw. Supuestamente es la principal inventora del nombre, lugar y formato de Hogwarts. También es la causante de que las escaleras se muevan. Su principal reliquia es la diadema de Rowena Ravenclaw. El símbolo de la casa es el águila, aunque en alguna versión del escudo es un cuervo."};
const Hufflepuff ={ caract:"La Sala Común de Hufflepuff se encuentra en una bodega en el mismo pasillo subterráneo que la cocina. Inicialmente, Hufflepuff buscaba alumnos que simplemente quisieran pertenecer a esa casa, aunque actualmente busca alumnos leales, honestos y que no teman el trabajo pesado. La fundadora es nada menos que la bruja Helga Hufflepuff, amiga desde la infancia de Rowena Ravenclaw. Helga fue una bruja muy noble, amigable y la principal impulsora de que Hogwarts aceptase a alumnos nacidos de muggles. La principal reliquia de la casa es la copa de Helga Hufflepuff. El símbolo de la casa es un tejón negro y sus colores representativos son el amarillo y el negro carbón."};

class Casa{
constructor( caract, name){
this.caract=caract;
this.name=name;

 };
 };

const casasHogwarts =[];
let infoCasas = document.getElementById("inputInfo").value;

casasHogwarts.push (new Casa("<p><h5>Gryffindor</h5>La Casa Gryffindor fue fundada por el célebre mago <strong>Godric Gryffindor</strong>.</p><p>Godric sólo aceptaba en su casa a aquellos magos y brujas que tenían valentía, disposición, coraje y caballerosidad, ya que éstas son las cualidades de un auténtico Gryffindor.</p> <p>Los colores de esta casa son el dorado y el escarlata y su símbolo es un león.</p><p> La reliquia más preciada de la casa es la espada de Godric Gryffindor, perteneciente, como su nombre indica, al fundador de la casa. Los estudiantes de esta casa pasan la mayor parte del tiempo en la Torre de Gryffindor, ubicada en el séptimo piso del Castillo de Hogwarts.</p><p>Hogwarts sigue una tradición muy curiosa, y es que cada casa tiene un fantasma asociado. Ellos proporcionan ayuda a sus estudiantes, y participan en la competitividad entre las distintas casas. En el caso de Gryffindor, su fantasma es Sir Nicholas de Mimsy-Porpington, también conocido como Nick Casi Decapitado.</p><h5>Reputación</h5><p>Hay una histórica rivalidad entre las Casas de Gryffindor y Slytherin, rivalidad que se remonta a la época medieval cuando sus respectivos fundadores, Godric Gryffindor y Salazar Slytherin, tuvieron serias desavenencias respecto a las creencias de Slytherin de la pureza de sangre. Desde entonces, las peleas entre ambas Casas han sido continuas.Miembros de otras Casas (particularmente de Slytherin) creen que existe un cierto favoritismo hacia Gryffindor (por ejemplo por el hecho de que Harry Potter no fuera retirado del Torneo de los Tres Magos al salir elegido como cuarto campeón). Sin embargo, las Casas de Ravenclaw y Hufflepuff tienden a aliarse con Gryffindor en su rivalidad con Slytherin. Un claro ejemplo de esto es la Segunda Guerra Mágica (los miembros del Ejército de Dumbledore eran de Gryffindor, Hufflepuff y Ravenclaw) y en la Batalla de Hogwarts, mientras los Slytherin abandonaban el colegio, muchos estudiantes de las demás Casas permanecieron en Hogwarts para luchar contra Voldemort y sus mortífagos.</p><p><h5>Etimologia</h5></br><ul><li>Gryffindor puede derivar de griffin, grifo en inglés, una criatura mitológica con el cuerpo de león y la cabeza de águila.</li><li>En idioma anglosajón o alto alemán antiguo dor significa puerta.</li><li>Gryffindor se puede explicar muy bien mediante heráldica. Gryffin puede significar la bestia grifo y dor puede referirse al metal del esmalte de oro.</li></ul></p>", "Gryffindor", "gryffindor"));
casasHogwarts.push (new Casa("Los magos y hechiceras de está casa se caracterizan por su Ambicion. Como se mencionó previamente, su fundador es Salazar Slytherin. El animal que los representa es la serpiente.", "Slytherin", "slytherin"));
casasHogwarts.push (new Casa("Los magos y hechiceras de está casa se caracterizan por su Inteligencia. Como se mencionó previamente, su fundadora es Rowena Ravenclaw. El animal que los representa es el aguila.", "Ravenclaw", "ravenclaw"));
casasHogwarts.push (new Casa("Los magos y hechiceras de está casa se caracterizan por su Honestidad. Como se mencionó previamente, su fundadora es Helga Hufflepuff. El animal que los representa es el huron.", "Hufflepuff", "hufflepuff"));


for (const datos of casasHogwarts){
    if (datos.name.toUpperCase() == infoCasas.toUpperCase()) {
        let contenedor = document.getElementById("contenedor");
        contenedor.innerHTML = datos.caract;
    } else {
        document.getElementById("error").innerHTML="Tenés que ingresar un nombre de casa valido";
    }

    

};
}, false);
   
} 
infoMiCasa();

//suscripcion
function suscripcion(){	
	document.getElementById("inputQuisquillosoEnviar").addEventListener("click",function(){
		const mail  = document.getElementById ("inputQuisquilloso").value;
        localStorage.setItem('mail', mail);
        localStorage.getItem('mail');
		
       
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