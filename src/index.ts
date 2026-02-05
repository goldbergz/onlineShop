import './styles/style.css';

import { fetchProducts } from './scripts/api';
import type { Product } from './scripts/api';
import { renderProducts } from './scripts/card';

const productList = document.querySelector('.products__list') as HTMLUListElement;
const searchInput = document.querySelector('.search__input') as HTMLInputElement;

let products: Product[] = [];

async function init() {
  try {
    products = await fetchProducts();
    renderProducts(products, productList);
  } catch (err) {
    console.error(err);
  }
}

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  const filtered = products.filter(p => p.title.toLowerCase().includes(query));
  renderProducts(filtered, productList);
});

init();
