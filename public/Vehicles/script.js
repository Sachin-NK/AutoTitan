  // Get all the links inside the navbar
  var links = document.querySelectorAll('.navbar a');

  // Add click event listeners to each link
  links.forEach(function(link) {
      link.addEventListener('click', function() {
          // Remove 'active' class from all links
          links.forEach(function(innerLink) {
              innerLink.classList.remove('active');
          });

          // Add 'active' class to the clicked link
          link.classList.add('active');
      });
  });
  
let initializeSlider = (sectionNumber) => {
    let wrapper = document.querySelector(`#vehicles_${sectionNumber} .wraper-box`);
    let activeBox = wrapper.querySelectorAll('.box');
    let activeLable = document.querySelector(`#vehicles_${sectionNumber} .activeCircle`).querySelectorAll('.fa-circle');
    let nextBtn = document.querySelector(`#nextBtn_${sectionNumber}`);
    let preBtn = document.querySelector(`#preBtn_${sectionNumber}`);
    let imgInd = 0;
  
    nextBtn.onclick = () => {
      imgInd++;
      changeBox();
    }
  
    preBtn.onclick = () => {
      imgInd--;
      changeBox();
    }
  
    let changeBox = () => {
      if (imgInd > activeBox.length - 1) {
        imgInd = 0;
      } else if (imgInd < 0) {
        imgInd = activeBox.length - 1;
      }
  
      for (let i = 0; i < activeBox.length; i++) {
        if (i === imgInd) {
          activeBox[i].classList.add('active');
          activeLable[i].classList.add('fa-solid');
          if (window.screen.width > 450) {
            wrapper.style.transform = `translateX(${imgInd * -250}px)`;
          }
        } else {
          activeBox[i].classList.remove('active');
          activeLable[i].classList.remove('fa-solid');
        }
      }
    }
  };
  
  // Initialize sliders for each vehicle section
  initializeSlider(1);
  initializeSlider(2);
  initializeSlider(3);
  initializeSlider(4);
  
  const header = document.querySelector('.header');
  const menuBtn = document.querySelector('#menu-btn');
  const navbar = document.querySelector('.navbar');
  
  menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuBtn.classList.toggle('fa-xmark');
  });

  
  // scroll-to-top
document.addEventListener("DOMContentLoaded", function () {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");

  // Show/hide the arrow based on scroll position
  window.onscroll = function () {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          scrollToTopBtn.style.display = "block";
      } else {
          scrollToTopBtn.style.display = "none";
      }
  };

  // Scroll to the top when the arrow is clicked
  scrollToTopBtn.addEventListener("click", function () {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  });
});
