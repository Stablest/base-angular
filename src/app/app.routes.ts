import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'auth',
        loadComponent: () => import('./features/auth/auth.component').then(m => m.AuthComponent),
        title: 'SystemName[Auth]',
    }
];
