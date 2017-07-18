import * as adalLib from 'adal-angular';
import User = adalLib.User;
import { AdalService, OAuthData, AuthHttp } from 'ng2-adal/core';
import { Observable } from 'rxjs/Rx';

export class AdalServiceStub extends AdalService {
    init(configOptions: adalLib.Config): void { };
    // readonly config: adalLib.Config;
    // readonly userInfo: OAuthData;
    login(): void { };
    loginInProgress(): boolean { return false; };
    logOut(): void { };
    handleWindowCallback(): void { };
    getCachedToken(resource: string): string  { return 'mock token' };
    acquireToken(resource: string): Observable<string> {
        return Observable.of('acquireToken stub');
    };
    getUser(): Observable<adalLib.User> {
        return Observable.of(new adalLib.User() );
    };
    clearCache(): void { };
    clearCacheForResource(resource: string): void { };
    info(message: string): void { };
    verbose(message: string): void { };
    GetResourceForEndpoint(url: string): string { return 'GetResourceForEndpoint mock' };
    refreshDataFromCache(): void { };
}