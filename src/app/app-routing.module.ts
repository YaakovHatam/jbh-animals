import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAnimalComponent } from './components/add-animal/add-animal.component';
import { AnimalListComponent } from './components/animal-list/animal-list.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'animals', component: AnimalListComponent },
    { path: 'add', component: AddAnimalComponent },
    { path: 'update/:name', component: AddAnimalComponent },
    { path: 'contact', component: ContactUsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
