function productRoute() {
    const resultItemDOM = document.querySelectorAll(
      ".search-result .result-item"
    );
    
    resultItemDOM.forEach((item) => {
      item.addEventListener("click", (e) => {
        
        const id = item.dataset.id;
        if (id) {
          localStorage.setItem("productId", JSON.stringify(id));
          window.location.href = "single-product.html";
        }
      });
    });
  }

  function searchFunc(products) {
    const searchWrapperDOM = document.querySelector(".search-result .results");
    let result = "";
    products.forEach((item) => {
      result += `
      <a href="#" class="result-item" data-id=${item.id}>
          <img src=${item.img.singleImage} class="search-thumb" alt="">
          <div class="search-info">
              <h4>${item.name}</h4>
              <span class="search-sku">SKU: PD0016</span>
              <span class="search-price">$${item.price.newPrice.toFixed(2)}</span>
          </div>
      </a>
      `;
    });

    searchWrapperDOM.innerHTML = result;
    productRoute();


    const inputSearcDOM = document.querySelector(".search-form input");
    let value="";
    let filtered=[];
    inputSearcDOM.addEventListener("input",(e)=>{
        value=e.target.value.trim().toLowerCase();
        value=value.trim().toLowerCase();
        //burada filter ile arraya ismi yazılı ürünü boşluk,küçük yaptık ve inc ile aldık.
        filtered = products.filter((item)=> item.name.trim().toLowerCase().includes(value));
        let result="";
        if(filtered.length >1){
            searchWrapperDOM.style.gridTemplateColumns ="1fr 1fr";
            filtered.forEach((item)=> {
                result += `
          <a href="#" class="result-item" data-id=${item.id}>
              <img src=${item.img.singleImage} class="search-thumb" alt="">
              <div class="search-info">
                  <h4>${item.name}</h4>
                  <span class="search-sku">SKU: PD0016</span>
                  <span class="search-price">$${item.price.newPrice.toFixed(2)}</span>
              </div>
          </a>
          `;
            });
            searchWrapperDOM.innerHTML = result;
        }
        else if (filtered.length <2){
            searchWrapperDOM.style.gridTemplateColumns ="1fr";
            if(filtered ==0){
               
                searchWrapperDOM.innerHTML="Aradığınız ürün bulunamadı.."
            
            }
            else{
                
                filtered.forEach((item)=> {
                    result += `
              <a href="#" class="result-item" data-id=${item.id}>
                  <img src=${item.img.singleImage} class="search-thumb" alt="">
                  <div class="search-info">
                      <h4>${item.name}</h4>
                      <span class="search-sku">SKU: PD0016</span>
                      <span class="search-price">$${item.price.newPrice.toFixed(2)}</span>
                  </div>
              </a>
              `;
                });
                searchWrapperDOM.innerHTML = result;
            }
         
        }
       
      
        
        productRoute();
    });
    
}

export default searchFunc;//böyle çağırmamızın sebebi main den ürünleri gönderdik