import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appColorDays]'
})
export class ColorDays implements OnChanges {

  @Input() appColorDays!: number;
  @HostBinding('class') className!: string;

  ngOnChanges(): void {
    if (this.appColorDays <= 3)
      this.className = `day`;
    else 
      this.className = `days`;
  }
}
