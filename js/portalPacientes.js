
//array con todos los usuarios
const usuarios = [{
        nombre: "Laura",
        password: "123456"
    },
    {
        nombre: "Coder",
        password: "000"
    }
]

let validacion = false;
let user, pass;


if (localStorage.length == 0) // ingresa por primera vez
{
    let btnIniciar = document.getElementById("btnIniciar"); //capturo el BOTON iniciar!!!!
    btnIniciar.addEventListener("click", (e) => {
        e.preventDefault(); //para que no  me recargue la pagina
        validadUsuario();
    });
   
} else {
    document.getElementById("usuarioInput").value = localStorage.getItem("usuario");
    document.getElementById("passwordInput").value = localStorage.getItem("password");
    
    let btnIniciar = document.getElementById("btnIniciar"); //capturo el BOTON iniciar!!!!
    btnIniciar.addEventListener("click", (e) => {
        e.preventDefault(); //para que no  me recargue la pagina
        window.location.href = "login.html"
    });
    
}

function validadUsuario() {

    user = document.getElementById("usuarioInput").value;
    pass = document.getElementById("passwordInput").value;

    let indice = usuarios.findIndex(element => element.nombre === user);

    if (indice >= 0) {
        u1 = usuarios[indice];
        if (u1.password == pass) {
            alert("Ingreso exitoso")
            window.location.href = "login.html"
        } else {
            alert("Password incorrecto, intente nuevamente.")
            return
        }
    } else {
        alert("Usuario Incorrecto, intente nuevamente..")
        return
    }
    //usuario y pass correctos, los guardo en el localStorage
    localStorage.setItem("usuario", user);
    localStorage.setItem("password", pass);
}

