import {Component} from '@angular/core';
import {Subscription} from 'rxjs';
import {NavigationCancel, NavigationEnd, Router} from '@angular/router';
import {SidenavService} from './geral/sidenav/sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'desafio-senior-front';
  subscription: Subscription;

  constructor(private router: Router,
              private sidenavService: SidenavService) {
    this.buildSubscriptionEvent();
  }

  buildSubscriptionEvent() {
    this.subscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd || event instanceof NavigationCancel) {
        this.sidenavService.showSidenav(false);
      }
    });
  }
}
