import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-divider',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="app-divider"></div>
  `,
  styles: `
    .app-divider {
      width: 100%;
      margin: 8px 0;
      border-bottom: 1px solid #c0c0c099;
    }
  `
})
export class DividerComponent {}
