import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import {AboutUsComponent} from './pages/about-us/about-us.component';
import {HomeComponent} from './pages/home/home.component';
import {ContactUsComponent} from './pages/contact-us/contact-us.component';



const routes: Routes = [
  {   path: '',   component: HomeComponent   },
  {   path: 'home',   component: HomeComponent   },
  {   path: 'contactus',   component: ContactUsComponent   },
  {   path: 'aboutus',   component: AboutUsComponent   },
];

@NgModule({
  declarations: [AboutUsComponent, ContactUsComponent, HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  providers: [],
})
export class HomeModule { }
