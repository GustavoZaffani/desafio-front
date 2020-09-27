import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.css']
})
export class SaveComponent {

  @Output() onClick: EventEmitter<any> = new EventEmitter();
  @Input() typeButton: string = 'button';

  click(): void {
    this.onClick.emit();
  }
}
