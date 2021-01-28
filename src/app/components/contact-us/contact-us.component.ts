import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-contact-us',
    templateUrl: './contact-us.component.html',
    styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
    contactFormModel = {
        name: '',
        email: '',
        message: ''
    };
    constructor() { }

    ngOnInit(): void {
    }

    sendForm(): void {
        console.log(this.contactFormModel);
    }

}
