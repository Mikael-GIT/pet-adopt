import { PetInfoService } from './pet-info.service';
/* eslint-disable eqeqeq */
import { ToastController } from '@ionic/angular';
/* eslint-disable object-shorthand */
import { HomeService } from './../tab1/home.service';
import { LocalStorageService } from './../services/local-storage.service';
import { ActivatedRoute } from '@angular/router';
/* eslint-disable @typescript-eslint/quotes */
import { Validators, FormBuilder } from '@angular/forms';
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.page.html',
  styleUrls: ['./item-details.page.scss'],
})
export class ItemDetailsPage implements OnInit {
  selectedSize: number;
  selectedColor: number;
  activeVariation: string;

  public idAnimal: string;

  zipCodePresent = false;

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

  animal = {
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
    vermifugado: false,
    categoria_id: ''
};

animalRequest = {
  id: '',
  nome: '',
  sexo: '',
  idade: '',
  vacinado: 'false',
  porte: '',
  cor: '',
  descricao: '',
  imagem: '',
  raca: '',
  vermifugado: 'false',
  endereco: {
    cep: '',
    logradouro: '',
    cidade: '',
    bairro: '',
    complemento: '',
    numero: ''
  },
  categoria_id: ''
};


endereco = {
  cep: '',
  state: '',
  city: '',
  neighborhood: '',
  street: '',
  service: '',
  location: {
    type: '',
    coordinates: {
      longitude: '',
      latitude: ''
    }
  }
};



  constructor(
    private activatedRoute: ActivatedRoute,
    private petInfoService: PetInfoService,
    private localStorageService: LocalStorageService,
    private formBuilder: FormBuilder,
    private homeService: HomeService,
    private toastController: ToastController,
  ) {
    this.idAnimal = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
  }

  ngOnInit() {
    this.activeVariation = 'size';

    this.homeService.readCategorias().subscribe(categorias => {
      this.categorias = categorias;
      console.log(this.categorias);
    });

    this.petInfoService.read(this.idAnimal).subscribe(animal => {
      this.localStorageService.set("id_animal", animal.id);
      this.animal = animal;
    });
  }

  get id(){
    return this.registrationForm.get('id');
  }

  get nome() {
    return this.registrationForm.get('nome');
  }

  get sexo() {
    return this.registrationForm.get('sexo');
  }
  get idade() {
    return this.registrationForm.get('idade');
  }
  get vacinado() {
    return this.registrationForm.get('vacinado');
  }
  get porte() {
    return this.registrationForm.get('porte');
  }
  get vermifugado() {
    return this.registrationForm.get('vermifugado');
  }
  get cor() {
    return this.registrationForm.get('cor');
  }
  get descricao() {
    return this.registrationForm.get('descricao');
  }
  get imagem() {
    return this.registrationForm.get('imagem');
  }
  get raca() {
    return this.registrationForm.get('raca');
  }

  get categoria_id() {
    return this.registrationForm.get('categoria_id');
  }

  get cep() {
    return this.registrationForm.get('cep');
  }

  get rua() {
    return this.registrationForm.get('rua');
  }
  get numero() {
    return this.registrationForm.get('numero');
  }
  get bairro() {
    return this.registrationForm.get('bairro');
  }
  get cidade() {
    return this.registrationForm.get('cidade');
  }
  get complemento() {
    return this.registrationForm.get('complemento');
  }



  registrationForm = this.formBuilder.group ({
    id: ['', ],
    nome: ['',[Validators.required, Validators.maxLength(5)]],
    sexo: ['',[Validators.required, Validators.maxLength(5)]],
    idade: ['',[Validators.required, Validators.maxLength(5)]],
    vacinado: ['',[Validators.required, Validators.maxLength(5)]],
    vermifugado: ['',[Validators.required, Validators.maxLength(5)]],
    porte: ['',[Validators.required, Validators.maxLength(5)]],
    cor: ['',[Validators.required, Validators.maxLength(5)]],
    descricao: ['',[Validators.required, Validators.maxLength(5)]],
    imagem: ['',[Validators.required, Validators.maxLength(5)]],
    raca: ['',[Validators.required, Validators.maxLength(5)]],
    cep: ['',[Validators.required, Validators.maxLength(80)]],
    rua: ['',[Validators.required, Validators.maxLength(80)]],
    numero: ['',[Validators.required, Validators.maxLength(80)]],
    bairro: ['',[Validators.required, Validators.maxLength(80)]],
    cidade: ['',[Validators.required, Validators.maxLength(80)]],
    complemento: ['',[Validators.required, Validators.maxLength(80)]],
    categoria_id: ['',[Validators.required, Validators.maxLength(50)]],

  });


