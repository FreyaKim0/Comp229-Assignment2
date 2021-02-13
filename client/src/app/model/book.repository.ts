import { Observable } from 'rxjs';
import { StaticDataSource } from './static.datasource';
import { RestDataSource } from './rest.datasource';
import { Injectable } from '@angular/core';
import { Book } from './book.model';

@Injectable()
export class BookRepository
{
  private books: Book[] = [];
  private authors: string[] = [];

  constructor(private dataSource: RestDataSource)
  {
      dataSource.getBooks().subscribe( data => {
        this.books = data;
        this.authors = data.map(b => b.author)
        .filter((a, index, array) => array.indexOf(a) === index).sort();
    });
  }

  getBooks(author: string = null): Book[]
  {
    return this.books
    .filter(b => author == null || author === b.author);
  }

  getBook(id: number): Book
  {
    return this.books.find(b => b._id === id);
  }

  getAuthors(): string[]
  {
    return this.authors;
  }

  saveBook(savedBook: Book): Observable<any>
  {
    // add book
    if (savedBook._id === null || savedBook._id === 0 || savedBook._id === undefined)
    {
      this.books.push(savedBook);
      return this.dataSource.addBook(savedBook);
    }
    // update book
    else
    {
      this.dataSource.updateBook(savedBook).subscribe(book => {
        this.books.splice(this.books.findIndex(b => b._id === savedBook._id), 1, savedBook);
      });
    }
  }
  deleteBook(deletedBookID: number): void
  {
    this.dataSource.deleteBook(deletedBookID).subscribe(book => {
       this.books.splice(this.books.findIndex(b => b._id === deletedBookID), 1);
    });
  }
}
