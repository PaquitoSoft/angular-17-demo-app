import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  styleUrl: './button.component.css',
  template: `
    <button class="app-button">{{ text }}</button>
  `,
})
export class ButtonComponent {
  @Input() text = '';
}
