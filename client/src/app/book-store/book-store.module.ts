import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

import { CounterDirective } from './counter.directive';
import { PartialsModule } from './../partials/partials.module';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { BookStoreComponent } from '../book-store/book-store.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routingS = RouterModule.forChild([
  {path: 'all', component: BookStoreComponent},
  {path: 'detail',
   children: [
    { path: ':id', component: BookDetailComponent, data: {title: 'Product Details'}},
    { path: '**', redirectTo: 'all'}]
  },
  {path: '**', redirectTo: 'all'},
]);


@NgModule({
  imports: [CommonModule,
            NgxSliderModule,
            FormsModule,
            routingS,
            PartialsModule],
  declarations: [BookDetailComponent,
                 BookStoreComponent,
                 CounterDirective,
                 CartDetailComponent,
                 CheckoutComponent]
})

export class BookStoreModule{}



