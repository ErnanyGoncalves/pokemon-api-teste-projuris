import { Injectable } from '@angular/core';
import { Pokedex } from './pokedex.model';

@Injectable({
  providedIn: 'root'
})
export class FavoritePokemonService {

  listFavoritePokemon: Pokedex[] = [];

  constructor() { }

  addFavorite(id: number, name: string) {
    this.listFavoritePokemon.push(new Pokedex(id, name, `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`));
  }

  removeFavorite(name: string) {
    const foundIndex = this.listFavoritePokemon.findIndex(info => info.name == name);
    this.listFavoritePokemon.splice(foundIndex, 1);
  }

  isFavorite(name: string) {
    const data = this.listFavoritePokemon.find(info => {
      return info.name === name;
    });

    if (data) return true;
    else return false;
  }
}
