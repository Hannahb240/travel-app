import { Card } from '../albums/card/card.model';

export class berlinData {

    berlinContainer = "berlin-container";

    berlinData: Card[] = [
  
        new Card('Berlin', 'German, weiners', 'assets/berlinImages/arialview.jpg', 'box-1'),  
        new Card('Berlin', 'the gate', 'assets/berlinImages/gate.jpeg', 'box-1'),
        new Card('Berlin', 'German, weiners', 'assets/berlinImages/autumn.jpeg', 'box-1')
        // new Card('Berlin', 'German, weiners', 'assets/berlinImages/city.jpeg', 'box-1'),    
        // new Card('Berlin', 'German, weiners', 'assets/berlinImages/clubs.jpeg', 'box-1'), 
        // new Card('Berlin', 'German, weiners', 'assets/berlinImages/office.jpeg', 'box-1'), 
        // new Card('Berlin', 'German, weiners', 'assets/berlinImages/pretzel.jpeg', 'box-1'), 
        // new Card('Berlin', 'German, weiners', 'assets/berlinImages/river.jpeg', 'box-1'), 
        // new Card('Berlin', 'German, weiners', 'assets/berlinImages/tall.jpeg', 'box-1'), 
        // new Card('Berlin', 'German, weiners', 'assets/berlinImages/wall.jpeg', 'box-1'), 
      ];


    getBerlinData() {
        return this.berlinData;
    }

    getBerlinContainer() {
        return this.berlinContainer;
    }
}