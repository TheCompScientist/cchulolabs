import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { RouterLinkHotfixPipe } from './pipes/router-link-hotfix.pipe';



@NgModule({
  declarations: [
    RouterLinkHotfixPipe
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
    AngularMaterialModule,
    RouterLinkHotfixPipe
  ]
})
export class CoreModule { }
