import {Component} from '@angular/core';
import {NgFor} from '@angular/common';

import {HeroDetailComponent} from '../hero-detail/hero-detail.component';
import {Hero} from '../hero';
import { MessageService } from '../message.service';
import {HeroService} from '../hero.service';

@Component({
  standalone: true,
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  imports: [HeroDetailComponent, NgFor],
})
export class HeroesComponent {

  heroes: Hero[] = [];

  selectedHero!: Hero;

  constructor(private heroService: HeroService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`)
  }

  
}
