import { galleryItems } from './gallery-items.js';

// Change code below this line

const pictureConteiner = document.querySelector('.gallery');

const cardMarkup = createPicturesCardMarkup(galleryItems);

pictureConteiner.addEventListener('click', onPictureClick);

pictureConteiner.insertAdjacentHTML('beforeend', cardMarkup);

function createPicturesCardMarkup(pictures) {
  return pictures
    .map(({ preview, original, description }) => {
      return ` 
      <div class="gallery__item">
        <a class="gallery__link" href=${original}>
          <img
            class="gallery__image"
            src=${preview}
            data-source=${original}
            alt=${description}
          />
        </a>
      </div>`;
    })
    .join('');
}

function onPictureClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG') {
    return;
  }
  const actualClickPictures = e.target.dataset.source;
  const instance = basicLightbox.create(
    `
    <img src=${actualClickPictures} width="800" height="600">
    `,
    {
      onShow: (instance) => {
        window.addEventListener('keydown', onClosePictures);
      },
      onClose: (instance) => {
        window.removeEventListener('keydown', onClosePictures);
      },
    },
  );
  instance.show();

  function onClosePictures(e) {
    e.code === 'Escape' && instance.close();
  }
}

console.log(galleryItems);
