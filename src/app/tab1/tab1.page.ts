import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  animals = [
    {
      id: '1',
      nome: 'Spyke',
      sexo: 'Macho',
      descricao: 'lorem imspum',
      imagem: 'https://www.petz.com.br/blog/wp-content/uploads/2020/01/como-saber-se-o-gato-e-femea-felina-1280x720.jpg'
    },
    {
      id: '2',
      nome: 'Spyke',
      sexo: 'Macho',
      descricao: 'lorem imspum',
      imagem: 'https://www.petz.com.br/blog/wp-content/uploads/2020/01/como-saber-se-o-gato-e-femea-felina-1280x720.jpg'
    },
    {
      id: '3',
      nome: 'Spyke',
      sexo: 'Macho',
      descricao: 'lorem imspum',
      imagem: 'https://www.petz.com.br/blog/wp-content/uploads/2020/01/como-saber-se-o-gato-e-femea-felina-1280x720.jpg'
    }
  ];

  slideOpts = {
    initialSlide: 1,
    speed: 400,
    pagination: false,
    slidesPerView: 3.5,
    spaceBetween: 0
  };

  constructor(private router: Router) {}

  showPetInfo(index: number){
    this.router.navigateByUrl('/pet-info/' + this.animals[index].id);
  }
}
