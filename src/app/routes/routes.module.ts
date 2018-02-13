import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from '../modules/landing/landing.component';
import { HeroesComponent }      from '../modules/common/content/content.component';
import { HeroDetailComponent }  from '../modules/common/content.detail/content.detail.component';

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