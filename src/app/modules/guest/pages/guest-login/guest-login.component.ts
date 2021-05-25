import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Login } from '../../../../shared/store/user/user.actions';

@Component({
  selector: 'app-guest-login',
  templateUrl: './guest-login.component.html',
  styleUrls: ['./guest-login.component.scss']
})
export class GuestLoginComponent implements OnInit {

  private loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private store: Store) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      fullName: ['', Validators.required],
    })
  }

  onFormSubmit() {

    // Log the user in as a guest
    this.store.dispatch( new Login( { name: this.fullName, role: 'GUEST' } )).subscribe(
      () => {
        this.router.navigateByUrl('/guest/survey');
      },
      err => {
        console.log("There was an issue logging you in.")
      }
    )
  }

  get fullName(){
    return this.loginForm.controls['fullName'].value;
  }

}
