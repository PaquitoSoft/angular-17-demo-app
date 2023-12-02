import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  styleUrl: './button.component.css',
  template: `
    <button class="app-button" (click)="onClick()">{{ text }}</button>
  `,
})
export class ButtonComponent {
  @Input() text = '';
  @Output() onClickEvent = new EventEmitter<void>();

  onClick() {
    this.onClickEvent.emit();
  }
}
