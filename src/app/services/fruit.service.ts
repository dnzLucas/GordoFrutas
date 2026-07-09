import { Injectable, computed, signal } from '@angular/core';

export type FruitCategory = 'citrica' | 'tropical' | 'vermelha' | 'exotica' | 'organica';

export interface Fruit {
  title: string;
  description: string;
  image: string;
  alt: string;
  categories: FruitCategory[];
  price: number;
  inStock: boolean;
  onPromo: boolean;
}

export interface FruitFilters {
  searchTerm: string;
  categories: FruitCategory[];
  minPrice: number;
  maxPrice: number;
  onlyInStock: boolean;
  onlyPromo: boolean;
}

export const PRICE_RANGE_MIN = 0;
export const PRICE_RANGE_MAX = 100;

export const DEFAULT_FRUIT_FILTERS: FruitFilters = {
  searchTerm: '',
  categories: [],
  minPrice: PRICE_RANGE_MIN,
  maxPrice: PRICE_RANGE_MAX,
  onlyInStock: false,
  onlyPromo: false,
};

const FRUITS: Fruit[] = [
  {
    title: 'Maçã',
    description: 'Maçãs selecionadas diariamente com qualidade e frescor.',
    image:
      'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?q=80&w=800&auto=format&fit=crop',
    alt: 'Maçãs vermelhas frescas',
    categories: ['vermelha', 'organica'],
    price: 6.5,
    inStock: true,
    onPromo: false,
  },
  {
    title: 'Banana',
    description: 'Bananas ideais para vitaminas e receitas naturais.',
    image: 'https://images.pexels.com/photos/1093038/pexels-photo-1093038.jpeg',
    alt: 'Bananas maduras',
    categories: ['tropical'],
    price: 4.2,
    inStock: true,
    onPromo: true,
  },
  {
    title: 'Laranja',
    description: 'Laranjas ricas em vitamina C e perfeitas para sucos.',
    image:
      'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?q=80&w=800&auto=format&fit=crop',
    alt: 'Laranjas frescas',
    categories: ['citrica'],
    price: 5.0,
    inStock: true,
    onPromo: false,
  },
  {
    title: 'Morango',
    description: 'Morangos doces e frescos selecionados todos os dias.',
    image:
      'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=800&auto=format&fit=crop',
    alt: 'Morangos vermelhos',
    categories: ['vermelha', 'organica'],
    price: 9.9,
    inStock: true,
    onPromo: true,
  },
  {
    title: 'Uva',
    description: 'Uvas doces perfeitas para sobremesas e lanches.',
    image:
      'https://images.unsplash.com/photo-1537640538966-79f369143f8f?q=80&w=800&auto=format&fit=crop',
    alt: 'Uvas roxas frescas',
    categories: ['exotica'],
    price: 8.3,
    inStock: false,
    onPromo: false,
  },
  {
    title: 'Abacaxi',
    description: 'Abacaxis tropicais selecionados com máximo frescor.',
    image:
      'https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1?q=80&w=800&auto=format&fit=crop',
    alt: 'Abacaxis frescos',
    categories: ['tropical', 'exotica'],
    price: 7.0,
    inStock: true,
    onPromo: false,
  },
  {
    title: 'Melancia',
    description: 'Melancias refrescantes ideais para dias quentes.',
    image:
      'https://images.unsplash.com/photo-1563114773-84221bd62daa?q=80&w=800&auto=format&fit=crop',
    alt: 'Melancias grandes',
    categories: ['tropical'],
    price: 3.5,
    inStock: true,
    onPromo: true,
  },
  {
    title: 'Kiwi',
    description: 'Kiwis ricos em nutrientes e sabor marcante.',
    image:
      'https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?q=80&w=800&auto=format&fit=crop',
    alt: 'Kiwi fresco',
    categories: ['exotica', 'organica'],
    price: 12.0,
    inStock: true,
    onPromo: false,
  },
  {
    title: 'Manga',
    description: 'Mangas doces e suculentas selecionadas diariamente.',
    image:
      'https://images.pexels.com/photos/2294471/pexels-photo-2294471.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Mangas maduras',
    categories: ['tropical'],
    price: 6.0,
    inStock: false,
    onPromo: false,
  },
  {
    title: 'Pêra',
    description: 'Pêras leves e refrescantes perfeitas para o dia a dia.',
    image:
      'https://images.unsplash.com/photo-1514756331096-242fdeb70d4a?q=80&w=800&auto=format&fit=crop',
    alt: 'Pêras frescas',
    categories: ['organica'],
    price: 5.5,
    inStock: true,
    onPromo: false,
  },
];

/**
 * Fonte única de dados das frutas e do estado de filtragem da tela de frutas.
 * O `Filter` grava os critérios aplicados e o `FruitList` consome a lista
 * já filtrada através do signal computado `filteredFruits`.
 */
@Injectable({ providedIn: 'root' })
export class FruitService {
  private readonly fruits = signal<Fruit[]>(FRUITS);
  private readonly filters = signal<FruitFilters>({ ...DEFAULT_FRUIT_FILTERS });

  readonly filteredFruits = computed(() => {
    const filters = this.filters();
    const term = filters.searchTerm.trim().toLowerCase();

    return this.fruits().filter((fruit) => {
      const matchesSearch = !term || fruit.title.toLowerCase().includes(term);

      const matchesCategory =
        filters.categories.length === 0 ||
        filters.categories.some((category) => fruit.categories.includes(category));

      const matchesPrice = fruit.price >= filters.minPrice && fruit.price <= filters.maxPrice;
      const matchesStock = !filters.onlyInStock || fruit.inStock;
      const matchesPromo = !filters.onlyPromo || fruit.onPromo;

      return matchesSearch && matchesCategory && matchesPrice && matchesStock && matchesPromo;
    });
  });

  setFilters(filters: FruitFilters): void {
    const minPrice = Math.min(filters.minPrice, filters.maxPrice);
    const maxPrice = Math.max(filters.minPrice, filters.maxPrice);

    this.filters.set({ ...filters, minPrice, maxPrice });
  }

  resetFilters(): void {
    this.filters.set({ ...DEFAULT_FRUIT_FILTERS });
  }
}
