import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ToolbarrModule} from './geral/toolbar/toolbar.module';

import {SidenavModule} from './geral/sidenav/sidenav.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastModule} from 'primeng/toast';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ItemModule} from './item/item.module';
import {HomeModule} from './home/home.module';
import {CURRENCY_MASK_CONFIG} from 'ng2-currency-mask';
import {CustomCurrencyMaskConfig} from './framework/constants/currency.mask.config';
import {ConfirmDialogModule} from 'primeng/confirmdialog';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToolbarrModule,
    SidenavModule,
    ToastModule,
    ScrollPanelModule,
    ItemModule,
    HomeModule,
    ConfirmDialogModule,
  ],
  providers: [
    MessageService,
    ConfirmationService,
    {
      provide: CURRENCY_MASK_CONFIG,
      useValue: CustomCurrencyMaskConfig,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
