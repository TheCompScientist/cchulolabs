import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ResumeComponent } from './components/resume/resume.component';
import { CoreModule } from '../core/core.module';
import { PdfViewerModule } from 'ng2-pdf-viewer';

(<any>window).pdfWorkerSrc = '/pdf.worker.min.js';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    BlogComponent,
    ProjectsComponent,
    ResumeComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    PdfViewerModule
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    BlogComponent,
    ProjectsComponent,
    ResumeComponent
  ]
})
export class PagesModule { }
