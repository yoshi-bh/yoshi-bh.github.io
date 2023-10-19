class MediaCard {
	constructor(media) {
		this._media = media;
		this._isLiked = false;
	}

	get isLiked() {
		return this._isLiked;
	}

	set isLiked(newValue) {
		this._isLiked = newValue;
	}

	get likes() {
		return this._media.likes;
	}

	set likes(newValue) {
		this._media.likes = newValue;
	}

	createMediaCard() {
		const wrapper = document.createElement("div");
		wrapper.classList.add("media-card-wrapper");

		const mediaCard = `
          <div class="media-thumbnail clickable">
              ${this._media.displayedMedia}
          </div>
          <div class="media-text">
          	<h3>${this._media.title}</h3>
            <p>${this._media.likes} <i class="fa fa-heart clickable" aria-label="likes"></i></p>
          </div>
      `;

		wrapper.innerHTML = mediaCard;
		// wrapper.querySelector("i").addEventListener("click", this.likeMedia);
		return wrapper;
	}
}

// export default MediaCard;
