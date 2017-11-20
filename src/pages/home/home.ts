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
  public allProducts: any = []
  public femaleSelected: boolean
  public maleSelected: boolean

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
    let filterStateFromMainPage: Object = {
      maleSelected: this.maleSelected,
      femaleSelected: this.femaleSelected
    }

    let openFilterModal = this.modalCtrl.create (FilterModalPage, filterStateFromMainPage)
    
    openFilterModal.onDidDismiss ((filterState) => {
      this.femaleSelected = filterState.femaleSelected
      this.maleSelected = filterState.maleSelected

      this.productService.getProducts ()
        .subscribe ((allProducts) => {
          let products: any = allProducts
          
          if (filterState.maleSelected && filterState.femaleSelected) {
            this.allProducts = products
            return
          } else if (!filterState.maleSelected && !filterState.femaleSelected) {
            this.allProducts = []
            return
          } else if (!filterState.maleSelected && filterState.femaleSelected) {
            this.allProducts = products.filter ((product) => {
              return product.gender !== "male"
            })
          } else {
            this.allProducts = products.filter ((product) => {
              return product.gender !== "female"
            })
          }

        })
    })
    openFilterModal.present ()
  }
}
