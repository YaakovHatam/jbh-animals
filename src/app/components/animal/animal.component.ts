import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AnimalModel } from 'src/app/models/animal.model';
import { ReadingListService } from 'src/app/services/reading-list.service';

@Component({
    selector: 'app-animal',
    templateUrl: './animal.component.html',
    styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {

    @Input() animal: AnimalModel;
    @Output() StarChange: EventEmitter<{ animalName: string, starLevel: number }> =
        new EventEmitter<{ animalName: string, starLevel: number }>();
    starring: number;


    stars: number;
    starLevel: number[];
    unstarLevel: number[];
    constructor(private readingListService: ReadingListService) { }

    ngOnInit(): void {
        this.stars = 5;
        this.calculateStarts();

    }

    calculateStarts(): void {
        this.starLevel = Array(this.stars);
        this.unstarLevel = Array(5 - this.stars);
    }

    addToReadingList(): void {
        this.readingListService.add(this.animal);

    }

    ranking(i: number): void {
        this.stars = i + 1;
        this.calculateStarts();
        this.StarChange.emit({
            animalName: this.animal.name,
            starLevel: this.stars
        });
    }

}
