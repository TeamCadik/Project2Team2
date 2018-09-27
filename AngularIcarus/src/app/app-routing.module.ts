import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserProfileDetailComponent } from './user-profile-detail/user-profile-detail.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: 'profile', component: UserProfileComponent},
  { path: 'character/:id', component: UserProfileDetailComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes), HttpClientModule ]
})
export class AppRoutingModule {}