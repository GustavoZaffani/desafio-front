import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ItemListComponent} from './item/item.list.component';
import {ItemFormComponent} from './item/item.form.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'item', component: ItemListComponent},
  {path: 'item/form', component: ItemFormComponent},
  {path: 'item/form/:id', component: ItemFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
