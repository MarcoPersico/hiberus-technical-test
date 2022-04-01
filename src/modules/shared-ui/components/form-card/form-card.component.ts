import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Action, FormActions, FormField, ResponseMessage } from 'src/domain/models/shared.models';

@Component({
  selector: 'app-form-card',
  templateUrl: './form-card.component.html',
  styleUrls: ['./form-card.component.scss']
})
export class FormCardComponent implements OnInit {
  @Input() formFields!: FormField[];
  @Input() formGroup!: FormGroup;
  @Input() formActions!: FormActions[];
  @Input() formTitle!: string;
  @Input() formData!: ResponseMessage | null;
  @Output() onFormSubmit = new EventEmitter();

  constructor(
    private _router: Router,
  ) { }

  ngOnInit(): void {
    this.initFieldsForm();
  }

  initFieldsForm() {
    this.formFields.map((field) => {
      this.formGroup.addControl(field.name, this.createFormControl(field));
    });
  }

  createFormControl(field: FormField): FormControl {
    return new FormControl(field.initialValue, field.validators);
  }

  getFormControl(field: FormField): FormControl {
    const control = this.formGroup.controls[field.name];
    return control as FormControl;
  }

  handleAction(event: MouseEvent, type: 'submit' | 'button', action?: Action) {
    if (type === 'submit') this.handleFormSubmit(event);
    if (action && action.type === 'navigate') this._router[action.type]([action.path]);
  }

  handleFormSubmit(event: MouseEvent) {
    event.preventDefault();
    if (this.formGroup.valid) return this.onFormSubmit.emit(this.formGroup.value);
    return null;
  }
}
