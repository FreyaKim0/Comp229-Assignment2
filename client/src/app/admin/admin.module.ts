import { FormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { OrderTableComponent } from './order-table/order-table.component';
import { BookEditorComponent } from './book-editor/book-editor.component';
import { BookTableComponent } from './book-table/book-table.component';


const routing = RouterModule.forChild([
  {path: 'auth', component: AuthComponent},
  {path: 'main', component: AdminComponent, canActivate: [AuthGuard] ,
   children: [
    { path: 'books/:mode/:id', component: BookEditorComponent, data: {title: 'Edit Book'}, canActivate: [AuthGuard]},
    { path: 'books/:mode', component: BookEditorComponent, data: {title: 'Add Book'}, canActivate: [AuthGuard]},
    { path: 'books', component: BookTableComponent, data: {title: 'Book Table'}, canActivate: [AuthGuard]},
    { path: 'orders', component: OrderTableComponent, data: {title: 'Order Table'}, canActivate: [AuthGuard]},
    {path: '**', redirectTo: 'book-list'}]
  },
  {path: '**', redirectTo: 'auth'},
]);

@NgModule({
  imports: [CommonModule, FormsModule, routing],
  providers: [AuthGuard],
  declarations: [AuthComponent, AdminComponent, OrderTableComponent, BookEditorComponent, BookTableComponent]
})
export class AdminModule{}
