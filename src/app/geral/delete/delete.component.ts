import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  @Output() onClick: EventEmitter<any> = new EventEmitter();

  click(): void {
    this.onClick.emit();
  }
}
