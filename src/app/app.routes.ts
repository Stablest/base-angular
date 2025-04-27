import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'sign-in',
        loadComponent: () => import('./features/auth/sign-in/sign-in.component').then(m => m.SignInComponent),
        title: 'SystemName[Auth]',
    }
];
