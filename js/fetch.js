//Fetch API HP


// const hechizos = document.getElementById("hechizoElegido")

// fetch("https://hp-api.herokuapp.com/api/spells")
//      .then((spell)=>spell.json())
//      //.then((json)=>console.log(json))
//      .then((data) => 
//         data.forEach((info)=>{
//         const li = document.createElement("li")
//         li.innerHTML = `
        
//         <p>${info.name}</p>
//         <p>${info.description}</p>`

//         hechizos.append(li)
//      }))


const personajes = document,
$characters = personajes.getElementById("characters"),
$template = personajes.getElementById("character-template").content,
$fragment = personajes.createDocumentFragment();

personajes.addEventListener("keypress",async e => {
if(e.target.matches("#search")){
    if(e.key === "Enter"){
        try{
$characters.innerHTML =`<img class="loader" src="../img/loader.gif" alt="Cargando..."/>`;

let query = e.target.value.toLowerCase();
api=`https://hp-api.herokuapp.com/api/characters?q=${query}`,
res = await fetch(api),
json = await res.json();

//Manipulacion del error

if (!res.ok)throw {status: res.status, statusText:res.statusTex};
if(json.length === 0){
    $characters.innerHTML = `<h2>No existen brujas y magos que se llamen: <mark>${query} </mark></h2>`;
}else{
    json.forEach(el => {
$template.querySelector("h3").textContent = el.name;
$template.querySelector("div").textContent = el.dateOfBirth;
$template.querySelector("div").textContent = el.patronus;
$template.querySelector("div").textContent = el.house;
$template.querySelector("img").src = el.image;



let $clone = personajes.importNode ($template, true);
$fragment.appendChild($clone);
    });
$characters.innerHTML ="";
    $characters.appendChild($fragment);
}
        }catch (err){
console.log(err);
let message = err.statusText|| "Asi como es Le vi O sa, no leviosaaa...el nombre que ingresaste es incorrecto!";
$characters.innerHTML = `<p>Error ${err.status}:${message}</p>`;
        }
    }
}
});