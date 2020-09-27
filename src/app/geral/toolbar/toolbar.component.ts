import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {SidenavService} from '../sidenav/sidenav.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ToolbarComponent implements OnInit {

  constructor(private sidenavService: SidenavService) { }

  ngOnInit(): void {
  }

  toogleSidenav() {
    this.sidenavService.showSidenav(true);
  }
}
