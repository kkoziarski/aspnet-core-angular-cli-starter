import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public ApiUrl = 'api/';
    public ServerWithApiUrl = '/' + this.ApiUrl;
}
