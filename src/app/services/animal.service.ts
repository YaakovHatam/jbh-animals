import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { AnimalModel } from '../models/animal.model';

@Injectable({
    providedIn: 'root'
})
export class AnimalService {

    private coins = [];

    private animal: BehaviorSubject<AnimalModel[]>;
    // tslint:disable-next-line:variable-name
    private _animals: AnimalModel[] = [
        {
            name: 'dog',
            lifeTimeAverage: 12,
            readMoreLink: new URL('https://en.wikipedia.org/wiki/Dog'),
        },
        {
            name: 'cat',
            lifeTimeAverage: 7,
            readMoreLink: new URL('https://en.wikipedia.org/wiki/Cat')
        },
        /*{
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
        }*/
    ];

    constructor(private httpClient: HttpClient) {
        this.animal = new BehaviorSubject<AnimalModel[]>(this._animals);
    }

    get(name?: string): Observable<AnimalModel[] | AnimalModel> {
        if (name) {
            const theAnimal = this._animals.find(a => a.name === name);
            return of(theAnimal);
        } else {
            return this.animal;
        }
    }

    create(a: AnimalModel): void {
        this._animals = [...this._animals, a];
        this.animal.next(this._animals);
    }

    update(a: AnimalModel): void {
        const animalIndex = this._animals.findIndex(anm => anm.name === a.name);
        this._animals.splice(animalIndex, 1);
        this.create(a);
    }


}
