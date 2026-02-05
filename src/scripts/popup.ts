import type { Product } from './api';

const popup = document.querySelector('.popup_type_image') as HTMLDivElement;
const modalImage = popup.querySelector('.popup__image') as HTMLImageElement;
const modalCaption = popup.querySelector('.popup__caption') as HTMLParagraphElement;
const closeButton = popup.querySelector('.popup__close') as HTMLButtonElement;

export function openPopup(product: Product) {
    modalImage.src = product.image;
    modalImage.alt = product.title;
    modalCaption.textContent = `${product.title} — ${product.description} (${product.price} ₽)`;

    popup.classList.add('popup_is-opened');

    document.addEventListener('keydown', handleEscClose);
    popup.addEventListener('mousedown', handleOutsideClick);
}

function closePopup() {
    popup.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', handleEscClose);
    popup.removeEventListener('mousedown', handleOutsideClick);
}

function handleEscClose(e: KeyboardEvent) {
    if (e.key === 'Escape') closePopup();
}

function handleOutsideClick(e: MouseEvent) {
    if (e.target === popup) closePopup();
}

closeButton.addEventListener('click', closePopup);
