import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';

const routes: Routes = [

  {
    path:'',
    component:AppComponent
  },
  {
    path:'recipes',
    component:DemoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
