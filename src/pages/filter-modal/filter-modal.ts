import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-filter-modal',
  templateUrl: 'filter-modal.html',
})
export class FilterModalPage {
  public femaleSelected: boolean
  public maleSelected: boolean 

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private viewCtrl: ViewController
  ) {
    this.femaleSelected = this.navParams.get ("femaleSelected")
    this.maleSelected = this.navParams.get ("maleSelected")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilterModalPage');
  }

  filterModal () {
    let filterState = {
      femaleSelected: this.femaleSelected,
      maleSelected: this.maleSelected
    }
    this.viewCtrl.dismiss (filterState, );
    // this.navCtrl.pop ();
  }

}
