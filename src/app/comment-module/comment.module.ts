import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { AllCommentsComponent } from './components/all-comments/all-comments.component';
import { CommentComponent } from './components/comment/comment.component';


const routes: Routes = [
  {path: '', component: AllCommentsComponent}
];

@NgModule({
  declarations: [AllCommentsComponent, CommentComponent],
  exports: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CommentModule { }
