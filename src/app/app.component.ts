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
      descricaoCorHex: '#fff',
      status: StoriesItemStatus.aguardando,
      urlImagem: 'https://wallpapers.com/images/high/cow-in-a-farm-field-hgptv6kev7hif15w.webp'
    },
    {
      descricao: 'Incidunt, modi!',
      descricaoCorHex: '#fff',
      status: StoriesItemStatus.aguardando,
      urlImagem: 'https://wallpapers.com/images/high/mother-cow-and-little-calf-sugncarjrap57hte.webp'
    },
    {
      descricao: 'Lorem ipsum dolor sit amet.',
      descricaoCorHex: '#fff',
      status: StoriesItemStatus.aguardando,
      urlImagem: 'https://wallpapers.com/images/high/farm-animals-focusing-a-baby-cow-bi3jtoxivcqb6iuh.webp'
    },
    {
      descricao: 'Lorem ipsum dolor sit amet.',
      descricaoCorHex: '#fff',
      status: StoriesItemStatus.aguardando,
      urlImagem: 'https://wallpapers.com/images/high/alone-iconic-cattle-of-scotland-dlml1l12x3rbn6gm.webp'
    },
    {
      descricao: 'Lorem ipsum dolor sit amet.',
      descricaoCorHex: '#fff',
      status: StoriesItemStatus.aguardando,
      urlImagem: 'https://wallpapers.com/images/high/hairy-cow-nose-zajsdj5us69ajme2.webp'
    },
    {
      descricao: 'Lorem ipsum dolor sit amet.',
      descricaoCorHex: '#fff',
      status: StoriesItemStatus.aguardando,
      urlImagem: 'https://wallpapers.com/images/high/black-cow-with-yellow-tag-rw6959bemk53ztg4.webp'
    }
  ]
  title = 'projeto-stories';
}
