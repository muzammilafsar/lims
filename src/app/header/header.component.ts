import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as M from 'materialize-css';
import { ApiserviceService } from '../apiservice.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  constructor(private apiService: ApiserviceService) { }

  ngOnInit() {

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

}
