import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },

  {
    path: 'login',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'reset-password',
    redirectTo: 'reset-password',
    pathMatch: 'full'
  },

  {
    path: 'home-user',
    redirectTo: 'home-user',
    pathMatch: 'full'
  },

  
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./pages/reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'home-user',
    children: [
      {
        path:"",
        loadChildren: () => import('./pages/home-user/home-user.module').then( m => m.HomeUserPageModule)
      },
      {
        path:":placeId",
        loadChildren: () => import('./pages/home-user/course-detail/course-detail.module').then( m => m.CourseDetailPageModule)
      }
    ]
  },
  {
    path: 'error-404',
    loadChildren: () => import('./pages/error-404/error-404.module').then( m => m.Error404PageModule)
  },
  
  {
    path: '**',
    redirectTo: 'error-404',
    pathMatch: 'full'
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
