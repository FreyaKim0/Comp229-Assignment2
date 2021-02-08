import { PartialsModule } from './../partials/partials.module';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ServiceComponent } from './service/service.component';
import { ProjectFilterComponent } from './projects/project-filter/project-filter.component';
import { ProjectItemsComponent } from './projects/project-items/project-items.component';

@NgModule({
  imports: [BrowserModule, FormsModule, PartialsModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [
    AboutComponent,
    ContactComponent,
    HomeComponent,
    ProjectsComponent,
    ServiceComponent,
    ProjectFilterComponent,
    ProjectItemsComponent],
  exports: [
    AboutComponent,
    ContactComponent,
    HomeComponent,
    ProjectsComponent,
    ServiceComponent,
  ]
})

export class PagesModule {}
