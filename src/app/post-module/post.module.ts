import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AllPostsComponent} from './components/all-posts/all-posts.component';
import {PostComponent} from './components/post/post.component';
import {PostService} from './services/post.service';
import {AllCommentsComponent} from '../comment-module/components/all-comments/all-comments.component';

const routes: Routes = [
  {path: '', component: AllPostsComponent},
  {path: ':id', component: AllCommentsComponent}
];

@NgModule({
  declarations: [AllPostsComponent, PostComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  providers: [PostService]
})
export class PostModule {
}
