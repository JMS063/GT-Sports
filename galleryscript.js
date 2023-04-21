// ----------------
let slideIndex = 1;

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("photogallery");
  let dots = document.getElementsByClassName("slides");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  //console.log("slideIndex after bounds check:", slideIndex);
  //console.log("slides check",slides)
  //console.log("slideIndex after bounds check:", slides[slideIndex-1]);
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}


// showSlides(slideIndex);


// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}


// Call initGalleries function initially to preload the first slide and start the automatic slideshow
window.onload = function() {
  showSlides(1);
}