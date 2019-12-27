import { Component, OnInit } from '@angular/core';
import articulos from '../../../assets/data/articulos';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.scss']
})
export class ServicioComponent implements OnInit {

  constructor() { }
dataArticulos = articulos;
  ngOnInit() {
    console.log(this.dataArticulos);
  }

}
