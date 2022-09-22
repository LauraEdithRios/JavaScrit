class Mensaje{
    constructor(nombreInput, apellidoInput){
    this.nombreInput = nombreInput;
    this.apellidoInput = apellidoInput;}

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

    let mensajeCreado = new Mensaje(nombreInput.value , apellidoInput.value)
    array.push(mensajeCreado)
}

let btnEnviar = document.getElementById("btnEnviar")
btnEnviar.addEventListener("click", () => {
    guardarMensaje(mensajes)
    console.log(mensajes)
})