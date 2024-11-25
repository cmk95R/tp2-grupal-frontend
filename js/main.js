/*  Instrucciones del TPO2
    - Respondan a las preguntas por orden
    - Se valorará un código limpio, bien comentado, separado por comentarios en bloques, etc 
*/

let cuadriculaProductos = document.querySelector(".product-grid");
let barraBusqueda = document.querySelector(".search-bar");
let botonesCarrito = document.querySelector(".add-to-cart");
let objetosCarrito = document.querySelector(".cart-items");
let precioCarrito = document.querySelector(".total-prize");
let contadoCarrito = document.querySelector(".cart-count");


/*  PREGUNTA 1_____________
    En este TPO2 tendremos que crear un frontend de una tienda de frutas* 

    *pueden modificarlo o cambiar la temática o hacer lo que quieran libremente
    
    Para ello disponemos ya del HTML y el CSS prearmado. Entonces desde JavaScript deberemos:

    1. Almacenar nuestros datos en un objeto e imprimir el nombre del grupo en la consola y en el nav:
        <div class="nombreGrupo"></div>

    2. Crear un array de objetos a partir de las frutas de la carpeta img (o de los elementos que prefieran, temática libre)

    3. Imprimir esos objetos por pantalla, deberemos agregar esa funcion a la funcion inicializadora

    4. OPCIONAL 1 / Realizar una función filtro que mediante un evento como keyup recoja los datos del input y filtre los productos que contengan esos valores

    5. OPCIONAL 2 / Realizar la funcionalidad de carrito

    6. OPCIONAL 3 / Hacer que esa memoria sea persistente guardando los elementos del carrito en localStorage


    Como un mapa mental, escriban con sus palabras el razonamiento con el tienen pensado elaborar cada pregunta
    Qué tienen pensado hacer en cada uno de estos pasos, qué métodos van a elegir y por qué.


    ______________________

    Escriban acá su razonamiento y explicación de todo tu proceso

    1)  Crear un objeto grupo con los datos del equipo (nombre y miembros).
        Utilizar console.log para imprimirlo en consola.
        Seleccionar el elemento .nombreGrupo con querySelector y actualizar su contenido con innerHTML o textContent.

    2)  Necesitamos un array que almacene los productos de la tienda. Cada producto será representado como un objeto con 
        propiedades como id, nombre, precio y img para simplificar su uso en las funciones posteriores

    3)  Iterar el array con forEach.
        Generar dinámicamente elementos HTML (div, img, p) para cada producto.
        Integrar esta funcionalidad en una función inicializadora.
    
    4)  Capturar el evento keyup en el input de búsqueda.
        Comparar el valor del input con los nombres del array usando filter.
        Actualizar dinámicamente la lista de productos mostrados.

    5)  Crear un array carrito para almacenar los productos seleccionados.
        Añadir un botón "Agregar al carrito" para cada producto.
        Escuchar el clic (onclick) en este botón y agregar el producto al array.
        Mostrar los productos del carrito en la sección carrito.

    6)  nada xd
*/


/* 1. Almacenar nuestros datos en un objeto e imprimir el nombre del grupo en la consola y en el nav:
    <div class="nombreGrupo"></div>*/
const grupo = {
    nombre: "Grupo 2",
    integrantes: ["Jean Pierre Michel Kong", "Cristian Velazquez", "Roberto Barragan", "William Romero"]
};

// Mostrar el nombre del grupo en el nav
document.querySelector('.nombreGrupo').textContent = grupo.nombre;

// Mostrar el nombre del grupo en la consola
console.log(grupo.nombre);



/*  PREGUNTA 2_____________
    Elaboren un array de objetos con las 10 frutas de la carpeta imágenes (o el producto que hayamos colocado ahí)
    Deben tener como claves: id, nombre, precio y la ruta de la imagen
*/

let productosFruteria = [
    {id:1, nombre: "anana", precio: 35000 , img:"img/anana.jpg"},
    {id:2, nombre: "arandano", precio: 35000 , img:"img/arandano.jpg"},
    {id:3, nombre: "banana", precio: 35000 , img:"img/banana.jpg"},
    {id:4, nombre: "frambuesa", precio: 35000 , img:"img/frambuesa.png"},
    {id:5, nombre: "frutilla", precio: 35000 , img:"img/frutilla.jpg"},
    {id:6, nombre: "kiwi", precio: 35000 , img:"img/kiwi.jpg"},
    {id:7, nombre: "mandarina", precio: 35000 , img:"img/mandarina.jpg"},
    {id:8, nombre: "manzana", precio: 35000 , img:"img/manzana.jpg"},
    {id:9, nombre: "naranja", precio: 35000 , img:"img/naranja.jpg"},
    {id:10, nombre: "pera", precio: 35000 , img:"img/pera.jpg"},
    {id:11, nombre: "pomelo amarillo", precio: 35000 , img:"img/pomelo-amarillo.jpg"},
    {id:12, nombre: "pomelo rojo", precio: 35000 , img:"img/pomelo-rojo.jpg"},
    {id:13, nombre: "sandia", precio: 35000 , img:"img/sandia.jpg"},

];


/*  PREGUNTA 3_____________
    Agreguen a la funcion inicializadora init() una función para imprimir nombre del grupo en el nav y en la consola.
*/
function init() {
    mostrarProductos(productosFruteria);
}

function mostrarProductos(array) {
    let cartaProducto = "";

    for (let i = 0; i < array.length; i++){
        cartaProducto += `
        <div class ="product-card">
            <img src="${array[i].img} " alt="${array[i].nombre}">
            <h3>${array[i].nombre}</h3>
            <p>$${array[i].precio}</p>
            <button class="add-to-cart" onclick="agregarCarrito(${array[i].id})">Agregar a carrito</button>
        </div>
        `;
    }
    cuadriculaProductos.innerHTML = cartaProducto;
}


/* 4. OPCIONAL 1 / Realizar una función filtro que mediante un evento como keyup recoja los datos del input y filtre los productos que contengan esos valores */

function filtroProductos() {
    const keywords = barraBusqueda.value.toLowerCase();
    const productosFiltrados = productosFruteria.filter(producto =>
        producto.nombre.toLowerCase().includes(keywords)
    );
    mostrarProductos(productosFiltrados);
}


/* 5. OPCIONAL 2 / Realizar la funcionalidad de carrito */
let carrito = [];

function agregarCarrito (id){
    console.log(`id del producto: ${id}`);

    let frutaSeleccionada = productosFruteria.find(fruta => fruta.id === id);
    carrito.push(frutaSeleccionada);
    console.log(carrito);

    mostrarCarrito();
}

function mostrarCarrito() {
    let objetosCarrito = document.querySelector("#cart-items");
    let carritoCompra = "";
    let precioTotal = 0;

    carrito.forEach((producto, indice) =>{
        carritoCompra += `
        <li class= "item-block">
            <p class= "item-name"> ${producto.nombre} - $${producto.precio}</p>
            <button class= "delete-button">Eliminar</button>
        </li>
        `;
    });

    objetosCarrito.innerHTML = carritoCompra;
}

/* 6. OPCIONAL 3 / Hacer que esa memoria sea persistente guardando los elementos del carrito en localStorage */


// Funcion inicializadora
init();
barraBusqueda.addEventListener("keyup", filtroProductos);