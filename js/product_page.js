/*Default Coding*/
let menu = document.querySelector(".navbar");
document.querySelector("#menu-btn").onclick = () => {
	menu.classList.toggle("active");
};
window.onscroll = () => {
	menu.classList.remove("active");
};
/*PopUp Coding*/
const toggleModal = () => {
	const bodyClassList = document.body.classList;
	if (bodyClassList.contains("open")) {
		bodyClassList.remove("open");
		bodyClassList.add("closed");
		document.getElementById("radio1").checked = true;
		resetSlider();
	} else {
		bodyClassList.remove("closed");
		bodyClassList.add("open");
		document.getElementById("radio1").checked = true;
	}
};

const close = document.getElementById("close");
close.addEventListener("click", function () {
	const bodyClassList = document.body.classList;
	bodyClassList.remove("open");
	bodyClassList.add("closed");
	document.getElementById("radio1").checked = true;
	resetSlider();
});

var counter = 1;
var intervalId;
var startX = 0;
var isDragging = false;

function startSlider() {
	intervalId = setInterval(function () {
		if (!isDragging) {
			document.getElementById("radio" + counter).checked = true;
			counter = counter > 7 ? 1 : counter + 1;
		}
	}, 3000);
}

function resetSlider() {
	clearInterval(intervalId);
	counter = 1;
	startSlider();
}

startSlider();

document.querySelectorAll(".manual-btn").forEach(function (btn, index) {
	btn.addEventListener("click", function () {
		clearInterval(intervalId);
		counter = index + 1;
		document.getElementById("radio" + counter).checked = true;
		startSlider();
	});
});

var slideContainer = document.querySelector(".slides");
slideContainer.addEventListener("mousedown", handleDragStart);
slideContainer.addEventListener("touchstart", handleDragStart);

slideContainer.addEventListener("mousemove", handleDrag);
slideContainer.addEventListener("touchmove", handleDrag);

slideContainer.addEventListener("mouseup", handleDragEnd);
slideContainer.addEventListener("touchend", handleDragEnd);

function handleDragStart(event) {
	clearInterval(intervalId);
	startX =
		event.type === "mousedown" ? event.clientX : event.touches[0].clientX;
	isDragging = true;
}
function handleDrag(event) {
	if (isDragging) {
		var endX =
			event.type === "mousemove"
				? event.clientX
				: event.touches[0].clientX;
		if (Math.abs(startX - endX) > 50) {
			isDragging = false;
			if (startX - endX > 50) {
				counter = counter > 7 ? 1 : counter + 1;
			} else if (endX - startX > 50) {
				counter = counter === 1 ? 8 : counter - 1;
			}
			document.getElementById("radio" + counter).checked = true;
		}
	}
}

function handleDragEnd() {
	isDragging = false;
	startSlider();
}

/*BactToTop Coding*/
document.addEventListener("DOMContentLoaded", function () {
	const backtotop = document.getElementById("back-to-top-btn");
	backtotop.style.display = "none";
	window.addEventListener("scroll", function () {
		if (window.scrollY > 300) {
			backtotop.style.display = "block";
		} else {
			backtotop.style.display = "none";
		}
	});

	backtotop.addEventListener("click", function () {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	});
});
