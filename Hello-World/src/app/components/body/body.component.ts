import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  mostrar = true;

  frase: any = {
    mensaje: 'Un gran poser requiere una gran responsabilidad',
    autor: 'Ben Parker'
  };

  personajes: string[] = ['Spiderman', 'Superman', 'Venom', 'Aquaman'];
}
