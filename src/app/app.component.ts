import { Component, OnInit } from '@angular/core';
import { AnimalModel } from './models/animal.model';
import { UserService } from './services/user.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    animalReadingList: AnimalModel[];
    constructor(public userService: UserService) {
    }

    ngOnInit(): void {
        this.animalReadingList = [];
    }
}
