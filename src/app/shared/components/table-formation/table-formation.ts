import { Component, input } from '@angular/core';
import { Order } from '../../models/order.model';
import { CommonModule } from '@angular/common';
import { TotalPipe } from '../../pipes/total.pipe';

@Component({
  selector: 'app-table-formation',
  imports: [CommonModule, TotalPipe],
  templateUrl: './table-formation.html',
  styleUrl: './table-formation.scss',
})
export class TableFormation {

  // @Input() headers!: string[] = [];
  headers = input<string[]>([]);
  // orders = input<Order[]>([]);

}
