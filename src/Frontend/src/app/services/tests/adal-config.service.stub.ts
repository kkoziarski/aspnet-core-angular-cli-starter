import { Injectable } from '@angular/core';

@Injectable()
export class AdalConfigServiceStub {
  public get adalConfig(): any {
     return {
      tenant: 'xxxxxx.onmicrosoft.com', // Enpoints -> OAuth 2.0 Authorization Endpoint: https://login.windows.net/{tenant}/oauth2
      clientId: '00000000-0000-0000-0000-000000000000', // Application ID
      redirectUri: '/auth-callback-mock',
      postLogoutRedirectUri: '/auth-callback-mock'
    };
  }
}