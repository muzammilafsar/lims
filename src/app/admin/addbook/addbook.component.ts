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
  addbtnDisable = false;
  delbtnDisable = false;
  editbtnDisable = false;
  constructor(private apiService: ApiserviceService) { }

  ngOnInit() {
    M.AutoInit();
    this.bookForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      author: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      isbn: new FormControl('', [Validators.required]),
      no_of_copies: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      category: new FormControl(null, [Validators.required])
    });
    this.updateForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      author: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      isbn: new FormControl('', [Validators.required]),
      no_of_copies: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required])
    });
    this.getAllBooks();
    document.addEventListener('DOMContentLoaded', function() {
      const elems = document.querySelectorAll('.modal');
      const instances = M.Modal.init(elems);
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
    this.addbtnDisable = true;
    this.apiService.progress = true;
    if (this.bookForm.valid) {
      console.log(this.bookForm.value);
      this.apiService.addBook( this.bookForm.value ).subscribe(val => {
        if (val['status'] === 200 ) {
          this.getAllBooks();
          M.toast({html: 'Added Successfully'});
          this.bookForm.reset();
          this.apiService.progress = false;
          this.addbtnDisable = false;
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
        category: new FormControl(book.category, [Validators.required]),
      });
      const elems = document.querySelectorAll('.modal');
      const instances = M.Modal.init(elems);
      instances[0].open();
    }
  }
  fetchisbn() {
    this.apiService.fetchDesc(this.bookForm.value.isbn).subscribe(val => {
      if (val[`ISBN:${this.bookForm.value.isbn}`]) {
      this.bookForm.patchValue({description: val[`ISBN:${this.bookForm.value.isbn}`].details.description.value });
      } else {
      M.toast({html: 'Description Not Found'});
      }
      // this.bookForm.value.description = ;
    });
    this.apiService.fetchisbn(this.bookForm.value.isbn).subscribe(val => {
      console.log(val);
      if (val[`ISBN:${this.bookForm.value.isbn}`]) {
        this.bookForm.patchValue({
          title: val[`ISBN:${this.bookForm.value.isbn}`].title,
          author: (val[`ISBN:${this.bookForm.value.isbn}`].authors) ? val[`ISBN:${this.bookForm.value.isbn}`].authors[0].name : '',
          image: val[`ISBN:${this.bookForm.value.isbn}`].cover.medium
        });
        } else {
          M.toast({html: 'Details Not Found'});
        }
      M.AutoInit();
      // this.bookForm.value.title = val[`ISBN:${this.bookForm.value.isbn}`].title;
      // this.bookForm.value.author = val[`ISBN:${this.bookForm.value.isbn}`].authors[0].name;
      // this.bookForm.value.image = val[`ISBN:${this.bookForm.value.isbn}`].cover.medium;
    });
  }
  deletebook(id) {
    this.apiService.progress = true;
    this.delbtnDisable = true;
    this.apiService.deleteBook(id).subscribe(val => {
      console.log(val);
      this.getAllBooks();
      M.toast({html: 'Deleted Successfully'});
      this.delbtnDisable = false;
      this.apiService.progress = false;
    });
  }
  updateBook() {
    this.apiService.progress = true;
    this.editbtnDisable = true;
    console.log('update', this.updateForm.valid);
    if (this.updateForm.valid) {
      this.apiService.updateBook({
        id: this.updateid,
        ...this.updateForm.value}).subscribe(val => {
        console.log(val);
        this.editbtnDisable = false;
        this.apiService.progress = false;
        M.toast({html: 'Edited Successfully'});
        this.getAllBooks();
      });

    }
  }
}
