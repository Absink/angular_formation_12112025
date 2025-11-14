import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../../../shared/models/client.model';
import { CommonModule } from '@angular/common';
import { ClientService } from '../../../shared/services/client-service';

@Component({
  selector: 'app-page-details-client',
  imports: [CommonModule],
  templateUrl: './page-details-client.html',
  styleUrl: './page-details-client.scss',
})
export class PageDetailsClient implements OnInit {

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private clientService = inject(ClientService);

  public id: string = this.route.snapshot.params['id'];
  public currentClient: Client | string = 'ID introuvable';


  ngOnInit(): void {
    this.clientService.getById(this.id).subscribe({
      next: (data) => this.currentClient = data,
      error: (err) => this.currentClient = err
    });
  }
  
  goListing(): void {
    this.router.navigateByUrl('/clients');
  }

  remove(): void {
    this.clientService.deleteById(this.id).subscribe({
      next: () => this.goListing()
    });
  }


}
