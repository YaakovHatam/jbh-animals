import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private user;
    isLoggedSubject: BehaviorSubject<boolean>;

    constructor() {
        this.isLoggedSubject = new BehaviorSubject<boolean>(this.user ? true : false);
    }

    isLogged(): Observable<boolean> {
        return this.isLoggedSubject;
    }

    performLogin(username: string, pass: string): Observable<boolean> {
        const postLoginFunc = res => {
            if (res) {
                this.user = username;
                this.isLoggedSubject.next(true);
            }
        };

        return of(username === 'abc' && pass === 'abc')
            .pipe(tap(postLoginFunc));

    }
}
