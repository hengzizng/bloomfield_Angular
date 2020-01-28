import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpacePipe } from '../shared/convertToSpace.component';
import { StarComponent } from '../shared/star.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacePipe

    // shared.module.ts로 이동
    // StarComponent
  ],
  imports: [
    // shared.module.ts로 이동
    // CommonModule, // for ngIf
    // FormsModule, // for binding

    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', canActivate: [ProductDetailGuard],
                              component: ProductDetailComponent }
    ]),
    SharedModule
  ]

  // shared.module.ts로 이동
  // exports: [
  //   FormsModule
  // ]
})
export class ProductModule { }
