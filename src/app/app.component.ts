import {
  StoriesItem,
  StoriesItemStatus,
} from './stories/stories-item.model';

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  itens: StoriesItem[] = [
    {
      descricao: 'GELBVIEH',
      descricaoCorHex: '#fff',
      status: StoriesItemStatus.aguardando,
      urlImagem:
        'https://wallpapers.com/images/high/cow-in-a-farm-field-hgptv6kev7hif15w.webp',
    },
    {
      descricao: 'GALLOWAY COM CINTO',
      descricaoCorHex: '#fff',
      status: StoriesItemStatus.aguardando,
      urlImagem:
        'http://capitaltimes.com.br/wp-content/uploads/2021/11/Belted-Galloway-Champion-9834.webp',
    },
    {
      descricao: 'RED ANGUS',
      descricaoCorHex: '#fff',
      status: StoriesItemStatus.aguardando,
      urlImagem:
        'http://capitaltimes.com.br/wp-content/uploads/2021/11/RED-ANGUS.webp',
    },
    {
      descricao: 'SCOTTISH HIGHLAND',
      descricaoCorHex: '#fff',
      status: StoriesItemStatus.aguardando,
      urlImagem:
        'https://wallpapers.com/images/high/alone-iconic-cattle-of-scotland-dlml1l12x3rbn6gm.webp',
    },
    {
      descricao: 'SIMENTAL',
      descricaoCorHex: '#fff',
      status: StoriesItemStatus.aguardando,
      urlImagem:
        'https://capitaltimes.com.br/wp-content/uploads/2021/11/SIMENTAL.webp',
    },
    {
      descricao: 'HOLSTEIN',
      descricaoCorHex: '#fff',
      status: StoriesItemStatus.aguardando,
      urlImagem:
        'https://wallpapers.com/images/high/black-cow-with-yellow-tag-rw6959bemk53ztg4.webp',
    },
    {
      descricao: 'TEXAS LONGHORN',
      descricaoCorHex: '#fff',
      status: StoriesItemStatus.aguardando,
      urlImagem:
        'https://capitaltimes.com.br/wp-content/uploads/2021/11/TEXAS-LONGHORN.webp',
    },
  ];
  title = 'projeto-stories';
}
