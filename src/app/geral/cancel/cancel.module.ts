import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VoltarComponent} from './voltar.component';
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
    VoltarComponent
  ],
  exports: [
    VoltarComponent
  ]
})
export class VoltarModule {

}
