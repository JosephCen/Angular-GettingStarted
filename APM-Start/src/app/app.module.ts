import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ProductModule } from './products/product.module'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
