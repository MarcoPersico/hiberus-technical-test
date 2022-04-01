import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from 'src/domain/guards/login.guard';
import { UsersGuard } from 'src/domain/guards/users.guard';
import { LoginContainerComponent } from 'src/modules/login/contianers/login-container/login-container.component';
import { SpinnerComponent } from 'src/modules/shared-ui/components/spinner/spinner.component';
import { SignUpContainerComponent } from 'src/modules/singup/containers/sign-up-container/sign-up-container.component';
import { UsersContainerComponent } from 'src/modules/users/containers/users-container/users-container.component';

const routes: Routes = [
  { path: 'login', component: LoginContainerComponent, canActivate: [LoginGuard] },
  { path: 'sign-up', component: SignUpContainerComponent, canActivate: [LoginGuard] },
  { path: 'users', component: UsersContainerComponent, canActivate: [UsersGuard] },
  { path: '', redirectTo: localStorage.getItem('loggedIn') ? '/users' : '/login', pathMatch: 'full' },
  { path: '*', redirectTo: localStorage.getItem('loggedIn') ? '/users' : '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
