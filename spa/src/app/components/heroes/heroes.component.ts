import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroes } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroes[] = [];

  constructor(  private heroesService: HeroesService,
                private router: Router
    ) {


    }

  ngOnInit() {

    this.heroes = this.heroesService.getHeroes();
    /* console.log(this.heroes); */
  }

  verHeroe( idx: number) {

    this.router.navigate( ['/heroe', idx ] );
  }

}
