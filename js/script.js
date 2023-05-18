//Creaciacion de obajetos//
function Productos(id, categoria, producto, imagen, precio, stock){
        this.id = id;
        this.categoria = categoria; 
        this.producto = producto;
        this.imagen = imagen;
        this.precio = precio;
        this.stock = stock;
        this.restarstock = function() {
                this.stock -= cantidad
        };
}
const productoF = new Productos (1, "Celular", "Funda celular", "../images/fundas-C.png", 350, 20)
const productoA = new Productos (2, "Computadora", "Auriculares gamer", "../images/auricularG.png", 2500, 50)
const productoM = new Productos (3, "Computadora","Mause gamer", "../images/mausseG.png", 2000, 45)
const productoT = new Productos (4, "Computadora","Teclado gamer", "../images/tecladoG.png", 1500, 35)
const productoSG = new Productos (5,"Computadora", "Silla gamer", "../images/sillaG.png", 50000, 25)
const productos = [productoF, productoA, productoM, productoT, productoSG]
const disponibles = productos.filter((el) => el.stock > 0);
const productosCatalogo = disponibles.map((el) => el.producto)
//Variables//
trolley = [];
let categorias = "";
//DOM//
let trolleyList = document.getElementById("trolley-list")
let inputcategoria = document.getElementById("categoria");
let menuBtn = document.getElementById("btn-menu");
let deleteBtn = document.getElementById("btn-delete");
let valueTotalList = document.getElementById("totalvalue");
//Fucniones//
let catalogo = document.getElementById("catalogo");
function cartas(cata){
        catalogo.innerHTML = ""
        for (const produc of cata){
                let card = document.createElement("div");
                card.className = "card";
                let cardBody = document.createElement("div")
                cardBody.className = "card-body"
                cardBody.innerHTML =  `<img src="${produc.imagen}" class="card-img-top" alt="${produc.producto}">
                                       <h5 class="card-title">${produc.producto}</h5>
                                       <p class="card-text">${produc.precio}$</p>
                                       <p class="card-text">Stock: ${produc.stock}</p>`;
                let cardBotton = document.createElement("button");
                cardBotton.className = "btn-c"
                cardBotton.innerText = "Comprar"
                cardBotton.setAttribute("mark", produc.id)
                cardBotton.addEventListener("click",addCartToTrolley)
                cardBody.append(cardBotton)
                card.append(cardBody)
                catalogo.append(card);
        }
}
function addCartToTrolley(event){
        trolley.push(event.target.getAttribute("mark"))
        renderTrolley()
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
        linea.className = "list-group-item"
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
        const enter = event.key.toLowerCase();
        if(enter == "enter"){
        let categoriasDisponibles = disponibles.filter((el) => el.categoria.toUpperCase() == categorias.toUpperCase());
        console.log(inputcategoria.value)        
        cartas(categoriasDisponibles)      
        }
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
menuBtn.addEventListener("click", () => {cartas(disponibles)});
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