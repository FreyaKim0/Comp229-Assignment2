import { HttpClientModule } from '@angular/common/http';
import { OrderEachComponent } from './order-each/order-each.component';
import { PartialsModule } from './../partials/partials.module';
import { CheckoutComponent } from './../book-store/checkout/checkout.component';
import { UserRepository } from 'src/app/model/user.repository';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { OrderTableComponent, modalComponent } from './order-table/order-table.component';
import { BookEditorComponent } from './book-editor/book-editor.component';
import { BookTableComponent } from './book-table/book-table.component';
import { RegisterComponent } from './register/register.component';
import { CallBackPipe } from './book-table/callback.pipe';
import { ManagePaymentComponent } from './manage-payment/manage-payment.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartDetailComponent } from '../book-store/cart-detail/cart-detail.component';

const routing = RouterModule.forChild([
  {path: 'register', component: RegisterComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'main', component: AdminComponent, canActivate: [AuthGuard] ,
   children: [
    { path: 'books/:mode/:id', component: BookEditorComponent, data: {title: 'Edit Book'}, canActivate: [AuthGuard]},
    { path: 'books/:mode', component: BookEditorComponent, data: {title: 'Add Book'}, canActivate: [AuthGuard]},
    { path: 'books', component: BookTableComponent, data: {title: 'Book Table'}, canActivate: [AuthGuard] },
    { path: 'checkout', component: CheckoutComponent, data: {title: 'Check Out Page'}, canActivate: [AuthGuard]},
    { path: 'manage-payment', component: ManagePaymentComponent, data: {title: 'Manage Payment'}, canActivate: [AuthGuard]},
    { path: 'mycart', component: CartDetailComponent, data: {title: 'Shopping Cart'}, canActivate: [AuthGuard]},
    { path: 'manage-order', component: OrderTableComponent, data: { title: 'Manage Order' }, canActivate: [AuthGuard] },
    { path: 'orders', component: OrderTableComponent, data: {title: 'Purchase History'}, canActivate: [AuthGuard]},
    { path: '**', redirectTo: 'book-list'}]
  },
  {path: '**', redirectTo: 'auth'},
]);

@NgModule({
  imports: [
            HttpClientModule,
            ReactiveFormsModule,
            NgbModule,
            CommonModule,
            FormsModule,
            routing,
            PartialsModule,

           ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [
              AuthGuard,
              UserRepository
             ],
  declarations: [

                 AuthComponent,
                 AdminComponent,
                 OrderTableComponent,
                 OrderEachComponent,
                 modalComponent,
                 BookEditorComponent,
                 BookTableComponent,
                 RegisterComponent,
                 CallBackPipe,
                 ManagePaymentComponent,
  ],
  exports: [OrderTableComponent],
  bootstrap: [OrderTableComponent],
  entryComponents: [OrderTableComponent]
})
export class AdminModule{}


