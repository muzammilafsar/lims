import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../../apiservice.service';
import { Http, Response } from '@angular/http';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  books ;
  category = {
    all: true,
    tech: false,
    horror: false,
    bio: false,
    history: false
  };
  constructor(private apiService: ApiserviceService) { }

  ngOnInit() {
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

}
