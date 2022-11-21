import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./slides/slides.module').then( m => m.SlidesPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'pet-info/:id',
    loadChildren: () => import('./pet-info/pet-info.module').then( m => m.PetInfoPageModule)
  },
  {
    path: 'donation',
    loadChildren: () => import('./donation/donation.module').then( m => m.DonationPageModule)
  },
  {
    path: 'adoption',
    loadChildren: () => import('./adoption/adoption.module').then( m => m.AdoptionPageModule)
  },
  {
    path: 'favorite/:id',
    loadChildren: () => import('./favorite/favorite.module').then( m => m.FavoritePageModule)
  },
  {
    path: 'favorite',
    loadChildren: () => import('./favorite/favorite.module').then( m => m.FavoritePageModule)
  },
  {
    path: 'item-details/:id',
    loadChildren: () => import('./item-details/item-details.module').then( m => m.ItemDetailsPageModule)
  },
  {
    path: 'item-details',
    loadChildren: () => import('./item-details/item-details.module').then( m => m.ItemDetailsPageModule)
  }







];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
