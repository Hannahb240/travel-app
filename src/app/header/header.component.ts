import { Component, OnInit } from '@angular/core';
import { LogAlbumPageSelectedService } from '../logAlbumPageSelected.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [LogAlbumPageSelectedService]
})
export class HeaderComponent implements OnInit {

  constructor(private albumPageSelectedService: LogAlbumPageSelectedService) { }

  ngOnInit(): void {

  }

  // onUserSelection(selectionMade: string){
  //   this.albumPageSelectedService.logSelectionMade(selectionMade);
  // }

}
