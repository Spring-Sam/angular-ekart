import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  listOfString: string[]  = ['Mark','Joe','Steve'];


  searchText: string = '';
  setSearchText(value: string){
    this.searchText=value;

  }
  
  //使用ViewChild，傳遞信息給product-detail
  @ViewChild(ProductListComponent) productListComponent: ProductListComponent;


    // name="Michle John";
    // addToCart:number = 0;
    // product = {
    //   name: 'iPhone 12',
    //   price: 789,
    //   color: 'Black',
    //   discount: 8.5,
    //   inStock: 5,
    //   pImage: "/assets/images/iPhone.png"


    // }

    // getDiscountPrice(){
    //     return this.product.price - (this.product.price * this.product.discount /100)
    // }

    // onNameChange(event: any){
    //   this.name = event.target.value;
    //   console.log(event)
    // }

    // decrementCartValue(){
    //   if(this.addToCart > 0){
    //     this.addToCart--;
    //   }
      
    // }

    // incrementCartValue(){
    //   if(this.addToCart < this.product.inStock){
    //     this.addToCart++;
    //   }
      
    // }

    

}
