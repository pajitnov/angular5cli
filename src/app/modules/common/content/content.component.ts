import { Component, OnInit } from '@angular/core';

import { Content } from './content';
import { ContentService } from '../../../services/content.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './views/content.component.html',
  styleUrls: ['./views/content.component.css']
})
export class ContentComponent implements OnInit {
  heroes: Content[];

  constructor(private heroService: ContentService) { }

  ngOnInit() {
    this.getContent();
  }

  getContent(): void {
    this.heroService.getAllContent()
    .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addContent({ name } as Content)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Content): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteContent(hero).subscribe();
  }

}
