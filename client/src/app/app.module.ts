

import { NgModule } from '@angular/core';
import { ModelModule } from './model/model.module';
import { PagesModule } from './pages/pages.module';
import { PartialsModule } from './partials/partials.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BookStoreModule } from './book-store/book-store.module';
import { JwtModule, JwtHelperService, JwtInterceptor } from '@auth0/angular-jwt';

export function jwtTokenGetter(): string {
  return localStorage.getItem('id_token');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{}
