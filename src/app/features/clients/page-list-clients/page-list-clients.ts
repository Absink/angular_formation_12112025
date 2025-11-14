import { Component, computed, inject, signal } from '@angular/core';
import { ClientService } from '../../../shared/services/client-service';
import { Client } from '../../../shared/models/client.model';
import { CurrencyPipe } from '@angular/common';
import { PageGeneric } from '../../../shared/components/page-generic/page-generic';
import { Btn } from "../../../shared/components/btn/btn";

@Component({
  selector: 'app-page-list-clients',
  imports: [CurrencyPipe, PageGeneric, Btn],
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
  });

  public message = signal<string | null>(null);


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
        this.clients.update(clients => 
          clients.filter(client => client.id != id)
        );
        this.message.set(`Client avec l'id ${id} supprimé avec succes !`);
      }
    });
  }
}
