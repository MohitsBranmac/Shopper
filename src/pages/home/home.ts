import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductProvider } from '../../providers/product/product';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  public allProducts: any = [];

  constructor(
    public navCtrl: NavController,
    private productService: ProductProvider
  ) {

  }

  ionViewDidLoad () {
    this.productService.getProducts ()
      .subscribe ((response) => {
        this.allProducts = response;
      })
  }

}
