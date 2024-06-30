import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './shared/guards/auth.guard';

export const routes: Routes = [
    {
        path: 'auth',
        loadComponent: () => import('./auth/auth.component').then(c => c.AuthComponent),
        loadChildren: () => import('./auth/auth-routes')
    },
    { 
        path: 'home', 
        title: 'Home', 
        component: HomeComponent,
        canActivate: [AuthGuard]  
    },
    { 
        path: '**',   
        redirectTo: 'home', 
        pathMatch: 'full' 
    },
    // { 
    //     path: '**', 
    //     component: PageNotFoundComponent 
    // }, 
];
