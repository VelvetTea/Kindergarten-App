import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataComponent } from './dashboard/data/data.component';
import { AddDataComponent } from './dashboard/add-data/add-data.component';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './dashboard/button/button.component';
import { PaginationPipe } from './dashboard/data/pagination.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select'
import { MatButtonModule } from '@angular/material/button';
import {MatNativeDateModule, MatOptionModule} from '@angular/material/core';
import { MatInputModule} from '@angular/material/input';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatToolbarModule} from "@angular/material/toolbar";
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {AboutPageComponent} from "./about-page/about-page.component";
import { WaldorfkindergartenComponent } from './about-page/waldorfkindergarten/waldorfkindergarten.component';
import { KarlSchubertComponent } from './about-page/karl-schubert/karl-schubert.component';
import { StadtWien1210Component } from './about-page/stadt-wien1210/stadt-wien1210.component';
import { StadtWien1140Component } from './about-page/stadt-wien1140/stadt-wien1140.component';
import { MontessoriComponent } from './about-page/montessori/montessori.component';
import {MatSortModule} from "@angular/material/sort";
import {MatTabsModule} from "@angular/material/tabs";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AboutPageComponent,
    AddDataComponent,
    DataComponent,
    HeaderComponent,
    ButtonComponent,
    PaginationPipe,
    LoadingSpinnerComponent,
    WaldorfkindergartenComponent,
    KarlSchubertComponent,
    StadtWien1210Component,
    StadtWien1140Component,
    MontessoriComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatButtonModule,
        MatOptionModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatToolbarModule,
        MatProgressSpinnerModule,
        MatSortModule,
        MatTabsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
