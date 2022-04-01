import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpContainerComponent } from './containers/sign-up-container/sign-up-container.component';
import { SharedUiModule } from '../shared-ui/shared-ui.module';



@NgModule({
  declarations: [
    SignUpContainerComponent
  ],
  imports: [
    CommonModule,
    SharedUiModule
  ]
})
export class SignupModule { }
