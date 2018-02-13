import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './req/in-memory-data.service';

import { AppRoutingModule }     from './routes/routes.module';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './modules/landing/landing.component';
import { HeroDetailComponent }  from './modules/common/content.detail/content.detail.component';
import { HeroesComponent }      from './modules/common/content/content.component';
import { HeroSearchComponent }  from './modules/common/content.search/content.search.component';
import { HeroService }          from './services/content.service';
import { MessageService }       from './services/com.service';
import { MessagesComponent }    from './modules/messages/messages.component';
import { UserComponent } from './modules/user/user.component';
import { ConfigComponent } from './config/config.component';
import { AnalyticsComponent } from './modules/analytics/analytics.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
    UserComponent,
    ConfigComponent,
    AnalyticsComponent
  ],
  providers: [ HeroService, MessageService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
