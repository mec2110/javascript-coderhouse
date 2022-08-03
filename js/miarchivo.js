

//algoritmo para listar personas*

let presentes = prompt ("Ingresa los nombres de los estudiantes presentes y poné LISTO para terminar");
//repetimos nombres hasta ingresar ESCAPE
while(presentes != "LISTO"){
  console.log("Presente:" + presentes)
  presentes = prompt ("Ingresa los nombres de los estudiantes presentes y poné LISTO para terminar");
}

//ausentes
let ausentes = prompt ("Ingresa los nombres de los estudiantes ausentes y poné LISTO para terminar");
//repetimos nombres hasta ingresar ESCAPE
while(ausentes != "LISTO"){
  console.log("Ausente:" + ausentes)
  ausentes = prompt ("Ingresa los nombres de los estudiantes ausentes y poné LISTO para terminar");
}
