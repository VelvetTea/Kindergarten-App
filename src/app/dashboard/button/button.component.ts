import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() isFormOpen!: boolean;
  @Output() toggleFormEvent = new EventEmitter<boolean>();

  get buttonText(): string {
    return this.isFormOpen ? 'Formular schließen' : 'Formular öffnen';
  }

  toggleForm() {
    this.toggleFormEvent.emit(!this.isFormOpen);
  }
}