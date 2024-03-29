import { Component, Input } from '@angular/core';
import { PostsService } from "../service/post.service";
import { Observable } from "rxjs";
import { Post } from "../list-posts/post/post";

@Component({
  selector: 'app-admin-post',
  templateUrl: './admin-post.component.html',
  styleUrl: './admin-post.component.css'
})
export class AdminPostComponent {


  @Input() myPost:Post;
  @Input() postIndex: number;

  // postIndex: number = -1;
  
  isEditing: boolean = false;
  currentPost: Post ;
  currentIndex = -1;

  posts$:Observable<Post[]>;
  constructor(private postsService : PostsService){ }


  ngOnInit():void{
    this.posts$= this.postsService.getPosts();
  }

  // setActivePost(post: Post, index: number): void {
  //   this.currentPost = post;
  //   this.currentIndex = index;
  // }

  startEdit(post: Post, index: number): void {
    this.isEditing = true;
    this.postIndex = index;
    this.currentPost = { ...post }; // Faites une copie du post pour éviter de modifier l'original directement
  }
  
  updatePost(): void {
    if (this.currentPost) {
      const postId = (this.currentPost as any).id.toString(); // Accès dynamique à l'ID
      console.log('Post ID:', postId); 
      console.log(this.currentPost);
      
      this.postsService.updatePost(postId, this.currentPost)
        .subscribe({
          next: () => {
            console.log('Post updated successfully!');
            this.isEditing = false;
            this.currentPost = null; // Réinitialiser l'objet currentPost
            window.location.reload(); // Recharger la page sinon pas de mise a jour...
          },
          error: (error) => {
            console.error('Error updating post:', error);
          }
        });
    }
  }

  deletePostConfirmation(postId: string): void {
    if (confirm("Êtes-vous sûr de vouloir supprimer ce post ?")) {

      // console.log(postId);
      
      this.postsService.deletePost(postId)
        .subscribe({
          next: () => {
            console.log('Post deleted successfully!');
            window.location.reload(); 
          },
          error: (error) => {
            console.error('Error deleting post:', error);
          }
        });
    }
  }
  
  cancelEdit(): void {
    this.isEditing = false;
  }

  


}
