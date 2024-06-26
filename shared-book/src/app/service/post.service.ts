import { HttpClient, withFetch } from "@angular/common/http";
import { Post } from "../list-posts/post/post";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PostsService{

    // posts: Post[]=[
    //     new Post("Snowing Castle", "Lovely snow covered castle", new Date(), 'https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=600', 102, "Nantes" ),
    //     new Post("lovely view", "belle vue de paysage avec lac et montagne belle vue de paysage avec lac et montagne belle vue de paysage avec lac et montagne belle vue de paysage avec lac et montagne belle vue de paysage avec lac et montagne ", new Date(), 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-james-wheeler-417074.jpg&fm=jpg', 10, "Izmir"),
    //     new Post("jsp post 3", "Lovely snow covered castle", new Date(), 'https://images.pexels.com/photos/1169084/pexels-photo-1169084.jpeg?auto=compress&cs=tinysrgb&w=600', 15, "Grez-Doiceau"),
    //     new Post("jsp post 4", "J'aime les écureuils ! J'aime les écureuils ! J'aime les écureuils !  J'aime les écureuils ! J'aime les écureuils ! J'aime les écureuils ! J'aime les écureuils !", new Date(), 'https://images.pexels.com/photos/460775/pexels-photo-460775.jpeg?auto=compress&cs=tinysrgb&w=600', 15, "Bruxelles")

    // ] ;

    constructor(private http : HttpClient){

    }

    getPosts(): Observable<Post[]> {
        return this.http.get<Post[]>('http://localhost:9000/posts');
    }

    addPost(post:Post){
        //   console.log("here");
        console.log(post);
        return this.http.post('http://localhost:9000/posts', post);
    }
    
    updatePost( updatedPost: Post): Observable<any> {
        
        return this.http.put(`http://localhost:9000/posts/${updatedPost.id}`, updatedPost);
    }

    deletePost(postId: string): Observable<any> {
        return this.http.delete(`http://localhost:9000/posts/${postId}`);
    }
 
    // getPosts(){
    //     return this.posts;
    // }

    // addPost(post: Post): void {
    //     this.posts.push(post);
    // }

}