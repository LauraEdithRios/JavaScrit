
//peticion
let divPersonajes = document.getElementById("personajes");
divPersonajes.className += " row row-cols-1 row-cols-md-3 g-4 "

fetch("https://hp-api.herokuapp.com/api/characters")
.then( (res) => res.json())
.then((data) => {
    
    for(let p of data){
        
        let nuevaPersonaje = document.createElement("div")
    
        nuevaPersonaje.innerHTML = ` <div class="card m-3" style="width: 18rem;">
                                    <img src="${p.image}" class="card-img-top" alt="${p.name}">
                                    <div class="card-body">
                                    <h5 class="card-title">${p.name}</h5>
                                    <p class="card-text">${p.name}</p>
                                    <a href="./sections/proyectos.html" class="btn btn-primary">Ir...</a>
                                    </div>
                                </div>`
    
        divPersonajes.append(nuevaPersonaje)                        
        
    }});
    
