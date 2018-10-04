import { Component, OnInit, Input } from '@angular/core';

import { ArmourService } from '../shared/armour.service';
import { Armour } from '../../build/shared/armour';
import { ItemsComponent } from '../items/items.component';

@Component({
  selector: 'app-armour',
  templateUrl: './armour.component.html',
  styleUrls: ['./armour.component.css']
})

export class ArmourComponent implements OnInit {
  @Input() openArmour : Armour;
  
  constructor(private armourService: ArmourService) { }

  ngOnInit() {
  }

  displayArmour(a:Armour){
    this.armourService.setSelectedArmour(a);
  }

}
