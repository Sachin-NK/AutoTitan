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
 const header = document.querySelector('.header');
 const menuBtn = document.querySelector('#menu-btn');
 const navbar = document.querySelector('.navbar');
 
 menuBtn.addEventListener('click', () => {
   navbar.classList.toggle('active');
   menuBtn.classList.toggle('fa-xmark');
 });