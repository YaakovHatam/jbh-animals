import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalListComponent } from './components/animal-list/animal-list.component';
import { AnimalComponent } from './components/animal/animal.component';
import { HomeComponent } from './components/home/home.component';
import { ReadingListComponent } from './components/reading-list/reading-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalListComponent,
    AnimalComponent,
    HomeComponent,
    ReadingListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
