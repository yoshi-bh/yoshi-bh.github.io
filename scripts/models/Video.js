class Video {
	constructor(data, photographerName) {
		this._id = data.id;
		this._photographerId = data.photographerId;
		this._photographerName = photographerName;
		this._title = data.title;
		this._video = data.video;
		this._likes = data.likes;
		this._date = data.date;
		this._price = data.price;
	}

	get id() {
		return this._id;
	}

	// get photographerId() {
	// 	return this._photographerId;
	// }

	get title() {
		return this._title;
	}

	// get video() {
	// 	return this._video;
	// }

	// get fileLocation() {
	// 	let photographerName = "Mimi"; // TODO
	// 	return `./assets/images/${photographerName}/${this._video}`;
	// }

	get displayedMedia() {
		let media = `
      <video>
        <source src="./assets/images/${this._photographerName}/${this._video}" type="video/mp4">
      </video>
    `;
		// console.log(media);
		return media;
	}

	get likes() {
		return this._likes;
	}

	set likes(newLikes) {
		this._likes = newLikes;
	}

	// get date() {
	// 	return this._date;
	// }

	// get price() {
	// 	return this._price;
	// }
}

// export default Video;
