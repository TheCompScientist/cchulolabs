import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { RouterLinkHotfixPipe } from './pipes/router-link-hotfix.pipe';
import { MarkdownModule } from 'ngx-markdown';


@NgModule({
  declarations: [
    RouterLinkHotfixPipe
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    MarkdownModule.forRoot()
  ],
  exports: [
    AngularMaterialModule,
    RouterLinkHotfixPipe,
    MarkdownModule
  ]
})
export class CoreModule { }
