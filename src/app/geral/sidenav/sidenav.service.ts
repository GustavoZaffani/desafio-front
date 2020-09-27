import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable()
export class SidenavService {

  private subject: Subject<boolean> = new Subject();

  showSidenav(showSidenav: boolean): void {
    this.subject.next(showSidenav);
  }

  observable(): Observable<boolean> {
    return this.subject.asObservable();
  }
}
