import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './landing/dashboard.component';
import { HeroesComponent }      from './content/content.component';
import { HeroDetailComponent }  from './content.detail/content.detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/promo', pathMatch: 'full' },
  { path: 'promo', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'content', component: HeroesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
