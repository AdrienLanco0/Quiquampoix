/******************************************************************************
 * @Author                : AdrienLanco0<adrienlanco0@gmail.com>              *
 * @CreatedDate           : 2023-11-18 20:04:58                               *
 * @LastEditors           : AdrienLanco0<adrienlanco0@gmail.com>              *
 * @LastEditDate          : 2023-11-18 22:09:22                               *
 *****************************************************************************/

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClassementPage } from './classement.page';

describe('ClassementPage', () => {
  let component: ClassementPage;
  let fixture: ComponentFixture<ClassementPage>;

  beforeEach(async () => {

    fixture = TestBed.createComponent(ClassementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
