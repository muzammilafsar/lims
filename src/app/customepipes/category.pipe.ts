import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'categoryFilter'
})
export class CategoryFilterPipe implements PipeTransform {
  transform(items: any[], filterby: object) {
    let result ;
    for (const prop in filterby) {
        if (filterby.hasOwnProperty(prop)) {
        if (prop === 'all' && filterby[`${prop}`]) {
          result = items;
        }
        if (prop === 'tech' && filterby[`${prop}`]) {
          result = items.filter(val => {
            return val.category === prop;
          });
        }
        if (prop === 'horror' && filterby[`${prop}`]) {
          result = items.filter(val => {
            return val.category === prop;
          });
        }
        if (prop === 'edu' && filterby[`${prop}`]) {
          result = items.filter(val => {
            return val.category === prop;
          });
        }
        if (prop === 'bio' && filterby[`${prop}`]) {
          result = items.filter(val => {
            return val.category === prop;
          });
        }
        if (prop === 'hitory' && filterby[`${prop}`]) {
          result = items.filter(val => {
            return val.category === prop;
          });
        }

        }
    }
    return result;
   }
}
