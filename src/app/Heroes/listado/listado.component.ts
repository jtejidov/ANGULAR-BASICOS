import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[]=['spiderman', 'ironman', 'hulk', 'superman','thor'];
  heroeBorrado:string='';
  buleano:boolean=false;
  borrarHeroe(heroes:string[]){
    console.log('borrando...');
    this.heroeBorrado=this.heroes.shift() || '';
    console.log(this.heroeBorrado);
    this.buleano=true;
  }
  
  //jjj=this.borrarHeroe(this.heroes);
}
