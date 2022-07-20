import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './component/nav/nav.component';
import { MainContentComponent } from './component/main-content/main-content.component';
import { AsideContentComponent } from './component/aside-content/aside-content.component';
import { ContentComponent } from './component/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainContentComponent,
    AsideContentComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
