import { NgModule, Component } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { GuestLoginComponent } from './pages/guest-login/guest-login.component';
import { SurveyComponent } from './pages/survey/survey.component';
import { AuthGuardService } from '@app/core/guards/auth.guard';

// Base path for this module is /guest through lazy load
const routes: Routes = [
    { path: 'survey', component: SurveyComponent, canActivate: [AuthGuardService] },
    { path: '', component: GuestLoginComponent }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GuestRoutingModule { }
