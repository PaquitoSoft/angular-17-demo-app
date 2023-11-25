import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

type TOption = {
  name: string;
  value: string;
}

@Component({
  selector: 'app-select-input',
  standalone: true,
  imports: [CommonModule],
  styleUrl: './select-input.component.css',
  template: `
    <div class="app-label">
      <label>{{ label }}</label>
      <select>
        @for (option of options; track option.value) {
          <option [value]="option.value">{{ option.name }}</option>
        }
      </select>
    </div>
  `,
})
export class SelectInputComponent {
  @Input() label = '';
  @Input() options: TOption[] = [];
}
