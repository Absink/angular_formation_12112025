import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { OrderService } from '../../../shared/services/order-service';
import { Order } from '../../../shared/models/order.model';
import { PageGeneric } from '../../../shared/components/page-generic/page-generic';
import { StateOrder } from '../../../shared/enums/state-order';

@Component({
  selector: 'app-page-add-order-v2',
  imports: [ReactiveFormsModule, PageGeneric],
  templateUrl: './page-add-order-v2.html',
  styleUrl: './page-add-order-v2.scss',
})
export class PageAddOrderV2 implements OnInit {

  private orderService = inject(OrderService);
  private formBuilder = inject(FormBuilder);

  public form!: FormGroup;
  public order: Order = new Order();
  public states = Object.values(StateOrder);


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      typePresta: [this.order.typePresta],
      client: [this.order.client],
      nbJours: [this.order.nbJours],
      tva: [this.order.tva],
      tjmHT: [this.order.tjmHT],
      state: [this.order.state],
      comment: [this.order.comment]
    })
  }

  public add(): void {
    this.orderService.add(this.order).subscribe({
      next: data => console.log(data)
    });
  }

}
