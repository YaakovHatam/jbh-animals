import { Component, OnInit } from '@angular/core';
import { AnimalModel } from './models/animal.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    animalReadingList: AnimalModel[];

    constructor() {
    }

    ngOnInit(): void {
        this.animalReadingList = [];
    }
}
