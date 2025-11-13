import { Component, inject, signal } from '@angular/core';
import { ClientService } from '../../../shared/services/client-service';
import { Client } from '../../../shared/models/client.model';
import { CurrencyPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-page-list-clients',
  imports: [CurrencyPipe],
  templateUrl: './page-list-clients.html',
  styleUrl: './page-list-clients.scss',
})
export class PageListClients {

  private clientService = inject(ClientService);

  public clients: Client[] = [];
  public totalCA = signal(0);

  ngOnInit(): void {
    this.clientService.getAll().subscribe({
      next: (datas) => {
        this.clients = datas;
        this.totalCA.set(this.clients.reduce((acc, client) => acc + client.ca, 0));
      },
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
