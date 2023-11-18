/******************************************************************************
 * @Author                : AdrienLanco0<adrienlanco0@gmail.com>              *
 * @CreatedDate           : 2023-11-18 20:05:04                               *
 * @LastEditors           : AdrienLanco0<adrienlanco0@gmail.com>              *
 * @LastEditDate          : 2023-11-18 20:05:04                               *
 *****************************************************************************/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassementPage } from './classement.page';

const routes: Routes = [
  {
    path: '',
    component: ClassementPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassementPageRoutingModule {}
