class MediaCard {
	constructor(media) {
		this._media = media;
		this._isLiked = false;
	}

	// likeMedia() {
	// 	console.log(this._media);
	// 	if (!this._isLiked) {
	// 		this._media.likes++;
	// 	} else {
	// 		this.media._likes--;
	// 		this._isLiked = false;
	// 	}
	// 	// Update new total likes for photographer
	// }

	createMediaCard() {
		const wrapper = document.createElement("div");
		wrapper.classList.add("media-card-wrapper");

		const mediaCard = `
          <div class="media-thumbnail clickable" onClick=displayLightbox()>
              ${this._media.displayedMedia}
          </div>
          <div class="media-text">
          	<h3>${this._media.title}</h3>
            <p>${
							this._media.likes
						} <i class="fa fa-heart clickable" aria-label="likes"></i></p>
          </div>
      `;

		wrapper.innerHTML = mediaCard;
		// wrapper.querySelector("i").addEventListener("click", this.likeMedia);
		return wrapper;
	}
}

// export default MediaCard;
