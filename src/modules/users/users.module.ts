import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersContainerComponent } from './containers/users-container/users-container.component';
import { UserCardComponent } from './components/user-card/user-card.component';



@NgModule({
  declarations: [
    UsersContainerComponent,
    UserCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
