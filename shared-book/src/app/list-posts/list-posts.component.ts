import { Component } from '@angular/core';
import { PostsService } from "../service/post.service";
import { Post } from "./post/post";

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrl: './list-posts.component.css'
})
export class ListPostsComponent {
  posts:Post[];
  constructor(private postsService : PostsService){

  }
  ngOnInit():void{
    this.posts= this.postsService.getPosts();
  }

}
