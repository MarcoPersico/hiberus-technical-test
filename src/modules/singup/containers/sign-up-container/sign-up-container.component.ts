import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SIGNUP_FORM_ACTIONS, SIGNUP_FORM_FIELDS } from 'src/domain/constants/sign-up.constants';
import { AuthService } from 'src/domain/data-access/auth.service';
import { FormField } from 'src/domain/models/shared.models';
import { SignUpForm } from 'src/domain/models/signup.models';

@Component({
  selector: 'app-sign-up-container',
  templateUrl: './sign-up-container.component.html',
  styleUrls: ['./sign-up-container.component.scss']
})
export class SignUpContainerComponent implements OnInit {
  public signUpFields: FormField[] = SIGNUP_FORM_FIELDS;
  public signUpActions = SIGNUP_FORM_ACTIONS;
  public signUpFormGroup: FormGroup = new FormGroup({});

  constructor(
    public authService: AuthService,
  ) { }

  ngOnInit(): void {
  }


  handleFormSubmit(event: SignUpForm) {
    this.authService.singUpUser(event).add(() => {
      this.signUpFormGroup.markAsPristine();
    });;
  }
}
