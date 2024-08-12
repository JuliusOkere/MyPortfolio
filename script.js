// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("img01");

function openModal(element) {
    modal.style.display = "block";
    modalImg.src = element.src;
}

// When the user clicks on <span> (x), close the modal
function closeModal() {
    modal.style.display = "none";
}
