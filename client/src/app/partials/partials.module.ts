import { RouterModule } from '@angular/router';
import { CartSummaryComponent } from './../book-store/cart-summary/cart-summary.component';
import { BookStoreLoginComponent } from './../book-store/book-store-login/book-store-login.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BasePageComponent } from './base-page/base-page.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BookStoreHeaderComponent } from './book-store-header/book-store-header.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
             CommonModule,
             FormsModule,
             RouterModule
           ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [
                   BookStoreLoginComponent,
                   CartSummaryComponent,
                   BasePageComponent,
                   FooterComponent,
                   HeaderComponent,
                   BookStoreHeaderComponent
                ],
  exports: [
             BookStoreHeaderComponent,
             BasePageComponent,
             FooterComponent,
             HeaderComponent
            ]
})

export class PartialsModule {}