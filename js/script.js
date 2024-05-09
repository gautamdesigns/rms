let menu = document.querySelector(".navbar");
document.querySelector("#menu-btn").onclick = () => {
	menu.classList.toggle("active");
};
window.onscroll = () => {
	menu.classList.remove("active");
};
