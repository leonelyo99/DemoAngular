import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-ver-heroe',
  templateUrl: './ver-heroe.component.html'
})

export class VerHeroeComponent implements OnInit {
  @Input() heroe: any = {};
  @Input() index:number;
  heroes:any[]=[];
  termino:string;

  constructor(
      private activatedRoute: ActivatedRoute,
      private _heroesService: HeroesService,
      private router: Router
    ) {
    }

  ngOnInit() { 
    this.termino = '';
    this.activatedRoute.params.subscribe(
      params => {
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes(this.termino);
    })
    
    
  }

}
