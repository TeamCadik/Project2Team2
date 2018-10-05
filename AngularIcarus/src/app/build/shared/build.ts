import { Armour } from '../shared/armour';
import { Weapon } from '../shared/weapon';

export class Build{
    buildId: number;
    characterId: number;
    head: Armour;
    torso: Armour;
    legs: Armour;
    gloves: Armour;
    mainHand: Weapon;
    offHand: Weapon;
    description: string;
}