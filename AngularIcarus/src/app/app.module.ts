import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BuildComponent } from './build/build.component';
import { BuildCommentsComponent } from './build-comments/build-comments.component';


@NgModule({
  declarations: [
    AppComponent,
    BuildComponent,
    BuildCommentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
