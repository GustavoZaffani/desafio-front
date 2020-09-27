import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewRegisterComponent} from './newRegister.component';
import {TooltipModule} from 'primeng/tooltip';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';

@NgModule({
  imports: [
    CommonModule,
    TooltipModule,
    ButtonModule,
    RippleModule,
  ],
  declarations: [
    NewRegisterComponent
  ],
  exports: [
    NewRegisterComponent
  ]
})
export class NewRegisterModule {

}
