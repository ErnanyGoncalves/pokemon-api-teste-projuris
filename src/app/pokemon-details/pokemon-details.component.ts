import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonApiService } from '../pokemon-api.service';
import { Pokemon } from '../pokemon.model';
import { FavoritePokemonService } from '../favorite-pokemon.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {

  checkFavorite:boolean;
  pokemonInfo: Pokemon = new Pokemon(null, null, null, null, null, null);
  theresNoError: boolean;

  constructor( private pokeService: PokemonApiService, private route: ActivatedRoute, private favoritePkmn : FavoritePokemonService) {
  }

  ngOnInit(): void {
    this.theresNoError = true;

    this.route.params.subscribe(parameter => {
      this.pokeService.getPokemon(parameter.pokemonInfo.toLowerCase()).subscribe(res => {
        const id: number = res["id"];
        const name: string = res["name"];
        const sprite: string = res["sprites"].front_default;
        const height: number = res["height"];
        const weight: number = res["weight"];
        const types: string[] = [];

        for (let i = 0; i < res["types"].length; i++) {
          const type = res["types"][i].type.name;
          types.push(type);
        }

        this.pokemonInfo = new Pokemon(id, name, sprite, height, weight, types);
        this.checkFavorite = this.favoritePkmn.isFavorite(this.pokemonInfo.name);
      }, err => {
        this.checkFavorite = false;
        this.theresNoError = false;
      },()=>{
        this.theresNoError = true;
      });
    });
  }

  favorite(id:number,name:string){
    this.favoritePkmn.addFavorite(id,name);
    this.checkFavorite = true;
  }

  unfavorite(name:string){
    this.favoritePkmn.removeFavorite(name);
    this.checkFavorite = false;
  }

}
