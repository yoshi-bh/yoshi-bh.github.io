class Image {
	constructor(data, photographerName) {
		this._id = data.id;
		this._photographerId = data.photographerId;
		this._photographerName = photographerName;
		this._title = data.title;
		this._image = data.image;
		this._likes = data.likes;
		this._date = data.date;
		this._price = data.price;
	}

	get id() {
		return this._id;
	}

	get title() {
		return this._title;
	}

	get displayedMedia() {
		let media = `<img alt="" src="./assets/images/${this._photographerName}/${this._image}"/>`;
		return media;
	}

	get likes() {
		return this._likes;
	}

	set likes(newLikes) {
		this._likes = newLikes;
	}
}
