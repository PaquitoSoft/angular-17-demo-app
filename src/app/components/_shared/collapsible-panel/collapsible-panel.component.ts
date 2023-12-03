import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'collapsible-panel',
  standalone: true,
  imports: [CommonModule],
  styleUrl: './collapsible-panel.component.css',
  template: `
    <section class="collapsible-panel">
      <div class="collapsible-panel__title">
        <h3>{{ title }}</h3>
        <div class="collapsible-panel__toggler" (click)="toggle()">+</div>
      </div>
      <div class="collapsible-panel__content" [hidden]="!isExpanded">
        <ng-content />
      </div>
    </section>
  `,
})
export class CollapsiblePanelComponent {
  @Input() title = '';
  isExpanded = false;

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
