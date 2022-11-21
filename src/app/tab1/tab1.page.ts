import { NavController } from '@ionic/angular';
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/quotes */
import { Categoria } from './categoria.model';
/* eslint-disable @typescript-eslint/no-inferrable-types */
import { HomeService } from './home.service';
/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public categories = [];
  public featuredProducts = [];
  public bestSellProducts = [];


  dataDisatnce: any;
  id: string = "0";

  categoria: Categoria;

  adoptions: any;

  animais = [
    {
      id: '',
      nome: '',
      sexo: '',
      idade: '',
      vacinado: false,
      porte: '',
      cor: '',
      descricao: '',
      imagem: '',
      raca: '',
      status: '',
      categoria_id: ''
    }
  ];

  constructor(
    private router: Router,
    private homeService: HomeService,
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController
  ) { }

  ngOnInit() {

    this.animais = [];

    this.homeService.getAdoptions().subscribe(adoptions => {
      console.log(adoptions);
      this.adoptions = adoptions;
    });
  }


  showAdoption(adocao){
    this.navCtrl.navigateRoot(`/donation/${adocao.id}`, { animationDirection: 'forward' });
  }

}
