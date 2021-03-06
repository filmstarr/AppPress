import { Component, ViewChild } from '@angular/core';
import { NavController, Spinner } from 'ionic-angular';
import { Http } from '@angular/http';
import { DataProvider } from '../../services/data-provider.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-info',
  templateUrl: 'info.html'
})
export class InfoPage {
  @ViewChild('loadingSpinner') loadingSpinner: Spinner;

  url: string = 'wp-json/wp/v2/pages/25';
  infoItem: any;

  constructor(public navCtrl: NavController, private http: Http, private nav: NavController, private dataProvider: DataProvider) {
  }
  
  ionViewDidEnter() {
    this.dataProvider.getData(this.url, this.loadingSpinner)
      .subscribe(
        data => {
          this.infoItem = data;
        },
        error => console.log(error)
      );
  }
}