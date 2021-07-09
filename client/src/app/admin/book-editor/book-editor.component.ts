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

  public thisUserDisplayName: string;
  public title: string;
  public imageData = '';
  public ImageFormat = false;             // check if user upload file in right format
  public formValidate;                    // check if user upload any image
  editing = false;
  book: Book = new Book();
  form: FormGroup;

  constructor(private repository: BookRepository,
              private router: Router,
              activeRoute: ActivatedRoute,
              private route: ActivatedRoute)
  {
    // set form group
    this.form = new FormGroup({name: new FormControl(null),
                              author: new FormControl(null),
                              published: new FormControl(null),
                              description: new FormControl(null),
                              originalPrice: new FormControl(null),
                              price: new FormControl(null),
                              store: new FormControl(null),
                              image0: new FormControl(null),});

    // Assign store name
    const userInfo = JSON.parse(localStorage.getItem('user'));
    this.thisUserDisplayName = userInfo['displayName'];
    this.book.store = this.thisUserDisplayName;

    // Assign this book's data into HTML
    this.editing = activeRoute.snapshot.params.mode === 'edit';

    if (this.editing) {
      Object.assign(this.book, repository.getBook(activeRoute.snapshot.params.id));
      this.form.patchValue({name: this.book.name,
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

  ngOnInit(): void {
     this.title = this.route.snapshot.data.title;
  }

  onFileSelect(event: Event, name: string): void {
    // Read image into reader
    const allowedMimeTypes = ['image/png', 'image/jpeg', 'image/jpg'];

    // Stringfy image0
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({ image0: file });
    console.log("new value patch...");

    if (file && allowedMimeTypes.includes(file.type)) {
        const reader0 = new FileReader();
        reader0.onload = () => {
          this.imageData = reader0.result as string;
        };
        reader0.readAsDataURL(file);
        this.ImageFormat = true;
        this.formValidate = true;
    }
    else {
        this.ImageFormat = false;
    }
  }

  deleteImage(name: string): void {
    this.imageData = '';
    this.ImageFormat = false;
    this.form.patchValue({ image0: null });
  }

  onSubmit(): void {
    // Form validation
    if (this.form.value.name != null &&
      this.form.value.author != null &&
      this.form.value.published != null &&
      this.form.value.description != null &&
      this.form.value.originalPrice != null &&
      this.form.value.price != null &&
      this.imageData!='') {
      this.formValidate = true;
    }
      else {
      this.formValidate = false;
    }

    // Submit
    if (this.formValidate) {

      // Update without modifying image
      if (this.imageData.substring(0, 4) === "http") {
        this.repository.editBookWithoutChangePicture(String(this.book._id),
                                                      this.form.value.name,
                                                      this.form.value.author,
                                                      this.form.value.published,
                                                      this.form.value.description,
                                                      this.form.value.originalPrice,
                                                      this.form.value.price,
                                                      this.thisUserDisplayName,
                                                      this.imageData);
      }
      // Add new or update image
      else{
        this.repository.saveBook(String(this.book._id),
                                  this.form.value.name,
                                  this.form.value.author,
                                  this.form.value.published,
                                  this.form.value.description,
                                  this.form.value.originalPrice,
                                  this.form.value.price,
                                  this.thisUserDisplayName,
                                  this.form.value.image0);
      }
      this.router.navigateByUrl('/admin/main/books');
    }
  }
}
