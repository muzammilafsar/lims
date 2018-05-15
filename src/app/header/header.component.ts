import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as M from 'materialize-css';
import { ApiserviceService } from '../apiservice.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  adminForm: FormGroup;
  loginError = false;
  loginBtnDisabled = false;
  admin = false;
  constructor(private apiService: ApiserviceService) {
  }
  ngOnInit() {
    M.AutoInit();
    if (this.apiService.admin_logged_in) {
      this.admin = true;
    }
    this.adminForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }
  progress() {
    return this.apiService.progress;
  }
  ngAfterViewInit() {
    const elem = document.querySelector('.dropdown-trigger');
    const instance = M.Dropdown.init(elem, {});
  }
  get logged_in$() {
    return this.apiService.logged_in;
  }
  get userData$() {
    return this.apiService.userdata;
  }
  logout() {
    this.apiService.logout('google');
  }
  signin() {
    this.apiService.socialSignIn('google');
  }
  adminlogin() {
    console.log('working');
    this.loginError = false;
    this.loginBtnDisabled = true;
    if (this.adminForm.valid) {
      this.apiService.adminlogin(this.adminForm.value).subscribe(val => {
        if (val['status'] === 200) {
          localStorage.setItem('auth', JSON.stringify(val));
          window.location.reload();
        } else {
          this.loginError = true;
          this.loginBtnDisabled = false;
        }
      });
    } else {
      this.adminForm.controls.username.markAsTouched();
      this.adminForm.controls.password.markAsTouched();
    }
  }
}
