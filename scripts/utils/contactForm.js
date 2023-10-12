function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

function sendForm(event) {
    event.preventDefault();

    const form = document.querySelector("#contact");
    // form.submit();s
    // console.log(new FormData(form).get("fname"));
    console.log(new FormData(form));
    form.reset();
    closeModal();
    return false;
}
