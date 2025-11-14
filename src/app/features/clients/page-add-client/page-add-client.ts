import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PageGeneric } from '../../../shared/components/page-generic/page-generic';
import { ClientService } from '../../../shared/services/client-service';
import { Client } from '../../../shared/models/client.model';
import { StateClient } from '../../../shared/enums/state-client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-add-client',
  imports: [FormsModule, PageGeneric],
  templateUrl: './page-add-client.html',
  styleUrl: './page-add-client.scss',
})
export class PageAddClient {

  private router = inject(Router);
  private clientService = inject(ClientService);

  public client: Client = new Client();
  public states = Object.values(StateClient);

  public add(): void {
    this.clientService.add(this.client).subscribe({
      next: _ => this.router.navigateByUrl('/clients')
    });
  }

}
