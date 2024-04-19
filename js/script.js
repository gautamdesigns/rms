let searchBox = document.querySelector(".search-box");
document.querySelector("#search-btn").onclick = () => {
	searchBox.classList.toggle("active");
	shoppingCart.classList.remove("active");
	signIn.classList.remove("active");
	menu.classList.remove("active");
};
let shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-btn").onclick = () => {
	shoppingCart.classList.toggle("active");
	searchBox.classList.remove("active");
	signIn.classList.remove("active");
	menu.classList.remove("active");
};
let signIn = document.querySelector(".sign-in");
document.querySelector("#profile-btn").onclick = () => {
	signIn.classList.toggle("active");
	searchBox.classList.remove("active");
	shoppingCart.classList.remove("active");
	menu.classList.remove("active");
};
let menu = document.querySelector(".navbar");
document.querySelector("#menu-btn").onclick = () => {
	menu.classList.toggle("active");
	searchBox.classList.remove("active");
	shoppingCart.classList.remove("active");
	signIn.classList.remove("active");
};
window.onscroll = () => {
	searchBox.classList.remove("active");
	shoppingCart.classList.remove("active");
	signIn.classList.remove("active");
	menu.classList.remove("active");
};
