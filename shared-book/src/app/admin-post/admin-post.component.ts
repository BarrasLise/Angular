import { Component, Input, OnInit, Output , EventEmitter} from '@angular/core';
import { PostsService } from "../service/post.service";
import { Observable } from "rxjs";
import { Post } from "../list-posts/post/post";



@Component({
  selector: 'app-admin-post',
  templateUrl: './admin-post.component.html',
  styleUrl: './admin-post.component.css'
})
export class AdminPostComponent implements OnInit {


  @Input() myPost:Post;
  @Input() postIndex: number;
  @Output() postDeleted: EventEmitter<void> = new EventEmitter<void>();
  @Output() postEdited: EventEmitter<void> = new EventEmitter<void>();

  
  isEditing: boolean = false;
  currentPost: Post ;
  currentIndex = -1;

  posts$:Observable<Post[]>;
  constructor(private postsService : PostsService){ }


  ngOnInit():void{
    this.posts$= this.postsService.getPosts();
    this.loadPost();
  }

  loadPost(): void {
    this.posts$ = this.postsService.getPosts();
  }

  startEdit(post: Post, index: number): void {
    this.isEditing = true;
    this.postIndex = post.id;
    this.currentPost = { ...post }; // Faites une copie du post pour éviter de modifier l'original directement
  }
  
  updatePost(): void {
    if (this.currentPost) {
      const postId = this.currentPost.id; // Accès dynamique à l
      console.log('Post ID:', postId); 
      console.log(this.currentPost);
      
      this.postsService.updatePost( this.currentPost)
        .subscribe({
          next: () => {
            
            this.isEditing = false;
            this.currentPost = null; 

            this.postEdited.emit();

            console.log('Post updated successfully!');
          
            
          },
          error: (error) => {
            console.error('Error updating post:', error);
          }
        });

    }
  }

  deletePostConfirmation(postId: string): void {
    if (confirm("Êtes-vous sûr de vouloir supprimer ce post ?")) {

      this.postsService.deletePost(postId)
        .subscribe({
          next: () => {
            console.log('Post deleted successfully!');
            this.postDeleted.emit();  //Emettre l'évenement de suppression 
          
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
