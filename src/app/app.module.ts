import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageIndexComponent } from './pages/page-index/page-index.component';
import { PageNewsComponent } from './pages/page-news/page-news.component';
import { PageMediaComponent } from './pages/page-media/page-media.component';
import { PageCommunityComponent } from './pages/page-community/page-community.component';
import { PageAboutTheGameComponent } from './pages/page-about-the-game/page-about-the-game.component';

@NgModule({
  declarations: [
    AppComponent,
    PageIndexComponent,
    PageNewsComponent,
    PageMediaComponent,
    PageCommunityComponent,
    PageAboutTheGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
