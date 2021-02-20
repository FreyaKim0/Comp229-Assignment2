import { RestDataSource } from './model/rest.datasource';
import { AuthService } from './model/auth.service';
import { NgModule } from '@angular/core';
import { ModelModule } from './model/model.module';
import { PagesModule } from './pages/pages.module';
import { PartialsModule } from './partials/partials.module';

import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BookStoreModule } from './book-store/book-store.module';
import { JwtModule } from '@auth0/angular-jwt';
import { HTTP_INTERCEPTORS } from '@angular/common/http';



export function jwtTokenGetter(): string
{
  return localStorage.getItem('id_token');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BookStoreModule,
    PartialsModule,
    PagesModule,
    ModelModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: jwtTokenGetter
      }
    })
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RestDataSource,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule{}
