import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ViewModule } from './view/view.module';
import { RelatedProductsModule } from './related-products/related-products.module';
import { ConvertToSpacePipe } from './shared/convertToSpace.component'
import { StarComponent } from './shared/star.component';
import { ReverseStrPipe } from './shared/reverseStr.component'
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacePipe,
    StarComponent,
    ReverseStrPipe
  ],
  imports: [
    BrowserModule,
    ViewModule,
    RelatedProductsModule,
    FormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
