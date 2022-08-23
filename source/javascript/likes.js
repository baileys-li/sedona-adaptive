const likes = document.querySelectorAll(".photo__like");

likes.forEach((like) => like.addEventListener("click", handleLike));

function handleLike({ currentTarget: button }) {
	const willBeLiked = button.ariaPressed === "false",
		amount = Number(button.value),
		newAmount = willBeLiked ? amount + 1 : amount - 1;

	button.value = newAmount;
	button.ariaPressed = String(willBeLiked);
	button.ariaDescription = `Всего лайков ${newAmount}`;
}
