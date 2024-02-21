import { Component } from '@angular/core';
import { PostsService } from "../service/post.service";
import { Post } from "../list-posts/post/post";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  posts: Post[];
  newPostTitle: string;
  newPostDescription: string;
  newPostLocation: string;
  newPostImageUrl: string;

  postAdded: boolean = false;

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.posts = this.postsService.getPosts();
  }

  addPost(): void {

    
    if (this.newPostTitle && this.newPostDescription && this.newPostImageUrl) {
      const newPost = new Post(
        this.newPostTitle,
        this.newPostDescription,
        new Date(),
        this.newPostImageUrl,
        0, // Initial likes count
        this.newPostLocation,
      );
      this.postsService.addPost(newPost);
      this.postAdded = true;
      // Réinitialiser le formulaire
      this.resetForm();
    }
  }

  resetForm() {
    this.newPostTitle = '';
    this.newPostDescription = '';
    this.newPostLocation = '';
    this.newPostImageUrl = '';
    
  }

}
