import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SlickModule } from 'ngx-slick'; //Import library for Slick slider
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
import { AppComponent } from './app.component';
// Import containers
import { DefaultLayoutComponent } from './containers';
import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { HomepageComponent } from './views/homepage/homepage.component';

//Import Services
const APP_CONTAINERS = [
  DefaultLayoutComponent
];
import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { UserService } from './views/services/user.service';
import { CommonService } from './views/services/common.service';
import { LocalStorageService } from './constant/localStorage.service';
import { ToastrModule } from 'ngx-toastr';
import { NgwWowModule } from 'ngx-wow';
import { CustomFormsModule } from 'ng2-validation';
import { NgxSpinnerModule } from 'ngx-spinner'; //for spinner

import { OnlyNumber } from './constant/onlynumber.directive';

import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { HeaderServices } from './constant/header.config';
import { LoaderInterceptorService } from './constant/loader.interceptor';
// Tooltip module
import { TooltipModule } from 'ngx-bootstrap/tooltip';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), // ToastrModule added
    FormsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    HttpClientModule,
    SlickModule.forRoot(),
    NgwWowModule,
    CustomFormsModule,
    NgxSpinnerModule,
    TooltipModule
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    HomepageComponent,
    OnlyNumber
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  },{
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderInterceptorService,
    multi: true
  }, UserService,
    LocalStorageService,
    AuthService,
    AuthGuard,
    HeaderServices,
    CommonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
