//Fetch API HP


const hechizos = document.getElementById("hechizoElegido")

fetch("https://hp-api.herokuapp.com/api/spells")
     .then((spell)=>spell.json())
     //.then((json)=>console.log(json))
     .then((data) => 
        data.forEach((info)=>{
        const li = document.createElement("li")
        li.innerHTML = `
        
        <p>${info.name}</p>
        <p>${info.description}</p>`

        hechizos.append(li)
     }))