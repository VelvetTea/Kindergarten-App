import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BackendService } from 'src/app/shared/backend.service';
import { CHILDREN_PER_PAGE } from 'src/app/shared/constants';
import { StoreService } from 'src/app/shared/store.service';
import {PageEvent} from "@angular/material/paginator";
import * as bootstrap from "bootstrap";

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  displayedColumns: string[] = ['name', 'kindergarden', 'address', 'age', 'birthdate', 'action'];

  constructor(public storeService: StoreService, private backendService: BackendService) {}
  @Input() currentPage!: number;
  @Output() selectPageEvent = new EventEmitter<number>();
  public page: number = 0;

  ngOnInit(): void {
    this.backendService.getChildren(this.currentPage);
  }

  get columnFields() {
    return this.columns.map(column => column.field);
  }

  columns = [
    { field: 'name', header: 'Name' },
    { field: 'kindergarden', header: 'Kindergarten' },
    { field: 'address', header: 'Adresse' },
    { field: 'age', header: 'Alter' },
    { field: 'birthDate', header: 'Geburtstag' },
    { field: 'delete', header: '' },
  ];

  getAge(birthDate: string) {
    var today = new Date();
    var birthDateTimestamp = new Date(birthDate);
    var age = today.getFullYear() - birthDateTimestamp.getFullYear();
    var m = today.getMonth() - birthDateTimestamp.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDateTimestamp.getDate())) {
        age--;
    }
    return age;
  }

  showToast() {
    const toastElement = document.getElementById('deleteToast');
    if (toastElement)
    {
      const toast = new bootstrap.Toast(toastElement);
      toast.show();
    }
  }

  selectPage(event: PageEvent) {
    let currentPage = event.pageIndex + 1;
    this.selectPageEvent.emit(currentPage)
    this.backendService.getChildren(currentPage);
  }

  public returnAllPages() {
    return Math.ceil(this.storeService.childrenTotalCount / CHILDREN_PER_PAGE)
  }

  public cancelRegistration(childId: string) {
    this.storeService.isLoading = true;
    setTimeout(() => {
      this.backendService.deleteChildData(childId, this.currentPage);
      this.storeService.isLoading = false;
      this.showToast();
    }, 1000);
  }

  protected readonly CHILDREN_PER_PAGE = CHILDREN_PER_PAGE;
}


