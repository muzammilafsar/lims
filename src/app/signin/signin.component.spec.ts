import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninComponent } from './signin.component';
import { AuthService } from 'angular5-social-login';
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
describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninComponent ],
      providers: [{provide: AuthService, useClass: AuthServiceMock}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should logout', () => {
    component.logout();
    expect(component).toBeTruthy();
  });
  it('should socialSignIn', () => {
    component.socialSignIn('');
    expect(component).toBeTruthy();
  });
});
