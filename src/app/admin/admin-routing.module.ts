import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RightsComponent} from './pages/rights/rights.component';
import {UserComponent} from './pages/user/user.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {AdminComponent} from './pages/admin/admin.component';


const routes: Routes = [
  {   path: 'admin', component: AdminComponent,
    children :[
      { path: 'dashboard', component: DashboardComponent},
      { path: 'user', component: UserComponent},
      { path: 'rights', component: RightsComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
