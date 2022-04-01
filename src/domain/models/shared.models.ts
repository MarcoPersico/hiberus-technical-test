import { ValidationErrors } from '@angular/forms';

export interface FormField {
  validators: ValidationErrors,
  initialValue: string | number;
  name: string;
  type: string;
  label: string;
}

export interface ResponseMessage {
  error: boolean;
  message: string;
}

export interface Action {
  type: 'navigate';
  path: string;
}

export interface FormActions {
  label: string;
  type: 'button' | 'submit';
  class: string;
  action?: Action;
}
