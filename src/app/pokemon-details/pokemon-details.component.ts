import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonApiService } from '../pokemon-api.service';
import { Pokemon } from '../pokemon.model';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {

  pokemonInfo: Pokemon;

  constructor(private pokeService: PokemonApiService, private route: ActivatedRoute, private router: Router) {
    this.pokemonInfo = new Pokemon(null, null, null, null, null, null);
  }

  ngOnInit(): void {
    this.route.params.subscribe(parameter => {
      this.pokeService.getPokemon(parameter.pokemonInfo).subscribe(res => {
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
        // localStorage.setItem("favorite",this.pokemonInfo.name);
      }, err => {
        // alert("Pokémon not found!");
        this.router.navigate([""]);
      });
    });
  }

}
