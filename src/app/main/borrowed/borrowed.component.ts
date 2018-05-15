import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../../apiservice.service';
import * as M from 'materialize-css';
import { Router } from '@angular/router';
@Component({
  selector: 'app-borrowed',
  templateUrl: './borrowed.component.html',
  styleUrls: ['./borrowed.component.css']
})
export class BorrowedComponent implements OnInit {
  borrowedBooks =  [];
  admin = false;
  disableReturn = false;
  constructor(private apiService: ApiserviceService, private router: Router) {

  }

  ngOnInit() {
    this.admin = this.apiService.admin_logged_in;
    console.log(this.apiService.logged_in);
    if (!this.apiService.logged_in) {
      this.router.navigate(['']);
    } else {
      this.getAll();
    }
    M.AutoInit();
  }
  getAll() {
    this.apiService.progress = true;
    this.apiService.userBooks().subscribe(val => {
      console.log(val);
      this.apiService.progress = false;
      this.borrowedBooks = val['borrow'];
    });
  }
  returnBook(id) {
    this.apiService.progress = true;
    this.disableReturn = true;
    this.apiService.returnBook(id).subscribe(val => {
      console.log(val);
      this.getAll();
      this.disableReturn = false;
      this.apiService.progress = false;
      M.toast({html: 'Book Returned'});
    });
  }

}
