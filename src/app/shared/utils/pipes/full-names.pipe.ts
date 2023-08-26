import { Pipe, PipeTransform } from '@angular/core';
import { student } from 'src/app/dashboard/pages/students/models/indexStu';

@Pipe({
  name: 'fullNames'
})
export class FullNamesPipe implements PipeTransform {

  transform(value: student, ...args: unknown[]): unknown {
    return `${value.name} ${value.lastname}`;
  }

}
