import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Content }         from '../content/content';
import { HeroService }  from '../../../services/content.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './views/content.detail.component.html',
  styleUrls: [ './views/content.detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Content;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

 save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }
}
