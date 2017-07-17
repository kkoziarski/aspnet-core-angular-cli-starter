/* tslint:disable:no-unused-variable */

import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser'
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { MockBackend } from '@angular/http/testing';
import { HttpModule, Http, Response, ResponseOptions, XHRBackend } from '@angular/http';

import { AdalService, OAuthData, AuthHttp } from 'ng2-adal/core';
import { AdalConfigService } from './services/adal-config.service';
import { AuthService } from './services/auth.service';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let appComp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let debugElemH1: DebugElement;
  let compiledElemH1: HTMLElement;

  beforeEach(async(() => {
    
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        AuthService,
        AdalConfigService,
        AdalService,
        AuthHttp
      ]
    }).compileComponents(); // compile template and css

    fixture = TestBed.createComponent(AppComponent);
    appComp = fixture.componentInstance; // AppComponent test instance

    // query for the title <h1> by CSS element selector
    debugElemH1 = fixture.debugElement.query(By.css('h1'));
    compiledElemH1 = debugElemH1.nativeElement;
  }));

  it('should create the app', async(() => {
    expect(appComp).toBeTruthy();
  }));

  it(`should have as title 'Hello from AppComponent'`, async(() => {
    expect(appComp.title).toEqual('Hello from AppComponent');
  }));

  it('should render title in a h1 tag', async(() => {
    fixture.detectChanges();
    expect(compiledElemH1.textContent).toContain(appComp.title);
  }));

  it('should render different test title in a h1 tag', async(() => {
    appComp.title = 'Test title';
    fixture.detectChanges();
    expect(compiledElemH1.textContent).toContain('Test title');
  }));
});
