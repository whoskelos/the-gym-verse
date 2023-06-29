import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { IEjercicio } from 'src/app/models/ejercicio.interface';
import { EjercicioService } from 'src/app/services/ejercicio.service';

@Component({
  selector: 'app-vista-detalle-musculo',
  templateUrl: './vista-detalle-musculo.component.html',
  styleUrls: ['./vista-detalle-musculo.component.css']
})
export class VistaDetalleMusculoComponent implements OnInit{
  
  id: any;
  ejercicioSeleccionado: IEjercicio | undefined;
  videoUrl: any;
  
  constructor(
    private route: ActivatedRoute,
    private _ejercicioService: EjercicioService,
    private sanitizer: DomSanitizer
    ) { }

  ngOnInit(): void {
    // * Obtengo el id del ejercicio seleccionado que viene por queryParam para buscarlo
    this.id = this.route.snapshot.paramMap.get('id');
    this._ejercicioService.obtenerEjercicio(this.id).subscribe({
      next: (response) => {
        this.ejercicioSeleccionado = response
        this.videoUrl = 'https://www.youtube.com/embed/' + response.videoURL;
        this.videoUrl =this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
        console.log(this.videoUrl);
      },
      error: (err) => console.error(err)
    })
  }

  updateVideoUrl(id: string) {
    // Appending an ID to a YouTube URL is safe.
    // Always make sure to construct SafeValue objects as
    // close as possible to the input data so
    // that it's easier to check if the value is safe.
    this.videoUrl = 'https://www.youtube.com/embed/' + id;
    this.videoUrl =this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
  }

}
