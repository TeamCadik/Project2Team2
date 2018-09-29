import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Item } from './item';

export class ItemMemService implements InMemoryDbService {
  createDb() {
    const items = [
      { id: 90, name: 'Flameberge',attMod: 25, defMod:0},
      { id: 91, name: 'Gun',attMod: 35, defMod:0},
      { id: 92, name: 'Pierce SHield',attMod: 20, defMod:20},
      { id: 93, name: 'Stone Wall',attMod: 0, defMod:40},
      { id: 94, name: 'Explosive Dagger',attMod: 50, defMod:0},
      { id: 95, name: 'Catalyst',attMod: 5, defMod:0},
      { id: 96, name: 'Espada de la Muerte',attMod: 35, defMod:0},
      { id: 97, name: 'Rapier',attMod: 15, defMod:0}
    ];
    return {items};
  }

  // Overrides the genId method to ensure that a Item always has an id.
  // If the items array is empty,
  // the method below returns the initial number (11).
  // if the items array is not empty, the method below returns the highest
  // Item id + 1.
  genId(items: Item[]): number {
    return items.length > 0 ? Math.max(...items.map(Item => Item.id)) + 1 : 11;
  }
}