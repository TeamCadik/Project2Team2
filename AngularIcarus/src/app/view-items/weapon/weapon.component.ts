import { Component, OnInit, Input } from '@angular/core';
import { Weapon } from '../../build/shared/weapon';
import { WeaponService } from '../shared/weapon.service';

@Component({
  selector: 'app-weapon',
  templateUrl: './weapon.component.html',
  styleUrls: ['./weapon.component.css']
})
export class WeaponComponent implements OnInit {
@Input() openWeapon: Weapon;
  constructor(private weaponService:WeaponService) { }

  ngOnInit() {
  }

  displayArmour(w:Weapon){
    this.weaponService.setSelectedArmour(w);
  }
}
