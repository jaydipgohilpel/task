import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DivImageDownloadComponent } from './div-image-download/div-image-download.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatrialUiPracticeModule} from './matrial-ui-practice/matrial-ui-practice.module';
import { HeadTailComponent } from './head-tail/head-tail.component'
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiLoginComponent } from './api-login/api-login.component';
import { ParamUseInGetComponent } from './param-use-in-get/param-use-in-get.component';

@NgModule({
  declarations: [
    AppComponent,
    DivImageDownloadComponent,
    HomeComponent,
    HeadTailComponent,
    ApiLoginComponent,
    ParamUseInGetComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatrialUiPracticeModule,
    MatSelectModule,
    MatFormFieldModule,
    BrowserAnimationsModule
  ],
  exports:[

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
