import { Component, OnInit } from '@angular/core';
import { User } from '../../../shared/models/user.model';
import { PageGeneric } from '../../../shared/components/page-generic/page-generic';

@Component({
  selector: 'app-page-home',
  imports: [PageGeneric],
  templateUrl: './page-home.html',
  styleUrl: './page-home.scss',
})
export class PageHome implements OnInit {

  public myUser!: User;
  
  
  ngOnInit(): void {
    this.myUser = new User(JSON.parse(localStorage.getItem('userFormation')!));
  }

}
