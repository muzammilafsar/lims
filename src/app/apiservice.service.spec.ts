import { TestBed, inject } from '@angular/core/testing';

import { ApiserviceService } from './apiservice.service';
import { HttpClientModule } from '@angular/common/http';
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
describe('ApiserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiserviceService, {provide: AuthService, useClass: AuthServiceMock}],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([ApiserviceService], (service: ApiserviceService) => {
    expect(service).toBeTruthy();
  }));
  it('should getAllBooks', inject([ApiserviceService], (service: ApiserviceService) => {
    service.getAllBooks();
    expect(service).toBeTruthy();
  }));
  it('should setUserData', inject([ApiserviceService], (service: ApiserviceService) => {
    service.setUserData();
    expect(service).toBeTruthy();
  }));
  it('should logout', inject([ApiserviceService], (service: ApiserviceService) => {
    service.logout('');
    expect(service).toBeTruthy();
  }));
  it('should socialSignIn', inject([ApiserviceService], (service: ApiserviceService) => {
    service.socialSignIn('');
    expect(service).toBeTruthy();
  }));
  it('should addBook', inject([ApiserviceService], (service: ApiserviceService) => {
    service.addBook('');
    expect(service).toBeTruthy();
  }));
  it('should deleteBook', inject([ApiserviceService], (service: ApiserviceService) => {
    service.deleteBook('');
    expect(service).toBeTruthy();
  }));
  it('should updateBook', inject([ApiserviceService], (service: ApiserviceService) => {
    service.updateBook('');
    expect(service).toBeTruthy();
  }));
  it('should borrowBook', inject([ApiserviceService], (service: ApiserviceService) => {
    service.userdata = {email: '' };
    service.borrowBook('');
    expect(service).toBeTruthy();
  }));
  it('should userBooks', inject([ApiserviceService], (service: ApiserviceService) => {
    service.userdata = {email: '' };
    service.userBooks();
    expect(service).toBeTruthy();
  }));
  it('should returnBook', inject([ApiserviceService], (service: ApiserviceService) => {
    service.returnBook({id: ''});
    expect(service).toBeTruthy();
  }));
  it('should allBorrowedBooks', inject([ApiserviceService], (service: ApiserviceService) => {
    service.allBorrowedBooks();
    expect(service).toBeTruthy();
  }));
  it('should adminlogin', inject([ApiserviceService], (service: ApiserviceService) => {
    service.adminlogin('');
    expect(service).toBeTruthy();
  }));
  it('should fetchisbn', inject([ApiserviceService], (service: ApiserviceService) => {
    service.fetchisbn('');
    expect(service).toBeTruthy();
  }));
  it('should fetchDesc', inject([ApiserviceService], (service: ApiserviceService) => {
    service.fetchDesc('');
    expect(service).toBeTruthy();
  }));

});
