import { Router, ActivatedRoute } from '@angular/router';
/* eslint-disable @typescript-eslint/no-unused-expressions */
import { NavController, NavParams } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet-info',
  templateUrl: './pet-info.page.html',
  styleUrls: ['./pet-info.page.scss'],
})
export class PetInfoPage implements OnInit {
  public id: any;
  constructor(private activatedRoute: ActivatedRoute, private navCtrl: NavController) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
   }

  ngOnInit() {
  }

  showAdoptionScreen(){
    this.navCtrl.navigateForward('/adoption');
  }

  showDonationScreen(){
    this.navCtrl.navigateForward('/donation');
  }

}
