import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'foodspipe',
  pure: false, // <!-- We mark the pipe as "impure"
})
export class FoodsPipe implements PipeTransform {
  transform(items: any[], field: string, value: string): any[] {
    try {
      if (!items) return [];
      if (!value) return items;
      const myPattern = new RegExp(value, 'i');
      return items.filter((item) => item[field].match(myPattern));
    } catch (error) {
      throw new Error('error en la pipe filter'.concat(error.message));
    }
  }
}
