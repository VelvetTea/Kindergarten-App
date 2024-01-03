import { Component } from '@angular/core';
import {StoreService} from "../shared/store.service";
import {BackendService} from "../shared/backend.service";

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})

export class AboutPageComponent {

  constructor(public storeService: StoreService, public backendService: BackendService) {

  }

  ngOnInit(): void {
    this.backendService.getKindergardens();
    console.log(this.storeService.kindergardens)
    this.storeService.isLoading = false;
    // todo:  <app-loading-spinner *ngIf="storeService.isLoading"></app-loading-spinner>
  }

  public getImagePath(kindergarden: string): string {
    return `./../assets/images/${kindergarden}.png`;
  }

  public getRouterLink(kindergarden: any): string {
    if(kindergarden.name == "Kindergarten der Stadt Wien"){
      if(kindergarden.address == "Audorfgasse 20, 1210 Wien"){
        return "/about/Kindergarten der Stadt Wien - 1210"
      } else {
        return "/about/Kindergarten der Stadt Wien - 1140"
      }
    } else {
      return `/about/${kindergarden.name}`
    }
  }
}

