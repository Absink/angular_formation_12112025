import { Component, computed, inject, signal } from '@angular/core';
import { ClientService } from '../../../shared/services/client-service';
import { Client } from '../../../shared/models/client.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-page-list-clients',
  imports: [CurrencyPipe],
  templateUrl: './page-list-clients.html',
  styleUrl: './page-list-clients.scss',
})
export class PageListClients {

  private clientService = inject(ClientService);

  public clients = signal<Client[]>([]);
  public totalCA = computed(() => {
    return this.clients().reduce((acc, client) => acc + client.ca, 0)
  });
  public totalCAWithBonus = computed(() => {
    return this.clients().reduce((acc, client) => acc + (client.ca * 1.1 + 1500), 0)
  })


  ngOnInit(): void {
    this.clientService.getAll().subscribe({
      next: (datas) => {
        this.clients.set(datas);
      },
      error: (err) => console.log(err)
    });
  }

  remove(id: number): void {
    this.clientService.deleteById(id).subscribe({
      next: () => {
        this.clients.update((clients) => 
          clients.filter((client) => client.id !== id)
        )
      }
    });
  }
}
