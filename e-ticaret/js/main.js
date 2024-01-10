import headerFunc from "./header.js";
import productsFunc from "./products.js";
import searchFunc from "./search.js";



//! add product to localStorage start
async function getData() {
  const photos = await fetch("../js/data.json");
  const data = await photos.json();

  data ? localStorage.setItem("products", JSON.stringify(data)) : [];
  productsFunc(data);//sayfa yüklenirken ürünler gelmediğinden çağırdık
  searchFunc(data);
}

getData();

//! add product to localStorage end

//! add cartitems to localStorage start

const cartItems = document.querySelector(".header-cart-count");

cartItems.innerHTML = localStorage.getItem("cart") //sayfa yüklendiğinde cart ta eleman varsa cart uzunluğunu yukarda aldığım elementin html ine yaz
 ? JSON.parse(localStorage.getItem("cart")).length : "0";

 //! add cartitems to localStorage end


 //! modal dialog start
const modalDialog = document.querySelector(".modal-dialog")
const modalDialogContent = document.querySelector(".modal-dialog .modal-content")
console.log(modalDialogContent);

const modalDialogClose = document.querySelector(".modal-dialog .modal-close")
 modalDialogClose.addEventListener("click",function(){
  modalDialog.classList.remove("show")

 });

document.addEventListener("click",function(event){
if(!event.composedPath().includes(modalDialogContent)){
  modalDialog.classList.remove("show")
}
})

 setTimeout(()=>{
  modalDialog.classList.add("show")
 },3000)
  //! modal dialog end