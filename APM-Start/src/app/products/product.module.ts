import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { SharedModule } from '../shared/shared.module'

import { ProductListComponent } from './product-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SharedModule
  ],
  declarations: [
    ProductListComponent
  ],
  exports: [
    ProductListComponent
  ]
})
export class ProductModule { }
