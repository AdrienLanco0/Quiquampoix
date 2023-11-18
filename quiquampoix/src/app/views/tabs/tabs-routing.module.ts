/******************************************************************************
 * @Author                : AdrienLanco0<adrienlanco0@gmail.com>              *
 * @CreatedDate           : 2023-11-18 20:05:41                               *
 * @LastEditors           : AdrienLanco0<adrienlanco0@gmail.com>              *
 * @LastEditDate          : 2023-11-18 20:06:18                               *
 *****************************************************************************/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'pronos',
        loadChildren: () => import('../pronos/pronos.module').then(m => m.PronosPageModule)
      },
      {
        path: 'resultats',
        loadChildren: () => import('../resultats/resultats.module').then(m => m.ResultatsPageModule)
      },
      {
        path: 'classement',
        loadChildren: () => import('../classement/classement.module').then(m => m.ClassementPageModule)
      },
      // {
      //   path: 'profile',
      //   loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
      // },
      {
        path: '',
        redirectTo: '/tabs/pronos',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/pronos',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
