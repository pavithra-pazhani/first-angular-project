import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(items: Array<any>, nameSearch: string, emailSearch: string, companySearch: string) {
    if (items && items.length) {
      return items.filter(item => {
        if (nameSearch && item.nama.toString().toLowerCase().indexOf(nameSearch.toLowerCase()) === -1) {
          return false;
        }
        if (emailSearch && item.email.toLowerCase().indexOf(emailSearch.toLowerCase()) === -1) {
          return false;
        }
        if (companySearch && item.company.toLowerCase().indexOf(companySearch.toLowerCase()) === -1) {
          return false;
        }
        return true;
      });
    } else {
      return items;
    }
  }

}
