import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAnimalComponent } from './components/add-animal/add-animal.component';
import { AnimalListComponent } from './components/animal-list/animal-list.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomeComponent } from './components/home/home.component';
import { TestComponent } from './components/test/test.component';
import { LoginComponent } from './components/user/login/login.component';
import { LoggedGuard } from './guards/logged.guard';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'animals', component: AnimalListComponent, canActivate: [LoggedGuard] },
    { path: 'test', component: TestComponent, canActivate: [LoggedGuard] },
    { path: 'add', component: AddAnimalComponent, canActivate: [LoggedGuard] },
    { path: 'update/:name', component: AddAnimalComponent, canActivate: [LoggedGuard] },
    { path: 'contact', component: ContactUsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        enableTracing: false
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
