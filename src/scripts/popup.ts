import type { Product } from './api';

const popup = document.querySelector('.popup') as HTMLDivElement;
const popupImage = popup.querySelector('.popup__image') as HTMLImageElement;
const popupTitle = popup.querySelector('.popup__title') as HTMLHeadingElement;
const popupDescription = popup.querySelector('.popup__description') as HTMLParagraphElement;
const popupPrice = popup.querySelector('.popup__price') as HTMLParagraphElement; const closeButton = popup.querySelector('.popup__close') as HTMLButtonElement;
const buyButton = popup.querySelector('.popup__buy-button') as HTMLButtonElement;


export function openPopup(product: Product) {
    popupImage.src = product.image;
    popupImage.alt = product.title;
    popupTitle.textContent = product.title;
    popupDescription.textContent = product.description;
  popupPrice.textContent = `${product.price} ₽`;
  buyButton.textContent = 'Добавить в корзину'
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

buyButton.addEventListener('click', () => {
  buyButton.textContent = 'Товар добавлен в корзину'
});