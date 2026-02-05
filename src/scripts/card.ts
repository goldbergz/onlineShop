import type { Product } from './api';
import { openPopup } from './popup';

export function createCard(product: Product): HTMLLIElement {
  const template = document.getElementById('card-template') as HTMLTemplateElement;
  const cardElement = template.content.firstElementChild!.cloneNode(true) as HTMLLIElement;

  const img = cardElement.querySelector('.card__image') as HTMLImageElement;
  const title = cardElement.querySelector('.card__title') as HTMLHeadingElement;
  const price = cardElement.querySelector('.card__price') as HTMLParagraphElement;

  img.src = product.image;
  img.alt = product.title;
  title.textContent = product.title;
  price.textContent = `${product.price} ₽`;

  cardElement.addEventListener('click', () => openPopup(product));

  return cardElement;
}

export function renderProducts(list: Product[], container: HTMLElement) {
  container.innerHTML = '';
  list.forEach(product => {
    const card = createCard(product);
    container.appendChild(card);
  });
}
