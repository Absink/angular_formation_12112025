import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';


@Component({
  selector: 'app-notif',
  imports: [CommonModule],
  templateUrl: './notif.html',
  styleUrl: './notif.scss',
})
export class Notif {

  css = input<string>('alert-secondary');
  message = input<string | null>();
  
  clicked = output<void>();

  onClick() {
    this.clicked.emit();
  }

}
