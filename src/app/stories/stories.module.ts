import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoriesComponent } from './stories.component';

@NgModule({
  declarations: [StoriesComponent],
  exports: [StoriesComponent],
  imports: [CommonModule],
})
export class StoriesModule {}
