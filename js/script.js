//Creaciacion de obajetos//
const productos = [{
        "id": 1,
        "categoria":"Celular",
        "producto":"Funda celular",
        "imagen":"../images/fundas-C.png",
        "precio": 400,
        "stock": 35,
        "description":"Protege tu celular de golpes y puedes encontrarlo en 2 diferentes estilos: blanco o negro, perfecto para modelos de Iphone 7/7 plus.",
        "marca":"CeluWorld" 
},{
        "id": 2,
        "categoria":"Computadora",
        "producto":"Auriculares gamer",
        "imagen":"../images/auricularG.png",
        "precio": 5000,
        "stock": 35,
        "description": "Con los auriculares gamers VX70, llegó la hora de cambiar la experiencia con tus juegos, gracias a su sonido claro, potente y sus bajos inmersivos.",
        "marca":"Tonet & Vndet" 
},{
        "id": 3,
        "categoria":"Computadora",
        "producto":"Mouse gamer",
        "imagen":"../images/mausseG.png",
        "precio": 3000,
        "stock": 35,
        "description":"Cualquier gamer experimentado conoce la importancia de un buen gaming mouse y aún más si su género favorito son los FPS (Shooters). Por eso te ofresemo MZ700.",
        "marca":"Pro ZC" 
},{
        "id": 4,
        "categoria":"Computadora",
        "producto":"Teclado gamer",
        "imagen":"../images/tecladoG.png",
        "precio": 3500,
        "stock": 35,
        "description": "Si queres sentirte como verdadero gamer no te puede faltar un buen teclado, El TCvol 3 te permite jugar como vos quieras ya que es mecanico.",
        "marca":"Ryzen" 
},{
        "id": 5,
        "categoria":"Computadora",
        "producto":"Silla gamer",
        "imagen":"../images/sillaG.png",
        "precio": 50000,
        "stock": 35,
        "description": "Si queres sentirte comodo la MY20 te va a dar la mejor sensacion de comodidad en el mercado, con asiento reclinable y apoya brazos.",
        "marca":"Myzerus" 
},{
        "id": 6,
        "categoria":"Computadora",
        "producto":"Camara para PC",
        "imagen":"../images/camaraG.png",
        "precio": 8000,
        "stock": 35,
        "description": "Perfecta para reuniones o juntarte con tus amigos, con calidad full hd y con un lente de 128px permite grabar con una mejor resolucion.",
        "marca": "Noga" 
},{
        "id": 7,
        "categoria":"Computadora",
        "producto":"Mouse game LG",
        "imagen":"../images/mosueGLG.png",
        "precio": 2500,
        "stock": 35,
        "description":"Un mouse simple y completo perfecto para los oficinistas y personas que quieren un buen producoto a un mejor precio.",
        "marca": "Logitech" 
},{
        "id": 8,
        "categoria":"Mueble",
        "producto":"Soporte de Auriculares",
        "imagen":"../images/soporteAG.png",
        "precio": 2000,
        "stock": 35,
        "description":"Este soporte proporciona a tu Setup una mejora en cuanto a lo estetico y orden, con luces led y otras funciones te sentiras como un verdadero gamer",
        "marca": "Corseir" 
},{
        "id": 9,
        "categoria":"Mueble",
        "producto":"Escritorio",
        "imagen":"../images/escritorio.png",
        "precio": 15000,
        "stock": 35,
        "description":"Este escritorio es perfecto para las oficionas o personas con gustos simples, posee mucho espacio tanto en la mesa como en los cajones, no te preocupes por la duracion ya que esta hecho con la madera de mejor calidad",
        "marca": "MubGust" 
},{
        "id": 10,
        "categoria":"Consola",
        "producto": "Mando de PlayS",
        "imagen":"../images/mandosG.png",
        "precio": 4500,
        "stock": 35,
        "description": "Funciona tanto en PC como en consolas, con facil agarre no te preocupes por la comodidad, fabricado con los mejores materiales permite un rendimiento eficaz.",
        "marca": "Noga" 
}
]

