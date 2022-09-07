import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

const oneImg = createMarkupImale(galleryItems);
galleryList.insertAdjacentHTML("afterbegin", oneImg);

function createMarkupImale(image) {
  return image
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${preview}">
  <img class="gallery__image" src="${original}" alt="${description}" />
</a>`;
    })
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 200,
  close: false,
  showCounter: false,
});
console.log(lightbox);
