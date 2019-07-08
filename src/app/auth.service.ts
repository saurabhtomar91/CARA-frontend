import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from './constant/localStorage.service';
@Injectable({
  providedIn:'root'
})
export class AuthService {
  userDetails: any;
  constructor(private myRoute: Router,private storage:LocalStorageService) { }

  // sendToken(token: string) {
  //   localStorage.setItem("LoggedInUser", token)
  // }

  getToken() {
    this.userDetails = this.storage.getData("userData");
    return this.userDetails.authToken;
  }

  isLoggednIn() {
    //return this.getToken() !== null;
    this.userDetails = this.storage.getData("userData");
    if (this.userDetails != null) {
      if (this.userDetails.authToken != undefined || this.userDetails.authToken != '') {
        return true;
      }
    }
    return false;
  }

  logout() {
    this.storage.removeData('userData');
    this.myRoute.navigate(["login"]);
  }
}