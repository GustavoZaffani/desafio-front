import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-new-register',
  templateUrl: './newRegister.component.html',
  styleUrls: ['./newRegister.component.css']
})
export class NewRegisterComponent {

  @Output() onClick: EventEmitter<any> = new EventEmitter();

  click(): void {
    this.onClick.emit();
  }
}
