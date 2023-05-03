/** Defino arrays y constructores */

class Gorras {
    constructor (id, marca, colores, stock, precio){
        this.id = id;
        this.categoria = "gorras";
        this.marca = marca;
        this.colores = colores;
        this.stock = stock;
        this.precio = precio;

    }
    
}

const gorraUno = new Gorras(9, "Champion", "Negro, Azul Francia, Bordo", 5, 3000);
const gorraDos = new Gorras(10, "Nike", "Negro, Azul Francia, Rosa", 2, 4000);
const gorraTres = new Gorras(11, "Lacoste", "Blanco, Negro, Azul Francia", 7, 2600);
const gorraCuatro = new Gorras(12, "Adidas", "Blanco, Negro, Rosa", 5, 3500);

class Camisetas {
    constructor (id, marca, modelo, colores, stock, precio){
        this.categoria = "camiseta"
        this.id = id;
        this.marca = marca;
        this.modelo = modelo;
        this.colores = colores;
        this.stock = stock;
        this.precio = precio;

    }
    
}

const camisetaUno = new Camisetas(5, "Adidas", "River Plate suplente temporada 2022/23. // 9 Julian Alvarez", "Negro y rojo", 5, 10000);
const camisetaDos = new Camisetas(6, "Adidas", "Camiseta Suplente de River Plate 2021/22. // 24 Enzo Perez", "Negro y rojo", 10, 8500);
const camisetaTres = new Camisetas(7, "Nike", "Jersey Chelsea World Champions 2021/22. // 27 Kante", "Azul", 7, 12000);
const camisetaCuatro = new Camisetas(8, "Nike", "Alternate Jersey PSG 2021/22. // 30 Messi", "Azul y celeste. // Negro y gris.", 4, 12000);

class Pantalones {
    constructor (id, marca, colores, stock, precio){
        this.categoria = "pantalones"
        this.id = id;
        this.marca = marca;
        this.colores = colores;
        this.stock = stock;
        this.precio = precio;

    }
    
}

const pUno = new Pantalones(1, "Nike", "Negro, gris", 5, 8000);
const pDos = new Pantalones(2, "Adidas", "Negro y rojo. // Negro y blanco", 3, 7500);
const pTres = new Pantalones(3, "Kappa", "Negro y blanco.", 5, 8000);
const pCuatro = new Pantalones(4, "Nike", "Camuflado negro y gris", 7, 8500);


const gorrasArray = [gorraUno, gorraDos, gorraTres, gorraCuatro]; 
const camisetasArray = [camisetaUno, camisetaDos, camisetaTres, camisetaCuatro];
const pantalonesArray = [pUno, pDos, pTres, pCuatro];

const todosLosProd = [...gorrasArray, ...camisetasArray, ...pantalonesArray];

// Array vacío para pushear los productos que ingrese el usuario en el input
let carrito = [];


/** Declaro funciones */

// Funcion para reconocer los productos por su numero de id que ingresa el usuario en el input
function buscarProducto(id) {
    let producto = todosLosProd.find(p => p.id === parseInt(id));
    return producto;
}

// Funcion para mostrar el catalogo en el HTML a través del evento "click"
function mostrarCatalogo() {
    for (const gorra of gorrasArray) {
        let li = document.createElement('li')
        li.innerHTML = `
            <div class="catalogo-css">
                <h2>${gorra.id}. Gorra ${gorra.marca}</h2>
                <p>Colores: ${gorra.colores}</p>
                <p>Unidades disponibles: ${gorra.stock}</p>
                <p>Precio: ${gorra.precio}</p>
            </div>
        `
        gorras.appendChild(li)
    }
    
    for (const pant of pantalonesArray) {
        let li = document.createElement('li')
        li.innerHTML = `
            <div class="catalogo-css">
                <h2>${pant.id}. Jogger ${pant.marca}</h2>
                <p>Colores: ${pant.colores}</p>
                <p>Unidades disponibles: ${pant.stock}</p>
                <p>Precio: ${pant.precio}</p>
            </div>
        `
        pantalones.appendChild(li)
    }
    
    for (const cam of camisetasArray) {
        let li = document.createElement('li')
        li.innerHTML = `
            <div class="catalogo-css">
                <h2>${cam.id}. Camiseta ${cam.marca}</h2>
                <p>${cam.modelo}</p>
                <p>Colores: ${cam.colores}</p>
                <p>Unidades disponibles: ${cam.stock}</p>
                <p>Precio: ${cam.precio}</p>
            </div>
        `
        camisetas.appendChild(li);
    }

    alerta.innerText = `Agrega los productos que desees con su código de articulo que se encuentra a la izquierda`
    
}

/** Defino el DOM */

const catalogo = document.getElementById("catalogo");

const pantalones = document.getElementById("pantalones");

const camisetas = document.getElementById("camisetas");

const gorras = document.getElementById("gorras");

const alerta = document.getElementById("alert");

const agregarProd = document.getElementById("agregarProd");

const agregarProdForm = document.getElementById("agregarProdForm");

const agregarProdInput = document.getElementById("agregarProdInput");

const mostrarProd = document.getElementById("mostrarProd");

const calcularPrecioBtn = document.getElementById("calcularPrecio");

const totalPrecio = document.getElementById("totalPrecio");

/** Eventos */

// Mostrar catálogo en HTML a través del evento "click"
catalogo.addEventListener("click", mostrarCatalogo);

// Mostrar en el HTML el producto seleccionado por el usuario, reconociendolo por el numero de ID que ingresa en el input.
agregarProdForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const id = agregarProdInput.value;
    const productoSelec = buscarProducto(id);
    let descripcion = "";
    if (productoSelec.categoria === "gorras") {
      descripcion = `Gorra ${productoSelec.marca}. Colores: ${productoSelec.colores}. Unidades disponibles: ${productoSelec.stock}. Precio: $${productoSelec.precio}`;
    } else if (productoSelec.categoria === "camiseta") {
      descripcion = `Camiseta ${productoSelec.marca} ${productoSelec.modelo}. Colores: ${productoSelec.colores}. Unidades disponibles: ${productoSelec.stock}. Precio: $${productoSelec.precio}`;
    } else if (productoSelec.categoria === "pantalones") {
      descripcion = `Jogger ${productoSelec.marca}. Colores: ${productoSelec.colores}. Unidades disponibles: ${productoSelec.stock}. Precio: $${productoSelec.precio}`;
    }
    if (descripcion) {
        mostrarProd.innerHTML += `<li>${descripcion}</li>`
        carrito.push(productoSelec);
        let total = carrito.reduce((acc, prod) => acc + prod.precio, 0);
        console.log(carrito)
        localStorage.setItem("productos-seleccionados",carrito); // Guardamos en el localStorage los productos seleccionados por el usuario
        totalPrecio.innerHTML = `Precio total: $${total}`;
        
    } else {
        alert("Ingresa un producto válido.");
    }
    agregarProdInput.focus();
    agregarProdForm.reset();

});


/** Storage & JSON */


// Guardamos el catalogo en el localStorage
const camisetasJSON = JSON.stringify(camisetasArray);
localStorage.setItem("catalogo-camisetas", camisetasJSON);

const pantalonesJSON = JSON.stringify(pantalonesArray);
localStorage.setItem("catalogo-pantalones", pantalonesJSON);

const gorrasJSON = JSON.stringify(gorrasArray);
localStorage.setItem("catalogo-gorras", gorrasJSON)
