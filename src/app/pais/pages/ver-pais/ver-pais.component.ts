import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor( private activatedRoute: ActivatedRoute, private PaisService: PaisService) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( ( params ) => this.PaisService.getPaisPorCodigo( params['id'] ) ),
        tap( console.log )
      )
      .subscribe( pais => {
        this.pais = pais[0];
      })

    // this.activatedRoute.params
    //   .subscribe( params => {
    //     this.PaisService.getPaisPorCodigo(params['id'])
    //       .subscribe({
    //         next: (pais) => {
    //           console.log(pais);
    //         }
    //       })
    //   });
  }

}
