import { Card } from '../albums/card/card.model';

export class parisData {

    parisData: Card[] = [
  
        new Card('Paris', 'french, baguettes and croissants', 'url'),
        new Card('Montmarte', "'francee", 'url2')       
      ];

    getParisData() {
        return this.parisData;
    }
}