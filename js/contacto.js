class Mensaje{
    constructor(nombreInput, apellidoInput, emailInput, telefonoInput, paisInput, mensajeInput){
    this.nombreInput = nombreInput;
    this.apellidoInput = apellidoInput;
    this.emailInput = emailInput;
    this.telefonoInput = telefonoInput;
    this.paisInput = paisInput;
    this.mensajeInput = mensajeInput;    

}

    mostrar()
    {
        return 'nombre' + this.nombreInput + 'apellido' + this.apellidoInput;
    }

} 

let mensaje1 = new Mensaje("hola", "laura")

let mensajes = [mensaje1];

function guardarMensaje(array){
    let nombreInput = document.getElementById('nombreInput')
    let apellidoInput = document.getElementById('apellidoInput')
    let emailInput = document.getElementById('emailInput')
    let telefonoInput = document.getElementById('telefonoInput')
    let paisInput = document.getElementById('paisInput')
    let mensajeInput =  document.getElementById('mensajeInput')

    let mensajeCreado = new Mensaje(nombreInput.value , apellidoInput.value, emailInput.value, telefonoInput.value, paisInput.value, mensajeInput.value)
    array.push(mensajeCreado)

    //RESETEO DE VALORES DEL FORM
    nombreInput.value = ""
    apellidoInput.value = ""
    emailInput.value = ""
    telefonoInput.value = ""
    paisInput.value = ""
    mensajeInput.value = ""
}


/*eventos de click sobre enlaces y botones, 
tienen un comportamiento por defecto que es recargar la página o enviar un formulario, 
ésto debemos quitarlo, primeramente agregamos el parámetro evento cómo lo quieras nombrar, 
y luego haríamos el event.preventDefault()

let btnEnviar = document.getElementById("btnEnviar")//capturo el BOTON ENVIAR!!!!
btnEnviar.addEventListener("click", (e) => {
    e.preventDefault();//para que no  me recargue la pagina
    guardarMensaje(mensajes)
    console.log(mensajes)
    alert("Mensaje Enviado, nos comunicaremos a la brevedad.");
})*/

const btn = document.getElementById('btnEnviar');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_i97lc2p';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar Mensaje';
      alert('Enviado exitosamente!');
    }, (err) => {
      btn.value = 'Enviar Mensaje';
      alert(JSON.stringify(err));
    });
});