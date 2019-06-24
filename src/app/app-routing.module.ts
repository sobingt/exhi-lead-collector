import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiscussionComponent } from './discussion/discussion.component';
import { InformationComponent } from './information/information.component';
import { ActionComponent } from './action/action.component';
import { LoginComponent } from './login/login.component';
import { LeadComponent } from './lead/lead.component';
import { HomeComponent } from './home/home.component';
import { RecorderComponent } from './components/recorder/recorder.component';
import { PhotoCaptureComponent } from './components/photo-capture/photo-capture.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'My Calendar' }
  },
  {
    path: 'record',
    component: PhotoCaptureComponent,
    data: { title: 'My Calendar' }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'My Calendar' }
  },
  {
    path: 'lead',
    component: LeadComponent,
    data: { title: 'My Calendar' },
    children: [
      {
        path: '',
        component: DiscussionComponent,
        data: { title: 'My Calendar' }
      },
      {
        path: 'discussion',
        component: DiscussionComponent,
        data: { title: 'My Calendar' }
      },
      {
        path: 'information',
        component: InformationComponent,
        data: { title: 'My Calendar' }
      },
      {
        path: 'action',
        component: ActionComponent,
        data: { title: 'My Calendar' }
      }
    ]
  },
  {
    path: 'discussion',
    component: DiscussionComponent,
    data: { title: 'My Calendar' }
  },
  {
    path: 'information',
    component: InformationComponent,
    data: { title: 'My Calendar' }
  },
  {
    path: 'action',
    component: ActionComponent,
    data: { title: 'My Calendar' }
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
