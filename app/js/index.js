const btnHamburger = document.querySelector("#btnHamburger");
const header = document.querySelector('.header'); 
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener("click", function (e) {
  document.body.classList.toggle('noscroll');
  
  // My overlay solution
  // overlay.classList.toggle('visible')

  if (header.classList.contains('open')) { //Close hamburger menu
    header.classList.remove('open');
    
    fadeElems.forEach(function(elem) {
      elem.classList.remove('fade-in')
      elem.classList.add('fade-out');
    })
  } 
  else { // Open hamburger menu
    header.classList.add('open');
    fadeElems.forEach(function(elem) {
      elem.classList.add('fade-in');
      elem.classList.remove('fade-out');
    }) 
  }

});