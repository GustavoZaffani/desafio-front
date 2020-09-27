import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {SidenavService} from './sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SidenavComponent implements OnInit {

  items: MenuItem[];
  display = false;

  constructor(private sidenavService: SidenavService) {
  }

  ngOnInit(): void {
    this.buildMenu();
    this.sidenavService.observable().subscribe(value => {
      this.display = value;
    });
  }

  buildMenu() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: '/'
      },
      {
        label: 'Itens',
        icon: 'pi pi-fw pi-microsoft',
        routerLink: 'item'
      }
    ];
  }
}
