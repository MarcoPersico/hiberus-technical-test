import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User, UserResponse } from '../models/user.models';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl: string = 'http://51.38.51.187:5050/api/v1/users';

  public loading!: Observable<boolean>;
  private loadingSubject = new BehaviorSubject<boolean>(false);

  public users!: Observable<User[]>;
  private usersSubject = new BehaviorSubject<User[]>([]);

  constructor(
    private httpService: HttpClient,
    private _router: Router,
  ) {
    this.users = this.usersSubject.asObservable();
    this.loading = this.loadingSubject.asObservable();
  }

  public getAllUsers() {
    this.loadingSubject.next(true);
    return this.httpService.get(this.baseUrl, this.createAuthHeader()).subscribe((value) => {
      const user = value as UserResponse;
      this.loadingSubject.next(false);
      this.usersSubject.next(user.items);
    }, (error) => {
      this.loadingSubject.next(false);
      if (error.status === 401) {
        localStorage.removeItem('loggedIn');
        localStorage.removeItem('token');
        this._router.navigate(['/login']);
      }
    });
  }

  private createAuthHeader() {
    const header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`),
    }

    return header;
  }
}
