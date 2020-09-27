import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToolbarComponent} from './toolbar.component';
import {ToolbarModule} from 'primeng/toolbar';

@NgModule({
  imports: [
    CommonModule,
    ToolbarModule
  ],
  declarations: [
    ToolbarComponent
  ],
  exports: [
    ToolbarComponent
  ]
})
export class ToolbarrModule{}
