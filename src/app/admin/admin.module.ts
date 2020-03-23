
import { CommonModule } from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {NgModule} from '@angular/core';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {RightsComponent} from './pages/rights/rights.component';
import {UserComponent} from './pages/user/user.component';
import { AdminComponent } from './pages/admin/admin.component';


@NgModule({
  declarations: [
    UserComponent,
    RightsComponent,
    DashboardComponent,
    AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
  ],
  providers: [],
})
export class AdminModule { }
