const navbarlinks = document.getElementsByClassName("navbar-links");

function toggleNav() {
  if (navbarlinks[0].classList.contains("active")) {
    navbarlinks[0].classList.remove("active");
  } else {
    navbarlinks[0].classList.add("active");
  }
}

// window.onload = function() {
//   toggleButton.addEventListener("click", () => {
//     navbarlinks.classList.toggle("active");
//     console.log("Clicked!");
//   });
// };
