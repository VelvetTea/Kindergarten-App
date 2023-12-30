import { Component } from '@angular/core';
import {StoreService} from "../shared/store.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public currentPage: number = 1;
  public showAddData = false;

  constructor(public storeService: StoreService) {
  }

  receiveMessage(newPageCount: number) {
    this.currentPage = newPageCount;
  }

  toggleButtonClicked(showAddData: boolean) {
    this.showAddData=showAddData;
}
}
