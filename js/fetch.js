//Fetch API HP: Permite buscar de qué casa es el personaje ingresado


const personajes = document,
$characters = personajes.getElementById("characters"),
$template = personajes.getElementById("character-template").content,
$fragment = personajes.createDocumentFragment();

personajes.addEventListener("keypress",async e => {
if(e.target.matches("#inputCharacter")){
    if(e.key === "Enter"){
        try{
$characters.innerHTML =`<h6> Cargando...</h6>`;

let query = e.target.value.toLowerCase();
api=`https://hp-api.herokuapp.com/api/characters?q=${query}`,
res = await fetch(api),
json = await res.json();

if (!res.ok)throw {status: res.status, statusText:res.statusTex};
if(json.length===0){
    $characters.innerHTML = `<h2>No existen brujas y magos con ese nombre</h2>`;
}else{
    json.forEach(el => {
        if(el.name.toLowerCase() == query){
$template.querySelector("h3").textContent = el.name;
$template.querySelector("div").textContent = el.house;
$template.querySelector("img").src = el.image;

let $clone = personajes.importNode ($template, true);
$fragment.appendChild($clone);
}
    });
$characters.innerHTML ="";
    $characters.appendChild($fragment);
}
        }catch (err){
let message = err.statusText|| "Asi como es Le vi O sa, no leviosaaa...el nombre que ingresaste es incorrecto!";
$characters.innerHTML = `<p>Error ${err.status}:${message}</p>`;
        }
    }
}
});