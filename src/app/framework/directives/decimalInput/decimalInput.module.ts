import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DecimalInputDirective} from './decimalInput.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DecimalInputDirective
  ],
  exports: [
    DecimalInputDirective
  ]
})
export class DecimalInputModule {
}
