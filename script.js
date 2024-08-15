
// function toggleMenu() {
//     const menu = document.querySelector(".menu-links");
//     const icon = document.querySelector(".hamburger-icon");
//     menu.classList.toggle("open");
//     icon.classList.toggle("open");
//   }
  
function toggleMenu() {
  var menu = document.querySelector('.menu-links');
  var menuIcon = document.querySelector('.menu-icon');
  var cancelIcon = document.querySelector('.cancel-icon');

  menu.classList.toggle('open');
  menuIcon.style.display = menuIcon.style.display === 'none' ? 'block' : 'none';
  cancelIcon.style.display = cancelIcon.style.display === 'block' ? 'none' : 'block';
}

  // document.getElementById('hamburger').addEventListener('click', function() {
  //   var navLinks = document.getElementById('nav-links-mobile');
  //   if (navLinks.style.display === 'flex') {
  //     navLinks.style.display = 'none';
  //   } else {
  //     navLinks.style.display = 'flex';
  //     navLinks.style.flexDirection = 'column';
  //   }
  // });
  
