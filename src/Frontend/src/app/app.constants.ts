import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public ApiUrl: string = 'api/';
    public ServerWithApiUrl = '/' + this.ApiUrl;
}
