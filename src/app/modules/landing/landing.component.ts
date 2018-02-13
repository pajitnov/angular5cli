import { Component, OnInit } from '@angular/core';
import { Content } from '../common/content/content';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './views/landing.component.html',
  styleUrls: [ './views/landing.component.css' ]
})
export class LandingComponent implements OnInit {
  heroes: Content[] = [];

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.getContent();
  }

  getContent(): void {
    this.contentService.getAllContent()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}
