import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
    {path: '', component: LoginComponent, title: 'Login page'},
    {path: 'home', component: HomeComponent, title: 'Home page'},
    {path: 'about', component: AboutComponent, title: 'About page'}
];
