import { Component, OnInit } from '@angular/core';
import { LogAlbumPageSelectedService } from 'src/app/logAlbumPageSelected.service';
import { Card } from '../card/card.model';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  constructor(private albumPageSelectedService: LogAlbumPageSelectedService) { }

  data: Card[];
  userActivated = false;

  ngOnInit(): void {

    this.albumPageSelectedService.activatedEmmiter.
                                  subscribe(didActivate => {
                                    this.userActivated = didActivate;
                                  })

  }

}