/*function Productos(id, categoria, producto, imagen, precio, stock, info, marca){
        this.id = id;
        this.categoria = categoria; 
        this.producto = producto;
        this.imagen = imagen;
        this.precio = precio;
        this.stock = stock;
        this.info = info;
        this.marca = marca;
        this.restarstock = function() {
                this.stock -= cantidad
        };
}
const productoF = new Productos (1, "Celular", "Funda celular", "../images/fundas-C.png", 350, 20, "Protege tu celular de golpes y puedes encontrarlo en 2 diferentes estilos: blanco o negro, perfecto para modelos de Iphone 7/7 plus.","CeluWorld" )
const productoA = new Productos (2, "Computadora", "Auriculares gamer", "../images/auricularG.png", 2500, 50, "Con los auriculares gamers VX70, llegó la hora de cambiar la experiencia con tus juegos, gracias a su sonido claro, potente y sus bajos inmersivos.","Tonet & Vender")
const productoM = new Productos (3, "Computadora","Mause gamer", "../images/mausseG.png", 2000, 45, "Cualquier gamer experimentado conoce la importancia de un buen gaming mouse y aún más si su género favorito son los FPS (Shooters). Por eso te ofresemo MZ700.", "Pro ZC")
const productoT = new Productos (4, "Computadora","Teclado gamer", "../images/tecladoG.png", 1500, 35, "Si queres sentirte como verdadero gamer no te puede faltar un buen teclado, El TCvol 3 te permite jugar como vos quieras ya que es mecanico.", "Ryzen")
const productoSG = new Productos (5,"Computadora", "Silla gamer", "../images/sillaG.png", 50000, 25, "Si queres sentirte comodo la MY20 te va a dar la mejor sensacion de comodidad en el mercado, con asiento reclinable y apoya brazos.", "Myzerus")
const productos = [productoF, productoA, productoM, productoT, productoSG]*/
const disponibles = productos.filter((el) => el.stock > 0);
let productosCatalogo = disponibles.map((el) => el.producto)
let productosP$ = disponibles.map((el) => el.precio)
productosP$.sort((a,b) =>a - b)
productosCatalogo.sort((a, b) => {
        if (a > b) {
            return 1;
        }
        if (a < b) {
            return -1;
        }
        // a es igual a b
        return 0;
    })
