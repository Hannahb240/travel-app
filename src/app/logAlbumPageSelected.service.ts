import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { parisData } from './albumData/parisData.service';
import { berlinData } from './albumData/berlinData.service';
import { Card } from './albums/card/card.model';

@Injectable()
export class LogAlbumPageSelectedService{

    constructor(private parisData: parisData,  
                private berlinData: berlinData) {}

    data: Card[];
    container: string;
    getDataEmitter = new Subject<boolean>();

    logSelectionMade(selection: string){
        
        if(selection == 'paris') {   
            this.data =  this.parisData.getParisData();   
            this.container = this.parisData.getParisContainer();        
        }

        if(selection == 'berlin') {
            this.data = this.berlinData.getBerlinData();
            this.container = this.berlinData.getBerlinContainer();
        } 
        this.resetAlbumArray();
    }

    resetAlbumArray() {
        this.getDataEmitter.next(true); 
    }

    getData() {
        return this.data;
    }

    getContainer() {
        return this.container;
    }

}