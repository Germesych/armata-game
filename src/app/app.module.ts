import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageIndexComponent } from './pages/page-index/page-index.component';
import { PageNewsComponent } from './pages/page-news/page-news.component';
import { PageMediaComponent } from './pages/page-media/page-media.component';
import { PageCommunityComponent } from './pages/page-community/page-community.component';
import { PageAboutTheGameComponent } from './pages/page-about-the-game/page-about-the-game.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { BlockOneComponent } from './pages/page-index/block-video/block-one.component';
import { BlockTwoComponent } from './pages/page-index/block-info/block-two.component';
import { BlockThreeComponent } from './pages/page-index/block-news/block-three.component';
import { BlockFourComponent } from './pages/page-index/block-update/block-four.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { PageArticleComponent } from './pages/page-article/page-article.component';

@NgModule({
  declarations: [
    AppComponent,
    PageIndexComponent,
    PageNewsComponent,
    PageMediaComponent,
    PageCommunityComponent,
    PageAboutTheGameComponent,
    TopNavComponent,
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    BlockOneComponent,
    BlockTwoComponent,
    BlockThreeComponent,
    BlockFourComponent,
    PageHeaderComponent,
    PageArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
