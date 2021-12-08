import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListProducts2Component } from './list-products2/list-products2.component';
import { Product2Component } from './product2/product2.component';

@NgModule({
  declarations: [
    AppComponent,
    ListProducts2Component,
    Product2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
