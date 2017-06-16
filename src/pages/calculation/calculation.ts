import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CalculationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-calculation',
  templateUrl: 'calculation.html',
})
export class CalculationPage {
	amount: any;
	result: any;

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.result = 0;
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad CalculationPage');
	}

	assetsTapped(event) {
		console.log('assets tapped');
		this.result = this.assetsCalc();
		return ;
	}

	assetsCalc(){
		let res = 0;
		let amt = this.amount / 10000;
		if(amt < 1){
			res = 0;
		}else if(amt > 1 && amt <= 10){
			res = this.amount * 0.025 - 200;
		}else if(amt > 10 && amt <= 20){
			res = this.amount * 0.02 + 300;
		}else if(amt > 20 && amt <= 50){
			res = this.amount * 0.015 + 1300;
		}else if(amt > 50 && amt <= 100){
			res = this.amount * 0.01 + 3800;
		}else if(amt > 100 && amt <= 200){
			res = this.amount * 0.009 + 4800;
		}else if(amt > 200 && amt <= 500){
			res = this.amount * 0.008 + 6800;
		}else if(amt > 500 && amt <= 1000){
			res = this.amount * 0.007 + 11800;
		}else if(amt > 1000 && amt <= 2000){
			res = this.amount * 0.006 + 21800;
		}else if(amt > 2000){
			res = this.amount * 0.005 + 4100;
		}
		return res;
	}

	divorceTapped(event) {
		console.log('divorce tapped');
		let res = 300;
		let amt = this.amount / 10000;
		if(amt > 20){
			res = (this.amount - 200000) * 0.005 + 300;
		}
		this.result = res;
		return ;
	}

	tortTapped(event) {
		console.log('tort tapped');
		let res = 500;
		let amt = this.amount / 10000;
		if(amt > 5 && amt <= 10){
			res = this.amount * 0.01;
		}else if(amt > 10){
			res = this.amount * 0.005 + 500;
		}
		this.result = res;
		return ;
	}

	execTapped(event) {
		console.log('exec tapped');
		let res = 50;
		let amt = this.amount / 10000;
		if(amt > 1 && amt <= 50){
			res = this.amount * 0.015 - 100;
		}else if(amt > 50 && amt <= 500){
			res = this.amount * 0.01 + 2400;
		}else if(amt > 500 && amt <= 1000){
			res = this.amount * 0.005 + 27400;
		}else if(amt > 1000){
			res = this.amount * 0.001 + 67400;
		}
		this.result = res;
		return ;
	}

	keepTapped(event) {
		console.log('keep tapped');
		let res = 30;
		let amt = this.amount / 10000;
		if(amt > 0.1 && amt <= 10){
			res = this.amount * 0.01 + 20;
		}else if(amt > 10){
			res = this.amount * 0.005 + 520;
		}
		this.result = res;
		return ;
	}

}
