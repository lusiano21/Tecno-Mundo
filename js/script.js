//Variables//
ordenA = []
ordenP$ = []
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
let catalogo = document.getElementById("catalogo");
//Fucniones//

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
                  background: "linear-gradient(to right, #00c1a9, #559f93)",
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
        const item = productos.filter ((producto) => {
                return producto.categoria == id
        })        
        cartas(item)
}
function findC(lista){
        if(event.keyCode == 13){  
        categorias = lista.filter((el) => el.categoria.toUpperCase() == inputcategoria.value.toUpperCase() || el.producto.toUpperCase() == inputcategoria.value.toUpperCase())
        if(inputcategoria.value.length === 0){
           cartas(lista)
        }else if(categorias.length == 0){
                Toastify({
                        text: "Ahora mismo no tenemos lo que esta buscando",
                        className:"info",
                        style: {
                          background: "linear-gradient(to right, #00c1a9, #559f93)",
                        }
                      }).showToast();
        }
        else{
           cartas(categorias)
        }}
}

function orderAZ(listaOrdenAZ){
        listaOrdenAZ.forEach((itemsid) =>{
        const item = productos.find((producto) => {
                return producto.producto == itemsid
        })
        ordenA.push(item)
        })
        cartas(ordenA)
}

function order$(listaPrecio$){
        listaPrecio$.forEach((itemsid) =>{
        const item = productos.find((producto) => {
                return producto.precio === itemsid
        })
        ordenP$.push(item)
        })
        cartas(ordenP$)
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

productos = []
fetch('../productos.json')
.then((response) => response.json())
.then((info) => {productos = info
        const disponible = productos.filter((el) => el.stock > 0);
        let productosCatalogo = disponible.map((el) => el.producto)
        let productosP$ = disponible.map((el) => el.precio)
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
    loadTrolley()
    renderTrolley()
    cartas(disponible);
inputcategoria.onchange = () => {};
inputcategoria.addEventListener("keydown",() => {findC(disponible)});
cate1.addEventListener("click", filtrar);
cate2.addEventListener("click", filtrar);
cate3.addEventListener("click", filtrar);
cate4.addEventListener("click", filtrar);
filterAZ.addEventListener("click",() => {orderAZ(productosCatalogo)});
filter$.addEventListener("click", () => {order$(productosP$)});
deleteBtn.addEventListener("click", deleteTrolley)
})




let precio = 0;
const iva = x => x * 0.21;
const precioTotal = function (total){
        totalprecio = total + iva(total)
        return totalprecio;
}

