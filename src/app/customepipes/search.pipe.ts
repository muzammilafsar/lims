import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchTitle: string, searchAuthor: string): any[] {
    if (!items) {return [];
    }
    if (!searchTitle && !searchAuthor) {return items;
    }
    // searchTitle = searchTitle.toLowerCase();
let result = items.filter( it => {
      if (!searchTitle) {
        return true;
      }
      return it.title.toLowerCase().includes(searchTitle);
    });
    console.log(result);
    // result.filter(val => {
    //   console.log(val);
    //   return true;
    // })
result = result.filter( it => {
  if (!searchAuthor) {
    return true;
  }
  return it.author.toLowerCase().includes(searchAuthor);
});
return result;
   }
}
