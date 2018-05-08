import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiserviceService } from '../../apiservice.service';
import * as M from 'materialize-css';
@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  allbooks = [];
  modal ;
  bookForm: FormGroup;
  updateForm: FormGroup;
  updateid;
  searchTitle = '';
  constructor(private apiService: ApiserviceService) { }

  ngOnInit() {
    this.bookForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      author: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      isbn: new FormControl('', [Validators.required]),
      no_of_copies: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
    });
    this.updateForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      author: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      isbn: new FormControl('', [Validators.required]),
      no_of_copies: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
    });
    this.getAllBooks();
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.modal');
      var instances = M.Modal.init(elems);
      // instances[0].open();
      this.modal = instances[0];
      // console.log();
    });
  }
  getAllBooks() {
    this.apiService.getAllBooks().subscribe(val => {
      this.allbooks = val;
    });
  }
  addBook() {
    if (this.bookForm.valid) {
      console.log(this.bookForm.value);
      this.apiService.addBook( this.bookForm.value ).subscribe(val => {
        if (val['status'] === 200 ) {
          this.getAllBooks();
        }
            });
    }
  }
  editbook(id) {
    const book = this.allbooks.find(val => {
      return val._id === id;
    });
    this.updateid = id;
    if (book) {
     this.updateForm = new FormGroup({
        title: new FormControl(book.title, [Validators.required]),
        author: new FormControl(book.author, [Validators.required]),
        description: new FormControl(book.description, [Validators.required]),
        isbn: new FormControl(book.isbn, [Validators.required]),
        no_of_copies: new FormControl(book.no_of_copies, [Validators.required]),
        image: new FormControl(book.image, [Validators.required]),
      });
      const elems = document.querySelectorAll('.modal');
      const instances = M.Modal.init(elems);
      instances[0].open();
    }
  }
  deletebook(id) {
    this.apiService.deleteBook(id).subscribe(val => {
      console.log(val);
      this.getAllBooks();
    });
  }
  updateBook() {
    console.log('update', this.updateForm.valid);
    if (this.updateForm.valid) {
      this.apiService.updateBook({
        id: this.updateid,
        ...this.updateForm.value}).subscribe(val => {
        console.log(val);
        this.getAllBooks();
      });

    }
  }
}
