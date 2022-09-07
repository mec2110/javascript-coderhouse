//Login con LocalStorage
let formulario = document.getElementById("formularios");
class User {
    constructor(user,mail, password){
        this.user = user;
        this.mail = mail;
        this.password = password;
    }
}

let usuarios= [];
formulario.addEventListener("submit",(e) => {
    e.preventDefault();
    let userLogin = document.getElementById("userName").value;
    let mailLogin = document.getElementById("userMail").value;
    let passwordLogin = document.getElementById("userPass").value;

    if (userLogin && mailLogin && passwordLogin) {
        let nuevoUsuario = new Usuario (userLogin, mailLogin , passwordLogin);
        usuarios.push(nuevoUsuario)
        ("Iniciaste sesión con éxito",nuevoUsuario.user).innerHTML;
        console.log(usuarios);
        localStorage.setItem('userName', userLogin);
        localStorage.getItem('userName');
        localStorage.setItem('userMail', mailLogin);
        localStorage.getItem('userMail');
        localStorage.setItem('userPass', passwordLogin);
        localStorage.getItem('userPass');
    }else{document.getElementById("error").innerHTML="Tenés que ingresar todos los datos solicitados";}
    }) 
