import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/domain/data-access/auth.service';
import { UserService } from 'src/domain/data-access/user.service';

@Component({
  templateUrl: './users-container.component.html',
  styleUrls: ['./users-container.component.scss']
})
export class UsersContainerComponent implements OnInit {
  constructor(
    public usersService: UserService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.usersService.getAllUsers();
  }

  public handleLogOut() {
    this.authService.logOut();
  }
}
