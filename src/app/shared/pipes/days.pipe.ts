import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'days'
})
export class DaysPipe implements PipeTransform {

  transform(nbJour: number): string | null {
    if (nbJour) {
      if (nbJour > 1)
        return nbJour + " jours";
      return nbJour + " jour";
    }
    return null;
  }

}
