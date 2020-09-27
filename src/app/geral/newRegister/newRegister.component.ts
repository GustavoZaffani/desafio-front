import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.css']
})
export class SaveComponent {

  @Output() onClick: EventEmitter<any> = new EventEmitter();

  click(): void {
    this.onClick.emit();
  }
}
