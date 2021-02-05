import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

import { parisData } from './albumData/parisData.service';
import { berlinData } from './albumData/berlinData.service';
import { Card } from './albums/card/card.model';

@Injectable()
export class LogAlbumPageSelectedService{

    constructor(private router: Router,
                private parisData: parisData,  
                private berlinData: berlinData) {}

    data: Card[];

    activatedEmmiter = new Subject<boolean>();

    logSelectionMade(selection: string){
        console.log('User wants to view ', selection);
        
        if(selection == 'paris') {   
            this.data =  this.parisData.getParisData();
            console.log(this.data);  
                   
        }

        if(selection == 'berlin') {
            this.data = this.berlinData.getBerlinData();
            console.log(this.data);
        } 

        this.resetAlbumArray();
    }

    resetAlbumArray() {

        this.activatedEmmiter.next(true); 
                  
    }

}