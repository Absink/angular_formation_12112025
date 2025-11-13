import { Pipe, PipeTransform } from '@angular/core';
import { Order } from '../models/order.model';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(value: Order, ...args: unknown[]): number | string {
    if (value) {
      if (args[0] == 'TTC') {
        return value.totalTTC();
      } else {
        return value.totalHT();
      }
    }
    return "";
  }

}
