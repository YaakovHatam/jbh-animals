import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    randNum = 0;
    divClasses;
    constructor() { }

    ngOnInit(): void {
        this.updateDivClasses();
    }

    updateDivClasses(): void {
        this.divClasses = {
            'alert-primary': this.randNum === 0,
            'alert-secondary': this.randNum === 1,
            'alert-success': this.randNum === 2,
            'alert-danger': this.randNum === 3,
            'alert-warning': this.randNum === 4,
            'alert-info': this.randNum === 5,
            'alert-light': this.randNum === 6,
            'alert-dark': this.randNum === 7
        };
    }

    changeRandNum(): void {
        this.randNum = Math.floor(Math.random() * 8);
        this.updateDivClasses();

    }

}
