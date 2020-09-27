import {CommonModule} from '@angular/common';
import {SidebarModule} from 'primeng/sidebar';
import {SidenavComponent} from './sidenav.component';
import {PanelMenuModule} from 'primeng/panelmenu';
import {NgModule} from '@angular/core';
import {SidenavService} from './sidenav.service';

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
  ],
  providers: [
    SidenavService
  ]
})
export class SidenavModule {
}
