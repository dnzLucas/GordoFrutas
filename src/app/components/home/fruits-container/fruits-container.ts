import { Component } from '@angular/core';
import { Card } from '../card/card';

@Component({
  selector: 'app-fruits-container',
  imports: [Card],
  templateUrl: './fruits-container.html',
  styleUrl: './fruits-container.css',
})


export class FruitsContainer {
  fruits = [
    {
      title: 'Maçã',
      description: 'Maçãs selecionadas diariamente com qualidade e frescor.',
      image:
        'https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?q=80&w=800&auto=format&fit=crop',
      alt: 'Maçãs vermelhas frescas'
    },
    {
      title: 'Banana',
      description: 'Bananas ideais para vitaminas e receitas naturais.',
      image:
        'https://storage.googleapis.com/imagens_videos_gou_cooking_prod/production/mesas/2020/08/04db0ac8-banana.jpg',
      alt: 'Bananas maduras'
    },
    {
      title: 'Laranja',
      description: 'Laranjas ricas em vitamina C e perfeitas para sucos.',
      image:
        'https://www.estadao.com.br/resizer/v2/PIPKWYKNFZFMNOTMEESIOFMUAQ.jpeg?quality=80&auth=d116bcc4e55413d5d3bbbf480a1e6702eae69ed36781e38b9c7d3dc1b5fda038&width=1075&height=527&focal=3206,2500',
      alt: 'Laranjas frescas'
    },
    {
      title: 'Morango',
      description: 'Morangos doces e frescos selecionados todos os dias.',
      image:
        'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=800&auto=format&fit=crop',
      alt: 'Morangos vermelhos'
    }
  ];
}
