import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BuildCommentsComponent } from './set-build/set-left-col/build-comments/build-comments.component';
import { SetBuildComponent } from './set-build/set-build.component';
import { SetLeftColComponent } from './set-build/set-left-col/set-left-col.component';
import { SetCenterColComponent } from './set-build/set-center-col/set-center-col.component';
import { SetRightColComponent } from './set-build/set-right-col/set-right-col.component';
import { SetCharHeaderComponent } from './set-build/set-char-header/set-char-header.component';
import { SetsComponent } from './set-build/set-center-col/sets/sets.component';
import { SetDescriptionComponent } from './set-build/set-right-col/set-description/set-description.component';
import { SetViewItemComponent } from './set-build/set-right-col/set-view-item/set-view-item.component';
import { SetStatsComponent } from './set-build/set-left-col/set-stats/set-stats.component';
import { SetDropdownComponent } from './set-build/set-center-col/set-dropdown/set-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    BuildCommentsComponent,
    SetBuildComponent,
    SetLeftColComponent,
    SetCenterColComponent,
    SetRightColComponent,
    SetCharHeaderComponent,
    SetsComponent,
    SetDescriptionComponent,
    SetViewItemComponent,
    SetStatsComponent,
    SetDropdownComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
