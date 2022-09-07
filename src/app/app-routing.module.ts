import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ApiLoginComponent} from './api-login/api-login.component'
import {HeadTailComponent} from './head-tail/head-tail.component'
import {HomeComponent} from './home/home.component'
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:ApiLoginComponent},
  {path:'head-tail',component:HeadTailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
