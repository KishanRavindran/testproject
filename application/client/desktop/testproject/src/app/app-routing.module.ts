import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { UserComponent } from './user/user.component';
import { ProfilesettingsComponent } from './user/profilesettings/profilesettings.component';
import { TemplateComponent } from './template/template.component';
import { AdminComponent } from './admin/admin.component';
import { Screen841984Component } from './screen841984/screen841984.component';
import { Screen642369Component } from './screen642369/screen642369.component';
import { Screen931541Component } from './screen931541/screen931541.component';
import { Screen541817Component } from './screen541817/screen541817.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
{ path: 'signup', component: SignupComponent },
{ path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
{ path: 'authorization', component: AuthorizationComponent },
{ path: 'usermanagement', component: UserComponent, canActivate: [AuthGuard] },
{ path: 'profile', component: ProfilesettingsComponent, canActivate: [AuthGuard] },
{ path: 'screen841984', loadChildren: () => import('./screen841984/screen841984.module').then(mod => mod.Screen841984Module)},
  { path: '', component: TemplateComponent , pathMatch: 'full' },
{ path: 'screen642369', loadChildren: () => import('./screen642369/screen642369.module').then(mod => mod.Screen642369Module)},
{ path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
{ path: 'screen931541', loadChildren: () => import('./screen931541/screen931541.module').then(mod => mod.Screen931541Module)},

{ path: 'screen541817', loadChildren: () => import('./screen541817/screen541817.module').then(mod => mod.Screen541817Module)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
