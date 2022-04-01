import { Validators } from '@angular/forms';
import { FormActions, FormField } from '../models/shared.models';

export const LOGIN_FORM_FIELDS: FormField[] = [
  { name: 'email', label: 'email', type: 'email', validators: [Validators.email, Validators.required], initialValue: '' },
  { name: 'password', label: 'password', type: 'password', validators: [Validators.required], initialValue: '' },
];

export const LOGIN_FORM_ACTIONS: FormActions[] = [
  { label: 'sign up', type: 'button', class: 'secondary-button', action: { type: 'navigate', path: 'sign-up' } },
  { label: 'sign in', type: 'submit', class: 'primary-button' },
];
