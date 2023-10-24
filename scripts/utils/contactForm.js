function displayModal() {
	// add all the elements inside modal which you want to make focusable
	const focusableElements =
		"button, input, textarea, [tabindex]:not([tabindex='-1'])";
	const modal = document.querySelector("#contact_modal"); // select the modal by it's id

	const firstFocusableElement = modal.querySelectorAll(focusableElements)[0]; // get first element to be focused inside modal
	const focusableContent = modal.querySelectorAll(focusableElements);
	const lastFocusableElement = focusableContent[focusableContent.length - 1]; // get last element to be focused inside modal

	document.addEventListener("keydown", function (e) {
		if (e.key === "Escape") {
			closeModal();
		}

		if (e.key !== "Tab") {
			return;
		}

		if (e.shiftKey) {
			// if shift key pressed for shift + tab combination
			if (document.activeElement === firstFocusableElement) {
				lastFocusableElement.focus(); // add focus for the last focusable element
				e.preventDefault();
			}
		} else {
			// if tab key is pressed
			if (document.activeElement === lastFocusableElement) {
				// if focused has reached to last focusable element then focus first focusable element after pressing tab
				firstFocusableElement.focus(); // add focus for the first focusable element
				e.preventDefault();
			}
		}
	});

	modal.style.display = "block";
	firstFocusableElement.focus();
}

function closeModal() {
	const modal = document.getElementById("contact_modal");
	modal.style.display = "none";
}

function sendForm(event) {
	event.preventDefault();

	const form = document.querySelector("#contact");
	console.log(new FormData(form));
	// console.log(new FormData(form).get("fname"));
	// form.submit();
	form.reset();
	closeModal();
	return false;
}
