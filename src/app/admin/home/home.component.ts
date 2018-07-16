import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiserviceService } from '../../apiservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bookForm: FormGroup;
  admin = false;
  constructor(private apiService: ApiserviceService, private router: Router) {
  }

  ngOnInit() {
    this.bookForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      author: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      isbn: new FormControl('', [Validators.required]),
      no_of_copies: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
    });
    if (this.apiService.admin_logged_in) {
      this.admin = true;
    } else {
      this.router.navigate(['']);
    }
  }
  addBook() {
    if (this.bookForm.valid) {
      // console.log(this.bookForm.value);
      this.apiService.addBook( this.bookForm.value );
    }
  }

}
