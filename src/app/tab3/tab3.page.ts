/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable @typescript-eslint/naming-convention */
import { HomeService } from './../tab1/home.service';
import { ActivatedRoute, Router } from '@angular/router';
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/quotes */
import { Categoria } from './../tab1/categoria.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public categories = [];
  public featuredProducts = [];
  public bestSellProducts = [];


  dataDisatnce: any;
  id: string = "0";

  categoria: Categoria;

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
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    this.animais = [];

    this.homeService.readCategorias().subscribe(categorias => {
      this.categorias = categorias;
      console.log(this.categorias);
    });


    this.homeService.readCategoria("1").subscribe(categoria => {
      categoria.animais.forEach(animal => this.animais.push(animal));
      console.log(this.animais);
    });
;

  }

  showPetInfo(id: string){
    this.router.navigate([`item-details/${id}`]);
  }

  changeCategory(categoria: Categoria){
    this.animais = [];
    this.homeService.readCategoria(categoria.id).subscribe(categoria => {
      categoria.animais.forEach(animal => this.animais.push(animal));
    });;
  }

  avancar(){
    console.log("chegou aqui");
    this.router.navigate(['/item-details']);
  }
}
