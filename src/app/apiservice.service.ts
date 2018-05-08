import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider,
} from 'angular5-social-login';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class ApiserviceService {
  userdata: any;
  logged_in = false;
  constructor(private http: HttpClient,
  private socialAuthService: AuthService) { }

  getAllBooks() {
    return this.http.get('http://limserver.herokuapp.com/allbooks').map((val) => {
      console.log(val);
      return val['books'];
    });
  }
  setUserData() {
    const data = JSON.parse(localStorage.getItem('auth'));
    if (data) {
      this.userdata = data;
      this.logged_in = true;
    }
  }
  logout(socialPlatform: string) {
    let socialPlatformProvider;
   if (socialPlatform === 'google') {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }

    this.socialAuthService.signOut().catch(err => {
      console.log(err);
    });
  }
  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform === 'facebook') {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    } else if (socialPlatform === 'google') {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform + ' sign in data : ' , userData);
        localStorage.setItem('auth', JSON.stringify(userData));
        // Now sign-in with userData
        // ...?
        // window.location.reload();
      }
    );
  }
  addBook(data) {
    console.log(data);
    return this.http.post('http://limserver.herokuapp.com/addbook', data);
  }
  deleteBook(id) {
    return this.http.post('http://limserver.herokuapp.com/deletebook', {id: id});
  }
  updateBook(body) {
    return this.http.post('http://limserver.herokuapp.com/updatebook', body);
  }
}
