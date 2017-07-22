import {
    TestBed,
    async,
    inject
} from '@angular/core/testing';
import {
    MockBackend,
    MockConnection
} from '@angular/http/testing';
import {
    HttpModule,
    Http,
    Response,
    ResponseOptions,
    XHRBackend,
    RequestMethod
} from '@angular/http';

import { Configuration } from '../../app.constants';
import { ValuesService } from '../values.service';

describe('valueService', () => {
    class ConfigurationMock {
        public ServerWithApiUrl = 'http://test-mock.com/';
    }

    let configuration: Configuration;

    beforeEach(async(() => {

        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [
                ValuesService,

                { provide: Configuration, useClass: ConfigurationMock },
                { provide: XHRBackend, useClass: MockBackend }
            ]
        }).compileComponents();

        // console.log('beforeEach.async');
    }));

    beforeEach(() => {
        const service = TestBed.get(ValuesService);
        expect(service).toBeDefined();

        configuration = TestBed.get(Configuration);

        // console.log('beforeEach.second');
    });

    it('should inject correct configuration', () => {

        const localConfig = TestBed.get(Configuration);

        expect(localConfig).toBeDefined();
        expect(localConfig.ServerWithApiUrl).toBe('http://test-mock.com/');
    });

    it('getAll() should return an Observable<Array<string>>',
        async(inject([ValuesService, XHRBackend], (valueService: ValuesService, mockBackend) => {

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

            mockBackend.connections.subscribe((connection: MockConnection) => {
                connection.mockRespond(new Response(new ResponseOptions({
                    body: JSON.stringify(mockResponse)
                })));
            });

            valueService.getAll()
                .subscribe((values) => {
                    expect(values.length).toBe(4);
                    expect(values[0]).toEqual('Value 0');
                    expect(values[1]).toEqual('Value 1');
                    expect(values[2]).toEqual('Value 2');
                    expect(values[3]).toEqual('Value 3');
                });

        })));

    it('getSingle() should return an single value',
        async(inject([ValuesService, XHRBackend], (valueService: ValuesService, mockBackend) => {
            const mockResponse = 'single Value 0';

            mockBackend.connections.subscribe((connection: MockConnection) => {
                connection.mockRespond(new Response(new ResponseOptions({
                    body: JSON.stringify(mockResponse)
                })));
            });

            valueService.getSingle(4)
                .subscribe((result) => {
                    expect(result).toEqual(mockResponse);
                });
        })));

    it('getSingle(12) should invoke /values/12 url',
        async(inject([ValuesService, XHRBackend], (valueService: ValuesService, mockBackend) => {
            const id = 12;
            const expectedUrl = `${this.configuration.ServerWithApiUrl}values/${id}`;

            mockBackend.connections.subscribe(
                (connection: MockConnection) => {
                    expect(connection.request.url).toBe(expectedUrl);
                    expect(connection.request.method).toBe(RequestMethod.Get);

                    connection.mockRespond(new Response(new ResponseOptions({
                        body: JSON.stringify('mockResponse')
                    })));
                });

            valueService.getSingle(id).subscribe((result) => {
                expect(result).toBe('mockResponse');
            });
        })));

    it('add() should send correct request',
        async(inject([ValuesService, XHRBackend], (valueService: ValuesService, mockBackend) => {
            const itemName = 'item to add';
            const expectedUrl = `${this.configuration.ServerWithApiUrl}values/`;

            mockBackend.connections.subscribe(
                (connection: MockConnection) => {
                    expect(connection.request.url).toBe(expectedUrl, 'should be correct URL');
                    expect(connection.request.method).toBe(RequestMethod.Post, 'should be POST');

                    // compare strings
                    expect(connection.request.getBody()).toBe(JSON.stringify({ ItemName: itemName }), 'should send correct request body');

                    const jsonRequestBody = JSON.parse(connection.request.getBody());
                    expect(jsonRequestBody.ItemName).toBe(itemName, 'should send correct JSON request body');

                    connection.mockRespond(new Response(new ResponseOptions({
                        body: JSON.stringify('mockResponse')
                    })));
                });

            valueService.add(itemName).subscribe((result) => {
                expect(result).toBe('mockResponse', 'should handle correct response');
            });
        })));

    it('update() should send correct request',
        async(inject([ValuesService, XHRBackend], (valueService: ValuesService, mockBackend) => {
            const id = 32;
            const itemName = 'item to update';
            const itemToUpdate: any = { ItemName: itemName }
            const expectedUrl = `${this.configuration.ServerWithApiUrl}values/${id}`;

            mockBackend.connections.subscribe(
                (connection: MockConnection) => {
                    expect(connection.request.url).toBe(expectedUrl, 'should be correct URL');
                    expect(connection.request.method).toBe(RequestMethod.Put, 'should be POST');

                    // compare strings
                    expect(connection.request.getBody()).toBe(JSON.stringify(itemToUpdate), 'should send correct request body');

                    const jsonRequestBody = JSON.parse(connection.request.getBody());
                    expect(jsonRequestBody.ItemName).toBe(itemName, 'should send correct JSON request body');

                    connection.mockRespond(new Response(new ResponseOptions({
                        body: JSON.stringify('mock update Response')
                    })));
                });

            valueService.update(id, itemToUpdate).subscribe((result) => {
                expect(result).toBe('mock update Response', 'should handle correct response');
            });
        })));

    it('delete(12) should invoke /values/12 url',
        async(inject([ValuesService, XHRBackend], (valueService: ValuesService, mockBackend) => {
            const id = 12;
            const expectedUrl = `${this.configuration.ServerWithApiUrl}values/${id}`;

            mockBackend.connections.subscribe(
                (connection: MockConnection) => {
                    expect(connection.request.url).toBe(expectedUrl, 'should be correct URL');
                    expect(connection.request.method).toBe(RequestMethod.Delete, 'should be DELETE');

                    connection.mockRespond(new Response(new ResponseOptions({
                        body: JSON.stringify('mock delete response')
                    })));
                });

            valueService.delete(id).subscribe((result: Response) => {
                expect(result.json()).toBe('mock delete response');
            });
        })));
});
