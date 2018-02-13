import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Content }         from '../content/content';
import { ContentService }  from '../../../services/content.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './views/content.detail.component.html',
  styleUrls: [ './views/content.detail.component.css' ]
})
export class ContentDetail implements OnInit {
  @Input() hero: Content;

  constructor(
    private route: ActivatedRoute,
    private heroService: ContentService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getContent(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

 save(): void {
    this.heroService.updateContent(this.hero)
      .subscribe(() => this.goBack());
  }
}
