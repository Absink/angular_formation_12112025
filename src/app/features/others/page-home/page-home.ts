import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-home',
  imports: [],
  templateUrl: './page-home.html',
  styleUrl: './page-home.scss',
})
export class PageHome implements OnInit {

  public myUser = "";
  
  
  ngOnInit(): void {
    localStorage.setItem('userConnected', 'Joe');
  }

  login(): void {
    this.myUser = localStorage.getItem('userConnected')!;
    // localStorage.removeItem('userConnected');
    // localStorage.clear();
  }

}
