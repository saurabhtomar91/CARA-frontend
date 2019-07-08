import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  // tslint:disable-next-line
  selector: 'app-root',
  templateUrl: './app.component.html'
 // styles: ['.full-back {display: flex;flex-direction: column;min-height: 100vh;margin: 0 auto;background: url(https://preview.ibb.co/dRyOTV/web-panel-bg.png) no-repeat;background-clip: border-box;background-size: cover;width: 100%;}']
})
export class AppComponent implements OnInit {
  constructor(private router: Router,private spinner: NgxSpinnerService) { }

  ngOnInit() {
     /** spinner starts on init */
     this.spinner.show();
 
     setTimeout(() => {
         /** spinner ends after 2 seconds */
         this.spinner.hide();
     }, 1000);
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
