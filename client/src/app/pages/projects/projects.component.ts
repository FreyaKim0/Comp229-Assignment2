import { BasePageComponent } from '../../partials/base-page/base-page.component';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent extends BasePageComponent implements OnInit {

  constructor(route: ActivatedRoute)
  {
    super(route);
  }

  ngOnInit(): void {
  }

}
