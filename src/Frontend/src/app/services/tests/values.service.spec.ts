import { TestBed, async, inject } from '@angular/core/testing';
import { HttpModule, Http, Response, ResponseOptions, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { Configuration } from '../../app.constants';

import { ValuesService } from '../values.service';

describe('valueService', () => {

    class ConfigurationMock {
        public ServerWithApiUrl = 'http://test-mock.com';
    }

    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [ HttpModule ],
            providers: [
                { provide: Configuration, useClass: ConfigurationMock },
                { provide: XHRBackend, useClass: MockBackend },
                ValuesService
            ]
        });
    });

    describe('GetAll()', () => {

        it('should return an Observable<Array<string>>',
            inject([ValuesService, XHRBackend], (valueService, mockBackend) => {

                const mockResponse = [
                        'Value 0',
                        'Value 1',
                        'Value 2',
                        'Value 3'
                    ];

                // const mockResponse = { 
                //     data: [
                //          { id: 0, name: 'Value 0' }
                //     ]
                // };

                mockBackend.connections.subscribe((connection) => {
                    connection.mockRespond(new Response(new ResponseOptions({
                        body: JSON.stringify(mockResponse)
                    })));
                });

                valueService.GetAll()
                    .subscribe((values) => {
                        expect(values.length).toBe(4);
                        expect(values[0]).toEqual('Value 0');
                        expect(values[1]).toEqual('Value 1');
                        expect(values[2]).toEqual('Value 2');
                        expect(values[3]).toEqual('Value 3');
                    });

            }));
    });
});