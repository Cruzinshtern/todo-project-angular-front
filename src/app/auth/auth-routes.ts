import { Route } from "@angular/router";
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";

export default [
    { path: 'login', title: 'Login', component: LoginComponent },
    { path: 'register', title: 'Register', component: RegisterComponent }, 
    { path: '',   redirectTo: 'login', pathMatch: 'full' },
] satisfies Route[]