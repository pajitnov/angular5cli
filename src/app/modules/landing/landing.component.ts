import { Component, OnInit } from '@angular/core';
import { Content } from '../content';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './views/landing.component.html',
  styleUrls: [ './views/landing.component.css' ]
})
export class LandingComponent implements OnInit {
  movies: Content[] = [];

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.getContent();
  }

  getContent(): void {
    this.contentService.getAllContent()
      .subscribe(content => this.movies = content.slice(1, 5));
  }
}
