
let cart = localStorage.getItem("cart")
? JSON.parse(localStorage.getItem("cart")) 
: [];





function displayCartFunction() {
    const cartWrapper =document.querySelector(".cart-wrapper");
    let result = "";

    cart.forEach((item) => {
        result += `
        <tr class="cart-item">
        <td></td>
        <td class="cart-image">
            <img src=${item.img.singleImage} alt="">
            <i class="bi bi-x delete-cart" data-id=${item.id}></i>
        </td>
        <td>${item.name} </td>
        <td>$${item.price.newPrice.toFixed(2)} </td>
        <td>${item.quantity} </td>
        <td>$${(item.price.newPrice * item.quantity).toFixed(2)}</td>
    </tr>`;
    });
    cartWrapper.innerHTML = result;
    removeCartItem();
}

displayCartFunction();




function removeCartItem(){
    const btnDeleteCart =document.querySelectorAll(".delete-cart")
    let cartItems = document.querySelector(".header-cart-count");//sağ üstteki spet sayısını da güncellicez
    btnDeleteCart.forEach((button)=>{
        button.addEventListener("click",function(e){
            
            const id =e.target.dataset.id;
            cart= cart.filter((item) => item.id !== Number(id)); //tıkladığım ile benim id eşit değilse
            displayCartFunction();//silince yeniden çağırıp son halini görüyorum
            localStorage.setItem("cart", JSON.stringify(cart));//cart ı da güncelliyorum
            cartItems.innerHTML =cart.length;//sayıyı güncelledik
            saveCartValues(); //silesem aşağıdaki fonk çağır ve güncelle
        });
    });

}

function saveCartValues(){
    const cartTotal = document.getElementById("cart-total")
    const subTotal = document.getElementById("subtotal")
    const fastCargo = document.getElementById("fast-cargo")
    const fastCargoPrice=15;

     let itemsTotal = 0;
    //map array içinde her elamana göre işlem yapmamızı sağlar
     cart.length > 0 && cart.map((item) =>(itemsTotal += item.price.newPrice * item.quantity));

        subTotal.innerHTML = `$${itemsTotal.toFixed(2)}`;
        cartTotal.innerHTML = `$${itemsTotal.toFixed(2)}`;

        

        fastCargo.addEventListener("change",function(e){//hızlı kargo seçerse işlemi para ekle
            if(e.target.checked){
                cartTotal.innerHTML = `$${(itemsTotal + fastCargoPrice).toFixed(2)}`;
            }

            else{
                cartTotal.innerHTML = `$${itemsTotal.toFixed(2)}`;
            }
        });


}

saveCartValues();