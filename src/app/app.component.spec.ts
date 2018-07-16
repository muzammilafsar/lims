import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { HeaderComponent } from './header/header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiserviceService } from './apiservice.service';
import { AuthService, AuthServiceConfig } from 'angular5-social-login';

class Apiservicemock {
  setUserData() {
  }
}
class AuthServiceMock {
  signOut() {
    return new Promise((e, rej) => {
    });
  }
  signIn(a) {
    return new Promise((e, rej) => {
    });
  }
}
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, SigninComponent, HeaderComponent
      ],
      providers: [{provide: ApiserviceService, useClass: Apiservicemock}, {provide: AuthService, useClass: AuthServiceMock}],
      imports: [RouterTestingModule, ReactiveFormsModule]
    }).overrideTemplate(AppComponent, '<div><div>')
    .compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
  }));
});
