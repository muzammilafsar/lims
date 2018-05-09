import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../../apiservice.service';

@Component({
  selector: 'app-allborrowed',
  templateUrl: './allborrowed.component.html',
  styleUrls: ['./allborrowed.component.css']
})
export class AllborrowedComponent implements OnInit {
  allborrow = [];
  searchAuthor = '';
  searchTitle = '';
  borrowInput = {
    user: '',
    title: '',
    author: '',
  };
  constructor(private apiService: ApiserviceService) { }

  ngOnInit() {
    this.apiService.allBorrowedBooks().subscribe(val => {
      console.log(val);
      this.allborrow = val['books'];
    });
  }

}
