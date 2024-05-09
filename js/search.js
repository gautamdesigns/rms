document.addEventListener("DOMContentLoaded", function () {
	const menu = document.querySelector(".navbar");
	const menuBtn = document.querySelector("#menu-btn");
	const grocerySelector = document.getElementById("grocery");
	const fruitsAndVegetablesSelector = document.getElementById(
		"fruits-and-vegetables"
	);
	const groceryProducts = document.getElementById("grocery-products");
	const fruitsAndVegetablesProducts = document.getElementById(
		"fruits-and-vegetables-products"
	);
	const backtotop = document.getElementById("back-to-top-btn");

	menuBtn.onclick = () => menu.classList.toggle("active");
	window.onscroll = () => menu.classList.remove("active");

	const toggleProducts = (para, show, hide) => {
		if (para.classList.contains("active")) {
			para.classList.remove("active");
			show.style.display = "grid";
			hide.style.display = "grid";
		} else {
			grocerySelector.classList.remove("active");
			fruitsAndVegetablesSelector.classList.remove("active");
			para.classList.add("active");
			show.style.display = "grid";
			hide.style.display = "none";
		}
	};
	grocerySelector.addEventListener("click", () => {
		toggleProducts(
			grocerySelector,
			groceryProducts,
			fruitsAndVegetablesProducts
		);
	});

	fruitsAndVegetablesSelector.addEventListener("click", () => {
		toggleProducts(
			fruitsAndVegetablesSelector,
			fruitsAndVegetablesProducts,
			groceryProducts
		);
	});
	// Shuffle products
	const shuffleProducts = (container) => {
		const items = Array.from(container.querySelectorAll(".box"));
		shuffle(items);
		items.forEach((item) => container.appendChild(item));
	};

	const shuffle = (array) => {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
	};

	shuffleProducts(groceryProducts);
	shuffleProducts(fruitsAndVegetablesProducts);

	// Back to top functionality
	backtotop.style.display = "none";
	window.addEventListener("scroll", () => {
		backtotop.style.display = window.scrollY > 300 ? "block" : "none";
	});

	backtotop.addEventListener("click", () =>
		window.scrollTo({ top: 0, behavior: "smooth" })
	);
});
