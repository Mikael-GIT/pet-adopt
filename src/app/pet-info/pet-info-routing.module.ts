import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PetInfoPage } from './pet-info.page';

const routes: Routes = [
  {
    path: '',
    component: PetInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetInfoPageRoutingModule {}
