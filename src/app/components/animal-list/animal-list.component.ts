import { Component, OnInit } from '@angular/core';
import { AnimalModel } from 'src/app/models/animal.model';
import { AnimalService } from 'src/app/services/animal.service';

@Component({
    selector: 'app-animal-list',
    templateUrl: './animal-list.component.html',
    styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {
    averageRanking: number;
    ranking: { animalName: string, starLevel: number }[];
    animals: AnimalModel[] = [];
    constructor(private animalService: AnimalService) {
        this.ranking = [];
    }

    ngOnInit(): void {
        this.animalService.get().subscribe(aRes => {
            this.animals = aRes;
        });
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
