function photographerTemplate(data) {
	const { name, id, portrait, city, country, tagline, price } = data;

	const picture = `assets/photographers/${portrait}`;

	function getUserCardDOM() {
		const link = document.createElement("a");
		link.href = `/photographer.html?id=${id}`;
		const article = document.createElement("article");
		const img = document.createElement("img");
		img.setAttribute("src", picture);
		img.setAttribute("alt", "");
		const h2 = document.createElement("h2");
		h2.textContent = name;
		const h3 = document.createElement("h3");
		h3.textContent = `${city}, ${country}`;
		const p = document.createElement("p");
		p.textContent = tagline;
		const p2 = document.createElement("p");
		p2.className = "price";
		p2.textContent = `${price}€/jour`;

		link.appendChild(img);
		link.appendChild(h2);
		article.appendChild(link);
		article.appendChild(h3);
		article.appendChild(p);
		article.appendChild(p2);

		return article;
	}

	function getUserHeaderDOM() {
		const img = document.createElement("img");
		img.setAttribute("src", picture);
		img.setAttribute("alt", name);
		const div = document.createElement("div");
		div.className = "info-container";
		const h1 = document.createElement("h1");
		h1.textContent = name;
		const h2 = document.createElement("h2");
		h2.textContent = `${city}, ${country}`;
		const p = document.createElement("p");
		p.textContent = tagline;

		const pCard = document.createElement("div");
		pCard.className = "price-card";
		pCard.innerHTML = `
			<p id="totalLikes">0000 <i class="fa fa-heart" aria-label="likes"></i></p>
			<p>${price}€ / jour</p>
		`;

		div.appendChild(h1);
		div.appendChild(h2);
		div.appendChild(p);

		return { container: div, img: img, priceCard: pCard };
	}
	return { name, picture, getUserCardDOM, getUserHeaderDOM };
}

// export default photographerTemplate;
