import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'capitalizado'})
export class CapitalizadoPipe implements PipeTransform {
    transform(value: string): string {
        // value = value.toLowerCase();
        // console.log('value: ' + value);
        // let nombres = value.split('');
        // for ( let i of nombres ) {
        //     nombres[i] = nombres[i][0].toUpperCase() + nombres[i].substr(1);
        // }
        // console.log('nombres: ' + nombres);
        // return nombres.join(' ');
        return 'Capitalizado';
    }
}

// transform(value: string): string {
//     value = value.toLowerCase();
//     this.nombres = value.split('');
//     for ( let i of this.nombres ) {
//         this.nombres[i] = this.nombres[i][0].toUpperCase() + this.nombres[i].substr(1);
//     }
//     return this.nombres.join(' ');
// }
