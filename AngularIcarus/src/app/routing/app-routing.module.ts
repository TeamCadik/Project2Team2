import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ArmouryComponent } from '../build/armoury/armoury.component';
import { UserProfileComponent } from '../profile/user-profile/user-profile.component';
import { UserProfileDetailComponent } from '../profile/user-profile-detail/user-profile-detail.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    RouterModule.forRoot(routes), HttpClientModule
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }

const routes: Routes = [
  { path: 'profile', component: UserProfileComponent },
  { path: 'character/:id', component: UserProfileDetailComponent }
];