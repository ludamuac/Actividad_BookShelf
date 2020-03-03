import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../services/book.service';
import { Book } from 'src/models/book.model';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.sass']
})
export class BookDetailComponent implements OnInit {

  book: Book;

  constructor(private activatedRoute: ActivatedRoute,
              private bookService: BookService,
              private router: Router) { }

  ngOnInit() {

    const bookId = this.activatedRoute.snapshot.paramMap.get('bookId');
    this.getBook(bookId);
  }

  getBook(bookId: string){
    this.bookService.getBook(bookId).then((book: Book) => {
      this.book = book;
    }).catch((error) => {
      this.router.navigate(['']);
    });
  }
}
