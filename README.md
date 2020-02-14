
# Projeto Pokédex - Teste Projuris

  

Projeto criado afim de listar, buscar e mostrar detalhes dos Pokémons em uma Pokédex com um design responsivo para computadores, tablets e smartphones.

  

## Instalação

  

Antes de ser possível a execução do programa, é necessário a instalação do gerenciador de pacotes NPM e do Angular CLI:

  

### Node.js (NPM)

Primeiramente é de extrema importância estar com o Node.js (NPM) instalado. Com ele é possivel inicializar um projeto, instalar pacotes de terceiros, instalar os pacotes do projeto e executar o servidor. Para isso:

  

- É necessário acessar o site do [NodeJs](https://nodejs.org/en/) e baixar a versão mais atual;

- Após a instalação e utilizando o terminal, é preciso ir no diretório **pokemon-api-teste-projuris** para executar o comando `npm install`.

  

>  **Atenção:** até o momento foram inicializados as dependências do projeto, a forma de execução do Angular é diferente e será explicado agora.

  

### Angular CLI

  

Para dar início a execução do projeto, é necessário a instalação do Angular CLI. Alem de executar, ele permite a criação de projetos, componentes, serviços, etc. Com o terminal, para instalá-lo:

- É necessário executar o comando `npm install -g @angular/cli` para instalá-lo globalmente;

- Em seguida, é preciso estar no diretório do **pokemon-api-teste-projuris**;

- E afim de executá-lo, utilize o comando `ng serve`.

  

> Para mais informações acesse o site do [AngularCLI](https://cli.angular.io/).

  
  

## Front-end - Angular
### Estrutura
    \src
	    \app
		    \pokemon-details
			    pokemon-details.component.html
			    pokemon-details.component.ts
			    pokemon-details.component.scss
			\pokemon-list
				pokemon-list.component.html
			    pokemon-list.component.ts
			    pokemon-list.component.scss
			\search-bar
				search-bar.component.html
			    search-bar.component.ts
			    search-bar.component.scss
			app.module.ts
			app.components.html
			app.components.scss
			app.components.ts
			pokemon-api.service.ts
			favorite-pokemon.ts
			pokemon.model.ts
			pokedex.model.ts						
	    \assets	

### App.module.ts

Foram adicionados 3 modules:

 - FormsModule - para a realização de buscas;
 - HttpClientModule - para realizar as requisições da API;
 - RouterModule - para controlar as rotas criadas:
	 
        const pokedexRoutes:Routes = [
	        {path:'',component:PokemonListComponent},
	        {path:'pokemon/:pokemonInfo',component:PokemonDetailsComponent},
	        {path:':anythingelse',redirectTo:''}
	    ];
      
### Models
Foram criados 2 models:
    
 - Pokedex: com informações de ID, Name e Sprite para a listagem no componente **pokemon-list**;
 - Pokemon: com informações de ID, Name, Sprite, Height, Weight e Types[] para informações mais detalhadas no componente **pokemon-details**.


### Services
Foram utilizados 2 services:

 - PokemonApiService: focado em trazer informações dos superficiais dos Pokémons ou informações detalhadas de um em especifico;
 - FavoritePokemonService: focado em adicionar, remover e verificar os Pokémons em uma lista.

### Components
Este projeto foi subdivido em 3 componetes:

 - SearchBarComponent: permite o usuário procurar por um pokémon através do seu número ou nome;
 - PokemonDetailsComponent: permite a visualização de informações adicionais de um pokémon específico, como peso, altura e tipo(s); é possível também adicioná-lo à uma lista de favoritos gerenciado pelo **FavoritePokemonService**;
 - PokemonListComponent: listagem dos Pokémons trazidos pela API; através de botões na parte inferior, navegar por outras páginas do Pokédex; os Pokémons adicionados como favoritos serão destacados na listagem.
