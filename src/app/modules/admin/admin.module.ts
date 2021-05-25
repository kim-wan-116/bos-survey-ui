import { NgModule } from '@angular/core';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { SharedModule } from '@app/shared/shared.module';
import { OverviewComponent } from './pages/overview/overview.component';

@NgModule({
  declarations: [LoginFormComponent, AdminLoginComponent, OverviewComponent],
  imports: [SharedModule, AdminRoutingModule]
})

export class AdminModule { }