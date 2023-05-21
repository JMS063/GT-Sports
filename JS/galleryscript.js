// ----------------
let slideIndex = 1;  // initialize slide index variable to 1

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("photogallery"); // get all elements with class "photogallery" and store in variable slides
  let dots = document.getElementsByClassName("slides"); // get all elements with class "slides" and store in variable dots
  let captionText = document.getElementById("caption"); // get element with id "caption" and store in variable captionText
  if (n > slides.length) {slideIndex = 1} // if n is greater than the number of slides, set slideIndex to 1
  if (n < 1) {slideIndex = slides.length} // if n is less than 1, set slideIndex to the number of slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // hide all slides by setting their display property to "none"
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", ""); // remove the "active" class from all dots
  }
  //console.log("slideIndex after bounds check:", slideIndex);
  //console.log("slides check",slides)
  //console.log("slideIndex after bounds check:", slides[slideIndex-1]);
  slides[slideIndex-1].style.display = "block"; // display the current slide by setting its display property to "block"
  dots[slideIndex-1].className += " active"; // add the "active" class to the current dot
  captionText.innerHTML = dots[slideIndex-1].alt; // set the caption text to the alt attribute of the current dot
}


// showSlides(slideIndex);


// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n); // increment slideIndex by n and call showSlides with the new value
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n); // set slideIndex to n and call showSlides with the new value
}


// Call initGalleries function initially to preload the first slide and start the automatic slideshow
window.onload = function() {
  showSlides(1); // call showSlides with initial value of 1 when the window has finished loading
}