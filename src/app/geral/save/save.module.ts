import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CancelComponent} from './cancel.component';
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
    CancelComponent
  ],
  exports: [
    CancelComponent
  ]
})
export class CancelModule {

}
