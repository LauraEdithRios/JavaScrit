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

    let validacion = false;
    user = document.getElementById("usuarioInput").value;
    pass = document.getElementById("passwordInput").value;

    let indice = usuarios.findIndex(element => element.nombre === user);

    //OPTIMIZANDO CODIGO
    indice >= 0 ? (
        u1 = usuarios[indice],
        u1.password == pass ? (
            window.location.href = "login.html", 
            validacion = true )
            :
        msjError("Password incorrecto, intente nuevamente.")
    ) : (
        msjError("Usuario Incorrecto, intente nuevamente..")
        )

    //usuario y pass correctos, los guardo en el localStorage
    if(validacion == true){
    localStorage.setItem("usuario", user);
    localStorage.setItem("password", pass);
    }
}


function msjError(msj)
{
    Swal.fire({
        title: 'Error!',
        text: msj,
        icon: 'error',
    })
}