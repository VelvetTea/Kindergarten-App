import { Component } from '@angular/core';
import {StoreService} from "../../shared/store.service";

@Component({
  selector: 'app-stadt-wien1140',
  templateUrl: './stadt-wien1140.component.html',
  styleUrls: ['./stadt-wien1140.component.scss']
})
export class StadtWien1140Component {

  constructor(public storeService: StoreService) {
  }

  ngOnInit(){
    this.storeService.isLoading = false;
  }
}
