/******************************************************************************
 * @Author                : AdrienLanco0<adrienlanco0@gmail.com>              *
 * @CreatedDate           : 2023-11-18 20:03:06                               *
 * @LastEditors           : AdrienLanco0<adrienlanco0@gmail.com>              *
 * @LastEditDate          : 2023-11-18 20:03:09                               *
 *****************************************************************************/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultatsPage } from './resultats.page';

const routes: Routes = [
  {
    path: '',
    component: ResultatsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultatsPageRoutingModule {}
