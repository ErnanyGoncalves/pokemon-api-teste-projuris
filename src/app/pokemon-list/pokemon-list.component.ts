import { Component, OnInit } from '@angular/core';
import { Pokedex } from '../pokedex.model';
import { PokemonApiService } from '../pokemon-api.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  previousPage: string;
  nextPage: string;
  pokemons: Pokedex[] = [];

  constructor(private pokeService:PokemonApiService) { }

  ngOnInit(): void {
    this.pokeService.fetchPokemonData(0).subscribe(res=>{
      this.previousPage = res["previous"];
      this.nextPage = res["next"];
      for(let i=0;i<res["results"].length;i++){
        const id = res["results"][i].url.split("/")[6];
        const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
        this.pokemons.push(new Pokedex(id,res["results"][i].name,sprite));
      }
    });
  }

}
