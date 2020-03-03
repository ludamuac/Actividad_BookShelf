import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from 'src/models/book.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books-management',
  templateUrl: './books-management.component.html',
  styleUrls: ['./books-management.component.sass']
})
export class BooksManagementComponent implements OnInit {

  books: Book[];
  constructor(private booksService: BookService,
              private router: Router) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.booksService.getBooks().then((books: Book[]) => {
      this.books = books;
    });
  }

  deleteBook(bookId:string){
    this.booksService.deleteBook(bookId).then((result) => {
      this.getBooks();
    }).catch((error) => {

    });
  }

  editBook(bookId: string){
    this.router.navigate(['books',bookId,'update']);
  }
}
