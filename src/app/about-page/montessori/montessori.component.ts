import { Component } from '@angular/core';
import {StoreService} from "../../shared/store.service";

@Component({
  selector: 'app-montessori',
  templateUrl: './montessori.component.html',
  styleUrls: ['./montessori.component.scss']
})
export class MontessoriComponent {

  constructor(public storeService: StoreService) {
  }

  ngOnInit(){
    this.storeService.isLoading = false;
  }
}
