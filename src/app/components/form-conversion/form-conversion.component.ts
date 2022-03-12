import {Component, EventEmitter, Output,} from '@angular/core';

@Component({
  selector: 'app-form-conversion',
  templateUrl: './form-conversion.component.html',
  styleUrls: ['./form-conversion.component.css']
})
export class FormConversionComponent {

  @Output() numeroCentigrados = new EventEmitter<number>();
  @Output() numeroFahrenheit = new EventEmitter<number>();
  Fahrenheit: number = 0;
  centigrados: number = 0;

  convertirFahCentigrados(){
    this.numeroFahrenheit.emit(this.Fahrenheit);
  }

  convertirCenFahrenheit(){
    this.numeroCentigrados.emit(this.centigrados);
  }

}
