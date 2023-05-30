import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { VistaMusculosComponent } from './components/vista-musculos/vista-musculos.component';
import { VistaDetalleMusculoComponent } from './components/vista-detalle-musculo/vista-detalle-musculo.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'musculos',
    component: VistaMusculosComponent,
  },
  {
    path: 'musculos/:id',
    component: VistaDetalleMusculoComponent
  },
  {
    path: '**',
    component: NotFoundPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
