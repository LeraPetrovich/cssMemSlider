/*индекс слайда по умолчанию */
var slideIndex=1;
showSlides(slideIndex);
/*Функция увеличивает индекс на 1, показывает следующий слайд*/
function plusSlide(){
    showSlides(slideIndex+=1);
}
/*функция уменьшает индекс на 1, показывает предыдущий слайд*/
function minusSlide(){
    showSlides(slideIndex-=1);
}

/*установка текущий слайд*/
function currentSlide(n){
    showSlides(slideIndex=n);
}

/*основная функция слайдера*/
function showSlides(n){
    var i;
    var slides=document.getElementsByClassName("Slide");
    var dots=document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
        slideIndex = 1
      }
      if (n < 1) {
          slideIndex = slides.length
      }
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
}