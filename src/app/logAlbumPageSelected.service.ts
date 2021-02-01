import { Injectable } from '@angular/core';
import { Card } from '../app/album/card/card.model';

import { parisData } from './albumData/parisData.service';
import { berlinData } from './albumData/berlinData.service';

@Injectable()
export class LogAlbumPageSelectedService{

    constructor(private parisData: parisData,  
                private berlinData: berlinData){ }

    data: Card[];
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

        
    }

}