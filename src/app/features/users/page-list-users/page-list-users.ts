import { Component, inject, OnInit, signal } from '@angular/core';
import { UserService } from '../../../shared/services/user-service';
import { User } from '../../../shared/models/user.model';
import { TableFormation } from '../../../shared/components/table-formation/table-formation';
import { PageGeneric } from '../../../shared/components/page-generic/page-generic';
import { ColorAdmin } from '../../../shared/directives/color-admin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-list-users',
  imports: [TableFormation, PageGeneric, ColorAdmin],
  templateUrl: './page-list-users.html',
  styleUrl: './page-list-users.scss',
})
export class PageListUsers implements OnInit {

  private router = inject(Router);
  private userService = inject(UserService);

  public users = signal<User[]>([]);
  public message = signal<string | null>(null);
  public cssClass = signal<string>('');


  ngOnInit(): void {
    this.userService.getAll().subscribe({
      next: (users) => this.users.set(users)
    })
  }

  view(userId: number): void {
    this.router.navigateByUrl(`/users/view/${userId}`);
  }

  remove(user: User): void {
    this.userService.deleteById(user.id).subscribe({
      next: () => {
        this.users.update(users =>
          users.filter(user => user.id != user.id)
        );
        this.cssClass.set('alert-success');
        this.message.set(`${user.username} supprimé avec succes !`);
      }
    });
  }
}