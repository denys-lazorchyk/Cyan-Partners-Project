const menu = document.querySelector("#menu-icon");
const menu__container = document.querySelector(".menu__container");
const menu__text = document.querySelector(".menu__logo p");

menu.addEventListener("click", () => {
	menu.classList.toggle("open");
	menu__container.classList.toggle("active");

	if (menu.classList.contains("open")) {
		menu__text.textContent = "Close";

		if (window.innerWidth <= 1024) {
			document.body.style.overflow = "hidden";
		}
	} else {
		menu__text.textContent = "Menu";

		if (window.innerWidth <= 1024) {
			document.body.style.overflow = "scroll";
		}
	}
});
