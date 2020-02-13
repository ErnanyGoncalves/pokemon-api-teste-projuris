import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonApiService {

  constructor(private httpClient: HttpClient) { }

  baseUrl: string = "https://pokeapi.co/api/v2/";

  fetchPokemonData(offset:number, limit:number) {
    return this.httpClient.get(`${this.baseUrl}pokemon?offset=${offset}&limit=${limit}`);
  }

  getPokemon(info:string){
    return this.httpClient.get(`${this.baseUrl}pokemon/${info}`);
  }
}
