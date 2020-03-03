import { Injectable } from '@angular/core';
import { Book } from 'src/models/book.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books: Book[] = [
    {
      id: '12323',
      title:'First Book',
      author: 'Joe Smith',
      description: 'oakd kjdsa kdsa',
      coverUrl: 'https://marketplace.canva.com/EADanktU9AE/1/0/251w/canva-green-beach-photo-book-cover-o2wPCwYqW2w.jpg'
    },
    {
      id: '14443',
      title:'Second Book',
      author: 'Joe Smith',
      description: 'oakd ksjdsa kdsa',
      coverUrl: 'https://damonza.com/wp-content/uploads/portfolio/nonfiction/Set%20For%20Life%202.jpg'
    },
    {
      id: '16633',
      title:'Third Book',
      author: 'Joe Smith',
      description: 'oakd ksjdadsa kdsa',
      coverUrl: 'https://marketplace.canva.com/EADajpcXwvU/1/0/501w/canva-rust-orange-lioness-vintage-book-cover-2r7-sbV3ztw.jpg'
    }
  ];

  constructor() { }

  getBooks(): Promise<Book[]> {
    return new Promise((resolve, reject) => {
      resolve(this.books);
    });
  }

  getBook(bookId: string): Promise<Book>{

    return new Promise((resolve, reject) => {
      const foundBook = this.books.find((book) => {
        return book.id === bookId;
      });

      if(foundBook){
        resolve(foundBook);
      } else {
        reject('No se encuentra tu libro!');
      }
    });
  }

  deleteBook(bookId: string): Promise<boolean>{
    return new Promise((resolve, reject) => {
      const remainingBooks = this.books.filter((book) => {
        return book.id !== bookId;
      });

      if(JSON.stringify(remainingBooks) !== JSON.stringify(this.books)){
        this.books = remainingBooks;
        resolve(true);
      } else{
        reject('No se borró tu libro');
      }
    });
  }

  updateBook(bookId: string, updateBook: Book): Promise<boolean> {
    return new Promise((resolve,reject) => {
      const updatedBooks = this.books.map((book) => {
        if (book.id === bookId) {
          const newBook = {
            ...book,
            ...updateBook
          };
          return newBook;
        }
        return book;
      });

      if(JSON.stringify(updatedBooks) !== JSON.stringify(this.books)){
        this.books = updatedBooks;
        resolve(true);
      } else {
        reject(false);
      }
    });
  }

  addBook(book:Book): Promise<boolean>{
    return new Promise((resolve, reject) => {
      this.books.push(book);

      resolve(true);
    })
  }
}
