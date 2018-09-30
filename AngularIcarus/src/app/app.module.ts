import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { BuildComponent } from './build/build.component';
import { BuildCommentsComponent } from './build-comments/build-comments.component';

=======
import { BuildComponent } from './build/build/build.component';
import { ArmouryComponent } from './build/armoury/armoury.component';
import { RouterModule } from '@angular/router';
import { ArmourComponent } from './build/armour/armour.component';

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
>>>>>>> eebab198260dd73cdf78b8b0cf23947efc97035f

@NgModule({
  declarations: [
    AppComponent,
    BuildComponent,
<<<<<<< HEAD
<<<<<<< HEAD
    BuildCommentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
=======
    ArmouryComponent
=======
    ArmouryComponent,
    ArmourComponent
>>>>>>> 58fbaf8c228471f4c653ecf4f4ec566c6102d232
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(routes)
>>>>>>> eebab198260dd73cdf78b8b0cf23947efc97035f
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
