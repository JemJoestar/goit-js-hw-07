import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");
console.log(galleryItems);

function createGalleryItem({
  preview: miniUrl,
  original: url,
  description: alt,
}) {
  const newItem = document.createElement("li");
  newItem.insertAdjacentHTML(
    "afterbegin",
    `<a class="gallery__link" href="${url}">
    <img
    class="gallery__image"
    src="${miniUrl}"
    alt="${alt}"
    />
    </a>`
  );
  newItem.classList.add("gallery__item");
  galleryEl.append(newItem);
}
galleryItems.forEach((photo) => {
  createGalleryItem(photo);
});
var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

galleryEl.addEventListener("click", (event) => event.preventDefault());

/*
* <li class="gallery__item">
*    <a class="gallery__link" href="large-image.jpg">
*       <img class="gallery__image" src="small-image.jpg" alt="Image description" />
*    </a>
* </li>

*/
