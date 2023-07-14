import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/app/dashboard/pages/home/models';

@Pipe({
  name: 'fullNames'
})
export class FullNamesPipe implements PipeTransform {

  transform(value: User, ...args: unknown[]): unknown {
    return `${value.name} ${value.lastname}`;
  }

}
