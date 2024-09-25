import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-submit-form',
  standalone: true,
  imports: [],
  templateUrl: './submit-form.component.html',
  styleUrl: './submit-form.component.css'
})
export class SubmitFormComponent {
  @Input() value: string = '';
}
