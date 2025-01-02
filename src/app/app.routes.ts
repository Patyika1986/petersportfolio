import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'home', loadChildren: () => import('./home-overview/home-overview.module').then(m => m.HomeOverviewModule) },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
