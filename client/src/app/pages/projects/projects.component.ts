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

  // Button filter
  public web = true;
  public pc = true;
  public mobile = true;
  public uxui = true;
  public exercise = true;

  // Check Box filter
  public angular = false;
  public mongodb = false;
  public ejs = false;
  public bootstrap = false;
  public wireframe = false;
  public Csharp = false;
  public js = false;
  public java = false;
  public sql = false;
  public python = false;
  public android = false;

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
  changeFilter(s:string): void
  {
    // Clean all filters before assign
    this.web = false;
    this.mongodb = false;
    this.ejs = false;
    this.bootstrap = false;
    this.wireframe = false;
    this.Csharp = false;
    this.js = false;
    this.java = false;
    this.sql = false;
    this.python = false;
    this.angular = false;
    this.pc = false;
    this.mobile = false;
    this.uxui = false;
    this.exercise = false;
    this.android = false;

    switch (s) {
      case 'web':
        this.web = true;
        break;

      case 'pc':
        this.pc = true;
        break;

      case 'mobile':
        this.mobile = true;
        break;

      case 'uxui':
        this.uxui = true;
        break;

      case 'exercise':
        this.exercise = true;
        break;
    }
    window.scroll(0, 0);
  }
  checkboxFilter(checked: boolean, s: string) {

    if (!checked) {
      // Clean all filters
      this.web = true;
      this.pc = true;
      this.mobile = true;
      this.uxui = true;
      this.exercise = true;

      this.angular = false;
      this.mongodb = false;
      this.ejs = false;
      this.bootstrap = false;
      this.wireframe = false;
      this.Csharp = false;
      this.js = false;
      this.java = false;
      this.sql = false;
      this.python = false;
      this.android = false;

    }
    else {
          // Clean all filters before assign
          this.web = false;
          this.mongodb = false;
          this.ejs = false;
          this.bootstrap = false;
          this.wireframe = false;
          this.Csharp = false;
          this.js = false;
          this.java = false;
          this.sql = false;
          this.python = false;
          this.angular = false;
          this.pc = false;
          this.mobile = false;
          this.uxui = false;
          this.exercise = false;

          switch (s) {
            case 'angular':
              this.angular = true;
              break;

            case 'mongodb':
              this.mongodb = true;
              break;

            case 'ejs':
              this.ejs = true;
              break;

            case 'bootstrap':
              this.bootstrap = true;
              break;

            case 'wireframe':
              this.wireframe = true;
              break;

            case 'android':
              this.mobile = true;
              break;

            case 'csharp':
              this.Csharp = true;
              break;

            case 'js':
              this.js = true;
              break;

            case 'java':
              this.java = true;
              break;

            case 'sql':
              this.sql = true;
              break;

            case 'python':
              this.python = true;
              break;

            case 'android':
              this.android = true;
              break;
          }
        window.scroll(0, 0);
    }
  }
}
