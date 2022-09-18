class novedad{
    constructor(id, titulo, descripcion, imagen)
    {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }
}

const novedad1 = new novedad(1,"2º Webinar Internacional para dosimetristas en Radioterapia", "Lorem ipsum dolor sit amet consectetur adipisicing elit", "2_webinar_dosimetristas.jpg" );

const novedades = [novedad1, novedad1, novedad1];

let divNovedades = document.getElementById("grillaNovedades");
divNovedades.className += " row row-cols-1 row-cols-md-3 g-4 "

novedades.forEach((noved)=>{

    let nuevaNovedad = document.createElement("div")

    nuevaNovedad.innerHTML = ` <div class="card m-3" style="width: 18rem;">
                                <img src="./images/${noved.imagen}" class="card-img-top" alt="${noved.titulo}">
                                <div class="card-body">
                                <h5 class="card-title">${noved.titulo}</h5>
                                <p class="card-text">${noved.descripcion}</p>
                                <a href="./sections/proyectos.html" class="btn btn-primary">Ir...</a>
                                </div>
                            </div>`

    divNovedades.append(nuevaNovedad)                        
    
});

