import { HttpClientModule } from '@angular/common/http';
import { OrderEachComponent } from './order-each/order-each.component';
import { PartialsModule } from './../partials/partials.module';
import { CheckoutComponent } from './../book-store/checkout/checkout.component';
import { UserRepository } from 'src/app/model/user.repository';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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

// Toggle
//import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { BrowserModule } from '@angular/platform-browser';


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
            // Toggle
            //BrowserAnimationsModule,
            //BrowserModule,
            MatNativeDateModule,
            MatAutocompleteModule,
            MatBottomSheetModule,
            MatButtonModule,
            MatButtonToggleModule,
            MatCardModule,
            MatCheckboxModule,
            MatChipsModule,
            MatStepperModule,
            MatDatepickerModule,
            MatDialogModule,
            MatDividerModule,
            MatExpansionModule,
            MatGridListModule,
            MatIconModule,
            MatInputModule,
            MatListModule,
            MatMenuModule,
            MatNativeDateModule,
            MatPaginatorModule,
            MatProgressBarModule,
            MatProgressSpinnerModule,
            MatRadioModule,
            MatRippleModule,
            MatSelectModule,
            MatSidenavModule,
            MatSliderModule,
            MatSlideToggleModule,
            MatSnackBarModule,
            MatSortModule,
            MatTableModule,
            MatTabsModule,
            MatToolbarModule,
            MatTooltipModule,
            MatTreeModule
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


