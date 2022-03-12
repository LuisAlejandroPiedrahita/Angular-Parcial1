import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.css']
})
export class ConversionComponent  {

  Fahrenheit: number = 0;
  centigrados: number = 0;

  convertirFahCentigrados(numeroFahren: number){
    this.Fahrenheit = 5.0 / 9.0 *(numeroFahren-32);
  }

  convertirCenFahrenheit(numeroCentigrados: number){
    this.centigrados = 9.0 / 5.0 * numeroCentigrados+32;
  }
}
