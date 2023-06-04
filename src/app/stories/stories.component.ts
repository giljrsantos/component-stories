import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
} from '@angular/core';
import {
  StoriesItem,
  StoriesItemStatus,
} from './stories-item.model';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css'],
})
export class StoriesComponent
  implements OnChanges, OnDestroy {
  private controleIntervalo!: Subscription;

  @Input()
  intervaloEntreSlidesEmSegundos: number = 3;

  @Input()
  itens: StoriesItem[] = [];

  // Retorna o index do array "itens" que está com o status ativo
  get slideAtivoIndex(): number {
    return this.itens.findIndex(
      (a) => a.status === StoriesItemStatus.ativo
    );
  }

  // Retorna o item do array "itens" que está com o status ativo
  get slideAtivo(): StoriesItem {
    return this.itens[this.slideAtivoIndex];
  }

  // Quando o componente receber um valor
  // em algums @Input, este método será
  // executado

  ngOnChanges() {
    this.reset();
  }

  ngOnDestroy() {
    this.pararTimer();
  }

  reset() {
    this.pararTimer();

    this.itens.forEach(
      (a) => (a.status = StoriesItemStatus.aguardando)
    );
    this.itens[0].status = StoriesItemStatus.ativo;

    this.iniciarTimer();
  }

  iniciarTimer(): void {
    this.controleIntervalo = timer(
      this.intervaloEntreSlidesEmSegundos * 1e3
    ).subscribe(() => {
      this.avancarSlide();
    });
  }

  avancarSlide(): void {
    this.irParaSlide(this.slideAtivoIndex + 1);
  }

  retrocederSlide(): void {
    this.irParaSlide(this.slideAtivoIndex - 1);
  }

  pararTimer(): void {
    this.controleIntervalo?.unsubscribe();
  }

  irParaSlide(index: number) {
    this.pararTimer();

    if (index >= this.itens.length) {
      index = 0;
    } else if (index < 0) {
      index = this.itens.length - 1;
    }

    for (let i = 0; i < index; i++) {
      this.itens[i].status = StoriesItemStatus.finalizado;
    }

    this.itens[index].status = StoriesItemStatus.ativo;

    for (let i = index + 1; i < this.itens.length; i++) {
      this.itens[i].status = StoriesItemStatus.aguardando;
    }

    this.iniciarTimer();
  }
}
