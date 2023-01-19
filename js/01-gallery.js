import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

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

galleryContainerRef.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") return;

  // console.log("event.target: ", event.target);
  // console.log("event.currentTarget: ", event.currentTarget);

  const originalImgRef = event.target.dataset.source;
  console.log("event.target.dataset.source: ", originalImgRef);
});
