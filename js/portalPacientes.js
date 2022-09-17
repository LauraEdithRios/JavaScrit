//array con todos los usuarios
const usuarios = [
    { nombre: "Laura" , password: 123456 },
    { nombre: "Coder" , password: 000 }
]

let validacion = false;

alert("PORTAL DE PACIENTES - FUNDACION MARIE CURIE.")

do {
    //ingresa los datos
    let nombreUsuario = prompt("Ingrese su usuario: ");
   

    let indice = usuarios.findIndex(element => element.nombre === nombreUsuario);

    if( indice >= 0)
    {
        u1 = usuarios[indice];
        let passUusuario = prompt("Ingrese su password: ");
        if (u1.password == passUusuario)
        {
            validacion = false;
            menu();
        }
        else{
            validacion = true;
            alert("Password incorrecto, intente nuevamente.")
        }
    }
    else
    {
        validacion = true;
        alert("Usuario Incorrecto, intente nuevamente..")
    }
    

} while (validacion);



function menu() {

    class Persona{

        constructor(apellidoNombre, fechaNacimiento, domicilio, telefono, email){
            this.apellidoNombre = apellidoNombre;
            this.fechaNacimiento = fechaNacimiento;
            this.domicilio =  domicilio;
            this.telefono = telefono;
            this.email = email;
        }
    
        mostrarInfo()
        {
            for (let item in this) {
                console.log(item + ": " + this[item])
            }
        }
    }

    const persona1 = new Persona("Maria Laura Rios", "24-12-1988", "Leon Schneider 4180", 3513696467, "lauraedithrios24@gmail.com");

    let entrada = prompt("MENU ----Digite: \n1-Mostrar Datos \n2-Nuevo Turno \n3-Modificar Datos Personales \n4-Salir");

    while (entrada != 4) {
        switch (entrada) {
            case "1":
                persona1.mostrarInfo();
                break;
            
            case "2":
                nuevoTurno();
                break;

            case "3":
                modificarDatos(persona1);
                persona1.mostrarInfo();
                console.log("DATOS MODIFICADOS EXITOSAMENTE");
                break;

            default:
                alert("Opcion Incorrecta")
                break;
        }

        entrada = prompt("MENU ----Digite: \n1-Mostrar Datos \n2-Nuevo Turno \n3-Modificar Datos Personales \n4-Salir");
    }
    if (entrada == 4) {
        console.log("SALIO CON EXITO");
    }
}

function nuevoTurno() {

    class Turno{

        constructor(especialidad, fecha, hora){
            this.especialidad = especialidad;
            this.fecha = fecha;
            this.hora =  hora;
        }
    
        mostrarInfo()
        {
            for (let item in this) {
                console.log(item + ": " + this[item])
            }
        }
    }

    const especialidades = ["Laboratorio", "Diagnostico Por Imagenes", "Clinica Medica"];
    
    especialidad = prompt(`ESPECIALIDADES:\n${especialidades.join("-")} \nIngrese la especialidad que desea el turno : `);
    fecha = prompt("Ingrese la fecha estimada del turno: ");
    hora = prompt(`Ingrese el horario que tiene disponible en el dia ${fecha} : `);
   
    const turno = new Turno(especialidad, fecha, hora);

    turno.mostrarInfo();

    console.log("Su solicitud fue registrada, nos estaremos comunicando para coordinar el turno. Gracias")
}

function modificarDatos(persona1)
{
    let entrada = prompt("DATOS PERSONALES ----Seleccionar lo que desea modificar: \n1-Apellido y Nombre \n2-Fecha De Nacimiento \n3-Domicilio \n4-Telefono \n5-Email \n6-Salir");

    while (entrada != 6) {
        switch (entrada) {
            case "1":
                let apeNomb = prompt("Nombre y apellido: ");
                persona1.apellidoNombre = apeNomb;
                break;

            case "2":
                let fechaNacimiento = prompt("Fecha de Nacimiento: ");
                persona1.fechaNacimiento = fechaNacimiento;
                break;

            case "3":
                let dom = prompt("Domicilio: ");
                persona1.domicilio = dom;
                break;

            case "4":
                let tel = prompt("Telefono: ");
                persona1.telefono = tel;
                break;

            case "5":
                let email = prompt("Email: ");
                persona1.email = email;
                break;

            default:
                alert("Opcion Incorrecta")
                break;
        }

        entrada = prompt("DATOS PERSONALES ----Modificar: \n1-Apellido y Nombre \n2-Fecha De Nacimiento \n3-Domicilio \n4-Telefono \n5-Email \n6-Salir");
    }
}