  public errorMessages = {
    nome: [
      {type: 'required', message: 'Digite seu nome'},
    ],
    sexo: [
      {type: 'required', message: 'Digite seu nome'},
    ],
    idade: [
      {type: 'required', message: 'Digite seu nome'},
    ],
    vacinado: [
      {type: 'required', message: 'Digite seu nome'},
    ],
    vermifugado: [
      {type: 'required', message: 'Digite seu nome'},
    ],
    porte: [
      {type: 'required', message: 'Digite seu nome'},
    ],
    cor: [
      {type: 'required', message: 'Digite seu nome'},
    ],
    descricao: [
      {type: 'required', message: 'Digite seu nome'},
    ],
    imagem: [
      {type: 'required', message: 'Digite seu nome'},
    ],
    raca: [
      {type: 'required', message: 'Digite seu nome'},
    ],
    cep: [
      {type: 'required', message: 'Digite seu cep'},
      {type: 'maxlength', message: 'Senha não pode ser maior que 80 digitos'}
    ],
    rua: [
      {type: 'required', message: 'Digite sua rua'},
      {type: 'maxlength', message: 'Senha não pode ser maior que 80 digitos'}
    ],
    numero: [
      {type: 'required', message: 'Digite o numero'},
      {type: 'maxlength', message: 'Senha não pode ser maior que 80 digitos'}
    ],
    bairro: [
      {type: 'required', message: 'Digite seu bairro'},
      {type: 'maxlength', message: 'Senha não pode ser maior que 80 digitos'}
    ],
    cidade: [
      {type: 'required', message: 'Digite a cidade'},
      {type: 'maxlength', message: 'Senha não pode ser maior que 80 digitos'}
    ],
    complemento: [
      {type: 'required', message: 'Digite o complemento'},
      {type: 'maxlength', message: 'Senha não pode ser maior que 80 digitos'}
    ],
    categoria_id: [
      {type: 'required', message: 'Digite a categoria'},
    ],
  };



  update(){
    this.animalRequest.id = this.idAnimal;
    this.animalRequest.categoria_id = this.registrationForm.get('categoria_id').value;
    this.animalRequest.nome = this.registrationForm.get('nome').value;
    this.animalRequest.cor = this.registrationForm.get("cor").value;
    this.animalRequest.idade = this.registrationForm.get("idade").value;
    this.animalRequest.imagem = this.registrationForm.get("imagem").value;
    this.animalRequest.porte = this.registrationForm.get("porte").value;
    this.animalRequest.raca = this.registrationForm.get("raca").value;
    this.animalRequest.sexo = this.registrationForm.get("sexo").value;
    this.animalRequest.descricao = this.registrationForm.get("descricao").value;
    this.animalRequest.vacinado = this.registrationForm.get("vacinado").value;
    this.animalRequest.vermifugado = this.registrationForm.get("vermifugado").value;
    this.animalRequest.endereco.cep = this.registrationForm.get('cep').value;
    this.animalRequest.endereco.cidade = this.registrationForm.get("cidade").value;
    this.animalRequest.endereco.logradouro = this.registrationForm.get("rua").value;
    this.animalRequest.endereco.bairro = this.registrationForm.get("bairro").value;
    this.animalRequest.endereco.numero = this.registrationForm.get("numero").value;
    this.animalRequest.endereco.complemento = this.registrationForm.get("complemento").value;
    console.log(this.animalRequest);
    this.petInfoService.atualizar(this.animalRequest).subscribe(animal => console.log(animal));
  }

  cadastrar(){
    this.animalRequest.categoria_id = this.registrationForm.get('categoria_id').value;
    this.animalRequest.nome = this.registrationForm.get('nome').value;
    this.animalRequest.cor = this.registrationForm.get("cor").value;
    this.animalRequest.idade = this.registrationForm.get("idade").value;
    this.animalRequest.imagem = this.registrationForm.get("imagem").value;
    this.animalRequest.porte = this.registrationForm.get("porte").value;
    this.animalRequest.descricao = this.registrationForm.get("descricao").value;
    this.animalRequest.raca = this.registrationForm.get("raca").value;
    this.animalRequest.sexo = this.registrationForm.get("sexo").value;
    this.animalRequest.vacinado = this.registrationForm.get("vacinado").value;
    this.animalRequest.vermifugado = this.registrationForm.get("vermifugado").value;
    this.animalRequest.endereco.cep = this.registrationForm.get('cep').value;
    this.animalRequest.endereco.cidade = this.registrationForm.get("cidade").value;
    this.animalRequest.endereco.logradouro = this.registrationForm.get("rua").value;
    this.animalRequest.endereco.bairro = this.registrationForm.get("bairro").value;
    this.animalRequest.endereco.numero = this.registrationForm.get("numero").value;
    this.animalRequest.endereco.complemento = this.registrationForm.get("complemento").value;
    console.log(this.animalRequest);
    this.petInfoService.cadastrar(this.animalRequest).subscribe(animal => console.log(animal));
  }


  async presentToast(position: 'top' | 'middle' | 'bottom', msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1500,
      position: position,
      cssClass: 'toast-custom-class',
    });

    await toast.present();
  }

  findCep(cep: string){
    cep.replace("-", "");
    if(cep.length == 8){
      this.petInfoService.findCep(cep).subscribe((result) => {
        if (result.neighborhood != null) {
          this.zipCodePresent = true;
          this.registrationForm.get('rua').setValue(result.street);
          this.registrationForm.get('bairro').setValue(result.neighborhood);
          this.registrationForm.get('cidade').setValue(result.city);
        }
      },
      (error) => {
        this.presentToast('middle', "CEP Inválido");
      });

      console.log(this.endereco);
    }
  }

}
