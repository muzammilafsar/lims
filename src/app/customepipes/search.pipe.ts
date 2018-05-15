import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchTitle: string, searchAuthor: string, user: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchTitle && !searchAuthor && !user) {
      return items;
    }
    // searchTitle = searchTitle.toLowerCase();
    let result = items.filter(it => {
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
    result = result.filter(it => {
      if (!searchAuthor) {
        return true;
      }
      return it.author.toLowerCase().includes(searchAuthor);
    });
if (user) {
  result = result.filter(it => {
    if (!user) {
      return true;
    }
    return it.user.toLowerCase().includes(user);
  });
}
    return result;
  }
}
