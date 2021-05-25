import { Action, Selector, State, StateContext } from '@ngxs/store';
import { AuthService } from '../../../core/services/auth.service';
import { User } from '../../models/user.model';
import { Login, Logout } from './user.actions';
import { tap } from 'rxjs/operators';
import { DateTime } from 'luxon';
export class UserStateModel {
    user: User
}

const userStateDefaults = {
    user: {
        name: '',
        role: "GUEST",
        authToken: null
    }
}

// Combined User + Auth state for simplicity
@State<UserStateModel>({
    name: 'User',
    defaults: userStateDefaults
})
export class UserState {
    constructor(private authService: AuthService) { }

    @Selector()
    static getUser(state: UserStateModel){
        return state.user
    }

    @Selector()
    static getUserName(state: UserStateModel) {
        return state.user.name;
    }

    @Selector()
    static getRole(state: UserStateModel) {
        return state.user.role;
    }

    @Selector()
    static getToken(state: UserStateModel): string | null {
        return state.user.authToken.id;
    }

    @Selector()
    static isAuthenticated(state: UserStateModel): boolean {
        let now = DateTime.now();
        return !!state.user.authToken && (now > state.user.authToken.expirationDate);
    }

    @Action(Login)
    login(context: StateContext<UserStateModel>, action: Login) {
        const { name, role } = action.user
        return this.authService.login(name, role).pipe(
            tap(res => {
                context.patchState({
                    user: {
                        name: res.name,
                        role: res.role,
                        authToken: {
                            id: res.authToken.id,
                            expirationDate: DateTime.fromFormat(res.authToken.expiresAt, "D"),
                        }
                    }
                })
            })
        )
    }

    @Action(Logout)
    logout(context: StateContext<UserStateModel>) {
        const state = context.getState();
        return this.authService.logout().pipe(
            tap(() => {
                context.setState(userStateDefaults);
            })
        );
    }
}