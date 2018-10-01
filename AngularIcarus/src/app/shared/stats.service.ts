import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StatService {
  getChLvl: number;

  serhitPoints = 5;
  serstrength = 5;
  serdexterity = 5;
  serintel = 5;
  serdefense = 5;
  serattack = 5;

  getCharLevel(chrlvl: number): number {
    this.getChLvl = chrlvl;

    this.serhitPoints = this.serhitPoints * chrlvl;
    console.log(this.serhitPoints);

    this.serstrength = this.serstrength * chrlvl;

    this.serdexterity = this.serdexterity * chrlvl;

    this.serintel = this.serintel * chrlvl;

    this.serdefense = this.serdefense * chrlvl;

    this.serattack = this.serattack * chrlvl;

    console.log(this.getChLvl);

    return this.getChLvl;
  }

  sendCharLevel(): number {
    console.log(this.getChLvl);
    return this.getChLvl;
  }
}
