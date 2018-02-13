import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Content } from '../content/content';
import { ContentService } from '../../../services/content.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './views/content.search.component.html',
  styleUrls: [ './views/content.search.component.css' ]
})
export class ContentSearchComponent implements OnInit {
  heroes$: Observable<Content[]>;
  private searchTerms = new Subject<string>();

  constructor(private heroService: ContentService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.heroService.searchContent(term)),
    );
  }
}
