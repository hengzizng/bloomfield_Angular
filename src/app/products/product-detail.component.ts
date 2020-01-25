import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct;

  constructor(private route: ActivatedRoute, private router: Router) {
    console.log(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    let name = this.route.snapshot.paramMap.get('name');
    let code = this.route.snapshot.paramMap.get('code');
    let date = this.route.snapshot.paramMap.get('date');
    let description = this.route.snapshot.paramMap.get('description');
    let price = +this.route.snapshot.paramMap.get('price');
    let star = +this.route.snapshot.paramMap.get('star');
    let image = this.route.snapshot.paramMap.get('image');

    this.pageTitle  += `: ${id}`;
    this.product = {
      "productId": id,
      "productName": name,
      "productCode": code,
      "releaseDate": date,
      "description": description,
      "price": price,
      "starRating": star,
      "imageUrl": image
    };

  }

}
