import { Component } from '@angular/core';
import { IconLogin } from '../../shared/components/icon-login/icon-login';
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-navbar',
  imports: [IconLogin, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {

  title: string = "Formation";
  userConnected!: string;

  login(): void {
    this.userConnected = localStorage.getItem('userFormation')!;
    if (!this.userConnected)   
      localStorage.setItem('userFormation', 'Ben');
    else
      localStorage.removeItem('userFormation');
    this.userConnected = localStorage.getItem('userFormation')!;
  }

}
