import { Pipe, PipeTransform } from '@angular/core';
import { Weapon } from './build/shared/weapon';

@Pipe({
  name: 'weaponFilterPipe'
})
export class WeaponFilterPipePipe implements PipeTransform {
  
  transform(weapons: Weapon[], searchText = ""): Weapon[] {
    if (!weapons) {
      return [];
    }
    if(searchText){
      searchText = searchText.toLowerCase();
    }
    return weapons.filter (weapon => {
      const searchNumber: number = +searchText;
      let search: boolean;
      search = weapon.weaponName.toLowerCase().includes(searchText)
        || weapon.weaponType.toLowerCase().includes(searchText)
        || weapon.description.toLowerCase().includes(searchText)
        || weapon.weaponId === searchNumber;

      return search;
    })
  }
}

