import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }