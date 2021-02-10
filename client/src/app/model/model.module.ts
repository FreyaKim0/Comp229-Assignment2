import { AuthService } from './auth.service';
import { OrderRepository } from './order.repository';
import { RestDataSource } from './rest.datasource';
import { HttpClientModule } from '@angular/common/http';
import { StaticDataSource } from './static.datasource';
import { BookRepository } from './book.repository';
import { NgModule } from '@angular/core';
import { Cart } from './cart.model';
import { Order } from './order.model';
import { UserRepository} from './user.repository';

@NgModule({
  imports: [HttpClientModule],
  providers: [BookRepository,
              UserRepository,
              StaticDataSource,
              Cart,
              Order,
              OrderRepository,
              {provide: StaticDataSource,
               useClass: RestDataSource},
              RestDataSource,
              AuthService]
})
export class ModelModule{}