console.log(productosCatalogo)
//Variables//
trolley = [];
let ids = [];
let categorias = "";
//DOM//
let trolleyList = document.getElementById("trolley-list")
let inputcategoria = document.getElementById("categoria");
let cate1 = document.getElementById("cate-1");
let cate2 = document.getElementById("cate-2");
let cate3 = document.getElementById("cate-3");
let cate4 = document.getElementById("cate-4");
let filter$ = document.getElementById("filter$");
let filterAZ= document.getElementById("filterAZ");
let deleteBtn = document.getElementById("btn-delete");
let valueTotalList = document.getElementById("totalvalue");
//Fucniones//
let catalogo = document.getElementById("catalogo");
function cartas(cata){
        catalogo.innerHTML = ""
        for (const produc of cata){
                let card = document.createElement("div");
                card.className = "card carr";
                card.innerHTML = `<img src="${produc.imagen}" class="card-img-top" alt="${produc.producto}">`
                let cardBody = document.createElement("div")
                cardBody.className = "card-body"
                cardBody.innerHTML =  `
                                       <h5 class="card-title"><strong>${produc.producto}</strong></h5>
                                       <p class="card-text">$${produc.precio}</p>
                                       <p class="card-text">Stock: ${produc.stock}</p>`;
                let blockBotton = document.createElement("div")
                blockBotton.className = " d-flex justify-content-between"
                let cardBotton = document.createElement("button");
                let infocardBotton = document.createElement("button");
                infocardBotton.className = "btn-b"
                infocardBotton.innerText = "Ver"
                infocardBotton.setAttribute("info", produc.id)
                infocardBotton.addEventListener("click",infoCart)
                cardBotton.className = "btn-c"
                cardBotton.innerText = "Comprar"
                cardBotton.setAttribute("mark", produc.id)
                cardBotton.addEventListener("click",addCartToTrolley)
                blockBotton.append(cardBotton)
                blockBotton.append(infocardBotton)
                cardBody.append(blockBotton)
                card.append(cardBody)
                catalogo.append(card);
        }
}
function addCartToTrolley(event){
        trolley.push(event.target.getAttribute("mark"))
        renderTrolley()
        Toastify({
                text: "Se agrago al Carrito",
                className:"info",
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                }
              }).showToast();
}
function infoCart(event){
        let id = event.target.getAttribute("info")
        let item = productos.find ((producto) => {
                return producto.id === parseInt(id)
        })
        console.log(item)
        Swal.fire({
                title: 'Informacion',
                text:`${item.producto}: ${item.description}`,
                footer: `<p>Marca: ${item.marca}</p>`,
                imageUrl: `${item.imagen}`,
                imageHeight: 300,
              
              })
        
}
function renderTrolley(){
        //saveCartToStorage()
        saveTrolley()
        trolleyList.innerHTML = ""
        let cartWhithoudRepeatedElements = [...new Set(trolley)]
        cartWhithoudRepeatedElements.forEach((itemId) => {
                let item = productos.filter ((producto) => {
                        return producto.id === parseInt(itemId)
                })
                let quantity = trolley.reduce((total, id) => {
                        return id === itemId ? total += 1 : total
                }, 0)
        let linea = document.createElement("li");
        linea.className = "list-group-item cartToCarr "
        linea.innerHTML = `<div class="d-flex justify-content-between align-items-start">
                           <div class="ms-2 me-auto">
                           <div class="fw-bold">${item[0].producto}</div>
                             ${item[0].precio}$
                           </div>
                           <span class="badge bg-primary rounded-pill">${quantity}</span>
                           </div>`
        let contbutoonD = document.createElement("div")
        let buttonDelete = document.createElement("button")
        buttonDelete.className = "btn-c"
        buttonDelete.innerText = "Eliminar"
        buttonDelete.dataset.item = itemId
        buttonDelete.addEventListener("click", deleteCart)
        contbutoonD.append(buttonDelete)
        linea.append(contbutoonD)
        trolleyList.append(linea)
        })
        valueTotalList.innerHTML = calculoTotal()+"$"
}
function deleteCart(event){
        let id = event.target.dataset.item
        trolley = trolley.filter((el) => {
                return el != id
        })
        renderTrolley()
}
function deleteTrolley(){
        trolley = [];
        renderTrolley();
}
function calculoTotal(){
        return trolley.reduce((total, ItemId) =>{
            let item = productos.filter((el) => {
                return el.id === parseInt(ItemId) 
            })    
            return total + item[0].precio
        }, 0) 
        
}
function filtrar(event){
        let id = event.target.getAttribute("cate")
        console.log(id)
        let item = productos.filter ((producto) => {
                return producto.categoria === id
        })        
        cartas(item)
        /*
        const enter = event.key.toLowerCase();
        if(enter == "enter"){
        let categoriasDisponibles = disponibles.filter((el) => el.categoria.toUpperCase() == categorias.toUpperCase());
        console.log(inputcategoria.value)        
        cartas(categoriasDisponibles)      
        }*/
}
function orderAZ(){
        orderA = []
        productosCatalogo.forEach((itemsid) =>{
        const item = productos.find((producto) => {
                return producto.producto == itemsid
        })
        orderA.push(item)
        })
        cartas(orderA)
}
function order$(){
        orderP$ = []
        productosP$.forEach((itemsid) =>{
        const item = productos.find((producto) => {
                return producto.precio === itemsid
        })
        orderP$.push(item)
        })
        cartas(orderP$)
}
function saveTrolley(){
        localStorage.setItem("trolley", JSON.stringify(trolley))
}
function loadTrolley(){
        if(localStorage.getItem("trolley") !== null){
           trolley = JSON.parse(localStorage.getItem("trolley"))     
        }
        
}

        

