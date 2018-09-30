import { Component, OnInit, Input } from '@angular/core';

import { Armour } from '../shared/armour';
import { ArmourService } from '../shared/armour.service';

@Component({
  selector: 'app-armour',
  templateUrl: './armour.component.html',
  styleUrls: ['./armour.component.css']
})

export class ArmourComponent implements OnInit {
  @Input() openArmour : Armour;
  @Input() openAllArmour : Armour[];
  constructor(private armourService: ArmourService) { }

  ngOnInit() {
  }

}
