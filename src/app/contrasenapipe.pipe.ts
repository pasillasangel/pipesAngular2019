import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasenapipe'
})
export class ContrasenapipePipe implements PipeTransform {

  transform(value: string, activar: boolean = true): any {
    if (activar) {
      let salida = '';
      for (const i of value.length ) {
        salida += '*';
      }
      return salida;
    } else {
      return value;
    }
  }

}
