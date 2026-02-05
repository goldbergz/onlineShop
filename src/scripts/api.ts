import data from '../data.json' assert { type: 'json' };

export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  description: string;
}

export async function fetchProducts(): Promise<Product[]> {
  return data;
}
