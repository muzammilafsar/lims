import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../../apiservice.service';
import { Http, Response } from '@angular/http';
import * as M from 'materialize-css';
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
  constructor(private apiService: ApiserviceService) { }

  ngOnInit() {
  this.getAll();
  }
  getAll() {
    this.apiService.getAllBooks().subscribe(val => {
      console.log(val);
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
    this.borrowBtnDisabled = true;
    this.apiService.borrowBook(id).subscribe(val => {
      console.log(val);
      this.borrowBtnDisabled = false;
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
}
