import { Component, inject } from '@angular/core';
import { ClientService } from '../../../shared/services/client-service';
import { Client } from '../../../shared/models/client.model';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-page-list-clients',
  imports: [JsonPipe],
  templateUrl: './page-list-clients.html',
  styleUrl: './page-list-clients.scss',
})
export class PageListClients {

  private clientService = inject(ClientService);

  public clients: Client[] = [];

  ngOnInit(): void {
    this.clientService.getAll().subscribe({
      next: (x) => (this.clients = x),
      error: (err) => console.log(err)
    });
  }

  remove(id: number): void {
    this.clientService.deleteById(id).subscribe({
      next: () => {
        // this.clients.find(c => c.id == id);
      }
    });
  }
}
