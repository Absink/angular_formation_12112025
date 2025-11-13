import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './core/navbar/navbar';
import { Notif } from './shared/components/notif/notif';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Notif],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  display = true;

}
