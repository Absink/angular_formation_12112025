import { Component, inject } from '@angular/core';
import { IconLogin } from '../../shared/components/icon-login/icon-login';
import { Router, RouterModule } from "@angular/router";

@Component({
  selector: 'app-navbar',
  imports: [IconLogin, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {

  private router = inject(Router);

  title: string = "Formation";

  login(): void {
    if (localStorage.getItem('userFormation')) {
      this.router.navigateByUrl('/login');

    }  

    else
      localStorage.removeItem('userFormation');
  }

}
