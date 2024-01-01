import { Component } from '@angular/core';
import {StoreService} from "../../shared/store.service";

@Component({
  selector: 'app-stadt-wien1210',
  templateUrl: './stadt-wien1210.component.html',
  styleUrls: ['./stadt-wien1210.component.scss']
})
export class StadtWien1210Component {

  constructor(public storeService: StoreService) {
  }

  ngOnInit(){
    this.storeService.isLoading = false;
  }
}
