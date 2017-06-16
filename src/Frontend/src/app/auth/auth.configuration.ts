﻿import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthConfiguration {
    // TODO: replaces HTTP with HTTPS

    // The Issuer Identifier for the OpenID Provider (which is typically obtained during Discovery) MUST exactly match the value of the iss (issuer) Claim.
    public iss = environment.backend_server; // 'http://localhost:5002'; //44318 | 44363(singleapp)

    public server = environment.backend_server; // 'http://localhost:5002'; //44318

    public redirect_url = environment.backend_server; // 'http://localhost:5002'; //44311

    // This is required to get the signing keys so that the signiture of the Jwt can be validated.
    public jwks_url = environment.backend_server + '/.well-known/openid-configuration/jwks'; //44318

    public userinfo_url = environment.backend_server + '/connect/userinfo'; //44318

    public logoutEndSession_url = environment.backend_server + '/connect/endsession'; //44318

    // The Client MUST validate that the aud (audience) Claim contains its client_id value registered at the Issuer identified by the iss (issuer) Claim as an audience.
    // The ID Token MUST be rejected if the ID Token does not list the Client as a valid audience, or if it contains additional audiences not trusted by the Client.
    public client_id = 'angularclient';

    public response_type = 'id_token token';

    public scope = 'dataEventRecords openid';

    public post_logout_redirect_uri = environment.backend_server + '/Unauthorized'; //44311
}