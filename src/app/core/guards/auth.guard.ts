import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Store } from '@ngxs/store';
import { UserState } from '@app/shared/store/user/user.state';
@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
    constructor(public store: Store, public router: Router) { }
    canActivate(): boolean {
        const isAuthenticated = this.store.selectSnapshot(UserState.isAuthenticated);

        // TODO: Add logic for only letting access to /admin or /guest child paths based on the store's role
        if (!isAuthenticated) {
            this.router.navigate(['']);
            return false;
        }
        return true;
    }
}