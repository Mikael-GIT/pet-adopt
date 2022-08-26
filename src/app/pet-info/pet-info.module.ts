import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PetInfoPageRoutingModule } from './pet-info-routing.module';

import { PetInfoPage } from './pet-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PetInfoPageRoutingModule
  ],
  declarations: [PetInfoPage]
})
export class PetInfoPageModule {}
