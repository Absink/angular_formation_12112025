import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../shared/models/user.model';
import { UserService } from '../../../shared/services/user-service';

@Component({
  selector: 'app-page-view-user',
  imports: [],
  templateUrl: './page-view-user.html',
  styleUrl: './page-view-user.scss',
})
export class PageViewUser implements OnInit {

  private route = inject(ActivatedRoute);
  private userService = inject(UserService);

  public user = signal<User>(new User());


  ngOnInit(): void {
    this.userService.getById(this.route.snapshot.params['id']).subscribe({
      next: data => this.user.set(data),
      error: (err) => console.log(err)
    });
  }

}
