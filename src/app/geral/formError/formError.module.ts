import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormErrorComponent} from './formError.component';
import {TooltipModule} from 'primeng/tooltip';

@NgModule({
  imports: [
    CommonModule,
    TooltipModule,
  ],
  declarations: [
    FormErrorComponent
  ],
  exports: [
    FormErrorComponent
  ]
})
export class FormErrorModule {

}
