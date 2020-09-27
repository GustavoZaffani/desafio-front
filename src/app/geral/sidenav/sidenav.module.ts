import {CommonModule} from '@angular/common';
import {SidebarModule} from 'primeng/sidebar';
import {SidenavComponent} from './sidenav.component';
import {PanelMenuModule} from 'primeng/panelmenu';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    SidebarModule,
    PanelMenuModule
  ],
  declarations: [
    SidenavComponent
  ],
  exports: [
    SidenavComponent
  ]
})
export class SidenavModule {
}
