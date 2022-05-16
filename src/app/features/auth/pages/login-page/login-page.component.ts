import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/core/services/auth.service';
import { LoginData } from 'src/app/core/interfaces/login-data.interface';
import { Router } from '@angular/router';
import { getAuth } from "firebase/auth";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {}

  login(loginData: LoginData) {
    this.authService
      .login(loginData)
      .then(() => {
        let auth = getAuth();
        let user =auth.currentUser;
        localStorage.setItem("user",JSON.stringify(user));
        console.log(user);
        if (user?.uid == 't3p3bC2NWfcMlFvlo9sOyUM1o9g2'){
          localStorage.setItem("is_admin",JSON.stringify(true));
          this.router.navigate(['/managerdashboard']);


        }
        else{
          localStorage.setItem("is_admin",JSON.stringify(false));
          this.router.navigate(['/dashboard'])
        }
      }
     )
      .catch((e) => console.log(e.message));
  }

  loginWithGoogle() {
    this.authService
      .loginWithGoogle()
      .then(() => {
        this.router.navigate(['/dashboard'])
      }

      )
      .catch((e) => console.log(e.message));
  }
}
