import { Component, Input, input } from '@angular/core';
import { Notif } from '../notif/notif';

@Component({
  selector: 'app-page-generic',
  imports: [Notif],
  templateUrl: './page-generic.html',
  styleUrl: './page-generic.scss',
})
export class PageGeneric {

  css = input<string>('alert-secondary');
  message = input<string | null>(null);
  timer = input<number>(5000);

  @Input() display = false;

  constructor() {
    setTimeout(() => this.display = false, this.timer());
  }

  clickNotif(): void {
    console.log('clickNotif')
  }

}
