import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeOverviewComponent } from './home-overview.component';

const routes:Routes = [
  { path: '', component: HomeOverviewComponent}
];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class HomeOverviewModule { }
