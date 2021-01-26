import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AnimalModel } from '../models/animal.model';

@Injectable({
    providedIn: 'root'
})
export class ReadingListService {

    private readingList: BehaviorSubject<AnimalModel[]>;
    // tslint:disable-next-line:variable-name
    private _readingList: AnimalModel[];

    constructor() {
        this._readingList = [];
        this.readingList = new BehaviorSubject<AnimalModel[]>([]);
    }

    add(a: AnimalModel): void {
        if (!this._readingList.find(anm => anm.name === a.name)) {
            this._readingList = [...this._readingList, a];
            this.readingList.next(this._readingList);
        }
    }

    get(): Observable<AnimalModel[]> {
        return this.readingList;
    }

}
