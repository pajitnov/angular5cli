import { Component, OnInit } from '@angular/core';
import { Content } from '../common/content/content';
import { HeroService } from '../../services/content.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './views/landing.component.html',
  styleUrls: [ './views/landing.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Content[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}
