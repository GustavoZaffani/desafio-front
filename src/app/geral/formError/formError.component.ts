import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-error',
  templateUrl: './formError.component.html',
  styleUrls: ['./formError.component.css']
})
export class FormErrorComponent {

  @Input('form') form: FormGroup;
  @Input('inputName') inputName: string;
  @Input('validationMessage') validationMessage: string;
}
