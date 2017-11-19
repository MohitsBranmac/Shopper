import { ProductDetailPage } from './../product-detail/product-detail';
import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ProductProvider } from '../../providers/product/product';
import { FilterModalPage } from '../filter-modal/filter-modal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  public allProducts: any = [];

  constructor(
    public navCtrl: NavController,
    private productService: ProductProvider,
    private modalCtrl: ModalController
  ) {

  }

  ionViewDidLoad () {
    this.productService.getProducts ()
      .subscribe ((response) => {
        this.allProducts = response;
      })
  }

  goToProductDetailpage (product) {
    this.navCtrl.push (ProductDetailPage, {
      productDetails: product
    })
  }

  openFilterModal () {
    let openFilterModal = this.modalCtrl.create (FilterModalPage)
    openFilterModal.present ()
  }
}
