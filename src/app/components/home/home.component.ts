import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router) {}

  /**
   * Funcion que navega hacia la lista de los musculos
   */
  start() {
    this.router.navigate(['musculos']);
  }
}
