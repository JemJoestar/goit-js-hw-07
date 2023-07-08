import { galleryItems } from "./gallery-items.js";
// Change code below this line


const galleryEl = document.querySelector(".gallery")
let currentShowingPhoto


// ~Функція для створення елементів галереї
function createGalleryItem({preview:miniUrl, original:url, description:alt}){
    const newItem = document.createElement("li")
    newItem.insertAdjacentHTML("afterbegin",`<a class="gallery__link" href="${url}">
      <img
        class="gallery__image"
        src="${miniUrl}"
        data-source="${url}"
        alt="${alt}"
      />
    </a>`)
    newItem.classList.add("gallery__item")
    galleryEl.append(newItem)
}
//~===========================================


galleryItems.forEach(photo => {
    createGalleryItem(photo)
})

galleryEl.addEventListener("click", (event)=>{
    event.preventDefault();
    if(event.target.nodeName === "IMG"){

      const currentPhoto = event.target
      const showingPhoto = basicLightbox.create(`<img src="${currentPhoto.dataset.source}" alt="${currentPhoto.alt}" width="500">`)
      currentShowingPhoto = showingPhoto
      showingPhoto.show()
    }
  })

document.addEventListener("keydown", (event) =>{
  const showingPhoto = currentShowingPhoto
  if(event.code === "Escape" ) showingPhoto.close()

} )

/*
 *<li class="gallery__item">
 *<a class="gallery__link" href="large-image.jpg">
 *  <img
 *    class="gallery__image"
 *    src="small-image.jpg"
 *    data-source="large-image.jpg"
 *    alt="Image description"
 *  />
 *</a>
 *</li>*/
