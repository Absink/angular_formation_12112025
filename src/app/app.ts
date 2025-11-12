import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Exemple } from './shared/components/exemple/exemple';
import { Navbar } from './core/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Exemple, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('formation');
}
