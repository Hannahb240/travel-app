import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  numberr: number;
  location: string;
  private getDataSubscription: Subscription;

  ngOnInit(): void {
      
    this.numberr = 0;
    this.subscribeToGetDataFromService();
    this.location = this.route.snapshot.params['location'];
    this.albumPageSelectedService.logSelectionMade(this.location);

  }

  subscribeToGetDataFromService() {
    this.getDataSubscription = this.albumPageSelectedService.getDataEmitter.
        subscribe(() => {
                   this.data = this.albumPageSelectedService.getData();
                   this.numberr++;
                   console.log(this.numberr);
                   console.log(this.data);
                  });
  }

  ngOnDestroy() {
    this.getDataSubscription.unsubscribe();
  }

}
