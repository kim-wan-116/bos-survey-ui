import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  private loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private store: Store) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      password: ['', Validators.required]
    })
    
  }

  onFormSubmit() {
    console.log(this.loginForm.value);

    // TODO: GET A TOKEN FOR THIS USER
    // this.store.dispatch(new )
    // TODO: UPDATE STATE WITH USER AS GUEST
  
    this.router.navigateByUrl('/admin/overview');
  }

}
