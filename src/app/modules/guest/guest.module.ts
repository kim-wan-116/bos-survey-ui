import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { GuestRoutingModule } from './guest-routing.module';
import { GuestLoginComponent } from './pages/guest-login/guest-login.component';
import { SurveyComponent } from './pages/survey/survey.component';



@NgModule({
    declarations: [GuestLoginComponent, SurveyComponent],
    imports: [SharedModule, GuestRoutingModule]
})

export class GuestModule { }