import {Component, Input, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BackendService } from 'src/app/shared/backend.service';
import { StoreService } from 'src/app/shared/store.service';
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.scss']
})

export class AddDataComponent implements OnInit{

  constructor(private formbuilder: FormBuilder,
              public storeService: StoreService,
              public backendService: BackendService,
              private snackBar: MatSnackBar) {
  }
  public addChildForm: any;
  public toastTrigger = false;
  @Input() currentPage!: number;

  ngOnInit(): void {
    this.addChildForm = this.formbuilder.group({
      name: ['', [Validators.required]],
      kindergardenId: ['', Validators.required],
      birthDate: [null, Validators.required]
    })
  }


  onSubmit() {
    if (this.addChildForm.valid) {
      this.backendService.addChildData(this.addChildForm.value, this.currentPage);
      this.snackBar.open('Kind erfolgreich angemeldet! 🎉', '', {
        duration: 5000
      })
      this.addChildForm.reset();
    }
  }
}