/* eslint-disable @typescript-eslint/naming-convention */
import { Router, ActivatedRoute } from '@angular/router';
import { HomeService } from './../tab1/home.service';
/* eslint-disable @angular-eslint/use-lifecycle-interface */
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  categorias = [
    {
      id: '',
      nome: '',
      imagem: '',
      animais: [
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
          categoria_id: ''
        }
      ]
    }
  ];

  constructor(
    private router: Router,
    private homeService: HomeService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.homeService.readCategorias().subscribe(categorias => {
      this.categorias = categorias;
      console.log(this.categorias);
    });
  }


  showCategoryInfo(id: string){
    this.router.navigate([`favorite/${id}`]);
  }
}
