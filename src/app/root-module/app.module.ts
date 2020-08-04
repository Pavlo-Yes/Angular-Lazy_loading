import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from '../home-component/home.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

const routes: Routes = [
  {path: '', component: HomeComponent, children: [
      {path: 'users', loadChildren: () => import('../user-module/user.module').then(value => value.UserModule)},
      {path: 'posts', loadChildren: () => import('../post-module/post.module').then(value => value.PostModule)},
      {path: 'comments', loadChildren: () => import('../comment-module/comment.module').then(value => value.CommentModule)}
    ]}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
