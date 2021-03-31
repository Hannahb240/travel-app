import { Card } from '../albums/card/card.model';

export class parisData {

    parisContainer: 'paris-container';

    parisData: Card[] = [
  
        new Card('Paris', 'baguettes and croissants', 
                 'assets/parisImages/tower.jpeg', 'box-1'),
        new Card('Paris', 'french', 
                 'assets/parisImages/louvre.jpg', 'box-2'),
        new Card('Paris', 'french', 
                 'assets/parisImages/arc.jpg', 'box-1')
        // new Card('Paris', 'french', 
        //          'assets/parisImages/balloons.jpeg', 'box-2'), 
        // new Card('Paris', 'french', 
        //          'assets/parisImages/birdseye.jpeg', 'box-1'),  
        // new Card('Paris', 'french', 
        //          'assets/parisImages/disne.jpeg', 'box-2'),   
        // new Card('Paris', 'french', 
        //          'assets/parisImages/eiffel.jpeg', 'box-1'),   
        // new Card('Paris', 'french', 
        //          'assets/parisImages/mont.jpeg', 'box-1'),
        // new Card('Paris', 'french', 
        //          'assets/parisImages/photographers.jpeg', 'box-1'),
        // new Card('Paris', 'french', 
        //          'assets/parisImages/sene.jpeg', 'box-1'),
      ];

    getParisData() {
        return this.parisData;
    }

    getParisContainer() {
        return this.parisContainer;
    }
}