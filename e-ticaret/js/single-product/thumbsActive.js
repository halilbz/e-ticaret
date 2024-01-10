export function thumbsActiveFunc(){
    const thumbs = document.querySelectorAll(".gallery-thumbs .img-fluid");
    const singleImage =document.querySelector("#single-image");
    //küçük resmin classına ulaşıp. for yardımı ile tıklanınca source kısmını değiştik
    thumbs.forEach((item)=>{ 
        item.classList.remove("active");
        item.addEventListener("click",function(){
            thumbs.forEach((image) => {
                image.classList.remove("active");
              });
            singleImage.src =item.src;
            item.classList.add("active");
        });
    });
    
   
}