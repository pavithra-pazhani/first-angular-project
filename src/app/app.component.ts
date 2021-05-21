import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  oppatient: Array<any> = [
    {
      "opdate": "18/05/2021",
      "th": 1,
      "patient_name": "Pavi",
      "status": "completed"
    },
    {
      "opdate": "02/05/2021",
      "th": 2,
      "patient_name": "venkat",
      "status": "proposed"
    },
    {
      "opdate": "19/03/2021",
      "th": 3,
      "patient_name": "thara",
      "status": "deleted"
    },
    {
      "opdate": "10/07/2020",
      "th": 4,
      "patient_name": "varun",
      "status": "reffered"
    },
    {
      "opdate": "02/07/2020",
      "th": 5,
      "patient_name": "charlie",
      "status": "unaccepeted"
    },
    {
      "opdate": "09/08/2021",
      "th": 6,
      "patient_name": "tessa",
      "status": "existing"
    },
    {
      "opdate": "1/01/2021",
      "th": 7,
      "patient_name": "ram",
      "status": "completed"
    },
    {
      "opdate": "02/011/2021",
      "th": 8,
      "patient_name": "janani",
      "status": "proposed"
    },
    {
      "opdate": "12/12/2021",
      "th": 9,
      "patient_name": "goutham",
      "status": "accepted"
    },
    {
      "opdate": "11/11/2021",
      "th": 10,
      "patient_name": "liya",
      "status": "proposed"
    },
    {
      "opdate": "10/10/2020",
      "th": 11,
      "patient_name": "surya",
      "status": "accepted"
    },
    {
      "opdate": "8/4/2020",
      "th": 12,
      "patient_name": "jyo",
      "status": "deleted"
    },
    {
      "opdate": "2/2/2021",
      "th": 13,
      "patient_name": "karthick",
      "status": "refferred"
    },
    {
      "opdate": "1/1/2021",
      "th": 14,
      "patient_name": "sivakumar",
      "status": "exixting"
    },
    {
      "opdate": "30/11/2021",
      "th": 15,
      "patient_name": "lila",
      "status": "unaccepted"
    },
    {
      "opdate": "18/4/2020",
      "th": 16,
      "patient_name": "zara",
      "status": "proposed"
    },
    {
      "opdate": "6/9/2020",
      "th": 17,
      "patient_name": "maara",
      "status": "completed"
    },
    {
      "opdate": "4/4/2020",
      "th": 18,
      "patient_name": "nila",
      "status": "accepted"
    },
    {
      "opdate": "3/3/2021",
      "th": 19,
      "patient_name": "keerthy",
      "status": "deleted"
    },
    {
      "opdate": "16/6/2021",
      "th": 20,
      "patient_name": "swetha",
      "status": "existing"
    },
    {
      "opdate": "15/10/2020",
      "th": 21,
      "patient_name": "dia",
      "status": "reffered"
    },
    {
      "opdate": "6/6/2020",
      "th": 22,
      "patient_name": "divya",
      "status": "unaccepted"
    },
    {
      "opdate": "13/3/2021",
      "th": 23,
      "patient_name": "priya",
      "status": "completed"
    },
    {
      "opdate": "11/1/2020",
      "th": 24,
      "patient_name": "latha",
      "status": "proposed"
    },
    {
      "opdate": "31/5/2021",
      "th": 25,
      "patient_name": "bala",
      "status": "deleted"
    },
    {
      "opdate": "7/7/2021",
      "th": 26,
      "patient_name": "moni",
      "status": "accepeted"
    },
    {
      "opdate": "4/6/2021",
      "th": 27,
      "patient_name": "joe",
      "status": "existing"
    },
    {
      "opdate": "5/12/2020",
      "th": 28,
      "patient_name": "rey",
      "status": "completed"
    },
    {
      "opdate": "20/5/2021",
      "th": 29,
      "patient_name": "nisha",
      "status": "proposed"
    },
    {
      "opdate": "21/12/2021",
      "th": 30,
      "patient_name": "kavya",
      "status": "deleted"
    },
    {
      "opdate": "7/9/2020",
      "th": 31,
      "patient_name": "dulquer",
      "status": "unaccepted"
    },
    {
      "opdate": "11/11/2021",
      "th": 10,
      "patient_name": "liya",
      "status": "proposed"
    }
  ];
  constructor() { }

  ngOnInit() {

  }

  statusFilter = [];
  checkValue(event: any) {
    console.log(event.target.value, event.target.checked);
    if (event.target.checked && event.target.value != 'all') {
      this.statusFilter.push(event.target.value);
    } else if (event.target.value != 'all') {
      const index = this.statusFilter.indexOf(event.target.value);
      if (index > -1) {
        this.statusFilter.splice(index, 1);
      }
    } else {
      this.statusFilter = [];
    }

    console.log("final statusfilter", this.statusFilter)
  }
}
