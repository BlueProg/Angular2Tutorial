import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Hero } from './hero';

import { Router } from '@angular/router';

import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];
	name = 'Angular';
	title = 'Tour of Heroes';
	selectHero: Hero;

  constructor(
    private heroService: HeroService,
    private router: Router
  ) { }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes =>
      this.heroes = heroes
    );
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectHero.id])
  }
}
