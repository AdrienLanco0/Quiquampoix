/******************************************************************************
 * @Author                : AdrienLanco0<adrienlanco0@gmail.com>              *
 * @CreatedDate           : 2023-11-18 19:57:55                               *
 * @LastEditors           : AdrienLanco0<adrienlanco0@gmail.com>              *
 * @LastEditDate          : 2023-11-18 19:57:55                               *
 *****************************************************************************/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PronosPage } from './pronos.page';

const routes: Routes = [
  {
    path: '',
    component: PronosPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PronosPageRoutingModule {}
