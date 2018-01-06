import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


/*
  Generated class for the CarServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CarServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CarServiceProvider Provider');
  }
  public API = {
    url: "http://10.128.0.32:4000/api/car"
  };


  sendToCar(action: string) {
    console.log("sending action:" + action);
    let url = this.API.url + '/act?action=' + encodeURI(action);
    let response = this.http.post(url, '')
      .subscribe(data => {
        console.log(data);
      });
    return response;
  }

}
