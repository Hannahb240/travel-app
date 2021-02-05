import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { LogAlbumPageSelectedService } from '../logAlbumPageSelected.service'; 

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  constructor(private albumPageSelectedService: LogAlbumPageSelectedService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    
    this.route.params.subscribe(next => {
      if(next['location']) {
         this.albumPageSelectedService.
              logSelectionMade(next['location'].  
              toString());
      }
    })
  }

}
