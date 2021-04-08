import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { LogAlbumPageSelectedService } from 'src/app/logAlbumPageSelected.service';
import { Card } from '../card/card.model';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit, OnDestroy {

  constructor(private route: ActivatedRoute,
              private albumPageSelectedService: LogAlbumPageSelectedService) { }

  data: Card[];
  container: string;
  location: string;
  private getDataSubscription: Subscription;

  ngOnInit(): void {
      
    this.subscribeToGetDataFromService();
    this.location = this.route.snapshot.params['location'];

    this.route.params.subscribe( (params: Params) => {
      this.location = params['location'];
      this.albumPageSelectedService.logSelectionMade(this.location);
    })
    }
 
  subscribeToGetDataFromService() {
    this.getDataSubscription = this.albumPageSelectedService.getDataEmitter.
        subscribe(() => {
                   this.data = this.albumPageSelectedService.getData();
                   this.container = this.albumPageSelectedService.getContainer();
                  });
  }

  ngOnDestroy() {
    this.getDataSubscription.unsubscribe();
  }

  itemsLoaded() {
    console.log('itemsloaded');
  }
}
