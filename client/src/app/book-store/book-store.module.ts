import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

import { CounterDirective } from './counter.directive';
import { PartialsModule } from './../partials/partials.module';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { BookStoreComponent } from '../book-store/book-store.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routingS = RouterModule.forChild([
  {path: 'all', component: BookStoreComponent},
  {path: '**', redirectTo: 'all'},
]);


@NgModule({
  imports: [CommonModule,
            NgxSliderModule,
            FormsModule,
            routingS,
            PartialsModule],
  declarations: [BookStoreComponent,
                 CounterDirective,
                 CartDetailComponent,
                 CheckoutComponent]
})

export class BookStoreModule{}



