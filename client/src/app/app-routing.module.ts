import { StoreFirstGuard } from './guard/storeFirst.guard';
import { CheckoutComponent } from './book-store/checkout/checkout.component';
import { CartDetailComponent } from './book-store/cart-detail/cart-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ServiceComponent } from './pages/service/service.component';
import { BookStoreComponent } from './book-store/book-store.component';
import { Store } from 'express-session';


const routes: Routes = [
  {path: 'home', component: HomeComponent, data: {title: 'HOME'}},
  {path: 'login', data: {title: 'Login'}, redirectTo: '/admin/auth', pathMatch: 'full'},

  {path: 'about', component: AboutComponent, data: {title: 'ABOUT'}},
  {path: 'services', component: ServiceComponent, data: {title: 'SERVICE'}},
  {path: 'projects', component: ProjectsComponent, data: {title: 'PROJECT'}},
  {path: 'contact', component: ContactComponent, data: {title: 'CONTACT'}},

  /*{path: 'book-list', component: BookStoreComponent, data: { title: 'Book Store'}, canActivate: [StoreFirstGuard]},*/
  {path: 'book-list', loadChildren: () => import('./book-store/book-store.module').then(m => m.BookStoreModule)},
  {path: 'cart', component: CartDetailComponent, data: { title: 'Shopping Cart'}, canActivate: [StoreFirstGuard]},
  {path: 'checkout', component: CheckoutComponent, data: { title: 'Checkout'}, canActivate: [StoreFirstGuard]},
  {path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [StoreFirstGuard]
})
export class AppRoutingModule { }
