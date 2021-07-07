import { BasePageComponent } from '../../partials/base-page/base-page.component';
import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent extends BasePageComponent implements OnInit, OnDestroy {

  constructor(route: ActivatedRoute, @Inject(DOCUMENT) private _document) {
    super(route);
   }
   ngOnInit(): void {
    this._document.body.classList.remove('bodybg-color');
    this._document.body.classList.add('homebg-color');
  }
  ngOnDestroy(): void {
    this._document.body.classList.remove('homebd-color');
  }
}