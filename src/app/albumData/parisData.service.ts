import { Card } from '../albums/card/card.model';

export class parisData {
  parisContainer: 'paris-container';

  parisData: Card[] = [
    new Card(
      'Paris',
      'baguettes and croissants',
      'assets/parisImages/tower.jpeg',
      'width: 40%'
    ),
    new Card('Paris', 'french', 'assets/parisImages/louvre.jpg', 'width: 20%'),
    new Card('Paris', 'french', 'assets/parisImages/arc.jpg', 'width: 20%'),
    new Card(
      'Paris',
      'french',
      'assets/parisImages/birdseye.jpeg',
      'width: 40%'
    ),
    new Card('Paris', 'french', 'assets/parisImages/disne.jpeg', 'width: 40%'),
    new Card('Paris', 'french', 'assets/parisImages/eiffel.jpeg', 'width: 40%'),
    new Card('Paris', 'french', 'assets/parisImages/mont.jpeg', 'width: 20%'),
    new Card(
      'Paris',
      'french',
      'assets/parisImages/photographers.jpeg',
      'width: 40%'
    ),
    new Card('Paris', 'french', 'assets/parisImages/sene.jpeg', 'width: 40%'),
  ];

  getParisData() {
    return this.parisData;
  }

  getParisContainer() {
    return this.parisContainer;
  }
}
