import { Component } from '@angular/core';
import { PostsService } from "../service/post.service";
import { Post } from "./post/post";
import { Observable } from "rxjs";



@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrl: './list-posts.component.css'
})
export class ListPostsComponent {
  // posts:Post[];
  posts$:Observable<Post[]>;
  constructor(private postsService : PostsService){

  }
  ngOnInit():void{
    this.posts$= this.postsService.getPosts();
  }

}
