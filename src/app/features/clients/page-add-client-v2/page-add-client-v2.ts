import { Component, inject, OnInit } from '@angular/core';
import { StateClient } from '../../../shared/enums/state-client';
import { Client } from '../../../shared/models/client.model';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ClientService } from '../../../shared/services/client-service';
import { PageGeneric } from '../../../shared/components/page-generic/page-generic';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-add-client-v2',
  imports: [ReactiveFormsModule, PageGeneric],
  templateUrl: './page-add-client-v2.html',
  styleUrl: './page-add-client-v2.scss',
})
export class PageAddClientV2 implements OnInit {

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private clientService = inject(ClientService);
  private formBuilder = inject(FormBuilder);

  public form!: FormGroup;
  public client: Client = new Client();
  public states = Object.values(StateClient);
  public id: string = this.route.snapshot.params['id'];

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [this.client.name],
      ca: [this.client.ca],
      tva: [this.client.tva],
      state: [this.client.state],
      comment: [this.client.comment]
    });

    if (this.id) {
      this.clientService.getById(this.id).subscribe({
        next: data => {
          this.client = data;
          this.form.patchValue(this.client);
        }
      });
    }
  }

  public addOrEdit(): void {
    this.client = this.form.value;
    this.client.id = this.id;
    // Edition
    if (this.id)
      this.clientService.update(this.client).subscribe({
        next: _ => this.router.navigateByUrl('/clients')
      });

    // Creation
    else
      this.clientService.add(this.client).subscribe({
        next: _ => this.router.navigateByUrl('/clients')
      });
  }

}
