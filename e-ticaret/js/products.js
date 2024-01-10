import {
  product1
} from "./glide.js";

/* let products = localStorage.getItem("products") ?   global yaptık diziyi 
JSON.parse(localStorage.getItem("products")) :
[]; //localden aldım kullanıyorum  */


let cart = localStorage.getItem("cart")
? JSON.parse(localStorage.getItem("cart")) 
: [];




function addToCart(products) {
  const cartItems = document.querySelector(".header-cart-count");
  const buttons = [...document.getElementsByClassName("add-to-cart")]; /* array yapmak için böyle aldık */
  buttons.forEach((button) => {
    const inCart = cart.find((item) => item.id === Number(button.dataset.id));
    if(inCart){
      button.setAttribute("disabled","disabled");
    }
    else{
      /* arrya olarak gelen butonları dolaş */
    button.addEventListener("click", function (e) { //butona tıklarsam
      e.preventDefault(); //sayfa yenilenmesini engelle
      const id = e.target.dataset.id; //ürüne verdiğim id yakalıyorum
      const findProduct = products.find((product) => product.id === Number(id)); //yukarda yakaladığım id ile ürünlerden tıkladığım butonun id si eşise dedim
      cart.push({
        ...findProduct,
        quantity: 1
      }); //cart listesine ekle diyorum. spread... yayma ile çağırdım birde değer verdim.quan
      localStorage.setItem("cart", JSON.stringify(cart)); //locale attık
      button.setAttribute("disabled","disabled");
      cartItems.innerHTML = cart.length;
    });
    }
    
  });
}

function productRoute(){
const productLink =document.getElementsByClassName("product-link");
Array.from(productLink).forEach((button)=>{
  button.addEventListener("click",function(e){
    e.preventDefault();//sayfayı yenileme tıkladığımda
    const id =e.target.dataset.id;//id yi aldım
    localStorage.setItem("productId",JSON.stringify(id)); //locale productid diye kaydet dedim
    window.location.href= "single-product.html";
  });
});

}

function productsFunc(products) {
  
  const productsContainer = document.getElementById("product-list");

  let results = "";
  products.forEach((item) => { //aldığım elamanları indeximden li alarak dönüyorm
    results += `<li class="product-item glide__slide">
        <div class="product-image">
          <a href="#">
            <img src="${item.img.singleImage}" alt="" class="img1">
            <img src="${item.img.thumbs[1]}" alt="" class="img2">
          </a>
        </div>
        <div class="product-info">
          <a href="$" class="product-title">${item.name}</a>
          <ul class="product-star">
            <li>
              <i class="bi bi-star-fill"></i>
            </li>
            <li>
              <i class="bi bi-star-fill"></i>
            </li>
            <li>
              <i class="bi bi-star-fill"></i>
            </li>
            <li>
              <i class="bi bi-star-fill"></i>
            </li>
            <li>
              <i class="bi bi-star-half"></i>
            </li>
          </ul>
          <div class="product-prices">
            <strong class="new-price">$${item.price.newPrice.toFixed(2)}</strong>
            <span class="old-price">$${item.price.oldPrice.toFixed(2)}</span>
          </div>
          <span class="product-discount">-${item.discount}%</span>
          <div class="product-links">
            <button class="add-to-cart" data-id=${item.id}>
              <i class="bi bi-basket-fill"></i>
            </button>
            <button>
              <i class="bi bi-heart-fill"></i>
            </button>
            <a href="#" class="product-link" data-id=${item.id}>
              <i class="bi bi-eye-fill"></i>
            </a>
            <a href="#">
              <i class="bi bi-share-fill"></i>
            </a>
          </div>
        </div>
      </li>
        `;
        productsContainer ? (productsContainer.innerHTML = results) : "";
    addToCart(products)
  });
  product1(); /* ürünle geldikten sonra çağırıyoruz. */
  productRoute();
}
export default productsFunc;