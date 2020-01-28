import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ViewModule } from './view/view.module';
import { RelatedProductsModule } from './related-products/related-products.module';
import { ConvertToSpacePipe } from './shared/convertToSpace.component'
import { StarComponent } from './shared/star.component';
import { ReverseStrPipe } from './shared/reverseStr.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { ProductDetailGuard } from './products/product-detail.guard';
import { ProductModule } from './products/product.module';

@NgModule({
  declarations: [
    AppComponent,
    ReverseStrPipe,
    WelcomeComponent,
    // ProductListComponent,
    // ConvertToSpacePipe,
    // StarComponent,
    // ProductDetailComponent // product.module.ts 에 있으므로 삭제가능
  ],
  imports: [
    BrowserModule,
    ViewModule,
    RelatedProductsModule,
    // FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      // product.modules.ts로 이동
      // { path: 'products', component: ProductListComponent },
      // { path: 'products/:id', canActivate: [ProductDetailGuard], component: ProductDetailComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ],
    { useHash: true }),
    ProductModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
