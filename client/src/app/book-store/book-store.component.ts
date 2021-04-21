import { BookRepository } from './../model/book.repository';
import { Component } from '@angular/core';
import { Book } from '../model/book.model';
import { Router } from '@angular/router';
import { Options } from '@angular-slider/ngx-slider';
@Component({
  selector: 'app-book-store',
  templateUrl: './book-store.component.html',
  styleUrls: ['./book-store.component.scss']
})
export class BookStoreComponent {
  // Page filter
  public selectedAuthor = null;
  public booksPerPage = 8;
  public selectedPage = 1;

  // Price filter
  public value = 0;
  public highValue = 50;
  public options: Options = {
    floor: 0,
    ceil: 100,
  };

  constructor(private repository: BookRepository,
              private router: Router) { }
  get books(): Book[]
  {
    const pageIndex = (this.selectedPage - 1 ) * this.booksPerPage;
    return this.repository.getBooks(this.selectedAuthor)
      .slice(pageIndex, pageIndex + this.booksPerPage)
      .filter(book => {
        return book.price >= this.value &&
               book.price <= this.highValue;
      });
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
    this.router.navigateByUrl('book-list/detail/' + id);
  }
}
