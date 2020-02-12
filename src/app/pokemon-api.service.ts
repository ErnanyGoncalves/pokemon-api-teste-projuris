import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from './pokemon.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonApiService {

  previousPage: string;
  nextPage: string;
  pokemonList: Pokemon[] = [];
  pokemonInfo: Pokemon;

  peido;

  offset: number;

  

  constructor(private httpClient: HttpClient) { }

  baseUrl: string = "https://pokeapi.co/api/v2/";

  fetchPokemonData(offset: number) {
    return this.httpClient.get(`${this.baseUrl}pokemon?offset=${offset}&limit=20`).subscribe(res=>{
      this.previousPage = res["previous"];
      this.nextPage = res["next"];
      for(let i=0;i<res["results"].length;i++){
        const id = res["results"][i].url.split("/")[6];
        const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
        this.pokemonList.push(new Pokemon(id,res["results"][i].name,sprite));
      }
    });
  }
  
}
