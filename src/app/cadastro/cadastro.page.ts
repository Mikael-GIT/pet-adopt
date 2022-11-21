/* eslint-disable @typescript-eslint/quotes */
import { CadastroService } from './cadastro.service';
/* eslint-disable max-len */
import { Cadastro } from './cadastro.model';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from './../services/local-storage.service';
import { LoginService } from './../login/login.service';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  cadastroDados: Cadastro = {
    login: '',
    senha: '',
    email: '',
    telefone: '',
    nome: ''

  };

  constructor(private navCtrl: NavController, private cadastroService: CadastroService, private serviceLS: LocalStorageService, private router: Router,
    private route: ActivatedRoute) { }


  ngOnInit() {
  }

  cadastrar(){
    this.cadastroService.create(this.cadastroDados).subscribe(
      (result) => {
        if (result.id != null) {
          console.log("Usuário cadastrado com sucesso!");
          this.router.navigate(['tabs/tab1']);
        }
      },
      (error) => {
        console.log(error.error.message);
      }
    );
  }
}

