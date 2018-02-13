import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const content = [
      { id: 11, name: 'Blade Runner 2049', year: '2017', genre: 'comedy', director: 'James Gunn' },
      { id: 13, name: 'Murder on the Orient Express', year: '2017', genre: 'comedy', director: 'James Gunn' },
      { id: 14, name: 'Wonder Wheel', year: '2017', genre: 'comedy', director: 'James Gunn' },
      { id: 15, name: 'Dunkirk', year: '2017', genre: 'comedy', director: 'James Gunn' },
      { id: 16, name: 'A Cure for Wellness', year: '2017', genre: 'comedy', director: 'James Gunn' },
      { id: 17, name: 'The Mercy', year: '2017', genre: 'comedy', director: 'James Gunn' },
      { id: 18, name: 'Hostiles', year: '2017', genre: 'comedy', director: 'James Gunn' },
      { id: 19, name: 'The Shape of Water', year: '2017', genre: 'comedy', director: 'James Gunn' },
      { id: 20, name: 'John Wick: Chapter 2', year: '2017', genre: 'comedy', director: 'James Gunn' }
    ];
    return {content};
  }
}
