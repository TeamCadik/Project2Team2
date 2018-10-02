import { Injectable } from '@angular/core';
import { Stats } from './stats';

@Injectable({
  providedIn: 'root',
})
export class StatService {
  getChLvl: Stats;

  serhitPoints: Stats;
  serstrength: Stats;
  serdexterity: Stats;
  serintel: Stats;
  serdefense: Stats;
  serattack: Stats;

  getCharLevel(chrlvl: number): number {
    this.getChLvl.getChLvl = chrlvl;

    this.serhitPoints.serhitPoints = this.serhitPoints.serhitPoints * (this.getChLvl.getChLvl * 5);
    console.log(this.serhitPoints.serhitPoints);

    this.serstrength.serstrength = this.serstrength.serstrength * (this.getChLvl.getChLvl * 5);

    this.serdexterity.serdexterity = this.serdexterity.serdexterity * (this.getChLvl.getChLvl * 5);

    this.serintel.serintel = this.serintel.serintel * (this.getChLvl.getChLvl * 5);

    this.serdefense.serdefense = this.serdefense.serdefense * (this.getChLvl.getChLvl * 5);

    this.serattack.serattack = this.serattack.serattack * (this.getChLvl.getChLvl * 5);

    console.log(this.getChLvl.getChLvl);

    return this.getChLvl.getChLvl;
  }

  sendCharLevel(): number {
    console.log(this.getChLvl.getChLvl);
    return this.getChLvl.getChLvl;
  }
}
