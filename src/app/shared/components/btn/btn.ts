import { Component, output } from '@angular/core';

@Component({
  selector: 'app-btn',
  imports: [],
  templateUrl: './btn.html',
  styleUrl: './btn.scss',
})
export class Btn {

  // @Output clicked
  clicked = output<void>();

  onClick() {
    console.log("onClick");
    this.clicked.emit();
  }

}
