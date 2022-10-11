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
let user, pass, btnIniciar;

// ingresa por primera vez, OPTIMIZANDO CODIGOOO
(localStorage.length == 0) ? 
(
    btnIniciar = document.getElementById("btnIniciar"), //capturo el BOTON iniciar!!!!
    btnIniciar.addEventListener("click", (e) => {
        e.preventDefault(); //para que no  me recargue la pagina
        validadUsuario();
    })

 ) : (
    document.getElementById("usuarioInput").value = localStorage.getItem("usuario"),
    document.getElementById("passwordInput").value = localStorage.getItem("password"),

     btnIniciar = document.getElementById("btnIniciar"), //capturo el BOTON iniciar!!!!
    btnIniciar.addEventListener("click", (e) => {
        e.preventDefault(); //para que no  me recargue la pagina
        window.location.href = "login.html"
    })
 )

function validadUsuario() {

    user = document.getElementById("usuarioInput").value;
    pass = document.getElementById("passwordInput").value;

    let indice = usuarios.findIndex(element => element.nombre === user);

    //OPTIMIZANDO CODIGO
    indice >= 0 ? (
        u1 = usuarios[indice],
        u1.password == pass ? (
            alert("Ingreso exitoso"),
            window.location.href = "login.html") :
        (alert("Password incorrecto, intente nuevamente."))
    ) : (
        alert("Usuario Incorrecto, intente nuevamente.."))

    //usuario y pass correctos, los guardo en el localStorage
    localStorage.setItem("usuario", user);
    localStorage.setItem("password", pass);
}