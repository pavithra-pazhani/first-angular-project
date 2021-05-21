import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataFilter'
})
export class DataFilterPipe implements PipeTransform {

  transform(oppatient: any, statuses?: any, th?: number): any {
    console.log("oppatient", oppatient);
    console.log("statuses", statuses);
    console.log("th", th);
    var filterPatient = [];
    if (statuses.length > 0) {
      oppatient.forEach(function (p, i) {
        statuses.forEach(function (eachstatus) {
          if (p.status == eachstatus && th == p.th) {
            filterPatient.push(p)
          }
        });

      })
      return filterPatient;
    } else {
      return oppatient;
    }


  }

}
