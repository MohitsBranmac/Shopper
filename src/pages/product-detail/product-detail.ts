import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-product-detail',
  templateUrl: 'product-detail.html',
})
export class ProductDetailPage {
  public productDetails: object;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.productDetails = this.navParams.get ("productDetails")
    console.log (this.productDetails)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductDetailPage');
  }

}
