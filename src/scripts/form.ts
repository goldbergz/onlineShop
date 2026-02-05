import type { Product } from './api';
import { renderProducts } from './card';

export function initSearch(products: Product[], container: HTMLElement) {
  const form = document.getElementById('search-form') as HTMLFormElement;
  const input = form.querySelector('.search__input') as HTMLInputElement;

  function handleSearch() {
    const query = input.value.trim().toLowerCase();

    const filtered = products.filter(product => product.title.toLowerCase().includes(query));

    renderProducts(filtered, container);
  }

  input.addEventListener('input', handleSearch);

  form.addEventListener('submit', e => {
    e.preventDefault();
    handleSearch();
  });
}
