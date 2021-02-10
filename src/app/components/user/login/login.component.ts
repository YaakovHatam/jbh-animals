import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    errorMessage: string;

    constructor(private userService: UserService, private router: Router) { }

    ngOnInit(): void {
    }

    login(username: string, password: string): void {
        this.userService.performLogin(username, password).subscribe(res => {
            if (res) {
                this.router.navigate(['animals']);
            } else {
                this.errorMessage = 'שגיאה';
            }
        });
    }

}
