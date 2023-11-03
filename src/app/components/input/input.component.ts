import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  @Input() label: string | undefined;
  @Input() name: string | undefined;
  @Input() id: string | undefined;
  @Input() placeholder: string | undefined;
  @Input() type: string | undefined;
  @Input() formControlName:  string | undefined

}
