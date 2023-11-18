import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() showAddData!: boolean | undefined;
  @Output() toggleButtonClickedEvent = new EventEmitter();

  toggleButtonClicked() {
    this.toggleButtonClickedEvent.emit(!this.showAddData);
  }
}