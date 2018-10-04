import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BuildComponent } from './build/build/build.component';
import { ArmouryComponent } from './build/armoury/armoury.component';
import { RouterModule } from '@angular/router';
import { UserProfileComponent } from './profile/user-profile/user-profile.component';
import { UserProfileDetailComponent } from './profile/user-profile-detail/user-profile-detail.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { CreateUserProfileComponent } from './profile/create-user-profile/create-user-profile.component';
import { SelectBuildComponent } from './profile/select-build/select-build.component';
import { ArmourComponent } from './view-items/armour/armour.component';
import { LoginComponent } from './core/login/login.component';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { WeaponComponent } from './view-items/weapon/weapon.component';
import { ItemsComponent } from './view-items/items/items.component';
import { SetBuildComponent } from './set-build/set-build.component';
import { SetRightColComponent } from './set-build/set-right-col/set-right-col.component';
import { SetViewItemComponent } from './set-build/set-right-col/set-view-item/set-view-item.component';
import { SetDescriptionComponent } from './set-build/set-right-col/set-description/set-description.component';
import { SetLeftColComponent } from './set-build/set-left-col/set-left-col.component';
import { SetStatsComponent } from './set-build/set-left-col/set-stats/set-stats.component';
import { BuildCommentsComponent } from './set-build/set-left-col/build-comments/build-comments.component';
import { SetCharHeaderComponent } from './set-build/set-char-header/set-char-header.component';
import { SetCenterColComponent } from './set-build/set-center-col/set-center-col.component';
import { SetsComponent } from './set-build/set-center-col/sets/sets.component';
import { SetDropdownComponent } from './set-build/set-center-col/set-dropdown/set-dropdown.component';
import { CommentsService } from './shared/comments.service';
import { StatService } from './shared/stats.service';
import { ArmourFilterPipePipe } from './armour-filter-pipe.pipe';
import { WeaponFilterPipePipe } from './weapon-filter-pipe.pipe';

const routes=[
  {
    path: '',
    redirectTo: '/armoury',
    pathMatch: 'full'
  },
  {
    path:'armoury',
    component: ArmouryComponent
  },
  {
    path: 'profile',
    component: UserProfileComponent
  },
  {
    path: 'character/:id',
    component: SetBuildComponent
  },
  {
    path: 'add-character',
    component: CreateUserProfileComponent
  },
  {
    path: 'view-items',
    component: ItemsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    BuildComponent,
    ArmouryComponent,
    UserProfileComponent,
    UserProfileDetailComponent,
    CreateUserProfileComponent,
    SelectBuildComponent,
    ArmourComponent,
    LoginComponent,
    NavBarComponent,
    WeaponComponent,
    ItemsComponent,
    SetBuildComponent,
    SetRightColComponent,
    SetViewItemComponent,
    SetDescriptionComponent,
    SetLeftColComponent,
    SetStatsComponent,
    BuildCommentsComponent,
    SetCharHeaderComponent,
    SetCenterColComponent,
    SetsComponent,
    SetDropdownComponent,
    ArmourFilterPipePipe,
    WeaponFilterPipePipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserProfileComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
