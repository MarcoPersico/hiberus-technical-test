import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormCardComponent } from './components/form-card/form-card.component';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './components/spinner/spinner.component';



@NgModule({
  declarations: [
    FormCardComponent,
    FormFieldComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    FormCardComponent,
    FormFieldComponent,
    SpinnerComponent
  ]
})
export class SharedUiModule { }
