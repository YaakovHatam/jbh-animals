import { Component, OnInit } from '@angular/core';
import { AnimalModel } from 'src/app/models/animal.model';
import { ReadingListService } from 'src/app/services/reading-list.service';

@Component({
    selector: 'app-animal-list',
    templateUrl: './animal-list.component.html',
    styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {
    averageRanking: number;
    ranking: { animalName: string, starLevel: number }[];
    animals: AnimalModel[];
    constructor() {
        this.ranking = [];
    }

    ngOnInit(): void {
        this.animals = [
            {
                name: 'dog',
                lifeTimeAverage: 12,
                readMoreLink: new URL('https://en.wikipedia.org/wiki/Dog')
            },
            {
                name: 'cat',
                lifeTimeAverage: 7,
                readMoreLink: new URL('https://en.wikipedia.org/wiki/Cat')
            },
            {
                name: 'horse',
                lifeTimeAverage: 12,
                readMoreLink: new URL('https://en.wikipedia.org/wiki/Dog')
            },
            {
                name: 'cow',
                lifeTimeAverage: 12,
                readMoreLink: new URL('https://en.wikipedia.org/wiki/Dog')
            },
            {
                name: 'donkey',
                lifeTimeAverage: 12,
                readMoreLink: new URL('https://en.wikipedia.org/wiki/Dog')
            }
        ];
    }

    calculateAverage(): void {
        const sum = this.ranking.map(a => a.starLevel).reduce((a, b) => a + b, 0);
        this.averageRanking = (sum / this.ranking.length) || 0;
    }

    onStarChange(obj: { animalName: string, starLevel: number }): void {
        const theAnimal = this.ranking.find(an => an.animalName === obj.animalName);
        if (theAnimal) {
            theAnimal.starLevel = obj.starLevel;
        } else {
            this.ranking.push(obj);
        }

        this.calculateAverage();
    }

}
