import { Card } from '../album/card/card.model';

export class berlinData {

    berlinData: Card[] = [
  
        new Card('Berlin', 'German, weiners', 'url'),
        new Card('Bratenburg gate', "'ww2", 'url2')       
      ];

    getBerlinData() {
        return this.berlinData;
    }
}