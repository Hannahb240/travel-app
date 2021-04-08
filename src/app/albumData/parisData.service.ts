import { Card } from '../albums/card/card.model';

export class parisData {

    parisContainer: 'paris-container';

    parisData: Card[] = [
  
        new Card('Paris', 'french', 
                 'assets/parisImages/1.jpg', 'el3'),
        new Card('Paris', 'french', 
                 'assets/parisImages/2.jpg', 'el3'),
        new Card('Paris', 'french', 
                 'assets/parisImages/3.jpg', 'el3'),
        new Card('Paris', 'french', 
                 'assets/parisImages/han.jpg', 'el3'), 
        new Card('Paris', 'french', 
                 'assets/parisImages/iwan.jpg', 'el3'), 
        new Card('Paris', 'french', 
                 'assets/parisImages/hello.jpg', 'el3'), 
        new Card('Paris', 'french', 
                 'assets/parisImages/1.jpg', 'el3'),
        new Card('Paris', 'french', 
                 'assets/parisImages/2.jpg', 'el3'),
        new Card('Paris', 'french', 
                 'assets/parisImages/3.jpg', 'el3'),
        new Card('Paris', 'french', 
                 'assets/parisImages/1.jpg', 'el3'),
        new Card('Paris', 'french', 
                 'assets/parisImages/2.jpg', 'el3'),
        new Card('Paris', 'french', 
                 'assets/parisImages/3.jpg', 'el3'),
        new Card('Paris', 'french', 
                 'assets/parisImages/han.jpg', 'el3'), 
        new Card('Paris', 'french', 
                 'assets/parisImages/iwan.jpg', 'el3'), 
        new Card('Paris', 'french', 
                 'assets/parisImages/hello.jpg', 'el3'), 
        new Card('Paris', 'french', 
                 'assets/parisImages/1.jpg', 'el3'),
        new Card('Paris', 'french', 
                 'assets/parisImages/2.jpg', 'el3'),
        new Card('Paris', 'french', 
                 'assets/parisImages/3.jpg', 'el3')
        // new Card('Paris', 'french', 
        //          'assets/parisImages/birdseye.jpeg', 'el3'),  
        // new Card('Paris', 'french', 
        //          'assets/parisImages/disne.jpeg', 'el3'),   
        // new Card('Paris', 'french', 
        //          'assets/parisImages/eiffel.jpeg', 'el3'),   
        // new Card('Paris', 'french', 
        //          'assets/parisImages/mont.jpeg', 'el3'),
        // new Card('Paris', 'french', 
        //          'assets/parisImages/photographers.jpeg', 'el3'),
        // new Card('Paris', 'french', 
        //          'assets/parisImages/sene.jpeg', 'el3'),
      ];

    getParisData() {
        return this.parisData;
    }

    getParisContainer() {
        return this.parisContainer;
    }
}