import { Component, OnInit } from '@angular/core';
import { Pokedex } from '../pokedex.model';
import { PokemonApiService } from '../pokemon-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  previousPage: {
    isNull: boolean,
    offset: number,
    limit: number
  } = { isNull: null, offset: null, limit: null };

  nextPage: {
    isNull: boolean,
    offset: number,
    limit: number
  } = { isNull: null, offset: null, limit: null };

  pokemons: Pokedex[];

  offset: number = 0;
  limit: number = 20;

  constructor(private pokeService: PokemonApiService,private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.pokemons = [];
    if(this.route.snapshot.fragment === "continue"){
      this.offset = Number(localStorage.getItem("offset"));
      this.limit = Number(localStorage.getItem("limit"));
    }
    this.pokeService.fetchPokemonData(this.offset, this.limit).subscribe(res => {
      this.updateListParams(res["next"], res["previous"]);
      this.loadList(res["results"]);
    });
  }

  changePage(offset: number, limit: number) {
    this.pokemons = [];

    localStorage.setItem("offset",String (offset));
    localStorage.setItem("limit",String (limit));

    this.pokeService.fetchPokemonData(offset, limit).subscribe(res => {
      this.updateListParams(res["next"], res["previous"]);
      this.loadList(res["results"]);
    });
  }



  loadList(results) {
    for (let i = 0; i < results.length; i++) {
      const id = results[i].url.split("/")[6];
      const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
      this.pokemons.push(new Pokedex(id, results[i].name, sprite));
    }
  }

  updateListParams(nextLink: string, previousLink: string) {
    if (nextLink == null) {
      this.nextPage.isNull = true;
    } else {
      this.nextPage.isNull = false;

      const splitedNxtLink = nextLink.split(/=(\d*)/g);

      this.nextPage.offset = Number(splitedNxtLink[1]);
      this.nextPage.limit = Number(splitedNxtLink[3]);
    }

    if (previousLink == null) {
      this.previousPage.isNull = true;
    } else {
      this.previousPage.isNull = false;

      const splitedPrvLink = previousLink.split(/=(\d*)/g);

      this.previousPage.offset = Number(splitedPrvLink[1]);
      this.previousPage.limit = Number(splitedPrvLink[3]);
    }
  }
}
