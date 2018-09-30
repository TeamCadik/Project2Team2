import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BuildComponent } from './build/build/build.component';
import { ArmouryComponent } from './build/armoury/armoury.component';
import { RouterModule } from '@angular/router';
import { ArmourComponent } from './build/armour/armour.component';
import { LoginComponent } from './core/login/login.component';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';

const routes=[
  {
    path: '',
    redirectTo: '/armoury',
    pathMatch: 'full'
  },
  {
    path:'armoury',
    component: ArmouryComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    BuildComponent,
    ArmouryComponent,
    ArmourComponent,
    LoginComponent,
    NavBarComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
