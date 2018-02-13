import { Component, OnInit } from '@angular/core';

import { Content } from './content';
import { HeroService } from '../../../services/content.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './views/content.component.html',
  styleUrls: ['./views/content.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Content[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Content)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Content): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

}
