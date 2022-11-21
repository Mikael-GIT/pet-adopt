import { CategoriaService } from './categoria.service';
import { HomeService } from './../tab1/home.service';
import { ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.page.html',
  styleUrls: ['./favorite.page.scss'],
})
export class FavoritePage implements OnInit {

  public idCategoria: any;

  imagemCategoria = '';


  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private homeService: HomeService,
    private categoriaService: CategoriaService
  ) { }


  get id() {
    return this.registrationForm.get('id');
  }

  get nome() {
    return this.registrationForm.get('nome');
  }

  get imagem() {
    return this.registrationForm.get('imagem');
  }

  registrationForm = this.formBuilder.group ({
    id: [''],
    nome: ['',[Validators.required, Validators.maxLength(5)]],
    imagem: ['',[Validators.required, Validators.maxLength(5)]],
  });

  public errorMessages = {
    nome: [
      {type: 'required', message: 'Digite seu nome'},
    ],
    imagem: [
      {type: 'required', message: 'Digite seu nome'},
    ],
  };

  ngOnInit() {
    this.idCategoria = this.activatedRoute.snapshot.paramMap.get('id');
    this.homeService.readCategoria(this.idCategoria).subscribe(categoria => {
      this.imagemCategoria = categoria.imagem;
      this.registrationForm.get('nome').setValue(categoria.nome);
      this.registrationForm.get('imagem').setValue(categoria.imagem);
    });

  }

  update(){
    this.registrationForm.get('id').setValue(this.idCategoria);
    this.categoriaService.atualizar(this.registrationForm.value).subscribe(categoria => console.log(categoria));
  }

  cadastrar(){
    console.log(this.registrationForm.value);
    this.categoriaService.cadastrar(this.registrationForm.value).subscribe(categoria => console.log(categoria));
  }

}
