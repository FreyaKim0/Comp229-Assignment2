import { BookRepository } from './../model/book.repository';
import { Component } from '@angular/core';
import { Book } from '../model/book.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-store',
  templateUrl: './book-store.component.html',
  styleUrls: ['./book-store.component.css']
})
export class BookStoreComponent
{
  public selectedAuthor = null;
  public booksPerPage = 8;
  public selectedPage = 1;

  constructor(private repository: BookRepository,
              private router: Router) { }
  get books(): Book[]
  {
    const pageIndex = (this.selectedPage - 1 ) * this.booksPerPage;
    return this.repository.getBooks(this.selectedAuthor)
    .slice(pageIndex, pageIndex + this.booksPerPage);
  }

  get authors(): string[]
  {
      return this.repository.getAuthors();
  }

  changeAuthor(newAuthor?: string): void
  {
    this.selectedAuthor = newAuthor;
  }

  changePage(newPage: number): void
 {
   this.selectedPage = newPage;
 }

  changePageSize(newSize: number): void
  {
    this.booksPerPage = Number(newSize);
    this.changePage(1);
  }

  get pageCount(): number
  {
    return Math.ceil(this.repository
      .getBooks(this.selectedAuthor).length / this.booksPerPage);
  }


  viewBook(id: number): void
  {
    console.log('this id is... ' + id);
    this.router.navigateByUrl('book-list/detail/' + id);
  }
}
