import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListPostsComponent } from './list-posts/list-posts.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { PostComponent } from "./list-posts/post/post.component";
import { appRoutingModule } from "./app-routing.module";
import { FormComponent } from './form/form.component';
import { HttpClientModule } from "@angular/common/http";
import { AdminComponent } from './admin/admin.component';
import { AdminPostComponent } from './admin-post/admin-post.component';


@NgModule({
  declarations: [
    AppComponent,
    ListPostsComponent,
    HomeComponent,
    HeaderComponent,
    PostComponent,
    FormComponent,
    AdminComponent,
    AdminPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    appRoutingModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
