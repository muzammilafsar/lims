import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../../apiservice.service';

@Component({
  selector: 'app-allborrowed',
  templateUrl: './allborrowed.component.html',
  styleUrls: ['./allborrowed.component.css']
})
export class AllborrowedComponent implements OnInit {
  allborrow = [];
  order = false;
  searchAuthor = '';
  searchTitle = '';
  borrowInput = {
    user: '',
    title: '',
    author: '',
  };
  sortby = {
    user: false,
    title: true,
    author: false,
    issue_date: false,
    due_date: false,
    return_date: false
  };
  constructor(private apiService: ApiserviceService) { }

  ngOnInit() {
    this.apiService.progress = true;
    this.apiService.allBorrowedBooks().subscribe(val => {
      console.log(val);
      this.allborrow = val['books'];
      this.sort('title');
      this.apiService.progress = false;
    });
  }
  sortData(key) {
    // if (key === 'due_date') {
    //   key = 'Due_date';
    // }
    // if (key === 'return_date') {
    //   key = 'Return_date';
    // }
    let sort = {
      user: false,
      title: false,
      author: false,
      issue_date: false,
      due_date: false,
      return_date: false
    };
    sort[`${key}`] = true;
    this.sortby = sort;
    this.order = !this.order;
    if (key === 'author' || key === 'title' || key === 'user') {
      this.sort(key);
    } else {
      this.sortDate(key);
    }
  }
  sort(key) {
    this.allborrow = this.allborrow.sort((a, b) => {
      let c, d;
      if (this.order) {
         c = a;
         d = b;
      } else {
        d = a;
        c = b;
      }
      if (c[`${key}`] > d[`${key}`]) {
        return 1;
      }
      if (c[`${key}`] < d[`${key}`]) {
        return -1;
      }
      if (c[`${key}`] === d[`${key}`]) {
        return 0;
      }
    });
  }
  sortDate(key) {
    if (key === 'due_date') {
      key = 'Due_date';
    }
    if (key === 'return_date') {
      key = 'Return_date';
    }
    this.allborrow = this.allborrow.sort((a, b) => {
      let c, d;
      if (this.order) {
         c = a;
         d = b;
      } else {
        d = a;
        c = b;
      }
      if (new Date(c[`${key}`]) > new Date(d[`${key}`])) {
        return 1;
      }
      if (new Date(c[`${key}`]) < new Date(d[`${key}`])) {
        return -1;
      }
    });
  }
}
