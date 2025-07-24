'use strict';

const modal = document.querySelector('.Modal');
const overlay = modal.querySelector('.Overlay');
const modalImage = modal.querySelector('.ModalImage');
const modalCaption = modal.querySelector('.ModalCaption');
const closeButton = modal.querySelector('.CloseButton');
const triggers = document.querySelectorAll('.works__thumbnail-link');

triggers.forEach(trigger => {
  trigger.addEventListener('click', (e) => {
    e.preventDefault();

    const imgSrc = trigger.dataset.image;
    const captionText = trigger.dataset.caption;

    modalImage.src = imgSrc;
    modalCaption.textContent = captionText;

    modal.classList.remove('hidden');
    document.body.classList.add('ModalOpen');
  });
});

function closeModal() {
  modal.classList.add('hidden');
  document.body.classList.remove('ModalOpen');
}

overlay.addEventListener('click', closeModal);
closeButton.addEventListener('click', closeModal);
