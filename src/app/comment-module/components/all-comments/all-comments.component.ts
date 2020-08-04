import {Component, OnInit} from '@angular/core';
import {CommentService} from '../../services/comment.service';
import {Comment} from '../../models/comment';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css']
})
export class AllCommentsComponent implements OnInit {

  comments: Comment[];

  constructor(private commentService: CommentService, private activatedRoute: ActivatedRoute) {
    if (this.activatedRoute.snapshot.params.id) {
      this.activatedRoute.params.subscribe(value => {
        this.commentService.getCommentsOfCurrentPost(value.id).subscribe(data => this.comments = data);
      });
    } else {
      this.commentService.getAllComments().subscribe(value => this.comments = value);
    }
  }

  ngOnInit(): void {
  }

}
