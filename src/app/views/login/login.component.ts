import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { LocalStorageService } from '../../constant/localStorage.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginModel: any = {
    emailId: '',
    password: ''
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

  /**
 * Verify OTP Method
 */
  public VerifyOtp(loginModel: any): any {
    this.loginModel.userId = this.storage.getData('userId');
    this.storage.removeData('userId');
    let otpData = {
      otp: loginModel.otp,
      userId: this.loginModel.userId
    }
    this.userService.verifyOtp(otpData)
      .then(result => {
        if (result.responseCode === 200) {
          this.isSubmitted = false;
          this.storage.saveData('userData', result.result);
          this.toastr.success(result.responseMessage, "");
          this.router.navigate(['/dashboard']);
        }
        else {
          this.isSubmitted = true;
          this.toastr.error("", result.responseMessage);
        }
      })
  }

  public ResendOtp(): any {
    if (this.otpCalledCount >=3) {
      this.toastr.warning("You have tried exceed time.");
      this.isSubmitted=false;
    }else{
      this.loginModel.userId = this.storage.getData('userId');
      this.otpCalledCount=this.otpCalledCount+1;
      let otpData = {
        userId: this.loginModel.userId
      }
      this.userService.resendOtp(otpData,'mobile')
        .then(result => {
          if (result.responseCode === 200) {
            this.toastr.success(result.responseMessage, "");
            this.isShow=false;
            setTimeout(() => {
              this.isShow=true;
            },30000 );
          }
          else {
            this.toastr.error("", result.responseMessage);
          }
        })
    }
  }

  public EmailOtp(): any {
      this.loginModel.userId = this.storage.getData('userId');
      let emailData = {
        userId: this.loginModel.userId
      }
      this.userService.resendOtp(emailData,'email')
        .then(result => {
          if (result.responseCode === 200) {
            this.toastr.success(result.responseMessage, "");
            this.isShow=false;
            setTimeout(() => {
              this.isShow=true;
            },30000 );
          }
          else {
            this.toastr.error("", result.responseMessage);
          }
        })
  }

}
