import { ProjectItemsComponent } from './project-items/project-items.component';
import { ProjectFilterComponent } from './project-filter/project-filter.component';
import { BasePageComponent } from '../../partials/base-page/base-page.component';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  encapsulation: ViewEncapsulation.None,
})



export class ProjectsComponent extends BasePageComponent implements OnInit, OnDestroy {

  constructor(route: ActivatedRoute, @Inject(DOCUMENT) private _document)
  {
    super(route);
  }
  ngOnInit(): void {
    this._document.body.classList.remove('homebd-color');
    this._document.body.classList.add('bodybg-color');
  }
  ngOnDestroy(): void
  {
    this._document.body.classList.remove('bodybd-color');
  }

}
