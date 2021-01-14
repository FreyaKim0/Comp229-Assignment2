import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './../app-routing.module';
import { CartSummaryComponent } from './../book-store/cart-summary/cart-summary.component';


import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BasePageComponent } from './base-page/base-page.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [
   CartSummaryComponent,
   BasePageComponent,
   FooterComponent,
   HeaderComponent],
  exports: [
   BasePageComponent,
   FooterComponent,
   HeaderComponent
  ]
})

export class PartialsModule {}
