import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { IEjercicio } from 'src/app/models/ejercicio.interface';
import { EjercicioService } from 'src/app/services/ejercicio.service';

@Component({
  selector: 'app-vista-musculos',
  templateUrl: './vista-musculos.component.html',
  styleUrls: ['./vista-musculos.component.css']
})
export class VistaMusculosComponent implements OnInit {

  filtroCategoria: string | undefined;
  listaEjercicios: IEjercicio[] = [];
  listaFiltrada: IEjercicio[] | undefined;
  listaMusculos: string[] | undefined;
  selectedOption: string = "0";

  constructor(private router: Router,
    private route: ActivatedRoute,
    private _ejercicioService: EjercicioService) { }

  ngOnInit(): void {
    this.obtenerEjercicios();
    // * Obtengo los queryParams para filtrar
    this.route.queryParams.subscribe((params: any) => {
      this.filtroCategoria = params.categoria;
      if (this.filtroCategoria) {
        this.listaFiltrada = this.listaEjercicios.filter(ejercicio => ejercicio.categoria == this.filtroCategoria);
        // * Filtro la lista para rellenar el select con los musculos
        this.listaMusculos = this.listaFiltrada.map(ejercicio => ejercicio.zonaMuscular);
      }
    })

  }

  obtenerEjercicios() {
    this._ejercicioService.obtenerEjercicios().subscribe(ejercicios => this.listaEjercicios = ejercicios)
  }


  /**
   * Navegacion con queryParams para hacer posible la filtracion de la lista por la categoria 'Torso'
   */
  listarEjerciciosTorso(): void {

    let navigationExtras: NavigationExtras = {
      queryParams: {
        categoria: 'torso',
      }
    }
    this.selectedOption = "0";
    this.router.navigate(['musculos'], navigationExtras);

  }

  /**
   * Navegacion con queryParams para hacer posible la filtracion de la lista por la categoria 'Pierna'
   */

  listarEjerciciosPierna(): void {

    let navigationExtras: NavigationExtras = {
      queryParams: {
        categoria: 'pierna',
      }
    }
    this.selectedOption = "0";
    this.router.navigate(['musculos'], navigationExtras);
  }
  /**
   * Funcion que esta pendiente de la opcion que se seleccione en el select para filtrar por musculo
   * @param event Es el valor del option del select
   */
  onOptionChange(event: any): void {
    if (event != "0") {
      this.listaFiltrada = this.listaEjercicios.filter((ejercicio) => ejercicio.zonaMuscular == event);
    } else {
      this.listaFiltrada = this.listaEjercicios.filter(ejercicio => ejercicio.categoria == this.filtroCategoria);
    }

  }

}
