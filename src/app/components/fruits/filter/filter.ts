import { Component, inject, signal } from '@angular/core';
import {
  DEFAULT_FRUIT_FILTERS,
  FruitCategory,
  FruitService,
  PRICE_RANGE_MAX,
  PRICE_RANGE_MIN,
} from '../../../services/fruit.service';

interface CategoryOption {
  value: FruitCategory;
  label: string;
}

const CATEGORY_OPTIONS: CategoryOption[] = [
  { value: 'citrica', label: 'Cítricas' },
  { value: 'tropical', label: 'Tropicais' },
  { value: 'vermelha', label: 'Frutas Vermelhas' },
  { value: 'exotica', label: 'Exóticas' },
  { value: 'organica', label: 'Orgânicas' },
];

@Component({
  selector: 'app-filter',
  imports: [],
  templateUrl: './filter.html',
  styleUrl: './filter.css',
})
export class Filter {
  private readonly fruitService = inject(FruitService);

  readonly categoryOptions = CATEGORY_OPTIONS;
  readonly priceRangeMin = PRICE_RANGE_MIN;
  readonly priceRangeMax = PRICE_RANGE_MAX;

  readonly searchTerm = signal(DEFAULT_FRUIT_FILTERS.searchTerm);
  readonly selectedCategories = signal<ReadonlySet<FruitCategory>>(new Set());
  readonly minPrice = signal(DEFAULT_FRUIT_FILTERS.minPrice);
  readonly maxPrice = signal(DEFAULT_FRUIT_FILTERS.maxPrice);
  readonly onlyInStock = signal(DEFAULT_FRUIT_FILTERS.onlyInStock);
  readonly onlyPromo = signal(DEFAULT_FRUIT_FILTERS.onlyPromo);

  onSearchInput(event: Event): void {
    this.searchTerm.set((event.target as HTMLInputElement).value);
  }

  isCategorySelected(category: FruitCategory): boolean {
    return this.selectedCategories().has(category);
  }

  onCategoryToggle(category: FruitCategory, event: Event): void {
    const checked = (event.target as HTMLInputElement).checked;

    this.selectedCategories.update((categories) => {
      const updated = new Set(categories);

      if (checked) {
        updated.add(category);
      } else {
        updated.delete(category);
      }

      return updated;
    });
  }

  onPriceRangeInput(event: Event): void {
    this.maxPrice.set(
      this.parsePrice((event.target as HTMLInputElement).value, this.priceRangeMax),
    );
  }

  onMinPriceInput(event: Event): void {
    this.minPrice.set(
      this.parsePrice((event.target as HTMLInputElement).value, this.priceRangeMin),
    );
  }

  onMaxPriceInput(event: Event): void {
    this.maxPrice.set(
      this.parsePrice((event.target as HTMLInputElement).value, this.priceRangeMax),
    );
  }

  onStockToggle(event: Event): void {
    this.onlyInStock.set((event.target as HTMLInputElement).checked);
  }

  onPromoToggle(event: Event): void {
    this.onlyPromo.set((event.target as HTMLInputElement).checked);
  }

  applyFilters(): void {
    this.fruitService.setFilters({
      searchTerm: this.searchTerm(),
      categories: Array.from(this.selectedCategories()),
      minPrice: this.minPrice(),
      maxPrice: this.maxPrice(),
      onlyInStock: this.onlyInStock(),
      onlyPromo: this.onlyPromo(),
    });
  }

  clearFilters(): void {
    this.searchTerm.set(DEFAULT_FRUIT_FILTERS.searchTerm);
    this.selectedCategories.set(new Set());
    this.minPrice.set(DEFAULT_FRUIT_FILTERS.minPrice);
    this.maxPrice.set(DEFAULT_FRUIT_FILTERS.maxPrice);
    this.onlyInStock.set(DEFAULT_FRUIT_FILTERS.onlyInStock);
    this.onlyPromo.set(DEFAULT_FRUIT_FILTERS.onlyPromo);

    this.fruitService.resetFilters();
  }

  private parsePrice(rawValue: string, fallback: number): number {
    const value = Number(rawValue);
    return Number.isNaN(value) ? fallback : value;
  }
}
