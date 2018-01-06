import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {CarServiceProvider} from "../../providers/car-service/car-service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  message: string;

  constructor(public navCtrl: NavController, private carService: CarServiceProvider) {

  }

  sendToCar(action) {
    let response = this.carService.sendToCar(action);
    console.log(response);
  }
}
