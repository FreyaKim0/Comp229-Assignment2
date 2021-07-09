import { Observable } from 'rxjs';
import { StaticDataSource } from './static.datasource';
import { RestDataSource } from './rest.datasource';
import { Injectable } from '@angular/core';
import { Book } from './book.model';
import { ConditionalExpr } from '@angular/compiler';

@Injectable()
export class BookRepository
{
  private book: Book;
  private books: Book[] = [];
  private authors: string[] = [];
  private price: number[] = [];

  constructor(private dataSource: RestDataSource) {
    dataSource.getBooks().subscribe(data => {
      this.books = data;
      this.authors = data.map(b => b.author)
        .filter((a, index, array) => array.indexOf(a) === index).sort();
      this.price = data.map(b => b.originalPrice)
        .filter((a, index, array) => array.indexOf(a) > index).sort();
      });
  }

  getBooks(author: string = null): Book[] {
    return this.books
    .filter(b => author == null || author === b.author);
  }

  getBook(id: string): Book {
    return this.books.find(b => b._id === id);
  }

  getAuthors(): string[] {
    return this.authors;
  }

  saveBook(
    _id: string,
    name: string,
    author: string,
    published: string,
    description: string,
    originalPrice: string,
    price: string,
    store: string,
    image0: File): void {

    // add book
    if (_id === null || _id == 'undefined' || _id === '')
    {
      const bookData = new FormData();
      bookData.append("name", name);
      bookData.append("author", author);
      bookData.append("published", published);
      bookData.append("description", description);
      bookData.append("originalPrice", originalPrice);
      bookData.append("price", price);
      bookData.append("store", store);
      bookData.append("image0", image0, name);

      // Sent this new data to backend,
      // then update it into front-end array if successd
      this.dataSource.addBook(bookData).subscribe(res => {
        this.book = new Book(res.id,
                             name,
                             author,
                             published,
                             description,
                             Number(originalPrice),
                             Number(price),
                             store,
                             res.imagePath
         );
         this.books.push(this.book);
      });
    }

    // update book (with image change)
    else
    {
      const bookData = new FormData();
      bookData.append("name", name);
      bookData.append("author", author);
      bookData.append("published", published);
      bookData.append("description", description);
      bookData.append("originalPrice", originalPrice);
      bookData.append("price", price);
      bookData.append("store", store);
      bookData.append("image0", image0, name);

      // Sent this update data to back-end,
      // then update it into front-end array if successd
      this.dataSource.updateBook(bookData, _id).subscribe(book => {
         this.book = new Book(_id,
                              name,
                              author,
                              published,
                              description,
                              Number(originalPrice),
                              Number(price),
                              store,
                              book.imagePath);
        this.books.splice(this.books.findIndex(b => b._id === _id), 1, this.book);
      });
    }
  }

  // update book (without image change)
  editBookWithoutChangePicture( _id: string,
                                name: string,
                                author: string,
                                published: string,
                                description: string,
                                originalPrice: string,
                                price: string,
                                store: string,
                                image0: string) {

    console.log('image0: ' + image0);
    console.log("name: " + name);

     const bookData = new FormData();
      bookData.append("name", name);
      bookData.append("author", author);
      bookData.append("published", published);
      bookData.append("description", description);
      bookData.append("originalPrice", originalPrice);
      bookData.append("price", price);
      bookData.append("store", store);
      bookData.append("image0", image0);

    this.dataSource.updateBookWithSameImage(bookData, _id).subscribe(res => {
      console.log(res.success);
      console.log(res.id);
      if (res.success === true) {
        this.book = new Book(_id,
            name,
            author,
            published,
            description,
            Number(originalPrice),
            Number(price),
            store,
            image0);
      this.books.splice(this.books.findIndex(b => b._id === _id), 1, this.book);
      }
    });
  }

  deleteBook(deletedBookID: number): void
  {
    let x = String(deletedBookID);
    this.dataSource.deleteBook(x).subscribe(book => {
       this.books.splice(this.books.findIndex(b => b._id === x ), 1);
    });
  }
}
