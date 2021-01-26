import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AnimalModel } from 'src/app/models/animal.model';
import { ReadingListService } from 'src/app/services/reading-list.service';

@Component({
    selector: 'app-reading-list',
    templateUrl: './reading-list.component.html',
    styleUrls: ['./reading-list.component.css']
})
export class ReadingListComponent implements OnInit {
    animalReadingList: AnimalModel[];

    animalServiceSubscription: Subscription;

    constructor(private readingListService: ReadingListService) { }

    ngOnInit(): void {
        this.animalServiceSubscription = this.readingListService.get().subscribe(res => {
            this.animalReadingList = res;
        });
    }

    unsub(): void {
        this.animalServiceSubscription.unsubscribe();
    }
}
