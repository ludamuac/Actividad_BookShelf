import { Component, OnInit } from '@angular/core';
import { Book } from 'src/models/book.model';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {


  books: Book[];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getBooks();
    // this.getBook();
    // this.deleteBook();
    // this.updateBook();
    // this.addBook();
  }

  getBooks(){
    console.log('get books');
    this.bookService.getBooks().then((books)=>{
      console.log('then');
      console.log(books);
      this.books = books;
    });
  }

}
