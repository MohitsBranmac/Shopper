import { ProductProvider } from './../../providers/product/product';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  public bestSellerProducts: any[]

  constructor(
    public navCtrl: NavController,
    private productService: ProductProvider
  ) {  }

  ionViewDidLoad () {
    this.productService.getProducts ()
      .subscribe ((allProducts: any) => {
        this.bestSellerProducts = allProducts.filter ((product) => {
          product.bestSeller == true
        })
        console.log (this.bestSellerProducts)
      })
  }
}
