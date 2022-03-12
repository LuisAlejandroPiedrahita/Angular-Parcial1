import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-resultado-conversion',
  templateUrl: './resultado-conversion.component.html',
  styleUrls: ['./resultado-conversion.component.css']
})
export class ResultadoConversionComponent  {

  @Input() Fahrenheit : number = 0;
  @Input() centigrados : number = 0;
}
