import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SaveComponent} from './save.component';
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
    SaveComponent
  ],
  exports: [
    SaveComponent
  ]
})
export class SaveModule {

}
