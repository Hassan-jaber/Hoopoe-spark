

// let preloader = document.getElementById("preloader")

// window.addEventListener(("load"), _ =>{
//     setTimeout(() => {
//         preloader.style.display="none"
//     }, 3000);
// })


window.addEventListener('load', function() {
    window.addEventListener('scroll', function() {
      var scroll_top = document.documentElement.scrollTop || document.body.scrollTop,
          scroll_top_w = scroll_top + window.innerHeight,
          scroll_top_w2 = scroll_top + (window.innerHeight / 2);
  
      var siteHeader = document.querySelector('.box3');
      if (scroll_top > 50) {
        siteHeader.classList.add('fixed');
      } else {
        siteHeader.classList.remove('fixed');
      }
    });
  });

// -------------------

// Get all elements with class name "nav-link"
const navLinks = document.querySelectorAll('.nav-link');

// Add click event listener to each nav-link
navLinks.forEach(navLink => {
  navLink.addEventListener('click', function() {
    // Remove "active" class from all nav-links
    navLinks.forEach(link => {
      link.classList.remove('active');
    });

    // Add "active" class to the clicked nav-link
    this.classList.add('active');
  });
});
