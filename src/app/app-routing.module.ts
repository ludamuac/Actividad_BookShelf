import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BooksManagementComponent } from './books-management/books-management.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookUpdateComponent } from './book-update/book-update.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'books/manage', component: BooksManagementComponent},
  {path:'books/create', component: BookCreateComponent},
  {path: 'books/:bookId', component: BookDetailComponent},
  {path: 'books/:bookId/update', component: BookUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
