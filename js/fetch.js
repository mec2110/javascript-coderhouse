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


const personajes=document,
$characters =personajes.getElementById("characters"),
$template=personajes.getElementById("character-template").content,
$fragment = personajes.createDocumentFragment();

personajes.addEventListener("keypress",async e => {
if(e.target.matches("#search")){
    console.log(e.key);
}
});