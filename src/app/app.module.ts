import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import { CardComponent } from './albums/card/card.component';
import { HeaderComponent} from './header/header.component';
import { LogAlbumPageSelectedService } from './logAlbumPageSelected.service';
import { parisData } from './albumData/parisData.service';
import { berlinData } from './albumData/berlinData.service';
import { AlbumComponent } from './albums/album/album.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    CardComponent,
    HeaderComponent,
    AlbumComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [LogAlbumPageSelectedService, 
              parisData, 
              berlinData],
  bootstrap: [AppComponent]
})
export class AppModule { }
