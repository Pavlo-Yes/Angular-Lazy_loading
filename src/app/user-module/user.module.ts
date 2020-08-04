import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AllUsersComponent} from './components/all-users/all-users.component';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './services/user.service';
import {RouterModule, Routes} from '@angular/router';
import {UserResolveService} from './services/user-resolve.service';
import {UserComponent} from './components/user/user.component';
import {AllPostsComponent} from '../post-module/components/all-posts/all-posts.component';
import {AllCommentsComponent} from '../comment-module/components/all-comments/all-comments.component';


const routes: Routes = [
  {
    path: '', component: AllUsersComponent, resolve: {fetchedUsers: UserResolveService}, children: [
      {path: ':id/posts', component: AllPostsComponent, children: [
          {path: ':id', component: AllCommentsComponent}
        ]}
    ]
  },
];

@NgModule({
  declarations: [AllUsersComponent, UserComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [UserService]
})
export class UserModule {
}
