import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { HomepageComponent } from './views/homepage/homepage.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full',
    data: {
      title: 'Home'
    }
  }, 
  {
    path: 'index',
    component: HomepageComponent,
    data: {
      title: 'Home Page'
    }
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'cif',
        loadChildren: './views/cifPanel/cifPanel.module#CifModule'
      },
      {
        path: 'lab',
        loadChildren: './views/labPanel/labPanel.module#LabModule'
      },
      {
        path: 'superAdmin',
        loadChildren: './views/superAdminPanel/superAdminPanel.module#SuperAdminModule'
      },
      {
        path: 'operation',
        loadChildren: './views/operationPanel/operationPanel.module#OperationModule'
      },
      {
        path: 'release',
        loadChildren: './views/releasePanel/releasePanel.module#ReleaseModule'
      },
      {
        path: 'cwf',
        loadChildren: './views/cwfPanel/cwfPanel.module#CwfModule'
      },
      {
        path: 'account',
        loadChildren: './views/accountPanel/accountPanel.module#AccountModule'
      },
      {
        path: 'survey',
        loadChildren: './views/surveyPanel/surveyPanel.module#SurveyModule'
      },
      {
        path: 'others',
        loadChildren: './views/othersPanel/othersPanel.module#OthersModule'
      },
      {
        path: 'base',
        loadChildren: './views/base/base.module#BaseModule'
      },
      {
        path: 'buttons',
        loadChildren: './views/buttons/buttons.module#ButtonsModule'
      },
      {
        path: 'charts',
        loadChildren: './views/chartjs/chartjs.module#ChartJSModule'
      },
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'icons',
        loadChildren: './views/icons/icons.module#IconsModule'
      },
      {
        path: 'notifications',
        loadChildren: './views/notifications/notifications.module#NotificationsModule'
      },
      {
        path: 'theme',
        loadChildren: './views/theme/theme.module#ThemeModule'
      },
      {
        path: 'widgets',
        loadChildren: './views/widgets/widgets.module#WidgetsModule'
      }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // Tell the router to use the HashLocationStrategy.
      useHash: true,
      enableTracing: false
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
