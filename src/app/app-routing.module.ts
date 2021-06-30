import { PreferencesCheckGuard } from './preferences-check.guard';
import { AdminManageComponent } from './admin-manage/admin-manage.component';
import { SuperAdminGuard } from './super-admin.guard';
import { AdminItSelfComponent } from './admin-it-self/admin-it-self.component';
import { AdminAccessGuard } from './admin-access.guard';
import { AdminGuard } from './admin.guard';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component'
import { LoginFormComponent } from './login-form/login-form.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminDeleteComponent } from './admin-delete/admin-delete.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent , canActivate: [AdminGuard] },
  {
    path: 'adminItSelf',
    canActivate: [SuperAdminGuard],
    children: [
      {
        path: '',
        component: AdminItSelfComponent
      },
      {
        path: '',
        canActivateChild: [AdminAccessGuard],
        children: [
          { path: 'manage', component: AdminManageComponent },
          { path: 'edit', component: AdminEditComponent },
          { path: 'delete', component: AdminDeleteComponent }
        ]
      },
    ]
  },

  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: '', component: HomeComponent , canActivate: [AuthGuard] },
  { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
  {
    path: 'preference',
    canLoad: [PreferencesCheckGuard],
    loadChildren: () => import('./preference/preference.module').then(m => m.PreferenceModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
