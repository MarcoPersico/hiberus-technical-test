import { Validators } from '@angular/forms';
import { FormActions, FormField } from '../models/shared.models';

export const SIGNUP_FORM_FIELDS: FormField[] = [
  { name: 'name', label: 'name', type: 'text', validators: [Validators.required], initialValue: '' },
  { name: 'surname', label: 'surname', type: 'text', validators: [Validators.required], initialValue: '' },
  { name: 'email', label: 'email', type: 'email', validators: [Validators.required], initialValue: '' },
  { name: 'password', label: 'password', type: 'password', validators: [Validators.required], initialValue: '' },
];

export const SIGNUP_FORM_ACTIONS: FormActions[] = [
  { label: 'sign in', type: 'button', class: 'secondary-button', action: { type: 'navigate', path: 'login' } },
  { label: 'sign up', type: 'submit', class: 'primary-button' },
];
