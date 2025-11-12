import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-details-client',
  imports: [],
  templateUrl: './page-details-client.html',
  styleUrl: './page-details-client.scss',
})
export class PageDetailsClient {

  private route = inject(ActivatedRoute);
  private router = inject(Router);

  public id = this.route.snapshot.params['id'];


  goListing(): void {
    this.router.navigateByUrl('/clients');
  }

}
