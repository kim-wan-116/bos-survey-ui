import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { OverviewComponent } from './pages/overview/overview.component';

// Base path for this module is /admin through lazy-load
const routes: Routes = [
  { path: 'overview', component: OverviewComponent },
  { path: '', component: AdminLoginComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
