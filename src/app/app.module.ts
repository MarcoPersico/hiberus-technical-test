import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UsersGuard } from 'src/domain/guards/users.guard';
import { LoginModule } from 'src/modules/login/login.module';
import { SharedUiModule } from 'src/modules/shared-ui/shared-ui.module';
import { SignupModule } from 'src/modules/singup/signup.module';
import { UsersModule } from 'src/modules/users/users.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    LoginModule,
    SignupModule,
    UsersModule,
    HttpClientModule,
    SharedUiModule
  ],
  providers: [UsersGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
