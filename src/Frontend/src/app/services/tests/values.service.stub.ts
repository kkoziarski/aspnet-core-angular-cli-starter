import { Response, ResponseOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

export class ValuesServiceStub {
    public readonly values: string[] = ['mock value', 'mock value 2', 'mock value 3', 'mock value 4'];

    public GetAll = (): Observable<any> => {
        return Observable.of(this.values);
    }

    public GetSingle = (id: number): Observable<Response> => {
        return Observable.of(new Response( new ResponseOptions({
            body: JSON.stringify(this.values[0])
        })));
    }

    public Add = (itemName: string): Observable<Response> => {
        return Observable.of(new Response( new ResponseOptions({
            body: JSON.stringify(this.values[1])
        })));
    }

    public Update = (id: number, itemToUpdate: any): Observable<Response> => {
        return Observable.of(new Response( new ResponseOptions({
            body: JSON.stringify(this.values[2])
        })));
    }

    public Delete = (id: number): Observable<Response> => {
        return Observable.of(new Response( new ResponseOptions({
            body: ''
        })));
    }
}