import { Component, OnInit } from '@angular/core';
import { PokemonApiService } from './pokemon-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private pokeService:PokemonApiService){
  }

  ngOnInit(): void {
    this.pokeService.fetchPokemonData(0);
  }
}
