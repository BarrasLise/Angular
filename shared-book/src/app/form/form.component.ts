import { Component } from '@angular/core';
import { PostsService } from "../service/post.service";
import { Post } from "../list-posts/post/post";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  postForm : FormGroup;
  postPreview$!: Observable<Post>;

  constructor(private formBuilder : FormBuilder, private postsService: PostsService){
    
  }


  
  ngOnInit(): void {
    this.postForm = this.formBuilder.group({
      title: [null], 
      description: [null],
      like : [0],
      createdDate: [null],
      url: [null],
      location : [null]
    });

    this.postPreview$= this.postForm.valueChanges

    this.postPreview$= this.postForm.valueChanges.pipe(
      map(formValue=>({
        ...formValue,
        // like:0,
      })) 
    );

    
      
  }

  onSubmitForm() : void {
 
    if (this.postForm.valid) {

      if (this.postForm.value.createdDate) {
        this.postForm.value.createdDate = new Date(
          this.postForm.value.createdDate
        ).toISOString();
      } else {
        this.postForm.value.createdDate = new Date().toISOString();
      }
  



      const newPost: Post =new Post( this.postForm.value.title, this.postForm.value.description, this.postForm.value.createdDate,this.postForm.value.url,0, this.postForm.value.location  ); // Récupérez les données du formulaire sous forme d'objet Post
      this.postsService.addPost(newPost) // Ajoutez le nouveau post à la liste des posts via le service
      .subscribe({
        next: () => {
          console.log('Post deleted successfully!');
          window.location.reload(); 
        },
        error: (error) => {
          console.error('Error deleting post:', error);
        }
      });
      //this.postForm.reset(); // Réinitialisez le formulaire après l'ajout du post
    }
  }

 

  

}
