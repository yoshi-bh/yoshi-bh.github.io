let totalLikes = 0;

async function getData() {
	// Ceci est un exemple de données pour avoir un affichage de photographes de test dès le démarrage du projet,
	// mais il sera à remplacer avec une requête sur le fichier JSON en utilisant "fetch".
	const response = await fetch("./data/photographers.json");
	const data = await response.json();
	// et bien retourner le tableau photographers seulement une fois récupéré
	return {
		photographers: data.photographers,
		medias: data.media,
	};
}

function displayData(photographer) {
	const photographerHeader = document.querySelector(".photograph-header");
	const photographerModel = photographerTemplate(photographer);
	const { container, img, priceCard } = photographerModel.getUserHeaderDOM();

	photographerHeader.prepend(container);
	photographerHeader.append(img, priceCard);
}

function likingMedia(mCard, mediaCard) {
	if (!mCard._isLiked) {
		mCard.likes = mCard.likes + 1;
		mCard._isLiked = true;
		totalLikes++;
	} else {
		mCard.likes = mCard.likes - 1;
		mCard._isLiked = false;
		totalLikes--;
	}

	// Update new total likes for photographer
	document.querySelector(
		"#totalLikes"
	).innerHTML = `<p id="totalLikes">${totalLikes} <i class="fa fa-heart" aria-label="likes"></i></p>`;

	// Create new media card and replace the old one
	const mediaGrid = document.querySelector(".media-grid");
	const newMediaCard = mCard.createMediaCard();

	// Keeps the old lightbox event listener on the new element
	newMediaCard
		.querySelector(".media-thumbnail")
		.replaceWith(mediaCard.querySelector(".media-thumbnail"));
	newMediaCard
		.querySelector("i")
		.addEventListener("click", () => likingMedia(mCard, newMediaCard));
	mediaGrid.replaceChild(newMediaCard, mediaCard);
}

function displayMedias(displayedMedias, photographers, photographerID) {
	const mediaGrid = document.querySelector(".media-grid");
	let mCardsArray = [];
	mediaGrid.innerHTML = ""; // reset old grid content

	for (media of displayedMedias) {
		const photographerName = photographers
			.find((e) => e.id === photographerID)
			.name.split(" ")[0]
			.replace("-", " ");
		const mediaData = new MediaFactory(media, photographerName);
		const mediaCard = new MediaCard(mediaData);
		mCardsArray.push(mediaCard);
	}

	for (let i = 0; i < mCardsArray.length; i++) {
		const mediaCardElem = mCardsArray[i].createMediaCard();

		mediaCardElem
			.querySelector(".media-thumbnail")
			.addEventListener("click", () =>
				displayLightbox(mCardsArray[i], mCardsArray)
			);
		mediaCardElem
			.querySelector("i")
			.addEventListener("click", () =>
				likingMedia(mCardsArray[i], mediaCardElem)
			);
		mediaGrid.appendChild(mediaCardElem);
	}
}

function getDisplayedMedias(medias, photographerID, sortType = "popular") {
	const displayedMedia = medias.filter(
		(e) => e.photographerId === photographerID
	);

	switch (sortType) {
		case "popular":
			displayedMedia.sort((a, b) => b.likes - a.likes);
			break;
		case "date":
			displayedMedia.sort((a, b) => new Date(b.date) - new Date(a.date));
			break;
		case "title":
			displayedMedia.sort((a, b) => a.title.localeCompare(b.title));
			break;
		default:
			console.log("Incorrect sort type!!!");
			return;
	}
	return displayedMedia;
}

function filter(event, medias, photographers, photographerID) {
	const sortType = event.target.value;
	const displayedMedias = getDisplayedMedias(medias, photographerID, sortType);
	displayMedias(displayedMedias, photographers, photographerID);
}

async function init() {
	// Récupère les datas des photographes
	const { photographers, medias } = await getData();
	const params = new URL(document.location).searchParams;
	const photographerID = parseInt(params.get("id"));

	// Adds the photograph info in the header
	displayData(photographers.find((e) => e.id === photographerID));

	// Adds the photo/video gallery
	const displayedMedias = getDisplayedMedias(medias, photographerID);
	totalLikes = displayedMedias.reduce((a, b) => a + parseInt(b.likes), 0);
	displayMedias(displayedMedias, photographers, photographerID);
	document
		.querySelector("#filters")
		.addEventListener("input", (e) =>
			filter(e, medias, photographers, photographerID)
		);
	document.querySelector(
		"#totalLikes"
	).innerHTML = `<p id="totalLikes">${totalLikes} <i class="fa fa-heart" aria-label="likes"></i></p>`;
}

init();
