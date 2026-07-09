import { Component, inject } from '@angular/core';
import { Card } from '../../home/card/card';
import { FruitService } from '../../../services/fruit.service';

@Component({
  selector: 'app-fruit-list',
  imports: [Card],
  templateUrl: './fruit-list.html',
  styleUrl: './fruit-list.css',
})
export class FruitList {
  private readonly fruitService = inject(FruitService);

  readonly fruits = this.fruitService.filteredFruits;
}
