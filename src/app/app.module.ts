import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Ng2SearchPipeModule}from 'ng2-search-filter';
 import {Ng2OrderModule} from 'ng2-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import {AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { TransformerComponent } from './transformer/transformer.component';
 
@NgModule({
  declarations: [
    AppComponent,
    TransformerComponent
  ],
  imports: [
    BrowserModule,
    AngularMultiSelectModule,
    FormsModule,
    Ng2OrderModule,
    Ng2SearchPipeModule,
   NgxPaginationModule,
   HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }