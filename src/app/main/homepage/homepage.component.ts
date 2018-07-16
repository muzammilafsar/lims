import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../../apiservice.service';
import { Http, Response } from '@angular/http';
import * as M from 'materialize-css';
import { Router } from '@angular/router';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  books ;
  borrowBtnDisabled = false;
  category = {
    all: true,
    tech: false,
    horror: false,
    bio: false,
    history: false
  };
  constructor(private apiService: ApiserviceService, private router: Router) { }

  ngOnInit() {
  this.getAll();
  if (this.apiService.admin_logged_in) {
    this.router.navigate(['admin', 'addbook']);
  }
  }
  getAll() {
    this.apiService.progress = true;
    this.apiService.getAllBooks().subscribe(val => {
      // console.log(val);
      this.apiService.progress = false;
      this.books = val;
    });
  }
  categoryFilter(id) {
    this.category = {
      all: false,
    tech: false,
    horror: false,
    bio: false,
    history: false
    };
    this.category[`${id}`] = true;
  }
  borrowBook(id) {
    this.apiService.progress = true;
    if (!this.apiService.logged_in) {
      M.toast({html: 'Please Login First'});
      return;
    }
    this.borrowBtnDisabled = true;
    this.apiService.borrowBook(id).subscribe(val => {
      // console.log(val);
      this.borrowBtnDisabled = false;
      this.apiService.progress = false;
      if (val['status'] === 200) {
        M.toast({html: 'Borrowed Successfully'});
      }
      if (val['status'] === 500) {
        M.toast({html: 'You already have this Book issued'});
      }
      if (val['status'] === 502) {
        M.toast({html: 'You cannot have more than 5 borrowed book'});
      }
      this.getAll();
    });
  }
  get progress$() {
    return this.apiService.progress;
  }
}
