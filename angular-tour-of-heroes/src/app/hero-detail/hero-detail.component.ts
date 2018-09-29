import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero }         from '../hero';
import { HeroService }  from '../hero.service';

import { Item }         from '../item';
import { ItemService }  from '../item.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  items: Item[];

  itemMod: Item;

  selectedLItem: Item;
  displayLItem: Item;
  
  selectedRItem: Item;
  displayRItem: Item;

  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
    this.getItems();

  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  unequipR(): void{
    if(this.selectedRItem)
      this.subItemMod(this.selectedRItem);
    this.selectedRItem = null;

  }
  unequipL(): void{
    if(this.selectedLItem)
      this.subItemMod(this.selectedLItem);
    this.selectedLItem = null;

  }


  onSelectL(item: Item): void {
    if(this.selectedLItem)
      this.subItemMod(this.selectedLItem);
    this.selectedLItem = item;
    this.displayLItem = null;
    this.addItemMod(item);
  }
  onSelectLDisplay(item: Item): void {
    this.displayLItem = item;
  }
  onSelectR(item: Item): void {
    if(this.selectedRItem)
      this.subItemMod(this.selectedRItem);
    this.selectedRItem = item;
    this.displayRItem = null;
    this.addItemMod(item);
  }
  onSelectRDisplay(item: Item): void {
    this.displayRItem = item;
  }

  addItemMod(item: Item): void{
    if(!this.itemMod){
      this.itemMod = new Item();
      this.itemMod.attMod = 0;
      this.itemMod.defMod = 0;
    }
    this.itemMod.attMod += item.attMod;
    this.itemMod.defMod += item.defMod;
  }
  subItemMod(item:Item): void {
    this.itemMod.attMod -= item.attMod;
    this.itemMod.defMod -= item.defMod;
    if(this.itemMod.attMod == 0 && this.itemMod.attMod == 0)
      this.itemMod = null;

  }


  getItems(): void {
    this.itemService.getItems()
      .subscribe(items => this.items = items);
  }

  goBack(): void {
    this.location.back();
  }

 save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }
}