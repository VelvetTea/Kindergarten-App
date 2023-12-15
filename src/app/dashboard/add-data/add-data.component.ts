import {Component, Input, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BackendService } from 'src/app/shared/backend.service';
import { StoreService } from 'src/app/shared/store.service';

import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.scss']
})

export class AddDataComponent implements OnInit{

  constructor(private formbuilder: FormBuilder,
              public storeService: StoreService,
              public backendService: BackendService) {
  }

  public addChildForm: any;
  @Input() currentPage!: number;

  ngOnInit(): void {
    this.addChildForm = this.formbuilder.group({
      name: ['', [Validators.required]],
      kindergardenId: ['', Validators.required],
      birthDate: [null, Validators.required]
    })
  }

  showToast() {
    const toastElement = document.getElementById('successToast');
    if (toastElement)
    {
      const toast = new bootstrap.Toast(toastElement);
      toast.show();
    }
  }

  onSubmit() {
    if (this.addChildForm.valid) {
      this.backendService.addChildData(this.addChildForm.value, this.currentPage);
      this.showToast();
      this.addChildForm.reset();
    }
  }
}