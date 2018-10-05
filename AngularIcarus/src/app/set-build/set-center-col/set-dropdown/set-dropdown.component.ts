import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Weapon } from '../../../build/shared/weapon';
import { Armour } from '../../../build/shared/armour';
import { Character } from './../../../profile/shared/user-profile';
import { Build } from './../../../build/shared/build';
import { ArmourService } from '../../../view-items/shared/armour.service';
import { WeaponService } from '../../../view-items/shared/weapon.service';
import { ModdingService } from '../../modding.service';
import { BuildService } from './../../../build/shared/build.service';

@Component({
  selector: 'app-set-dropdown',
  templateUrl: './set-dropdown.component.html',
  styleUrls: ['./set-dropdown.component.css']
})
export class SetDropdownComponent implements OnInit {
  public armours: Armour[];
  public weapons: Weapon[];
  public selectedArmour:Armour;
  public charMod: Character;
  public displaySelectedArmour:Armour;
  public displaySelectedWeapon:Weapon;

  public selectedWeapon:Weapon;
  public selectedWeaponOff:Weapon;
  public selectedHead:Armour;
  public selectedTorso:Armour;
  public selectedGloves:Armour;
  public selectedLegs:Armour;

  public build: Build;
  public builds: Build[];

  public choice: string;



  constructor(
              private route: ActivatedRoute,
              private armourService: ArmourService,
              private weaponService: WeaponService,
              private buildService: BuildService,
              private moddingService: ModdingService) { }

  ngOnInit() {
    this.armourService.getAllArmour().subscribe(armours=>this.armours=armours);
    this.weaponService.getAllWeapons().subscribe(weapons=>this.weapons=weapons);
    this.buildService.getCharBuilds(+this.route.snapshot.paramMap.get('id')).subscribe(builds=>this.builds=builds);
    this.choice = 'all';
  }

  checkBuild(id: number){
    console.log(this.build);
    this.buildService.getBuild(id)
      .subscribe(b => this.build = b);
      
      if(this.build){
        console.log("check assign");
        if(this.build.head)
          this.onSelectArmour(this.build.head);
        else
          this.unequipHead();
        if(this.build.torso)
          this.onSelectArmour(this.build.torso);
        else
          this.unequipTorso();
        if(this.build.gloves)
          this.onSelectArmour(this.build.gloves);
        else
          this.unequipGloves();
        if(this.build.legs)
          this.onSelectArmour(this.build.legs);
        else
          this.unequipLegs();
        if(this.build.mainHand)
          this.onSelectWeapon(this.build.mainHand);
        else
          this.unequipMainHand();
        if(this.build.offHand)
          this.onSelectWeaponOff(this.build.offHand);
        else
          this.unequipOffHand();
      }
    console.log(this.build);
    
  }
  saveBuild(){
    if(!this.build){
      this.build = new Build();
      this.build.characterId = +this.route.snapshot.paramMap.get('id');
    }
    console.log(this.build);
    this.build.head = this.selectedHead;
    this.build.torso = this.selectedTorso;
    this.build.gloves = this.selectedGloves;
    this.build.legs = this.selectedLegs;
    this.build.mainHand = this.selectedWeapon;
    this.build.offHand = this.selectedWeaponOff;
    console.log(this.build);
    this.buildService.updateBuild(this.build).subscribe(b => this.build = b);
    console.log(this.build);
  }



  unequipHead(){
    if(this.selectedHead)
      this.subCharMod(null,this.selectedHead)
    this.selectedHead = null;
  }
  unequipTorso(){
    if(this.selectedTorso)
      this.subCharMod(null,this.selectedTorso)
    this.selectedTorso = null;
  }
  unequipGloves(){
    if(this.selectedGloves)
      this.subCharMod(null,this.selectedGloves)
    this.selectedGloves = null;
  }
  unequipLegs(){
    if(this.selectedLegs)
      this.subCharMod(null,this.selectedLegs)
    this.selectedLegs = null;
  }
  unequipMainHand(){
    if(this.selectedWeapon)
      this.subCharMod(this.selectedWeapon,null)
    this.selectedWeapon = null;
  }
  unequipOffHand(){
    if(this.selectedWeaponOff)
      this.subCharMod(this.selectedWeaponOff,null)
    this.selectedWeaponOff = null;
  }

  

  addCharMod(weapon:Weapon, armour:Armour): void{
    if(!this.charMod){
      this.charMod = new Character(null,null,null,null,0,0,0,0,0,0);
    }
    if(weapon){
      this.charMod.attack += weapon.attackModifier;
      this.charMod.defense += weapon.defenseModifier;
    }
    if(armour){
      this.charMod.defense += armour.defenseModifier;
      switch(armour.stat){
        case "str":
          this.charMod.strength += armour.statModifier;
          break;
        case "dex":
          this.charMod.dexterity += armour.statModifier;
          break;
        case "int":
          this.charMod.intelligence += armour.statModifier;
          break;

      }
      

    }
    this.moddingService.setCharMod(this.charMod);
  }

  subCharMod(weapon:Weapon, armour:Armour): void{
    
    if(weapon){
      this.charMod.attack -= weapon.attackModifier;
      this.charMod.defense -= weapon.defenseModifier;
    }
    if(armour){
      this.charMod.defense -= armour.defenseModifier;
      switch(armour.stat){
        case "str":
          this.charMod.strength -= armour.statModifier;
          break;
        case "dex":
          this.charMod.dexterity -= armour.statModifier;
          break;
        case "int":
          this.charMod.intelligence -= armour.statModifier;
          break;
      }
    }

  }


  onSelectWeapon(weapon: Weapon): void{
    if(this.selectedWeapon)
      this.subCharMod(this.selectedWeapon,null)
    this.selectedWeapon = weapon;
    this.displaySelectedWeapon = null;
    this.addCharMod(weapon,null);
  }
  onSelectWeaponOff(weapon: Weapon): void{
    if(this.selectedWeaponOff)
      this.subCharMod(this.selectedWeaponOff,null)
    this.selectedWeaponOff = weapon;
    this.displaySelectedWeapon = null;
    this.addCharMod(weapon,null);
  }

  onSelectArmour(armour:Armour):void{
    this.selectedArmour = armour;
    switch(armour.armourType){
      case "head":
        if(this.selectedHead)
          this.subCharMod(null,this.selectedHead)
        this.selectedHead = armour;
        break;
      case "torso":
        if(this.selectedTorso)
          this.subCharMod(null,this.selectedTorso)
        this.selectedTorso = armour;
        break;
      case "gloves":
        if(this.selectedGloves)
          this.subCharMod(null,this.selectedGloves)
        this.selectedGloves = armour;
        break;
      case "legs":
        if(this.selectedLegs)
          this.subCharMod(null,this.selectedLegs)
        this.selectedLegs = armour;
        break;
    }
    this.displaySelectedArmour = null;
    this.addCharMod(null,armour);
  }
  
  displayWeapon(weapon: Weapon){
    
    this.buildService.getCharBuilds(+this.route.snapshot.paramMap.get('id')).subscribe(builds=>this.builds=builds);
    console.log(this.builds);
    this.displaySelectedArmour = null;
    this.displaySelectedWeapon = weapon;
  }

  displayArmour(armour: Armour){
    this.displaySelectedWeapon = null;
    this.displaySelectedArmour = armour;
  }


}
