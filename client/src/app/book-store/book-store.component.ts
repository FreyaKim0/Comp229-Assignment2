import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BookRepository } from './../model/book.repository';
import { Component,Input, OnInit } from '@angular/core';
import { Book } from '../model/book.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Options } from '@angular-slider/ngx-slider';
import { Cart } from '../model/cart.model';

// ModalPage(Child)
@Component({
  selector: 'modalpage',

  // ======TEMPLATE HTML CODE STARTS======
  template:  `
  <div class="displaySetting mt-5">
    <!--Close button-->
    <div class="modal-title text-right">
      <button style="outline:0px; background:#ffffff; border:0px;" (click)="closepage()" >
          <i class="fas fa-times-circle" style=" color:gray; font-size:30px;"></i>
      </button>
    </div>

    <div id="big_window" class="modal-body">
      <table>
      <tr>
        <!--Picture-->
        <td rowspan="6">

          <!--Display Picture-->
          <div class="image_display">
            <div class="d-flex justify-content-center">
              <div>
                <img
                  [src]="book.imagePath"
                  [alt]="book.name"
                  style="max-width: 400px; max-height: 350px"
                />
              </div>
            </div>
          </div>
        </td>

        <td>
          <!--Book Name-->
          <h4>{{ book.name }}</h4>
        </td>
      </tr>
      <tr>
        <td>
          <!--Author-->
          <span style="color: grey; font-size: 14px">
            Author&nbsp;:&nbsp;{{ book.author }}
          </span>
        </td>
      </tr>
      <tr>
        <td>
          <!--Publish date-->
          <span style="color: grey; font-size: 14px">
            Published&nbsp;:&nbsp;{{ book.published }}
          </span>
        </td>
      </tr>
      <tr>
        <td>
          <!--Store-->
          <span style="font-size: 14px; color: grey">
            Sale by &nbsp;:&nbsp;{{ book.store }}</span
          >
          <br /><br />
          <!--Price-->
          <span style="font-size: 14px; color: grey">
            Price  &nbsp;:&nbsp; USD $ {{
              book.price
            }}
          </span>
        </td>
      </tr>
      <tr>
        <td>
          <span style="color: red; font-size: 18px; font-weight: 600">
            Buy now for USD $ {{ book.originalPrice }}</span
          ><br />
        </td>
      </tr>
      <tr>
        <td>
          <!--Add to cart-->
          <button class="addtoCart" (click)="addBookToCart(book)">
            Add To Shopping Cart
          </button>
        </td>
      </tr>
      <tr>
        <td colspan="2">
          <!--Description-->
          <span style="font-size: 14px; color: grey"
            ><hr />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{
              book.description
            }}
            <hr /></span
          ><br />
        </td>
        <td></td>
      </tr>
    </table>
    </div>
      <div id="small_window">
        <div class="container">
          <div class="row">
            <div class="col-sm">
               <!--Display Picture-->
              <div class="image_display">
                <div class="d-flex justify-content-center">
                  <div>
                    <img
                      [src]="book.imagePath"
                      [alt]="book.name"
                      style="max-width: 400px; max-height: 350px"
                    />
                  </div>
                </div>
              </div>
            </div>
          <div class="col-sm text-left">

            <!--Book Name-->
            <h4>{{ book.name }}</h4>

            <!--Author-->
            <span style="color: grey; font-size: 14px">
              Author&nbsp;:&nbsp;{{ book.author }}
            </span><br>

            <!--Publish date-->
            <span style="color: grey; font-size: 14px">
              Published&nbsp;:&nbsp;{{ book.published }}
            </span><br>

            <!--Store-->
            <span style="font-size: 14px; color: grey">
              Sale by &nbsp;:&nbsp;{{ book.store }}</span
            >
            <br />

            <!--Price-->
            <span style="font-size: 14px; color: grey">
              Price  &nbsp;:&nbsp; $ {{
                book.originalPrice
              }}
            </span><br><br>

            <span style="color: red; font-size: 18px; font-weight: 600">
              Buy now for $ {{ book.price }}</span
            ><br /><br>

            <!--Add to cart-->
            <button class="addtoCart" (click)="addBookToCart(book)">
              Add To Shopping Cart
            </button>
          </div>
        </div>
      </div>
      <div class="text-left">
         <!--Description-->
          <span style="font-size: 14px; color: grey"><hr />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {{book.description}}
            <hr />
          </span><br />
      </div>
    </div>
  </div>
  <br /><br />`,
  styleUrls: ['./book-detail/book-detail.component.css']
})

export class modalComponentBook implements OnInit {

  @Input() public orderId;
  user: string;
  book: Book = new Book();
  public imageData: string;

  constructor(private repository: BookRepository,
                route: ActivatedRoute,
                private cart: Cart,
                private router: Router,
                public activeModal: NgbActiveModal){}

  ngOnInit(): void {
    console.log('model id: ' + this.orderId);
    Object.assign(this.book, this.repository.getBook(String(this.orderId)));
  }

  addBookToCart(book: Book): void {
    this.cart.addLine(book, 1, false);
    this.router.navigateByUrl('admin/main/mycart');
    this.activeModal.dismiss('Cross click');
  }

  closepage(): void {
    this.activeModal.dismiss('Cross click');
  }
}

// BasePage(Parent)
@Component({
  selector: 'app-book-store',
  templateUrl: './book-store.component.html',
  styleUrls: ['./book-store.component.scss']
})
export class BookStoreComponent {
  // Page filter
  public selectedAuthor = null;
  public booksPerPage = 12;
  public selectedPage = 1;

  // Price filter
  public value = 0;
  public highValue = 50;
  public options: Options = {
    floor: 0,
    ceil: 100,
  };

  constructor(private repository: BookRepository,
              private route: ActivatedRoute,
              private router: Router,
              private modalService: NgbModal) { }
  get books(): Book[] {
    const pageIndex = (this.selectedPage - 1 ) * this.booksPerPage;
    return this.repository.getBooks(this.selectedAuthor)
      .slice(pageIndex, pageIndex + this.booksPerPage)
      .filter(book => {
        return book.price >= this.value &&
               book.price <= this.highValue;});
  }

  get authors(): string[] {
      return this.repository.getAuthors();
  }

  changeAuthor(newAuthor?: string): void {
    this.selectedAuthor = newAuthor;
  }

  changePage(newPage: number): void {
    this.selectedPage = newPage;
  }

  changePageSize(newSize: number): void {
    this.booksPerPage = Number(newSize);
    this.changePage(1);
  }

  get pageCount(): number {
    return Math.ceil(this.repository.getBooks(this.selectedAuthor).length / this.booksPerPage);
  }

  // Open Modal page
  viewBook(id: number): void {
    // Open modal window
    const ModalRef = this.modalService.open(modalComponentBook,
      {
        windowClass: 'this_modal',
        scrollable: false,
      });

    // Assign value
    ModalRef.componentInstance.orderId = id;
  }
}
