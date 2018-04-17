import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateIso'
})
export class DateIsoPipe implements PipeTransform {

  transform(date: string): string {
    if (date) {
      const [yyyy, mm, dd] = date.split('-');
      return [dd, mm, yyyy].join('/');
    }
    return null;
  }

}
