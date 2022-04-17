let locationIcon = document.querySelector(".locationIcon__main");
let address = document.querySelector(".showLocation");

locationIcon.addEventListener("mouseover", showAddress);
locationIcon.addEventListener("mouseout", showAddress);
address.addEventListener("mouseover", showAddress);
address.addEventListener("mouseout", showAddress);

function showAddress(e) {
  e.type === "mouseover"
    ? (address.style.display = "flex")
    : (address.style.display = "none");
}

let createCallIcon = document.querySelector(".createCallIcon__main");
let createCall = document.querySelector(".createCall");

createCallIcon.addEventListener("mouseover", showCallmaker);
createCallIcon.addEventListener("mouseout", showCallmaker);
createCall.addEventListener("mouseover", showCallmaker);
createCall.addEventListener("mouseout", showCallmaker);

function showCallmaker(e) {
  e.type === "mouseover"
    ? (createCall.style.display = "flex")
    : (createCall.style.display = "none");
}

let mobileMenuBtn = document.querySelector(".mobile-menu-btn");
let mobileMenu = document.querySelector(".header_nav__mobile");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.style.display === "none"
    ? (mobileMenu.style.display = "block")
    : (mobileMenu.style.display = "none");
});
