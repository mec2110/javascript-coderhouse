//Fetch API HP


const hechizos = document.getElementbyId("hechizoElegido")

fetch("https://hp-api.herokuapp.com/api/spells")
     .then((spell)=>spell.json())
     //.then((json)=>console.log(json))
     .then((data) => data.forEach((info)=>{
        const hechizos = document.createElement("li")
        hechizos.innerHTML = `
        <p>${info.id}</p>
        <p>${info.name}</p>
        <p>${info.description}</p>`

        hechizos.append(li)
     }))