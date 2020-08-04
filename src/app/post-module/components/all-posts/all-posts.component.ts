import {Component, OnInit} from '@angular/core';
import {Post} from '../../models/post';
import {PostService} from '../../services/post.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {

  posts: Post[];

  constructor(private postService: PostService, private activatedRoute: ActivatedRoute) {
    if (this.activatedRoute.snapshot.params.id) {
      // console.log(this.activatedRoute.snapshot.params.id);
      this.activatedRoute.params.subscribe(value => {
        this.postService.getPostsOfCurrentUser(value.id).subscribe(data => this.posts = data);
      });
    } else {
      this.postService.getAllPosts().subscribe(value => this.posts = value);
    }
  }

  ngOnInit(): void {
  }

}
