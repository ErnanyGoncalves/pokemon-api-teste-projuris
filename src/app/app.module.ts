import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

const pokedexRoutes:Routes = [
  {path:'',component:PokemonListComponent},
  {path:'pokemon/:pokemonInfo',component:PokemonDetailsComponent},
  {path:':anythingelse',redirectTo:''}
];

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    PokemonDetailsComponent,
    PokemonListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(pokedexRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
