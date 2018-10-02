import { Injectable } from '@angular/core';
import { Stats } from './stats';

@Injectable({
  providedIn: 'root',
})
export class StatService {
  getChLvl: Stats;

  hitPoints: Stats;
  strength: Stats;
  dexterity: Stats;
  intel: Stats;
  defense: Stats;
  attack: Stats;

  getCharLevel(chrlvl: number): number {
    this.getChLvl.getChLvl = chrlvl;

    this.hitPoints.serhitPoints = this.hitPoints.serhitPoints * (this.getChLvl.getChLvl * 5);
    console.log(this.hitPoints.serhitPoints);

    this.strength.serstrength = this.strength.serstrength * (this.getChLvl.getChLvl * 5);

    this.dexterity.serdexterity = this.dexterity.serdexterity * (this.getChLvl.getChLvl * 5);

    this.intel.serintel = this.intel.serintel * (this.getChLvl.getChLvl * 5);

    this.defense.serdefense = this.defense.serdefense * (this.getChLvl.getChLvl * 5);

    this.attack.serattack = this.attack.serattack * (this.getChLvl.getChLvl * 5);

    console.log(this.getChLvl.getChLvl);

    return this.getChLvl.getChLvl;
  }

  sendCharLevel(): number {
    console.log(this.getChLvl.getChLvl);
    return this.getChLvl.getChLvl;
  }
}
