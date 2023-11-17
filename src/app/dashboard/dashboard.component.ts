import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public currentPage: number = 1;

  receiveMessage(newPageCount: number) {
    this.currentPage = newPageCount;
  }

  isFormOpen = false;

  toggleForm(isOpen: boolean) {
    this.isFormOpen = isOpen;
  }

}
