import { Component } from '@angular/core';
import { Card } from '../../home/card/card';

@Component({
  selector: 'app-fruit-list',
  imports: [Card],
  templateUrl: './fruit-list.html',
  styleUrl: './fruit-list.css',
})
export class FruitList {
  fruits = [
  {
    title: 'Maçã',
    description: 'Maçãs selecionadas diariamente com qualidade e frescor.',
    image:
      'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?q=80&w=800&auto=format&fit=crop',
    alt: 'Maçãs vermelhas frescas'
  },
  {
    title: 'Banana',
    description: 'Bananas ideais para vitaminas e receitas naturais.',
    image:
      'https://images.pexels.com/photos/1093038/pexels-photo-1093038.jpeg',
    alt: 'Bananas maduras'
  },
  {
    title: 'Laranja',
    description: 'Laranjas ricas em vitamina C e perfeitas para sucos.',
    image:
      'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?q=80&w=800&auto=format&fit=crop',
    alt: 'Laranjas frescas'
  },
  {
    title: 'Morango',
    description: 'Morangos doces e frescos selecionados todos os dias.',
    image:
      'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=800&auto=format&fit=crop',
    alt: 'Morangos vermelhos'
  },
  {
    title: 'Uva',
    description: 'Uvas doces perfeitas para sobremesas e lanches.',
    image:
      'https://images.unsplash.com/photo-1537640538966-79f369143f8f?q=80&w=800&auto=format&fit=crop',
    alt: 'Uvas roxas frescas'
  },
  {
    title: 'Abacaxi',
    description: 'Abacaxis tropicais selecionados com máximo frescor.',
    image:
      'https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1?q=80&w=800&auto=format&fit=crop',
    alt: 'Abacaxis frescos'
  },
  {
    title: 'Melancia',
    description: 'Melancias refrescantes ideais para dias quentes.',
    image:
      'https://images.unsplash.com/photo-1563114773-84221bd62daa?q=80&w=800&auto=format&fit=crop',
    alt: 'Melancias grandes'
  },
  {
    title: 'Kiwi',
    description: 'Kiwis ricos em nutrientes e sabor marcante.',
    image:
      'https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?q=80&w=800&auto=format&fit=crop',
    alt: 'Kiwi fresco'
  },
  {
    title: 'Manga',
    description: 'Mangas doces e suculentas selecionadas diariamente.',
    image:
      'https://images.pexels.com/photos/2294471/pexels-photo-2294471.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Mangas maduras'
  },
  {
    title: 'Pêra',
    description: 'Pêras leves e refrescantes perfeitas para o dia a dia.',
    image:
      'https://images.unsplash.com/photo-1514756331096-242fdeb70d4a?q=80&w=800&auto=format&fit=crop',
    alt: 'Pêras frescas'
  }
];
}
