
import { User } from '../../models/user.model';

export class Login {
    static readonly type = '[User] Login';
    constructor(public user: User){}
}

export class Logout {
    static readonly type = '[User] Logout';
    constructor(){}
}