/* tslint:disable:no-unused-variable */

import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser'
import { DebugElement, EventEmitter } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { MockBackend } from '@angular/http/testing';

import { AdalService } from 'ng2-adal/dist/core';
import { AdalServiceStub, } from './services/tests/adal.service.stub';

import { AdalConfigService } from './services/adal-config.service';
import { AdalConfigServiceStub } from './services/tests/adal-config.service.stub';

import { AuthService } from './services/auth.service';
import { AuthServiceStub } from './services/tests/auth.service.stub';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let appComp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let debugElemH1: DebugElement;
  let compiledElemH1: HTMLElement;

  let authService: AuthService;
  let adalService: AdalService;

  let user: any;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        // AuthService,
        { provide: AuthService, useClass: AuthServiceStub },
        { provide: AdalConfigService, useClass: AdalConfigServiceStub },
        // AdalService,
        { provide: AdalService, useClass: AdalServiceStub }
      ]
    }).compileComponents(); // compile template and css
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(AppComponent);
    appComp = fixture.componentInstance; // AppComponent test instance

    // query for the title <h1> by CSS element selector
    debugElemH1 = fixture.debugElement.query(By.css('h1'));
    compiledElemH1 = debugElemH1.nativeElement;

    authService = fixture.debugElement.injector.get(AuthService);
    adalService = fixture.debugElement.injector.get(AdalService);

    user = { profile: { name: 'test user' } };
  });

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

  it('should automatically invoke authService.getUser OnInit', async(() => {
    const spy = spyOn(authService, 'getUser');
    fixture.detectChanges();
    fixture.whenStable().then(() => { // wait for async getUser
      fixture.detectChanges();        // update view
      expect(spy.calls.any()).toBe(true, 'getUser has been called');
    });
  }));

  it('should automatically invoke adalService.init in component constructor', async(() => {
    const spy = spyOn(adalService, 'init');
    expect(spy.calls.any()).toBe(false, 'init has been called but should not be');

    const _fixture = TestBed.createComponent(AppComponent);
    const _appComp = fixture.componentInstance;
    fixture.detectChanges();

    expect(spy.calls.any()).toBe(true, 'init has not been called');
  }));

  it('should automatically invoke adalService.handleWindowCallback in component constructor', async(() => {
    const spy = spyOn(adalService, 'handleWindowCallback');
    expect(spy.calls.any()).toBe(false, 'handleWindowCallback has been called but should not be');

    const _fixture = TestBed.createComponent(AppComponent);
    const _appComp = fixture.componentInstance;
    fixture.detectChanges();

    expect(spy.calls.any()).toBe(true, 'handleWindowCallback has not been called');
  }));

  it('should set user on userLoadedEvent', async(() => {
    fixture.detectChanges();

    expect(appComp.user).toBeUndefined();

    // act
    authService.userLoadedEvent.emit(user);
    fixture.detectChanges();

    expect(appComp.user).toBeDefined();
    expect(appComp.user).toBe(user);
  }));

  it('should set isLoggedIn true on userLoadedEvent', async(() => {
    fixture.detectChanges();

    authService.loggedIn = true;
    authService.userLoadedEvent.emit(user);
    fixture.detectChanges();

    expect(appComp.isLoggedIn).toBe(true);
  }));

  it('should set isLoggedIn false on userLoadedEvent', async(() => {
    fixture.detectChanges();

    authService.loggedIn = false;
    authService.userLoadedEvent.emit(user);
    fixture.detectChanges();

    expect(appComp.isLoggedIn).toBe(false);
  }));

  it('logIn() should invoke adalService.login', async(() => {
    const spy = spyOn(adalService, 'login');
    appComp.logIn();
    expect(spy.calls.any()).toBe(true, 'login has been called');
  }));

  it('should show user name when user is logged in', async(() => {
    fixture.detectChanges();

    authService.loggedIn = true;
    authService.userLoadedEvent.emit(user);
    fixture.detectChanges();

    const userNameDebug = fixture.debugElement.query(By.css('#menu-user-name'));
    const compiledUserNameElem = userNameDebug.nativeElement;
    fixture.detectChanges();

    expect(compiledUserNameElem.textContent).toContain(user.profile.name);
  }));

  it('should not show user name when user is not logged in', async(() => {
    fixture.detectChanges();

    authService.loggedIn = false;
    authService.userLoadedEvent.emit(user);
    fixture.detectChanges();

    const userNameDebug = fixture.debugElement.query(By.css('#menu-user-name'));
    fixture.detectChanges();

    expect(userNameDebug).toBeNull();
  }));

  it('logOut() should invoke adalService.logOut', async(() => {
    const spy = spyOn(adalService, 'logOut');
    appComp.logOut();
    expect(spy.calls.any()).toBe(true, 'login has been called');
  }));
});
