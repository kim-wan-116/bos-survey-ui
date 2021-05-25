import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from '../../shared/models/user.model';
import { of } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class AuthService {
    readonly backendApi: string = 'https://api.com/';

    constructor(private httpClient: HttpClient) {}

    login(userName: string, role: string): Observable<any>{
        return of( { name: userName, role, authToken: { id: '123456', expiresAt: '9/4/2017'}})
        // return this.httpClient.post(`${this.backendApi}/login`, { userName, role}).pipe(
        //     map( (res: any) => {
        //         return {
        //             name: userName,
        //             role,
        //             authToken: res.authToken
        //         }
        //     })
        // );
    }

    logout(){
        return of('');
    }
}