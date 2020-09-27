import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ItemFormComponent} from './item.form.component';
import {ItemListComponent} from './item.list.component';
import {TableModule} from 'primeng/table';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {DropdownModule} from 'primeng/dropdown';
import {CheckboxModule} from 'primeng/checkbox';
import {CancelModule} from '../geral/cancel/cancel.module';
import {SaveModule} from '../geral/save/save.module';
import {NewRegisterModule} from '../geral/newRegister/newRegister.module';
import {InputMaskModule} from 'primeng/inputmask';
import {CurrencyMaskModule} from 'ng2-currency-mask';
import {OnlyNumberModule} from '../framework/directives/onlyNumber/onlyNumber.module';
import {DecimalInputModule} from '../framework/directives/decimalInput/decimalInput.module';
import {TriStateCheckboxModule} from 'primeng/tristatecheckbox';
import {ItemService} from './item.service';
import {EditModule} from '../geral/edit/edit.module';
import {DeleteModule} from '../geral/delete/delete.module';

@NgModule({
  imports: [
    CommonModule,
    TableModule,
    RouterModule,
    FormsModule,
    CardModule,
    InputTextModule,
    CalendarModule,
    DropdownModule,
    CheckboxModule,
    CancelModule,
    SaveModule,
    NewRegisterModule,
    ReactiveFormsModule,
    InputMaskModule,
    CurrencyMaskModule,
    OnlyNumberModule,
    DecimalInputModule,
    TriStateCheckboxModule,
    EditModule,
    DeleteModule
  ],
  declarations: [
    ItemFormComponent,
    ItemListComponent
  ],
  exports: [
    ItemFormComponent,
    ItemListComponent
  ],
  providers: [
    ItemService
  ]
})
export class ItemModule {
}
