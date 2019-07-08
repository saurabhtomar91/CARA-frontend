import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { UserService } from '../services/user.service';
import { NgwWowService } from 'ngx-wow';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from '../../auth.service';
import { DOCUMENT } from '@angular/platform-browser';
declare var $: any;

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss', './css/animate.css', './css/bootstrap.min.css', './css/carousel.css', './css/LineIcons.css', './css/magnific-popup.css', './css/nivo-lightbox.css', './css/responsive.css', './css/owl.carousel.css', './css/owl.theme.css']
})
export class HomepageComponent implements OnInit {
  private _isUserloggedIn: boolean = false;
  private wowSubscription: Subscription;
  navIsFixed: boolean;

  constructor(private router: Router, private wowService: NgwWowService, private auth: AuthService,@Inject(DOCUMENT) private document: Document) {
    this.wowService.init();
    
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const tree = router.parseUrl(router.url);
        if (tree.fragment) {
          const element = document.querySelector("#" + tree.fragment);
          if (element) {
            element.scrollIntoView();
          }
        }
      }
    });
  }

  ngOnInit() {
    this._isUserloggedIn = this.auth.isLoggednIn();
    
    if (this._isUserloggedIn) {
      this.router.navigate(['/dashboard']);
    }else{
      this.router.navigate(['/index']);
    }
    
    this.wowSubscription = this.wowService.itemRevealed$.subscribe(
      (item: HTMLElement) => {
      });
  }

  slides = [
    { img: "assets/img/scr-img/splash_screen.png" },
    { img: "assets/img/scr-img/01-a.png" },
    { img: "assets/img/scr-img/02-a.png" },
    { img: "assets/img/scr-img/03-a.png" },
    { img: "assets/img/scr-img/04-a.png" },
    { img: "assets/img/scr-img/06-a.png" }
  ];
  slideConfig = { "slidesToShow": 4, "slidesToScroll": 1, "dots": true, "infinite": true, "autoplay": true, "autoplaySpeed": 1500 };

  textSlider = [
    { "text": "“ This app is very usefull for grow up the great Indian Farmers. I requested to all please share this more. I am also a Farmer ”", "qoute": "Astist\'s Showcase" },
    { "text": "“ Very very useful App ..!! Kissan bhaiyon ke liye CGR GROUP ka tohfa .. Unki mehnat ka pura mol milega yahan.. Thanks CGR MANDI TEAM ”", "qoute": "Google Users" },
    { "text": "“ It is very simple and useful for farmers And i think it is mobile revoluation For Farmers ”", "qoute": "Nicky" },
    { "text": "“ Jai....kissan..it's good for Farmer and very simply you can sale your crop in National market....at price you want to sale ”", "qoute": "Sonia" }
  ]

  slide2Config = { "slidesToShow": 1, "slidesToScroll": 1, "dots": false, "infinite": true, "autoplay": true, "autoplaySpeed": 1500 };

  afterChange(e) {
    //  console.log('afterChange');
  }

  ngOnDestroy() {
    // unsubscribe (if necessary) to WOW observable to prevent memory leaks
    // this.wowSubscription.unsubscribe();
  }


  @HostListener("window:scroll", [])
  onWindowScroll() {
      if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 500) {
          this.navIsFixed = true;
      } 
      else if (this.navIsFixed && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) { this.navIsFixed = false; } } 
      scrollToTop() { (function smoothscroll() { var currentScroll = document.documentElement.scrollTop || document.body.scrollTop; if (currentScroll > 0) {
              window.requestAnimationFrame(smoothscroll);
              window.scrollTo(0, currentScroll - (currentScroll / 5));
          }
      })()
    }

}
