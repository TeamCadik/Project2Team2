import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. Nice',str: 10,int: 10,dex: 10,hp: 100,def: 10,att: 10},
      { id: 12, name: 'Narco',str: 8,int: 14,dex: 7,hp: 150,def: 5,att:  20},
      { id: 13, name: 'Bombasto',str: 18,int: 2,dex: 10,hp: 200,def: 5,att:  25},
      { id: 14, name: 'Celeritas',str: 3,int: 24,dex: 9,hp: 180,def: 20,att:  15},
      { id: 15, name: 'Magneta',str: 5,int: 5,dex: 5,hp: 75,def: 12,att:  6},
      { id: 16, name: 'RubberMan',str: 6,int: 3,dex: 22,hp: 140,def: 20,att: 19}
    ];
    const items = [
      { id: 90, name: 'Flameberge',attMod: 25, defMod:0, itemType:'Weapon'},
      { id: 91, name: 'Gun',attMod: 35, defMod:0, itemType:'Weapon'},
      { id: 92, name: 'Pierce Shield',attMod: 20, defMod:20, itemType:'Sheild'},
      { id: 93, name: 'Stone Wall',attMod: 0, defMod:40, itemType:'Sheild'},
      { id: 93, name: 'Plank',attMod: 0, defMod:5, itemType:'Sheild'},
      { id: 94, name: 'Explosive Dagger',attMod: 50, defMod:0, itemType:'Weapon'},
      { id: 95, name: 'Catalyst',attMod: 5, defMod:0, itemType:'Weapon'},
      { id: 96, name: 'Espada de la Muerte',attMod: 35, defMod:0, itemType:'Weapon'},
      { id: 97, name: 'Rapier',attMod: 15, defMod:0, itemType:'Weapon'}
    ];
    return {heroes,items};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}