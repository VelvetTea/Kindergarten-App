import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'about/Waldorfkindergarden im Zentrum Wiens', component: Waldorfkindergarten},
  { path: 'about/Kindergarden der Karl Schubert Schule für seelenpflegebedürftige Kinder und Jugendliche in Wien', component: KarlSchubert},
  { path: 'about/Kindergarden der Stadt Wien - 1210', component: StadtWien1210},
  { path: 'about/Kindergarden der Stadt Wien - 1140', component: StadtWien1140},
  { path: 'about/Montessori Kinderhaus Wien 1', component: Montessori},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
