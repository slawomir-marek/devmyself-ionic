import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { HomePage } from './shell';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomePage,
  },
  {
    path: '',
    children: [
      {
        path: 'search',
        loadChildren: () => import('@devmyself/inventory/feature-search').then((m) => m.InventoryFeatureSearchModule),
      },
      {
        path: 'product/:id',
        loadChildren: () => import('@devmyself/inventory/feature-product').then((m) => m.InventoryFeatureProductModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
