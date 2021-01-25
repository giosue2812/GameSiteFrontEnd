import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../../core/services/user.service';
import {UserModel} from '../../../../core/models/UserModel';

@Component({
  selector: 'app-setup-user',
  templateUrl: './setup-user.component.html',
  styleUrls: ['./setup-user.component.scss']
})
export class SetupUserComponent implements OnInit {

  userModel:UserModel[];

  constructor(public userService:UserService) { }

  ngOnInit(): void {
    this.userService.userList().subscribe(data => {
      this.userModel = data;
    })
  }

  deleteUser(id:number)
  {
    this.userService.deleteUser(id).subscribe(data => {
      this.userModel = data;
    })
  }
}
