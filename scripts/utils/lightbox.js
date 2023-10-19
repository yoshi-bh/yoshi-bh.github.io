function clamp(val, min, max) {
	// clamps the value between 2 numbers but "circular"
	return val > max ? min : val < min ? max : val;
}

function displayLightbox(mCard, mCards) {
	const prevBtn = document.querySelector(".prev-btn");
	const nextBtn = document.querySelector(".next-btn");
	const lightbox = document.querySelector("#lightbox_modal");
	const prevCardIndex = clamp(mCards.indexOf(mCard) - 1, 0, mCards.length - 1);
	const nextCardIndex = clamp(mCards.indexOf(mCard) + 1, 0, mCards.length - 1);
	// console.log(displayedMedia);
	// console.log(mCard);
	// console.log(prevCard);

	// keeps adding new event listeners
	prevBtn.addEventListener("click", () =>
		displayLightbox(mCards[prevCardIndex], mCards)
	);
	nextBtn.addEventListener("click", () =>
		displayLightbox(mCards[nextCardIndex], mCards)
	);

	// keeps adding new event listeners
	// if (!lightbox.hasAttribute("key-listener")) {
	// 	lightbox.setAttribute("key-listener", true);
	document.addEventListener("keydown", (e) => {
		console.log("Keydown");
		const key = e.key;
		if (key === "ArrowLeft") {
			displayLightbox(mCards[prevCardIndex], mCards);
		} else if (key === "ArrowRight") {
			displayLightbox(mCards[nextCardIndex], mCards);
		}
	});
	// }

	const modal = document.getElementById("lightbox_modal");
	const imgContainer = document.querySelector(".lightbox-content");
	imgContainer.innerHTML = mCard._media.displayedMedia;
	modal.style.display = "block";
}

function closeLightbox() {
	const modal = document.getElementById("lightbox_modal");
	modal.style.display = "none";
}
