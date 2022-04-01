import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LOGIN_FORM_ACTIONS, LOGIN_FORM_FIELDS } from 'src/domain/constants/login.constants';
import { AuthService } from 'src/domain/data-access/auth.service';
import { LoginForm } from 'src/domain/models/login.models';
import { FormField } from 'src/domain/models/shared.models';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.scss']
})
export class LoginContainerComponent implements OnInit {
  public loginFields: FormField[] = LOGIN_FORM_FIELDS;
  public loginActions = LOGIN_FORM_ACTIONS;
  public loginFormGroup: FormGroup = new FormGroup({});

  constructor(
    public authService: AuthService,
    private _router: Router,
  ) { }

  ngOnInit(): void {
  }

  public handleFormSubmit(event: LoginForm) {
    this.authService.authUser(event).add((value: any) => {
      console.log(value);
    }).add(() => {
      this.loginFormGroup.markAsPristine();
      this._router.navigate(['/users']);
    });
  }
}
