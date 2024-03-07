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

  onSubmitForm(){
    console.log(this.postForm.value);
    if (this.postForm.valid) {
      const newPost: Post = this.postForm.value; // Récupérez les données du formulaire sous forme d'objet Post
      this.postsService.addPost(newPost); // Ajoutez le nouveau post à la liste des posts via le service
      this.postForm.reset(); // Réinitialisez le formulaire après l'ajout du post
    }
  }

  

}
