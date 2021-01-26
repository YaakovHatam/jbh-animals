import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalListComponent } from './components/animal-list/animal-list.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'animals', component: AnimalListComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
