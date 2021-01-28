import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalListComponent } from './components/animal-list/animal-list.component';
import { AnimalComponent } from './components/animal/animal.component';
import { HomeComponent } from './components/home/home.component';
import { ReadingListComponent } from './components/reading-list/reading-list.component';
import { AddAnimalComponent } from './components/add-animal/add-animal.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

@NgModule({
    declarations: [
        AppComponent,
        AnimalListComponent,
        AnimalComponent,
        HomeComponent,
        ReadingListComponent,
        AddAnimalComponent,
        ContactUsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
