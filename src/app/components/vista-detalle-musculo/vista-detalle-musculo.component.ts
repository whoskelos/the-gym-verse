import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IEjercicio } from 'src/app/models/ejercicio.interface';
import { EJERCICIOS } from 'src/app/mocks/ejercicios.mock';

@Component({
  selector: 'app-vista-detalle-musculo',
  templateUrl: './vista-detalle-musculo.component.html',
  styleUrls: ['./vista-detalle-musculo.component.css']
})
export class VistaDetalleMusculoComponent implements OnInit{
  
  id: string | null = '';
  ejercicioSeleccionado: IEjercicio | undefined;
  listaEjercicios: IEjercicio[] = EJERCICIOS;
  
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    // * Obtengo el id del ejercicio seleccionado que viene por queryParam para buscarlo
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id != '') {
      this.ejercicioSeleccionado = this.listaEjercicios.find((ejercicio) => ejercicio.id == this.id);
    }
  }

}
