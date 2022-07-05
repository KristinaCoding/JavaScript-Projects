//calling function and creating a variable
function countdown(){
  var seconds= document.getElementById("seconds").value;
//nested function with second showing it needs to count from the number given -1
  function tick(){
      seconds = seconds -1;
      //display text connecting it with HTML
      timer.innerHTML = seconds;
      setTimeout (tick, 1000);
      //conditional statetment with text howing if 0
      if (seconds == -1) {
          alert("Time`s up!");
      }
  }
  tick();
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}