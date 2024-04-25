import { Component, Input, OnInit} from '@angular/core';
import { PostsService } from "../service/post.service";
import { Observable, map } from "rxjs";
import { Post } from "../list-posts/post/post";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {

  posts: Post[] = []; // Utilisation de posts comme tableau de données d'origine

  searchTerm: string = '';
  
  @Input() myPost:Post;

  posts$:Observable<Post[]>=new Observable<Post[]>();
  filteredPosts$:Observable<Post[]>;
  constructor(private postsService : PostsService){

  }
  ngOnInit():void{
    // this.posts$= this.postsService.getPosts();
    this.loadPosts();
  }

  loadPosts(): void {
    this.posts$=this.postsService.getPosts();
    this.filterPosts();
    // this.posts$.subscribe(post=>console.log(post));
  }

  filterPosts() {
    if (this.posts$ && this.searchTerm.trim() !== '') { // Vérification de l'initialisation de this.posts$
      
      this.filteredPosts$ = this.posts$.pipe(
        map((posts: Post[]) =>
          posts.filter((post: Post) =>
            post.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
            post.description.toLowerCase().includes(this.searchTerm.toLowerCase())
          )
        )
      );
    } else if (this.posts$) {
      this.filteredPosts$ = this.posts$; // Utilisation des posts d'origine s'il n'y a pas de terme de recherche
    }
  }

  onPostEdited():void {
    this.loadPosts();
  }
  onPostDeleted():void{
    this.loadPosts();
  }




}
