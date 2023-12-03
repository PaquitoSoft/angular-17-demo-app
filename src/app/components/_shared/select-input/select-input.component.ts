import { Component, EventEmitter, Input, Output } from '@angular/core';
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
      <select (change)="onChange($event)">
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
  @Output() onChangeEvent = new EventEmitter<string>();

  onChange(event: Event) {
    // TODO: Type this event
    // @ts-ignore
    this.onChangeEvent.emit(event.target.value);
  }
}
