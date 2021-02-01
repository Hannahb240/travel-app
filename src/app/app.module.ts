import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumComponent } from './album/album.component';
import { CardComponent } from './album/card/card.component';
import { HeaderComponent} from './header/header.component';
import { LogAlbumPageSelectedService } from './logAlbumPageSelected.service';
import { parisData } from './albumData/parisData.service';
import { berlinData } from './albumData/berlinData.service';

@NgModule({
  declarations: [
    AppComponent,
    AlbumComponent,
    CardComponent,
    HeaderComponent
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
