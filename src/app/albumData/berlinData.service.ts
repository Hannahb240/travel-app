import { Card } from '../albums/card/card.model';

export class berlinData {

    berlinContainer = "berlin-container";

    berlinData: Card[] = [
  
        new Card('Berlin', 'German, weiners', 'assets/berlinImages/arialview.jpg', 'el3'),  
        new Card('Berlin', 'the gate', 'assets/berlinImages/gate.jpeg', 'el3'),
        new Card('Berlin', 'German, weiners', 'assets/berlinImages/autumn.jpeg', 'el3'),
        new Card('Berlin', 'German, weiners', 'assets/berlinImages/city.jpeg', 'el3'),    
        new Card('Berlin', 'German, weiners', 'assets/berlinImages/clubs.jpeg', 'el3'), 
        new Card('Berlin', 'German, weiners', 'assets/berlinImages/office.jpeg', 'el3'), 
        new Card('Berlin', 'German, weiners', 'assets/berlinImages/pretzel.jpeg', 'el3'), 
        new Card('Berlin', 'German, weiners', 'assets/berlinImages/river.jpeg', 'el3'), 
        new Card('Berlin', 'German, weiners', 'assets/berlinImages/tall.jpeg', 'el3'), 
        new Card('Berlin', 'German, weiners', 'assets/berlinImages/wall.jpeg', 'el3'), 
      ];


    getBerlinData() {
        return this.berlinData;
    }

    getBerlinContainer() {
        return this.berlinContainer;
    }
}