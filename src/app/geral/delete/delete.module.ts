import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DeleteComponent} from './delete.component';
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
    DeleteComponent
  ],
  exports: [
    DeleteComponent
  ]
})
export class DeleteModule {

}
