
//Simulador para saber de que casa de hogwarts sos*

let Nombre = prompt ("Soy el sombrero seleccionador, decime tu nombre...");


let casa= prompt("Qué casa prefieres?");

while (Nombre != ""){
  let animal = prompt ("Ahora, cuentame si tuvieras qué elegir una mascota, preferís aguila, hurón, león, víbora, delfín, gato, perro o loro?");
  switch (animal) {
      case "águila":
           alert("mmmm interesante elección "+ Nombre + "\nLa respuesta rápida sería Ravenclaw, pero sólo un Slytherin creería qué es más inteligente que yo por elegir lo obvio así qué...SLYTHERIN!");
           break;
           case "aguila":
            alert("mmmm interesante elección "+ Nombre + "\nLa respuesta rápida sería Ravenclaw, pero pero águila lleva acento en la a...así que...GRYFFINDOR!");
            break;
       case "hurón":
           alert("Cuanta sinceridad "+ Nombre + "\nclaramente, HUPLEFUF!");
           break;
       case "huron":
            alert("Te falto el acento joven "+ Nombre + "\nigualmente, HUPLEFUF!");
            break;
      case "león":
          alert("No siempre lo obvio es tan obvio "+ Nombre + "\nSLYTHERIN!");
          break;//
      case "leon":
          alert("es León, no leon "+ Nombre + "\n HUPLEFUF!");
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
            alert("Es un animal amistoso, y supongo que usted también joven "+ Nombre + "\nEres HUPLEFUF!");
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
  if (Nombre === "") {
    alert ("Por favor, ingresa tu nombre o te envío a Azkaban!");
}
if (casa === "") {
  alert ("si no ingresas una casa, podés volver a la tuya...");
}

else {
break;
}
}

function bienvenida(){
  let student  = prompt("¿Estás de acuerdo con la casa asignada? Si/No");

  if (student === "Si") {
      alert ("Te damos la bienvenida a Hogwarts, 10puntos para Gryffindor!");
  }
  
  else if (student === "No"){
      alert("No siempre las cosas salen como queremos, pero el sombrero NUNCA se equivoca");
  }
  
} 

bienvenida(); 


//Arrays--> ingresar la casa en la que quedo seleccionado/a para conocer más sobre la misma

const Gryffindor ={id:1, caract:"Valor", founder:"Godric Gryffindor", animal: "león"};
const Slytherin ={id:2, caract:"Ambicion", founder:"Salazar Slytherinr",animal: "serpiente"};
const Ravenclaw ={id:3, caract:"Inteligencia", founder:"Rowena Ravenclaw", animal: "águila"};
const Hufflepuff ={id:4, caract:"Honestidad", founder:"Helga Hufflepuff", animal: "hurón"};

class Casa{
    constructor(caract, founder, animal){
        this.caract=caract.toUpperCase();
        this.founder=founder.toUpperCase();
        this.animal=animal.toUpperCase();

    };
};

//const casasHogwarts =[Gryffindor,Slytherin,Ravenclaw ,Hufflepuff ];
const casasHogwarts =[];


casasHogwarts.push (new Casa(caract, founder, animal));
let infoCasas = prompt ("Ingresa la casa a la que perteneces para saber más sobre ella");


for (const datos of casasHogwarts){
  console.log(datos.id);
    console.log(datos.caract);
    console.log(datos.founder);
}


