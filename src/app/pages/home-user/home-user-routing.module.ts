import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeUserPage } from './home-user.page';

const routes: Routes = [
  {
    path: '',
    component: HomeUserPage
  },  {
    path: 'course-detail',
    loadChildren: () => import('./course-detail/course-detail.module').then( m => m.CourseDetailPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeUserPageRoutingModule {}
