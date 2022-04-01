import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginForm } from '../models/login.models';
import { ResponseMessage } from '../models/shared.models';
import { SignUpForm } from '../models/signup.models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string = 'http://51.38.51.187:5050/api/v1/auth';

  public loading!: Observable<boolean>;
  private loadingSubject = new BehaviorSubject<boolean>(false);

  public loginResponse!: Observable<ResponseMessage>;
  private loginResponseSubject = new BehaviorSubject<ResponseMessage>({ error: false, message: '' });

  public signUpResponse!: Observable<ResponseMessage>;
  private signUpResponseSubject = new BehaviorSubject<ResponseMessage>({ error: false, message: '' });

  constructor(
    private httpService: HttpClient,
    private _router: Router,
  ) {
    this.loginResponse = this.loginResponseSubject.asObservable();
    this.signUpResponse = this.signUpResponseSubject.asObservable();
    this.loading = this.loadingSubject.asObservable();
  }

  public authUser(data: LoginForm) {
    this.loginResponseSubject.next({ error: false, message: '' });
    this.loadingSubject.next(true);
    return this.httpService.post(this.baseUrl + '/log-in', data).subscribe((value: any) => {
      localStorage.setItem('token', value.accessToken);
      localStorage.setItem('loggedIn', 'true');
    }, (value) => {
      this.loginResponseSubject.next({ error: true, message: value.error.message });
      this.loadingSubject.next(false);
    }, () => {
      this.loadingSubject.next(false);
    });
  }

  public singUpUser(data: SignUpForm) {
    this.signUpResponseSubject.next({ error: false, message: '' });
    this.loadingSubject.next(true);
    return this.httpService.post(this.baseUrl + '/sign-up', data).subscribe((value) => {
      this.signUpResponseSubject.next({ error: false, message: 'User created successfully.' });
    }, (value) => {
      this.signUpResponseSubject.next({ error: true, message: value.error.message });
      this.loadingSubject.next(false);
    }, () => {
      this.loadingSubject.next(false);
    });
  }

  public logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedIn');
    this._router.navigate(['/login']);
  }
}
