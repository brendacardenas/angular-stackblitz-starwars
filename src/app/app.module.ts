import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CardsComponent } from './cards/cards.component';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, NavMenuComponent, HomeComponent, CardsComponent, FilmDetailsComponent, CharacterDetailsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
