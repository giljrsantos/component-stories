import { StoriesItem, StoriesItemStatus } from './stories/stories-item.model';

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  itens: StoriesItem[] = [
    {
      descricao: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, modi!',
      descricaoCorHex:'#fff',
      status: StoriesItemStatus.aguardando,
      urlImagem: 'https://wallpapers.com/images/hd/splashing-water-gradient-background-mobile-v5hlk4ta55rn5w3x.jpg'
    },
    {
      descricao: 'Incidunt, modi!',
      descricaoCorHex:'#fff',
      status: StoriesItemStatus.aguardando,
      urlImagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQQjw1nyTi1qvWVyCufBIEuFx8B6Zn9TOLVw&usqp=CAU'
    },
    {
      descricao: 'Lorem ipsum dolor sit amet.',
      descricaoCorHex:'#fff',
      status: StoriesItemStatus.aguardando,
      urlImagem: 'https://marketplace.canva.com/EAFJd1mhO-c/1/0/900w/canva-colorful-watercolor-painting-phone-wallpaper-qq02VzvX2Nc.jpg'
    }
  ]
  title = 'projeto-stories';
}
