const toggler = document.querySelector(".nav-toggler");
const navigation = toggler.ariaControlsElements[0];

/* Init nav toggler */
toggler.hidden = false;
navigation.classList.add("header__nav--enabled");
toggler.addEventListener("click", changeNavState);
toggler.parentElement.classList.add("header--sticky");

function changeNavState() {
	const shouldBeOpened = toggler.ariaExpanded === "false";

	toggler.ariaExpanded = String(shouldBeOpened);
	const label = `${shouldBeOpened ? "Закрыть" : "Открыть"} навигацию`;
	toggler.ariaLabel = label;
	toggler.title = label;

	navigation.classList.toggle("header__nav--opened", shouldBeOpened);
}
