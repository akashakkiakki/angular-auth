import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UsersComponent } from './pages/users/users.component';
import { ProductsComponent } from './pages/products/products.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'users', component: UsersComponent, canActivate: [authGuard] },
  { path: 'products', component: ProductsComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: 'login' },
];
