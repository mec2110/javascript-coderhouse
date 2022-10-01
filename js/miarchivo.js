

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
casasHogwarts.push (new Casa("<p><h5>Slytherin</h5></p><p>Es una de las cuatro casas del Colegio Hogwarts de Magia y Hechicería, fundada por Salazar Slytherin. Al establecer la casa, Salazar instruyó al Sombrero Seleccionador para que seleccionara a los estudiantes que tenían las características particulares que él valoraba más. Esas características incluyen: astucia, ingenio y ambición. Muchos estudiantes de Slytherin tienden a hacer camarillas juntos, a menudo adquiriendo líderes, lo que es un ejemplo más de las ambiciosas cualidades de Slytherin. Ejemplos de estos incluyen la pandilla de Draco Malfoy y los mortífagos.</p><p>El fundador valoraba y favorecía a los estudiantes de sangre pura y el Sombrero Seleccionador admitió que puede ser un factor al ser seleccionado. Los estudiantes de cualquier estatus de sangre ahora pueden ser ubicados en la casa. Sin embargo, un estudiante hijo de muggles de esa casa se considera bastante raro.</p><p>El animal emblemático de la casa es una serpiente y sus colores son verde y plateado. Hubo dos jefes notables de la casa; Horace Slughorn ocupó el lugar dos veces (primero fue en 1981 y luego nuevamente desde 1997), y Severus Snape. El patrón fantasma de la casa es el Barón Sanguinario.</p><p>Slytherin corresponde aproximadamente al elemento de agua debido a que las serpientes se asocian comúnmente con el mar y los lagos en la mitología de Europa occidental, así como las serpientes son animales físicamente fluidos y flexibles.[2] Del mismo modo, en la mitología celta, el agua se ve como un portal a otro mundo, lo que lleva a algunos a especular que el elemento fue elegido para simbolizar la esperanza de muchos Slytherin de alcanzar una comunidad sangre pura. Los colores también se corresponden con las aguas alrededor de los lagos y lagunas, que a menudo son de color verde, y el plateado a menudo se asocia con el agua de lluvia gris.</p><p><h5>Cualidades</h5></p><p>Los Slytherin tienden a ser líderes ambiciosos, astutos y fuertes, orientados a los logros. También tienen sentidos altamente desarrollados de autopreservación, es decir, tienden a dudar antes de actuar, a fin de sopesar todos los resultados posibles antes de decidir exactamente qué se debe hacer.</p><p>Según Albus Dumbledore, las cualidades que Salazar valoraba en los estudiantes eran inteligencia, ingenio, determinación y cierto rechazo por las reglas. Cualidades de Harry Potter, quien casi es colocado en Slytherin</p>", "Slytherin", "slytherin","sly"));
casasHogwarts.push (new Casa("<p><h5>Ravenclaw</h5></p><p>es una de las cuatro casas que componen el Colegio Hogwarts de Magia y Hechicería, fundada por Rowena Ravenclaw[2], quién tuvo una hija, cuyo fantasma es la Dama Gris la cual fue asesinada por el Barón Sanguinario. Su hija le robó la diadema que le pertenecía y huyó a los bosques de Albania, lugar donde fue asesinada, y donde años después, Lord Voldemort encuentra la diadema y la esconde en la sala de los menesteres, en el Colegio Hogwarts de Magia y Hechicería. Se dice que fue Ravenclaw quien le puso el nombre al castillo. Los miembros de esta casa se caracterizan por su ingenio, aprendizaje y sabiduría. El símbolo animal emblemático es el águila, y el azul y el bronce son sus colores. El Jefe de Ravenclaw actualmente es Filius Flitwick.</p><p>Ravenclaw corresponde aproximadamente al elemento aire,[6]  y es por eso que se eligieron los colores de la Casa; el azul y el bronce representan el cielo y las plumas de águila respectivamente, ambos tienen mucho que ver con el aire. El reloj de arena de las puntas de Ravenclaw contiene zafiros azules.</p><p><h5>Rasgos</h5></p><p>La casa Ravenclaw premia el aprendizaje, la sabiduría, el ingenio, y el intelecto de sus miembros.[9] Por ello, muchos Ravenclaw tienden a tener talento académico y a ser estudiantes motivados. Los Ravenclaw también se enorgullecen de ser originales en sus ideas y métodos. No es raro encontrar a estudiantes de Ravenclaw que practiquen diferentes tipos de magia que otras casas podrían tratar de evitar.[4]Los estudiantes de Ravenclaw también pueden ser peculiares y poseer intereses intelectuales inusuales. Los Ravenclaw generalmente aceptan con entusiasmo a estos excéntricos.</p><p><h5>Reputación</h5></p><p>Según la prefecta de Slytherin Gemma Farley, los Ravenclaw son tan competitivos cuando se trata de su éxito académico que no les importa apuñalarse por la espalda entre sí, y probablemente a otros estudiantes, con el fin de obtener las mejores notas, mientras que el prefecto de Hufflepuff Gabriel Truman señaló que están tan orgullosos del éxito de sus miembros famosos, como Laverne de Montmorency, que reclaman a cualquier mago inteligente como miembro de Ravenclaw, como Bridget Wenlock, que era en realidad una Hufflepuff. Algunos Ravenclaws, como Uric el Excéntrico, Xenophilius Lovegood y su hija Luna Lovegood también se observa una propensión a la excentricidad.</p>", "Ravenclaw", "ravenclaw"));
casasHogwarts.push (new Casa("<p><h5>Hufflepuff</h5></p><p>La Casa de Hufflepuff se caracteriza por valorar la capacidad de trabajo, con estudiantes amigables y leales. Los estudiantes de esta casa son conocidos por ser trabajadores, amigables, leales y sin prejuicios.</p><p>La Sala Común de Hufflepuff se encuentra en una bodega en el mismo pasillo subterráneo que la cocina. Inicialmente, Hufflepuff buscaba alumnos que simplemente quisieran pertenecer a esa casa, aunque actualmente busca alumnos leales, honestos y que no teman el trabajo pesado. La fundadora es nada menos que la bruja Helga Hufflepuff, amiga desde la infancia de Rowena Ravenclaw. Helga fue una bruja muy noble, amigable y la principal impulsora de que Hogwarts aceptase a alumnos nacidos de muggles. La principal reliquia de la casa es la copa de Helga Hufflepuff. El símbolo de la casa es un tejón negro y sus colores representativos son el amarillo y el negro carbón.</p><p><h5>Curiosidades</h5></p><p>Helga Hufflepuff acogía a los magos que no querían los otros fundadores, aunque no se quedaba con ninguno que no fuese leal o trabajador. La sala común de Hufflepuff se encuentra al lado de las cocinas (los sótanos) debido a que Helga Hufflepuff destacaba por su habilidad con los encantamientos relacionados con la comida y muchas de sus recetas las siguen usando los elfos de Hogwarts.</p><p><h5>Alumnos famosos</h5></p><p><ul><li>Hannah Abbott</li><li>Susan Bones</li><li>Eleanor Branstone</li><li>Owen Cauldwell</li><li>Cedric Diggory</li><li>Justin Finch-Fletchley</li><li>Edward Lupin</li><li>Ernie Macmillan</li><li>Laura Madley</li><li>Newt Scamander</li><li>Hepzibah Smith</li></ul></p>", "Hufflepuff", "hufflepuff","huplepuf"));


/*
Obtenemos el mensaje correspondiente a la casa ingresada
*/
let casah
casah = casasHogwarts.find((casa)=>{
    return casa.name.toUpperCase() === infoCasas.toUpperCase()
});

if (casah) {
    document.getElementById("error").innerHTML=''
    let contenedor = document.getElementById("contenedor");
    contenedor.innerHTML = casah.caract;
    
} else {
    contenedor.innerHTML = ''
    document.getElementById("error").innerHTML="Tenés que ingresar un nombre de casa valido";
    
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