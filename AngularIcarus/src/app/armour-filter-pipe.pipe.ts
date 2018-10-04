import { Pipe, PipeTransform } from '@angular/core';
import { Armour } from './build/shared/armour';

@Pipe({
  name: 'armourFilterPipe'
})
export class ArmourFilterPipePipe implements PipeTransform {

  transform(armours: Armour[], searchText=""): Armour[] {
    if(!armours){
      return[];
    }
    if(searchText){
      searchText = searchText.toLowerCase();
    }
    return armours.filter (armour =>{
      const searchNumber: number = +searchText;
      let search:boolean;
      search = armour.armourName.toLowerCase().includes(searchText)
        || armour.armourType.toLowerCase().includes(searchText)
        || armour.stat.toLowerCase().includes(searchText)
        || armour.description.toLowerCase().includes(searchText)
        || armour.armourId === searchNumber;

        return search;
    })
  }

}
