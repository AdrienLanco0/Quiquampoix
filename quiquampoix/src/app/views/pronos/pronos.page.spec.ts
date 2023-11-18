/******************************************************************************
 * @Author                : AdrienLanco0<adrienlanco0@gmail.com>              *
 * @CreatedDate           : 2023-11-18 19:59:16                               *
 * @LastEditors           : AdrienLanco0<adrienlanco0@gmail.com>              *
 * @LastEditDate          : 2023-11-18 19:59:16                               *
 *****************************************************************************/

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PronosPage } from './pronos.page';

describe('Tab1Page', () => {
  let component: PronosPage;
  let fixture: ComponentFixture<PronosPage>;

  beforeEach(async () => {

    fixture = TestBed.createComponent(PronosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
