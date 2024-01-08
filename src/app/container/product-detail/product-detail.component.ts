import { Component, Input } from '@angular/core';
import { Product } from 'src/app/Modules/Product';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  //引用定義的產品類
  product: Product;
  //product-detail接受產品列表對象
  @Input() productListComp: ProductListComponent;

  //生命鉤子
  ngOnInit(){
    this.product = this.productListComp.selectedProduct;
  }
}
