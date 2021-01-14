import { ActivatedRoute } from '@angular/router';
import { BasePageComponent } from '../../partials/base-page/base-page.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent extends BasePageComponent implements OnInit {

  constructor(route: ActivatedRoute) {
    super(route);
   }

  ngOnInit(): void {
  }

}

