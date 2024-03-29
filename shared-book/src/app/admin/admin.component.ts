import { Component, Input} from '@angular/core';
import { PostsService } from "../service/post.service";
import { Observable, map } from "rxjs";
import { Post } from "../list-posts/post/post";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  searchTitle: string = '';

  @Input() myPost:Post;

  posts$:Observable<Post[]>;
  constructor(private postsService : PostsService){

  }
  ngOnInit():void{
    this.posts$= this.postsService.getPosts();
  }

  searchByTitle(): void {

    this.posts$ = this.postsService.getPosts().pipe(
        map(posts => posts.filter(post => post.title.toLowerCase().includes(this.searchTitle.toLowerCase())))
    );
}

}
