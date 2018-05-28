import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';
import { HeaderComponent } from './header.component';
import { ApiserviceService } from '../apiservice.service';
import { ReactiveFormsModule } from '@angular/forms';

class ApiServiceMock {
  getAllBooks() {
    return Observable.of({});
  }
  socialSignIn(a) {}
  logout(a) {}
  adminlogin(a) {
    return Observable.of({status: 200}, {status: 300});
  }
}

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      providers: [{provide: ApiserviceService, useClass: ApiServiceMock}],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should signin', () => {
    component.signin();
    component.logout();
    component.adminForm.patchValue({username: 'abcd', password: 'asadd'});
    component.adminlogin();
  });
  it('should signin', () => {
    component.adminlogin();
  });
});
