import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormField } from 'src/domain/models/shared.models';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent implements OnInit {
  @Input() item!: FormField;
  @Input() control!: FormControl;

  constructor() { }

  ngOnInit(): void {
  }

}
