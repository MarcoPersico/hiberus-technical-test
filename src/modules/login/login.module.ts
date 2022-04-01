import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginContainerComponent } from './contianers/login-container/login-container.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedUiModule } from '../shared-ui/shared-ui.module';



@NgModule({
  declarations: [
    LoginContainerComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedUiModule
  ],
})
export class LoginModule { }
