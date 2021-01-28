import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AnimalModel } from 'src/app/models/animal.model';
import { AnimalService } from 'src/app/services/animal.service';

@Component({
    selector: 'app-add-animal',
    templateUrl: './add-animal.component.html',
    styleUrls: ['./add-animal.component.css']
})
export class AddAnimalComponent implements OnInit {

    animalForm: FormGroup;
    updateMode: boolean;

    constructor(private animalService: AnimalService, private activatedRoute: ActivatedRoute) {
        this.updateMode = false;
    }

    ngOnInit(): void {
        this.activatedRoute.paramMap.subscribe(pRes => {
            const animalName = pRes.get('name');
            if (animalName) {
                // update
                this.animalService.get(animalName).subscribe(animalRes => {
                    this.createForm(animalRes as AnimalModel);
                    this.updateMode = true;
                });
            } else {
                //  create
                this.createForm();
            }
        });

    }

    createForm(a?: AnimalModel): void {
        this.animalForm = new FormGroup({
            name: new FormControl(a && a.name ? a.name : '', [Validators.required]),
            lifeTimeAverage: new FormControl(a && a.lifeTimeAverage ? a.lifeTimeAverage : 0,
                [Validators.required, Validators.min(1), Validators.max(99)]),
            readMoreLink: new FormControl(a && a.readMoreLink ? a.readMoreLink : '')
        });
    }

    getModel(animal: any): AnimalModel {
        if (typeof animal.lifeTimeAverage !== 'number') {
            animal.lifeTimeAverage = +animal.lifeTimeAverage;
        }

        return animal as AnimalModel;
    }

    sendForm(): void {
        console.log(this.animalForm.value);
        this.animalService[this.updateMode ? 'update' : 'create'](this.getModel(this.animalForm.value));

    }

}
