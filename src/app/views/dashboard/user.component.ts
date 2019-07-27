import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { LocalStorageService } from '../../constant/localStorage.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
declare var $: any;


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class userComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

export class UserComponent {

  loginModel: any = {
    name: '',
    rollno: '',
    class: '',
    section: ''
  };

  isShow:boolean=false;
  isSubmitted: boolean = false;
  private _isUserloggedIn: boolean = false;
  protected otpCalledCount:number = 0;
  userDetails: any;
  constructor(private userService: UserService, private storage: LocalStorageService, public toastr: ToastrService,
    private router: Router, private auth: AuthService) { }

  public ngOnInit() {
    this._isUserloggedIn = this.auth.isLoggednIn();
    if (this._isUserloggedIn) {
      this.router.navigate(['/dashboard']);
    }
    $(document).ready(function () {
      $('input[type="password"]').focus(function () {
        $('.tip').css('height', '30px')
        setTimeout(function () {
          $('.tip').css('opacity', '1')
        }, 350)
      });

      $('input[type="password"]').blur(function () {
        $('.tip').css('opacity', '0')
        setTimeout(function () {
          $('.tip').css('height', '0px')
        }, 350)
      });
    });
  }

  /**
   * Login Method
   */
  public Login(loginModel: any) {
    debugger
    this.userService.loginUser(this.loginModel)
      .then(result => {
        if (result.responseCode === 200) {
          this.isSubmitted = true;
          this.storage.saveData('userId', result.result.userId);
          this.toastr.success(result.responseMessage, "");
          loginModel.phoneNumber='';
          this.otpCalledCount=this.otpCalledCount+1;
          setTimeout(() => {
            this.isShow=true;
          },30000 );
        }
        else {
          this.isSubmitted = false;
          this.toastr.error(result.responseMessage, "");
        }
      })
  }
