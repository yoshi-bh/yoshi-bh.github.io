// import Image from "../models/Photo.js";
// import Video from "../models/Video.js";

class MediaFactory {
	constructor(data, photographerName) {
		// Si le type correspond à une image, alors on instancie une image
		if (data.hasOwnProperty("image")) {
			return new Image(data, photographerName);
			// Sinon on instancie une video
		} else if (data.hasOwnProperty("video")) {
			return new Video(data, photographerName);
			// Une bonne pratique est de throw une erreur si le format n'est pas reconnu
		} else {
			throw "Unknown type format";
		}
	}

	// isLiked()
}

// export default MediaFactory;
