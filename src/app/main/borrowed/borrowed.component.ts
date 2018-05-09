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
  constructor(private apiService: ApiserviceService) { }

  ngOnInit() {
    this.getAll();
    M.AutoInit();
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
