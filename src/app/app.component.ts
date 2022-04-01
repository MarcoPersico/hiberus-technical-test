import { Component } from '@angular/core';
import { AuthService } from 'src/domain/data-access/auth.service';
import { UserService } from 'src/domain/data-access/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hiberus-technical-test';

  constructor(
    public authService: AuthService,
    public usersService: UserService,
  ) {}
}
