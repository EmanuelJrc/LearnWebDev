// Define navbar
let navbar = document.querySelector(".header .navbar");

// Open menu
document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.add("active");
};

// Close menu
document.querySelector("#close-navbar").onclick = () => {
  navbar.classList.remove("active");
};
