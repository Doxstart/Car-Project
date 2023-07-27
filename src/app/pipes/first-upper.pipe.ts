import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstUpper',
})
export class FirstUpperPipe implements PipeTransform {
  transform(value: string, ...args: any[]): string {
    const firstChar = value[0];
    const firstCharUpper = firstChar.toUpperCase();
    const restOfTheString = value.slice(1);
    const result = firstCharUpper + restOfTheString;

    return result;
  }
}
