import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CalculationPage } from '../../pages/calculation/calculation';
/**
 * Generated class for the ShopDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-shop-detail',
  templateUrl: 'shop-detail.html'
})
export class ShopDetailPage {
	info_sync: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.info_sync = 'info';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShopDetailPage');
  }

  changeTab(val){
  	console.log(val);
  	this.info_sync = val;
  }

  useTool(){
  	this.navCtrl.push(CalculationPage);
  }

}
