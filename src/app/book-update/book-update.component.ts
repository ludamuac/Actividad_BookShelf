import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../services/book.service';
import { Book } from 'src/models/book.model';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.sass']
})
export class BookUpdateComponent implements OnInit {

  book: Book;
  bookForm: FormGroup;

  constructor(private activatedRoute: ActivatedRoute,
              private bookService: BookService,
              private router: Router) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('bookId');
    this.getBook(id);
    this.initForm();
  }

  initForm() {
    this.bookForm = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      author: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      coverUrl: new FormControl(null, [Validators.required])
    });
  }

  patchForm(){
    this.bookForm.patchValue({
      ...this.book
    });
  }

  getBook(bookId: string){
    this.bookService.getBook(bookId).then((book: Book) => {
      this.book = book;
      this.patchForm();
    }).catch((error) => {
      this.router.navigate(['book', 'manage']);
    });
  }

  onSubmit(){
    if (this.bookForm.valid) {
      const updateBook: Book = {
        id: this.book.id,
        ...this.bookForm.value
      }
      this.bookService.updateBook(this.book.id, updateBook).then((res) => {
        this.router.navigate(['books', 'manage']);
      }).catch((error) => {
        alert('Ocurrió un error al actulizar tu libro. Vuelvelo a intentar.');
      });
    } else {
      alert('Tu forma no está completa.');
    }
  }
}
