let searchBox = document.querySelector(".search-box");
document.querySelector("#search-btn").onclick = () => {
	searchBox.classList.toggle("active");
};
let shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-btn").onclick = () => {
	shoppingCart.classList.toggle("active");
};
