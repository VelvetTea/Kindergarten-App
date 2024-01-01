import { Component } from '@angular/core';
import { LoremIpsum } from "lorem-ipsum";
import {StoreService} from "../../shared/store.service";

@Component({
  selector: 'app-waldorfkindergarten',
  templateUrl: './waldorfkindergarten.component.html',
  styleUrls: ['./waldorfkindergarten.component.scss']
})
export class WaldorfkindergartenComponent {

  constructor(public storeService: StoreService) {
  }

  ngOnInit(){
    this.storeService.isLoading = false;
  }

}
