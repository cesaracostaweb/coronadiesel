// card.component.ts
// Necesitamos cargar Input para poder usarlo
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }
  
  // Valor default
  @Input() img = "../../assets/img/Logo_Mercadopago.jpg";
  @Input() titulo: string;
  @Input() desc?:  string;
  @Input() precio: number;

  ngOnInit() {
	  // Cuando se declara afuera de init debemos agregarle this.
	  console.log(this.titulo);
  }

}





