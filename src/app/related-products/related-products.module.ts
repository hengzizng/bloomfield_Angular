import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelatedProductsFirstComponent } from './related-products-first/related-products-first.component';



@NgModule({
  declarations: [RelatedProductsFirstComponent],
  imports: [
    CommonModule
  ],
  exports: [
    RelatedProductsFirstComponent
  ]
})
export class RelatedProductsModule { }
