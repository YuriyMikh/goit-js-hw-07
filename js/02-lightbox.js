import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainerRef = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainerRef.insertAdjacentHTML("afterbegin", galleryMarkup);

function createGalleryMarkup(array) {
  return array
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item">
          <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}"/>
          </a>
        </div>`
    )
    .join("");
}

// переопределяем captionDelay и captionsData в момент создания нового экземпляра
let gallery = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});

// let gallery = new SimpleLightbox(".gallery a")
// переопределяем captionDelay и captionsData через вызов функции.
// gallery.on("show.simplelightbox", function () {
//   gallery.defaultOptions.captionDelay = 250;
//   gallery.defaultOptions.captionsData = "alt";
// });
