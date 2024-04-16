let searchBox = document.querySelector(".search-box");
document.querySelector("#search-btn").addEventListener("click", toggleSearchBox);
document.querySelector("#search-btn").addEventListener("touchstart", toggleSearchBox);

let shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-btn").addEventListener("click", toggleShoppingCart);
document.querySelector("#shopping-cart-btn").addEventListener("touchstart", toggleShoppingCart);

let signIn = document.querySelector(".sign-in");
document.querySelector("#profile-btn").addEventListener("click", toggleSignIn);
document.querySelector("#profile-btn").addEventListener("touchstart", toggleSignIn);

let menu = document.querySelector(".navbar");
document.querySelector("#menu-btn").addEventListener("click", toggleMenu);
document.querySelector("#menu-btn").addEventListener("touchstart", toggleMenu);

window.onscroll = () => {
	searchBox.classList.remove("active");
	shoppingCart.classList.remove("active");
	signIn.classList.remove("active");
	menu.classList.remove("active");
};

function toggleSearchBox() {
	searchBox.classList.toggle("active");
	shoppingCart.classList.remove("active");
	signIn.classList.remove("active");
	menu.classList.remove("active");
}

function toggleShoppingCart() {
	shoppingCart.classList.toggle("active");
	searchBox.classList.remove("active");
	signIn.classList.remove("active");
	menu.classList.remove("active");
}

function toggleSignIn() {
	signIn.classList.toggle("active");
	searchBox.classList.remove("active");
	shoppingCart.classList.remove("active");
	menu.classList.remove("active");
}

function toggleMenu() {
	menu.classList.toggle("active");
	searchBox.classList.remove("active");
	shoppingCart.classList.remove("active");
	signIn.classList.remove("active");
}
