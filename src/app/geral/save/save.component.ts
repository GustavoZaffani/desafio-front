import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-cancel',
  templateUrl: './cancel.component.html',
  styleUrls: ['./cancel.component.css']
})
export class CancelComponent {

  @Output() onClick: EventEmitter<any> = new EventEmitter();

  click(): void {
    this.onClick.emit();
  }
}
