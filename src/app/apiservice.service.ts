import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider,
} from 'angular5-social-login';
@Injectable()
export class ApiserviceService {
  userdata: any;
  logged_in = false;
  constructor(private http: Http,
  private socialAuthService: AuthService) { }

  getAllBooks() {
    return this.http.get('https://api.myjson.com/bins/o0y17').map((val) => {
      console.log(val);
      return val.json();
    });
  }
  setUserData() {
    let data = JSON.parse(localStorage.getItem('auth'));
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
}
