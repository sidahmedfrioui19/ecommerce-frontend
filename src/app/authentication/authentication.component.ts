import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../core/services/authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent {
  public activeTab: 'login' | 'register' = 'login';
  public newUser = new FormGroup({
    firstname: new FormControl(),
    secondname: new FormControl(),
    email: new FormControl(),
    adress: new FormControl(),
    password: new FormControl(),
    phoneNumber: new FormControl()
  });

  constructor(private authenticationService: AuthenticationService) {}

  public register() {
    this.authenticationService.createUser(this.newUser.value).subscribe({
      next: (d) => {
        console.log(d);
      },
      error: (e) => {
        throw e;
      }
    });
  }

  showLogin() {
    this.activeTab = 'login';
  }

  showRegister() {
    this.activeTab = 'register';
  }
}
