import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent }   from '../modules/landing/landing.component';
import { ContentComponent }      from '../modules/common/content/content.component';
import { ContentDetail }  from '../modules/common/content.detail/content.detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/promo', pathMatch: 'full' },
  { path: 'promo', component: LandingComponent },
  { path: 'detail/:id', component: ContentDetail },
  { path: 'content', component: ContentComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
