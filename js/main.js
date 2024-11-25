/*  Instrucciones del TPO2
    - Respondan a las preguntas por orden
    - Se valorará un código limpio, bien comentado, separado por comentarios en bloques, etc 
*/




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
*/




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
// 1: Almacenar muestros nombres
const grupo = {
    nombre: "Grupo 2",
    integrantes: ["Jean Pierre Michel Kong", "Cristian Velazquez", "Roberto Barragan", "William Romero"]
};

// Mostrar el nombre del grupo en el nav
document.querySelector('.nombreGrupo').textContent = grupo.nombre;

// Mostrar el nombre del grupo en la consola
console.log(grupo.nombre);


/*  PREGUNTA 4_____________
    Creen una función para imprimir en pantalla los productos del array de objetos y agreguenla a la funcion inicializadora
    El html que deben agregar debe tener el siguiente esquema (para que se apliquen los estilos)

        <div class="product-card">
            <img src="" alt="">
            <h3></h3>
            <p>$</p>
            <button class="add-to-cart">Agregar a carrito</button>
        </div>
*/

let cuadriculaProductos = document.querySelector(".product-grid");
let barraBusqueda = document.querySelector(".search-bar");
let botonesCarrito = document.querySelector(".add-to-cart");
let objetosCarrito = document.querySelector(".cart-items");
let precioCarrito = document.querySelector(".total-prize");
let contadoCarrito = document.querySelector(".cart-count");

let carrito = [];


function mostrarProductos(array) {
    let cartaProducto = "";

    for (let i = 0; i < array.length; i++){
        cartaProducto += `
        <div class ="product-card">
            <img src="${array[i].img} " alt="${array[i].nombre}">
            <h3>${array[i].nombre}</h3>
            <p>$${array[i].precio}</p>
            <button class"add-to-cart">Agregar a carrito</button>
        </div>
        `
    }
    cuadriculaProductos.innerHTML = cartaProducto;
}



/*  OPCIONAL / PREGUNTA 5_____________
    Escriban una función filtro, por ejemplo, asociada a un evento keyup, que recoja los valores del campo input y ejecute con cada evento un filtro que actualice los productos
*/

function filtroProductos() {
    const keywords = barraBusqueda.value.toLowerCase();
    const productosFiltrados = productosFruteria.filter(producto =>
        producto.nombre.toLowerCase().includes(keywords)
    );
    mostrarProductos(productosFiltrados);
}




/*  OPCIONAL / PREGUNTAS 6 y 7_____________

    1. Elaboren la funcionalidad de carrito. Agreguen funcionalidad al boton de cada producto para introducir ese elemento en un contenedor de carrito e imprimirlo en el listado con id "cart-items"" del HTML

    El HTML que deben agregar debe seguir el siguiente esquema (para que se apliquen los estilos)

    <li class="item-block">
        <p class="item-name">nombreproducto - $precioproducto</p>
        <button class="delete-button">Eliminar</button>
    </li>

    2. Se valorará que se almacenen los productos del carrito en un localStorage
*/



// Funcion inicializadora

function init() {
        mostrarProductos(productosFruteria);
}

init();
barraBusqueda.addEventListener("keyup", filtroProductos);

