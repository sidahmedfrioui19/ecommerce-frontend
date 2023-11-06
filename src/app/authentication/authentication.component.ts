import { Component } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent {
  activeTab: 'login' | 'register' = 'login';

  showLogin() {
    this.activeTab = 'login';
  }

  showRegister() {
    this.activeTab = 'register';
  }
}
