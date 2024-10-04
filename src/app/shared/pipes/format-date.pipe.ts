import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  transform(value: any, format: string = 'MM/dd/yyyy'): any {
    if (!value) {
      return 'Invalid Date'; // Agar qiymat yo'q bo'lsa yoki noto'g'ri bo'lsa
    }

    const datePipe = new DatePipe('en-US');
    const formattedDate = datePipe.transform(value, format);

    return formattedDate ? formattedDate : 'Invalid Date'; // Formatlash muvaffaqiyatsiz bo'lsa
  }

}
