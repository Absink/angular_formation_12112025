import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appColorAdmin]'
})
export class ColorAdmin implements OnChanges {

  @Input() appColorAdmin! : string;
  @HostBinding('class') className!: string;


  ngOnChanges(): void {
    this.className = `role-${this.appColorAdmin}`;
  }

}
