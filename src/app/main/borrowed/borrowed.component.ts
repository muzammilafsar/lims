import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../../apiservice.service';
import * as M from 'materialize-css';
@Component({
  selector: 'app-borrowed',
  templateUrl: './borrowed.component.html',
  styleUrls: ['./borrowed.component.css']
})
export class BorrowedComponent implements OnInit {
  borrowedBooks =  [];
  admin = false;
  constructor(private apiService: ApiserviceService) {

  }

  ngOnInit() {
    this.getAll();
    this.admin = this.apiService.admin_logged_in;
  }
  getAll() {
    this.apiService.userBooks().subscribe(val => {
      console.log(val);
      this.borrowedBooks = val['borrow'];
    });
  }
  returnBook(id) {
    this.apiService.returnBook(id).subscribe(val => {
      console.log(val);
      this.getAll();
    });
  }

}
