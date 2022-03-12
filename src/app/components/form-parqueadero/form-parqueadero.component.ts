import { Component} from '@angular/core';

@Component({
  selector: 'app-form-parqueadero',
  templateUrl: './form-parqueadero.component.html',
  styleUrls: ['./form-parqueadero.component.css']
})
export class FormParqueaderoComponent {

  diferenciaHora:number = 0;
  cargo:number = 2000;
  fechaSistema = Date.now();
  fechaAhora = new Date(this.fechaSistema);

  calcularDiferenciaFechasHoras(fechaInicial:Date,fechaSalida:Date):number{
    let diferencia = fechaSalida.getTime()-fechaInicial.getTime();
    diferencia = (diferencia)/1000/3600;
    let diferenciaFinal = Math.abs(Math.round(diferencia));
    return diferenciaFinal;
  }

  calcularFechaFinal(fechaInicio:string,fechaSalida:string){
    let fechaInicioFinal = new Date(fechaInicio);
    let fechaSalidaFinal = new Date(fechaSalida);
    if(fechaInicioFinal < this.fechaAhora){
      alert("La fecha de inicio no puede ser menor a la actual");
    } else if(fechaSalidaFinal < this.fechaAhora){
      alert("La fecha de salida no puede ser menos a la actual");
    } else{
      this.diferenciaHora = this.calcularDiferenciaFechasHoras(fechaInicioFinal,fechaSalidaFinal);
      this.cargoTotal(this.diferenciaHora);
    }
  }

  cargoTotal(diferenciaFinal:number):number{
    this.cargo = 2000;
    if(diferenciaFinal < 24){
      this.cargo += (diferenciaFinal - 3) * 500;
      return  this.cargo;
    } else if(diferenciaFinal <= 3){
      this.cargo = 2000;
      return this.cargo;
    } else{
      this.cargo = 10000;
      return this.cargo;
    }
  }
}
