import { Component, Input } from '@angular/core';
import {Post} from './post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  // title: string = "A l'ancienne époque";
  // description: string = "Une vielle image";
  // createdDate: string = new Date().toDateString();
  // url : string = "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-james-wheeler-417074.jpg&fm=jpg";
  // like : number = 0;

  @Input() myPost:Post;

  liked(){
    this.myPost.like ++;
  }

  disliked(){
    if(this.myPost.like >0 ){
      this.myPost.like --
    }
  }

 

}
