import { galleryItems } from './gallery-items.js';
// Change code below this line

const pictureConteiner = document.querySelector('.gallery');

const cardMarkup = createPicturesCardMarkup(galleryItems);

// pictureConteiner.addEventListener('click', onClickImg);

pictureConteiner.insertAdjacentHTML('beforeend', cardMarkup);

function createPicturesCardMarkup(pictures) {
  return pictures
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href=${original}>
        <img class="gallery__image" src=${preview} alt=${description} />
      </a>`;
    })
    .join('');
}

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

// function onClickImg(evt) {
//   evt.preventDefault();

//   const lightbox = new SimpleLightbox('.gallery a', {
//     sourceArrr: evt.target.src,
//   });

//   lightbox.open(evt.target.src);

//   console.log(evt.target.src);
// }

console.log(galleryItems);
