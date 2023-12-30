import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {WaldorfkindergartenComponent} from "./about-page/waldorfkindergarten/waldorfkindergarten.component";
import {StadtWien1210Component} from "./about-page/stadt-wien1210/stadt-wien1210.component";
import {StadtWien1140Component} from "./about-page/stadt-wien1140/stadt-wien1140.component";
import {MontessoriComponent} from "./about-page/montessori/montessori.component";
import {KarlSchubertComponent} from "./about-page/karl-schubert/karl-schubert.component";

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'about/Waldorfkindergarden im Zentrum Wiens', component: WaldorfkindergartenComponent},
  { path: 'about/Kindergarden der Karl Schubert Schule für seelenpflegebedürftige Kinder und Jugendliche in Wien', component: KarlSchubertComponent},
  { path: 'about/Kindergarden der Stadt Wien - 1210', component: StadtWien1210Component},
  { path: 'about/Kindergarden der Stadt Wien - 1140', component: StadtWien1140Component},
  { path: 'about/Montessori Kinderhaus Wien 1', component: MontessoriComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
