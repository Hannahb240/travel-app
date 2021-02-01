import { Component, OnInit } from '@angular/core';

import { Card } from '../album/card/card.model';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  cards: Card[] = [
  
    new Card('Paris', 'french, baguettes and croissants', 'url'),
    new Card('Berlin', 'german, wall', 'urll')
  ];


  ngOnInit(): void {
  }

}
