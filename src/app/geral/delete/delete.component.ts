import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {

  @Output() onClick: EventEmitter<any> = new EventEmitter();

  click(): void {
    this.onClick.emit();
  }
}
