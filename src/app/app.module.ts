import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoriesModule } from './stories/stories.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, StoriesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
