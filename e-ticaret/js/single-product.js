import { thumbsActiveFunc } from "./single-product/thumbsActive.js";

import { singleThumbs } from "./glide.js";
import  zoomFunc  from "./single-product/zoom.js";
import  colorsFunc  from "./single-product/colors.js";
import  valuesDOM  from "./single-product/values.js";
import  tabsFunc  from "./single-product/tabs.js";
import  commentsFunc  from "./single-product/comments.js";








const productId = localStorage.getItem("productId") //id yi aldım localden
? JSON.parse(localStorage.getItem("productId"))
: localStorage.setItem("productId", JSON.stringify(1));


const products = localStorage.getItem("products")
? JSON.parse(localStorage.getItem("products"))      //ürünlerimi aldım localden
: localStorage.setItem("products", JSON.stringify([]))


const findProduct = products.find((item)=> item.id === Number(productId));

//Product Title

const productTitle=document.querySelector(".product-title");
productTitle.innerHTML=findProduct.name;


//Product Price

const newPrice=document.querySelector(".new-price");
const oldPrice=document.querySelector(".old-price");

newPrice.innerHTML=`$${findProduct.price.newPrice.toFixed(2)}`;
newPrice.innerHTML=`$${findProduct.price.oldPrice.toFixed(2)}`;

//Product Gallery

const singleImage=document.querySelector("#single-image");

//resmin src sine ulaş ve değiştir
singleImage.src =findProduct.img.singleImage;


const galleryThumbs = document.querySelector(".gallery-thumbs");
let result=""
findProduct.img.thumbs.forEach((item) => {
  result+= `
 <li class="glide__slide">
  <img src="${item}" alt="" class="img-fluid">
  </li> 
  `;
});

galleryThumbs.innerHTML = result;
singleThumbs();
thumbsActiveFunc();

//ürün ilk geldiğinde ilk küçük resmi seçili yapıyorum
const productThumbs = document.querySelectorAll(
  ".product-thumb .glide__slide img"
);

productThumbs[0].classList.add("active");


//add to cart
let cart = localStorage.getItem("cart") 
? JSON.parse(localStorage.getItem("cart")) 
: [];

const findCart = cart.find((item)=> item.id === findProduct.id);
const addToCartButton = document.getElementById("add-to-cart");
const quantityDOM = document.getElementById("quantity");
let cartItems = document.querySelector(".header-cart-count");//sağ üstteki spet sayısını da güncellicez




if(findCart){
  addToCartButton.setAttribute("disabled","disabled");
}else{
  addToCartButton.addEventListener("click",function(){
    //burada sepete ekle butonunun yanındaki ürün sayısını findproduct ta bir key value gibi ekliyoruz. bu sayede sepete adet sayısını da göndermiş olacağız 
    cart.push({...findProduct, quantity: Number(quantityDOM.value)});
    addToCartButton.setAttribute("disabled","disabled");
    localStorage.setItem("cart",JSON.stringify(cart));//cart ın son halini localstorage kaydediyorum
    cartItems.innerHTML=cart.length;
  });
}