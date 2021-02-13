import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/model/book.model';
import { BookRepository } from 'src/app/model/book.repository';
@Component({
  templateUrl: './book-editor.component.html',
  styleUrls: ['./book-editor.component.css']
})
export class BookEditorComponent implements OnInit {
  editing = false;
  book: Book = new Book();
  constructor(private repository: BookRepository,
              private router: Router,
              activeRoute: ActivatedRoute)
  {
    // Assign that book's data into webpage
    this.editing = activeRoute.snapshot.params.mode === 'edit';
    if (this.editing)
    {
      console.log('This one:' + activeRoute.snapshot.params.id);
      Object.assign(this.book, repository.getBook(activeRoute.snapshot.params.id));
    }
  }
  ngOnInit(): void {
  }
  save(form: NgForm): void
  {
    this.repository.saveBook(this.book).subscribe(data => {

      if (!data.success)
      {
        console.log('Message from backend:' + data.msg);
      }
      else
      {
        console.log('Adding new book status:' + data.success.toString + '\nServer:' + data.msg);
        this.router.navigateByUrl('admin/auth');
      }
     });

    this.router.navigateByUrl('/admin/main/books');
  }
}
