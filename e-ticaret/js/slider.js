
    //?------------------

//! slider start
//classname ile ulaştğın elementleri foreach ile dönemiyorsun.3 yöntem ile array çevir.
//queryselector, [ ] , yada Array.from(slides)
/* Array.from(slides).forEach((element)=>{
    console.log(element)
}); */

let slideIndex = 1;
showSlides();

setInterval(() => {
  //4 sn de bir tekrarla
  showSlides((slideIndex += 1));
}, 4000);

function plusSlide(n) {
  //html kısmında buttondan gelen değere göre arttır
  showSlides((slideIndex += n));
}

function currentSlide(n) {//dots için tıklama
  showSlides((slideIndex = n));
}

function showSlides(n) {
  const slides = document.getElementsByClassName("slider-item");
  const dots = document.getElementsByClassName("slider-dot");

  if (n > slides.length) {
    //3 den büyük olmasın
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
}

//! slider end

//export default sliderFunc();