import { Component } from '@angular/core';
import { Filter } from '../../components/fruits/filter/filter';
import { FruitList } from '../../components/fruits/fruit-list/fruit-list';

@Component({
  selector: 'app-fruits',
  imports: [Filter, FruitList],
  templateUrl: './fruits.html',
  styleUrl: './fruits.css',
})
export class Fruits {}
