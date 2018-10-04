import { Component, OnInit } from '@angular/core';
import { Weapon } from '../../build/shared/weapon';
import { Armour } from '../../build/shared/armour';
import { ArmourService } from '../shared/armour.service';
import { WeaponService } from '../shared/weapon.service';
import { UserService } from '../../shared/user/user.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  public armours: Armour[];
  public weapons: Weapon[];
  public selectedArmour:Armour;
  public selectedWeapon:Weapon;

  constructor(private armourService: ArmourService,
              private weaponService: WeaponService,
              private userService: UserService) { }

  ngOnInit() {
    this.armourService.getAllArmour().subscribe(armours=>this.armours=armours);
    this.weaponService.getAllWeapons().subscribe(weapons=>this.weapons=weapons);
    this.selectedArmour=this.armourService.getSelectedArmour();
    this.selectedWeapon=this.weaponService.getSelectedWeapon();
  }

  displayWeapon(){
    this.selectedWeapon = this.weaponService.getSelectedWeapon();
    console.log(this.selectedWeapon);
  }

  displayArmour(){
    this.selectedArmour = this.armourService.getSelectedArmour();
    console.log(this.selectedArmour);
  }

  isDeveloper(): number{
    if(this.userService.getUser())
    {
      return this.userService.getUser().isDeveloper;
    }
    return 0;
  }
}
