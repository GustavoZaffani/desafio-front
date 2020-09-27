import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EditComponent} from './edit.component';
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
    EditComponent
  ],
  exports: [
    EditComponent
  ]
})
export class EditModule {

}
