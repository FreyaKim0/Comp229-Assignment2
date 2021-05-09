import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/model/book.model';
import { BookRepository } from 'src/app/model/book.repository';

@Component({
  templateUrl: './book-editor.component.html',
  styleUrls: ['./book-editor.component.css']
})
export class BookEditorComponent implements OnInit {

  public thisUserDisplayName;
  public imageData = '';
  editing = false;

  book: Book = new Book();
  form: FormGroup;

  constructor(private repository: BookRepository,
              private router: Router,
              activeRoute: ActivatedRoute)
  {
    // set form group
    this.form = new FormGroup({
      name: new FormControl(null),
      author: new FormControl(null),
      published: new FormControl(null),
      description: new FormControl(null),
      originalPrice: new FormControl(null),
      price: new FormControl(null),
      store: new FormControl(null),
      image0: new FormControl(null),
    });

    // Assign store name
    const userInfo = JSON.parse(localStorage.getItem('user'));
    // tslint:disable-next-line: no-string-literal
    this.thisUserDisplayName = userInfo['displayName'];
    this.book.store = this.thisUserDisplayName;

    // Assign this book's data into HTML
    this.editing = activeRoute.snapshot.params.mode === 'edit';
    if (this.editing)
    {
      Object.assign(this.book, repository.getBook(activeRoute.snapshot.params.id));
      this.form.patchValue({
        name: this.book.name,
        author: this.book.author,
        published: this.book.published,
        description: this.book.description,
        originalPrice: this.book.originalPrice,
        price: this.book.price,
        store: this.book.store,
      });
      this.imageData = this.book.imagePath;
    }
  }

  ngOnInit(): void {}

  onFileSelect(event: Event, name: string): void
  {
      // Read image into reader
      const allowedMimeTypes = ['image/png', 'image/jpeg', 'image/jpg'];

      // Stringfy image0
      const file = (event.target as HTMLInputElement).files[0];
      this.form.patchValue({ image0: file });

      if (file && allowedMimeTypes.includes(file.type)) {
        const reader0 = new FileReader();
        reader0.onload = () => {
          this.imageData = reader0.result as string;
        };
        reader0.readAsDataURL(file);
      }
    }

  deleteImage(name: string): void {
    this.imageData = '';
  }

  onSubmit(): void
  {
    this.repository.saveBook(
                          String(this.book._id),
                          this.form.value.name,
                          this.form.value.author,
                          this.form.value.published,
                          this.form.value.description,
                          this.form.value.originalPrice,
                          this.form.value.price,
                          this.thisUserDisplayName,
                          this.form.value.image0);
    this.router.navigateByUrl('/admin/main/books');
  }
}