//DOM//
loadTrolley()
renderTrolley()
cartas(disponibles);
inputcategoria.onchange = () =>{categorias = inputcategoria.value};  
inputcategoria.addEventListener("keydown", filtrar);
cate1.addEventListener("click", filtrar);
cate2.addEventListener("click", filtrar);
cate3.addEventListener("click", filtrar);
cate4.addEventListener("click", filtrar);
filterAZ.addEventListener("click", orderAZ);
filter$.addEventListener("click", order$);
//menuBtn.addEventListener("click", () => {cartas(disponibles)});
deleteBtn.addEventListener("click", deleteTrolley)


let precio = 0;
const iva = x => x * 0.21;
const precioTotal = function (total){
        totalprecio = total + iva(total)
        return totalprecio;
}
let cantidad;
function pregunta( producto , cost){

        cantidad = prompt ("¿Cuantas " + producto["producto"] +" queres comprar?");
        console.log(cantidad)
        if(producto["stock"] >= cantidad){
                alert ( "Ok compra realizada, el costo seria " + cantidad * cost + "$")
                precio += cantidad * cost;
                trolley.push( "Cantidad: " + cantidad + " * "+ producto["precio"] + "$ - " + producto["producto"] + " || costo: " + precio);
                producto.restarstock();
        } else {
                console.log(cantidad)
           alert(" Nuestro stock se encuentra limitado, ahora mismo solo contamos con " + producto["stock"] + " unidades.")
        }
}


const items = [
        { name: 'Pikachu', price: 21 },
        { name: 'Charmander', price: 37 },
        { name: 'Pidgey', price: 45 },
        { name: 'Squirtle', price: 60 }
      ]
    items.sort((a, b) => {
        if (a.name > b.name) {
            return 1;
        }
        if (a.name < b.name) {
            return -1;
        }
        // a es igual a b
        return 0;
    })
/*let inicio = prompt("Hola ¿Como estas? Quieres comprar algun producto. Si || No");
while(inicio.toUpperCase() == "SI" ){
        let menu = prompt("Nuestros productos: \n" + productosCatalogo.join("\n") );
        if ( menu == "1" ){
                pregunta(productoF, productoF["precio"]);
                console.log(productoF["stock"])
        } else if ( menu == "2" ){
                pregunta(productoA, productoA["precio"])
               console.log(productoA["stock"])
        } else if ( menu == "3" ){
               pregunta(productoM, productoM["precio"])
               console.log(productoM["stock"])
        } else if ( menu == "4" ){
                pregunta(productoT, productoT["precio"])
                console.log(productoT["stock"])
        } else if ( menu == "5" ){
                pregunta(productoSG, productoSG["precio"])
                console.log(productoSG["stock"])
        } else {
                alert (" Debes ingresar un numero ejemplo: 1 = fundas, 2 = teclados gamer, ...")
        } 
        inicio = prompt("Quieres seguir comprando. Si || No");
}
if(trolley.length == 0){
        alert("OK velva pronto");    
}else{
        let info = prompt("El costo de todos los productos comprados es de: " + precioTotal(precio) + "$ \n¿Quieres mas informacion del costo de los productos?")
    switch(info.toLowerCase()){
    case "si":
            alert("Costo de productos: " + precio + "$ || Costo del IVA: " + iva(precio) + "$ . Total: " + precioTotal(precio) + "$ \n" + " Hay " + carrito.length + " productos en el carrito: \n" + carrito.join("$ \n "))
            break;
            default:
                    console.log(info);      
                    alert("Ok muchas gracias por su compra que lo disfrute")
                }} 
                
                console.log(carrito) 

*/