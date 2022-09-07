//Login con LocalStorage
let formulario = document.getElementById("formularios");
let resultado =  document.getElementById("error");
let resultado2 =  document.getElementById("exito");

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
        let nuevoUsuario = new User (userLogin, mailLogin , passwordLogin);
        usuarios.push(nuevoUsuario);
        resultado2.innerHTML="Iniciaste sesión con éxito,ingresá acá";
    
        localStorage.setItem('userName', userLogin);
        localStorage.getItem('userName');
        localStorage.setItem('userMail', mailLogin);
        localStorage.getItem('userMail');
        localStorage.setItem('userPass', passwordLogin);
        localStorage.getItem('userPass');
    }  else if ((userLogin =="")&&(mailLogin=="")&&(passwordLogin==""))  { resultado.innerHTML="Tenés que ingresar todos los datos solicitados";}
    }) 
