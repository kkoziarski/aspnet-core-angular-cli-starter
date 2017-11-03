import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AdalConfigService } from '../services/adal-config.service';
import { AuthService } from '../services/auth.service';
import { AdalService } from 'ng2-adal/dist/core';

@Component({
  selector: 'app-auth-callback',
  template: '<div><h3>Auth callback redirecting...</h3></div>'
})

export class AuthCallbackComponent implements OnInit {

  public message: string;

  constructor(
    private adalService: AdalService,
    private authService: AuthService,
    private adalConfigService: AdalConfigService,
    private router: Router
  ) {
    this.adalService.init(this.adalConfigService.adalConfig);
  }

  ngOnInit(): void {
    this.authService
      .isLoggedIn()
      .subscribe(isLoggedIn => {
        if (isLoggedIn === true) {
          console.log('authenticated...');
          this.router.navigate(['']);
        } else {
          console.log('not authenticated...');
          this.router.navigate(['']);
        }
      },
      error => {
        console.log('not authenticated - ERROR...');
        this.router.navigate(['']);
        console.log(error);
      },
      () => console.log('auth-callback complete'));
  }
}
