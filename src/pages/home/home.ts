import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ProductProvider } from '../../providers/product/product';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private http: HttpClient,
    private productService: ProductProvider
  ) {

  }

  ionViewDidLoad () {
    this.productService.getProducts()
    .subscribe(respone => console.log(respone));
  }

}
