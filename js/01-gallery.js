import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const makePictureAddMarkup = ({ preview, original, description }) => {
  return `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
};
const divElement = document.querySelector(".gallery");
divElement.addEventListener("click", openModal);

const makeImageString = galleryItems.map(makePictureAddMarkup).join("");
divElement.insertAdjacentHTML("beforeend", makeImageString);

let instance = null;

function openModal(event) {
  event.preventDefault();

  if (event.target.tagName !== "IMG") {
    return;
  }
  const newSource = event.target.dataset.source;
  console.log(newSource);

  instance = basicLightbox.create(`
    <img src="${newSource}" width="800" height="600">
`);

  instance.show();
  window.addEventListener("keydown", onCloseModal);
}

function onCloseModal(event) {
  console.log(event.code);
  if (event.code === "Escape") {
    instance.close();
    window.removeEventListener("keydown", onCloseModal);
  }
}
