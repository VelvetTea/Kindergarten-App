import { Component } from '@angular/core';
import {StoreService} from "../../shared/store.service";

@Component({
  selector: 'app-karl-schubert',
  templateUrl: './karl-schubert.component.html',
  styleUrls: ['./karl-schubert.component.scss']
})
export class KarlSchubertComponent {

  constructor(public storeService: StoreService) {
  }

  ngOnInit(){
    this.storeService.isLoading = false;
  }
}
