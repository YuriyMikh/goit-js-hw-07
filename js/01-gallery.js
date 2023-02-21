import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainerRef = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainerRef.insertAdjacentHTML("afterbegin", galleryMarkup);

function createGalleryMarkup(array) {
  return array
    .map(
      ({ preview, original, description }) => `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    )
    .join("");
}

galleryContainerRef.addEventListener("click", onGalleryClickShowImage);

function onGalleryClickShowImage(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") return;

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);
  instance.show();

  document.addEventListener("keydown", (event) => {
    const visible = basicLightbox.visible();
    if (visible && event.code === "Escape") {
      // const instance = instance.close();
      instance.close();
    }
  });
}

// document.addEventListener("keydown", onCloseModalEscapeKey);

// function onCloseModalEscapeKey(event) {
//   const visible = basicLightbox.visible();
//   if (visible && event.code === "Escape") {
//     console.log("isOpen", event.code);
//     // const instance = instance.close();
//     instance.close();
//   }
// if (event.code === "Escape") {
//
//   console.log("code: YES", event.code);
// }
// }
