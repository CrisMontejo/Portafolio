let portafolio = ()=>{
    const proyectos = [{
        nombre:"Cafeteria Ocho15",
        foto:"media/cafeteriaOcho15.jpg",
        link:"../Cafe/index.html",
        descripcion: "Proyecto de cafeteria"
    },{
        nombre:"Big News Today",
        foto:"media/BigNewsToday.jpg",
        link:"../Big news today/index.html",
        descripcion: "Proyecto de Big New Today"
    },{
        nombre:"Covid 19",
        foto:"media/covid19.jpg",
        link:"../Proyecto covid/index.html",
        descripcion: "Proyecto de Covid 19"
    }]
    
    const portafoliFlex = document.querySelector(".seccion2-portafolios")
    
    for (proyecto in proyectos){
        let datos = proyectos[proyecto]
        let nombre = datos["nombre"]
        let foto = datos["foto"]
        let link = datos["link"]
        let descripcion = datos["descripcion"]
    
        function htmlCode(){
            let div = document.createElement("div")
            let a1 = document.createElement("a")
            let img = document.createElement("img")
            let a2 = document.createElement("a")
            
            div.className = "portafolio-container"; 

            a1.href = link; a1.target = "_BLANK"
    
            img.className = "imagen"; img.src = foto; img.alt = descripcion;
    
            a1.appendChild(img)
    
            a2.className = "nombre"; a2.href = link; a2.target= "_BLANK"; a2.textContent = nombre;
            
            div.appendChild(a1)
            div.appendChild(a2)
            portafoliFlex.appendChild(div)
            // if (proyecto == 2) {
            //     div.classList.add("rojo")
            //     a2.classList.add("rojo")
            // }
        }
        htmlCode()
    }    
}
portafolio()

const navIconContainer = document.querySelector(".iconContainer")
const aContainer = document.querySelector(".aContainer")
const navItem = document.querySelector("nav-item")

navIconContainer.addEventListener("click",()=>{
    aContainer.classList.toggle("show")
})
