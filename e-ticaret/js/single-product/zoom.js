function zoomFunc(){
    const singleImage =document.querySelector("#single-image");
    const singleImageWrapper =document.querySelector(".single-image-wrapper");

    singleImageWrapper.addEventListener("mousemove",function(e){//mause gezinirken kordinat alıyorum
        const x= e.clientX - e.target.offsetLeft;
        const y= e.clientY - e.target.offsetTop;

        singleImage.style.transformOrigin = `${x}px ${y}px`;//px el px el büyüsün diye
        singleImage.style.transform="scale(5)";
    });

    singleImageWrapper.addEventListener("mouseleave",function(){
        singleImage.style.transformOrigin = `center`;

        singleImage.style.transform="scale(1)";
    });
}

export default zoomFunc();//hem export yap hem çağır