import { NgModule } from '@angular/core';
 import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllBlogComponent } from './all-blog/all-blog.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { DisplaySingleBlogComponent } from './display-single-blog/display-single-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    AllBlogComponent,
    AddBlogComponent,
    DisplaySingleBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
