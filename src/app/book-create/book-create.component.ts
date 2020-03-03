import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Book } from 'src/models/book.model';
import { BookService } from '../services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.sass']
})
export class BookCreateComponent implements OnInit {

  bookForm: FormGroup;

  constructor(private bookService: BookService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.bookForm = new FormGroup({
      id: new FormControl(null, [Validators.required]),
      title: new FormControl(null, [Validators.required]),
      author: new FormControl(null, [Validators.required]),
      description:new FormControl(null, [Validators.required]),
      coverUrl: new FormControl(null, [Validators.required])
    }
    );
  }

  onSubmit(){
    if(this.bookForm.valid){
      const newBook: Book = {
        ...this.bookForm.value
      };

      this.bookService.addBook(newBook).then((result) => {
        this.router.navigate(['']);
      }).catch((error) => {
        console.log(error);
      });
    } else {
      alert('Tu forma no esta completa');
    }

  }
}
