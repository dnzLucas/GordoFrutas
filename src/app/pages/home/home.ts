import { Component } from '@angular/core';
import { Hero } from '../../components/home/hero/hero';
import { FruitsContainer } from '../../components/home/fruits-container/fruits-container';

@Component({
  selector: 'app-home',
  imports: [Hero, FruitsContainer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
