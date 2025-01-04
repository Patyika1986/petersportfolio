import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
    { path: 'home', loadChildren: () => import('./home-overview/home-overview.module').then(m => m.HomeOverviewModule) },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

